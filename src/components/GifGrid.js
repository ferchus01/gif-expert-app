import React from 'react'
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <span className="titulo-caja"><h3 className="animate__animated animate__fadeIn">{category}</h3></span>
            { loading && <p className="animate__animated animate__flash">Loading</p> }
            <div className='row'>
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}