import {useState, useEffect} from 'react'
import { productContext } from './ProductContext'
import { productData } from '../../functions'

export const ProductProvider = ({children}) => {
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await productData();
            setProductList(data)
            setLoading(false)
        }
        fetchData()
    }, [])

    return(
        <productContext.Provider value={[productList, loading, setProductList, setLoading]}>
            {children}
        </productContext.Provider>
    )
}