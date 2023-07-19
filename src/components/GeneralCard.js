import { DateRange } from '@mui/icons-material'
import moment from 'moment/moment'
import React from 'react'
import { defaultPicture } from '../util'

const GeneralCard = ({ item, showReleaseDate = true }) => {
    return (
        <div className="card d-flex flex-direction-column cursor-pointer">                    
            <img alt="cover" src={item?.cover_medium || item?.cover || item?.picture_medium || item?.picture || defaultPicture} />

            <div className="p-1 d-flex flex-direction-column flex-1">
                <h3 className="m-0 mb-05 flex-1">{item?.title || item?.name || ''}</h3>
                
                {
                    showReleaseDate && item?.release_date &&
                    <div className="d-flex align-center f-14">
                        <DateRange className="f-14" /> 
                        <span className="d-inline-block ml-05">{moment(item?.release_date).format('YYYY')}</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default GeneralCard