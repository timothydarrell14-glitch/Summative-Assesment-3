import {useState, useEffect} from 'react'
import { productContext } from './productContext'

export ProductProvider = ({children}) => {
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        
    }, [])
}