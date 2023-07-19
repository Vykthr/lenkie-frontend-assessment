import { Album, Diversity1 } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import { defaultPicture, formatNumber } from '../util'

const ArtistCard = ({ artist, showAlbum = true, showFans = true }) => {
    return (
        <Link to={`/artist/${artist?.id}`}>
            <div className="card d-flex flex-direction-column cursor-pointer">                    
                <img alt="artist_image" src={artist?.picture_medium || artist?.picture || defaultPicture} />

                <div className="p-1 d-flex flex-direction-column flex-1">
                    <h3 className="m-0 mb-05 flex-1">{artist?.name || ''}</h3>
                    
                    {
                        showFans &&
                        <div className="d-flex align-center f-14">
                            <Diversity1 className="f-14" /> 
                            <span className="d-inline-block ml-05">{formatNumber(artist?.nb_fan || 0)} Fans</span>
                        </div>
                    }

                    {
                        showAlbum &&
                        <div className="d-flex align-center f-14 mt-05">
                            <Album className="f-14" /> 
                            <span className="d-inline-block ml-05">{formatNumber(artist?.nb_album || 0)} Albums</span>
                        </div>
                    }
                </div>
            </div>
        </Link>
    )
}

export default ArtistCard