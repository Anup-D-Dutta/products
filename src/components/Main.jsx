import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from './Loder'

const Main = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchProducts = async () => {
        setLoading(true)

        //---------------------- Using Fetch -----------------------

        // try {
        //     const res = await fetch('https://fakestoreapi.com/products')
        //     const data = await res.json()
        //     setProducts(data)
        //     setLoading(false) // moved here
        // } catch (error) {
        //     console.error('Error fetching products:', error)
        //     setLoading(false) // also here in case of error
        // }

        //-------------------------------- Using Axios ------------------------

        try {
            const res = await axios.get('https://fakestoreapi.com/products')
            setProducts(res.data)
        } catch (error) {
            console.error('Error fetching products:', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts() // load once on mount
    }, [])

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Products</h1>
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={fetchProducts}
                >
                    Refresh Products
                </button>
            </div>

            {loading ? (
                <Loader />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map(product => (
                        <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-md">
                            <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain" />
                            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
                            <p className="text-gray-700">${product.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )

}

export default Main 
