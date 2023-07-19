import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Carousel from '../components/Carousel';
import { useParams } from 'react-router-dom';
import { getArtistAlbums, getArtistData, getArtistPlaylists, getArtistTopSongs, getRelatedArtists } from '../api/system';
import PageContainer from '../components/PageContainer';
import { defaultPicture, formatNumber, formatTime } from '../util';
import Title from '../components/Title';
import { useMediaQuery } from 'react-responsive';

const ArtistPage = () => {
    const params = useParams();
    const sm = useMediaQuery({ query: '(max-width: 900px)' })
    const [ fetching, setFetching ] = useState(false);
    const [ artistData, setArtistData ] = useState({});

    const getArtists = async (id) => {
        setFetching(true)
        try {
            const artist = await getArtistData(id);
            const topSongs = await getArtistTopSongs(id);
            const albums = await getArtistAlbums(id);
            const playlists = await getArtistPlaylists(id);
            const relatedArtists = await getRelatedArtists(id);
    
            setArtistData({
                ...artist,
                albums, topSongs, playlists, relatedArtists
            })
        }
        finally {
            setFetching(false)
        }
    }   

    useEffect(() => {
        const id = params?.id || '';
        getArtists(id)
    }, [params]);

    return (
        <PageContainer fetching={fetching} fullscreenLoader pageTitle={artistData?.name || ''}>
            <Container>
                <Grid container className='mt-1 mb-1'>
                    <Grid container alignItems={sm ? 'normal' : 'center'} flexDirection={sm ? 'column-reverse' : 'row'} item xs={12} md={8} className={`${sm ? '' : 'bordered'} p-1-5`}>
                        <div className='flex-1'>
                            <h1 className='mb-1'>{artistData?.name || ''}</h1>
                            <span className="d-inline-block ml-05 text-underlined">{formatNumber(artistData?.nb_fan || 0)} Fans</span>
                        </div>

                        <div>
                            <img src={artistData?.picture_medium || artistData?.picture || defaultPicture} alt="artist_image" className="artist-image" />
                        </div>
                    </Grid>

                    <Grid item xs={12} md={4} className="bordered p-1-5">
                        <h3>Top Tracks</h3>
                        <Grid container className=''>
                            {
                                artistData?.topSongs?.data?.map((song, key) => (
                                    <Grid item xs={12} key={key} className='top-tracks'>
                                        <span>
                                            {key + 1}. {song?.title || ''}
                                        </span>
                                        <span className='text-right'>{formatTime(song?.duration) || ''}</span>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Title text={'Top'} strings={["Albums"]} />
                        <Carousel items={artistData?.albums?.data || []} />
                    </Grid>

                    <Grid item xs={12}>
                        <Title text={<>Top <span className='text-primary'>Playlists</span></>} strings={[]} />
                        <Carousel items={artistData?.playlists?.data || []} />
                    </Grid>

                    <Grid item xs={12}>                      
                        <Title text={'Related'} strings={["Artists"]} />
                        <Carousel card='artist' items={artistData?.relatedArtists?.data || []} />
                    </Grid>
                </Grid>
            </Container>
        </PageContainer>
    )
}

export default ArtistPage