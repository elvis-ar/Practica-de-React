import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifts'
import { GifItem } from './GifItem'

export const GifGrid = ({ category }) => {
  
  const [images, setImages] = useState([])

  const getImage = async() => {
    const newImage = await getGifs( category )
    setImages(newImage)
  }

  useEffect( () => {
    getImage();
    // asi es como se haria con el promise 
   /*  getGifs(category)
      .then( (newImage) => setImages(newImage) ) */
  }, [] )

  

  return (
    <>
        <h3>{ category }</h3>
        <div className='card-grid'>
          {
            images.map( ( image ) => (
              <GifItem 
                key={ image.id }
                { ...image }
              />
              
            ))
          }
        </div>
    </>
  )
}
 