
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifItem from "./GifItem";




export const GiftGrid = ({category}) => {

  const {Images, isLoading} = useFetchGifs(category)

  return (
    <>
        <h3>{category}</h3>
        {
          isLoading &&  <h2>Cargando...</h2>
        }
        <div className="card-grid">
            {
              Images.map( (image) => (
                  <GifItem key={image.id} 
                      {...image}
                    />
              ))
            }
        </div>
    </>
  )
}
