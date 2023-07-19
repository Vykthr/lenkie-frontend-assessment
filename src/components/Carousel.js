import React from 'react'
import CarouselComp from 'react-multi-carousel';
import { sliderResponsiveProp } from '../util';
import ArtistCard from './ArtistCard';
import GeneralCard from './GeneralCard';

const Carousel = ({ items, card = 'general' }) => {
    return (
        items?.length > 0 &&
        <CarouselComp
            responsive={sliderResponsiveProp}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            containerClass="carousel-container"
        >
            {
                items?.map((item, key) => (
                    <div className='carousel-item' key={key}>
                        { card === 'general' && <GeneralCard item={item} /> }
                        { card === 'artist' && <ArtistCard artist={item} /> }
                    </div>
                ))
            }
        </CarouselComp>
    )
}

export default Carousel