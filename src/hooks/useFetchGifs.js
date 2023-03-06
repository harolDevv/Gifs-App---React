import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"


export const useFetchGifs = (category) => {
    
    const [Images, setImages] = useState([])
    const [Loading, setLoading] = useState(true)
    
    const getImages =  async() => {
      const NewImages = await getGifs(category)
      setImages(NewImages)
      setLoading(false)
    }


    useEffect(() => {
      getImages(category)
    }, [])

    return{
        Images:Images,
        isLoading: Loading
    }
}
