import { AccessTime, DateRange, Person, PlayArrow } from '@mui/icons-material'
import { Grid } from '@mui/material'
import moment from 'moment/moment'
import React, { useRef } from 'react'
import { defaultPicture, formatTime } from '../util'

const GeneralCard = ({ item, showReleaseDate = true }) => {
    const audioRef = useRef(null);

    return (
        <div className="card d-flex flex-direction-column">                    
            <img alt="cover" src={item?.cover_medium || item?.cover || item?.picture_medium || item?.picture || item?.album?.cover || defaultPicture} />

            <div className="p-1 d-flex flex-direction-column flex-1">
                <h3 className="m-0 mb-05 flex-1">{item?.title || item?.name || ''}</h3>
                
                {
                    showReleaseDate && item?.release_date &&
                    <div className="d-flex align-center f-14">
                        <DateRange className="f-14" /> 
                        <span className="d-inline-block ml-05">{moment(item?.release_date).format('YYYY')}</span>
                    </div>
                }

                {
                    (item?.type === "track") &&
                    <>
                        <Grid container>
                            <Grid item xs={8}>
                                <div className="d-flex align-center f-14">
                                    <Person className="f-14" /> 
                                    <span className="d-inline-block ml-05">{item?.artist?.name || ''}</span>
                                </div>

                                <div className="d-flex align-center f-14">
                                    <AccessTime className="f-14" /> 
                                    <span className="d-inline-block ml-05">{formatTime(item?.duration)}</span>
                                </div>
                            </Grid>
                            <Grid item xs={4} container justifyContent={'flex-end'}>
                                <div className='play-button'>
                                    <PlayArrow />
                                </div>
                            </Grid>
                        </Grid>
                        <audio hidden ref={audioRef}
                            src={item?.preview}>
                        </audio>
                    </>
                }
            </div>

        </div>
    )
}

export default GeneralCard