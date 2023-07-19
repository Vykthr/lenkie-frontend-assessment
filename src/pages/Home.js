import React, { useEffect, useState } from "react";
import PageContainer from "../components/PageContainer";
import { Container, Grid } from "@mui/material";
import { getTopChart } from "../api/system";
import ArtistCard from "../components/ArtistCard";
import Title from "../components/Title";
import Carousel from "../components/Carousel";

const Home = () => {
    const [ fetching, setFetching ] = useState(false);
    const [ chart, setChart ] = useState({});

    const getChart = async (name) => {
        setFetching(true)
        await getTopChart()
        .then((resp) => {
            setChart(resp)
        })
        .catch((err) => {

        })
        .finally(() => {
            setFetching(false)
        })
    }

    useEffect(() => {
        getChart()
    }, [])

    return (
        <PageContainer fetching={fetching} fullscreenLoader pageTitle={'Home'}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Title text={'Top'} strings={["Artists"]} />
                    </Grid>
                    {
                        chart?.artists?.data?.map((artist, key) => (
                            <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
                                <ArtistCard showAlbum={false} artist={artist} showFans={false} />
                            </Grid>
                        ))
                    }
                </Grid>

                <Grid container spacing={3} className="mt-1">
                    <Grid item xs={12}>
                        <Title text={'Top'} strings={["Albums"]} />
                        <Carousel items={chart?.albums?.data || []} />
                    </Grid>

                    <Grid item xs={12}>
                        <Title text={<>Top <span className='text-primary'>Playlists</span></>} strings={[]} />
                        <Carousel items={chart?.playlists?.data || []} />
                    </Grid>

                    <Grid item xs={12}>                      
                        <Title text={'Top'} strings={["Tracks"]} />
                        <Carousel items={chart?.tracks?.data || []} />
                    </Grid>
                </Grid>
            </Container>
        </PageContainer>
    );
};

export default Home;
