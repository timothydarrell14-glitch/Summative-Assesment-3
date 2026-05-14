import { useState } from 'react'

function Portal({ product, onDelete, length, onAddProduct, onEditProduct }) {
    const sampleProducts = [
        {
            id: length + 1,
            title: "Classic Black Hoodie",
            price: 45.99,
            description: "Premium oversized hoodie for everyday wear.",
            category: "men's clothing",
            image: "https://i.pravatar.cc",
            stock: 15
        }
    ]

    // State
    const [price, setPrice] = useState(product.price)

    const [formData, setFormData] = useState({
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image,
        stock: product.stock || 0
    })

    const [showEditForm, setShowEditForm] = useState(false)

    // Stock Status
    function stockStatus() {
        if (formData.stock === 0) {
            return "Out of Stock"
        }

        if (formData.stock <= 10) {
            return "Low Stock"
        }

        return "In Stock"
    }

    // Delete Product
    async function handleDelete() {

        if (!window.confirm(`Are you sure you want to delete ${product.title}?`)) {
            return
        }

        try {

            let response = await fetch(`https://fakestoreapi.com/products/${product.id}`, {
                method: 'DELETE',
            })

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }

            let data = await response.json()

            console.log("Deleted Product:", data)

            onDelete(product.id)

        } catch (error) {
            console.error("Delete Error:", error)
        }
    }

    // Add Product
    async function addProduct() {

        const newProduct = sampleProducts[0]

        try {

            let response = await fetch(`https://fakestoreapi.com/products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            })

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }

            let data = await response.json()

            console.log("Added Product:", data)

            if (onAddProduct) {
                onAddProduct(data)
            }

        } catch (error) {
            console.error("Add Product Error:", error)
        }
    }

    // Handle Input Changes
    function handleChange(e) {

        const { name, value } = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    // Edit Product
    async function handleEditSubmit(e) {

        e.preventDefault()

        try {

            let response = await fetch(`https://fakestoreapi.com/products/${product.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }

            let data = await response.json()

            console.log("Updated Product:", data)

            setPrice(formData.price)

            setShowEditForm(false)

            if (onEditProduct) {
                onEditProduct(data)
            }

        } catch (error) {
            console.error("Edit Product Error:", error)
        }
    }

    return (

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

            {/* Product Image */}
            <img
                src={formData.image}
                alt={formData.title}
                className="w-full h-60 object-cover"
            />

            {/* Content */}
            <div className="p-5">

                {/* Product Title */}
                <h2 className="text-2xl font-bold mb-2">
                    {formData.title}
                </h2>

                {/* Category */}
                <p className="text-gray-500 mb-3">
                    {formData.category}
                </p>

                {/* Description */}
                <p className="text-gray-600 mb-4">
                    {formData.description}
                </p>

                {/* Stock */}
                <div className="flex justify-between items-center mb-4">

                    <span className="font-semibold">
                        Stock:
                    </span>

                    <span>{formData.stock}</span>

                </div>

                {/* Stock Badge */}
                <div className="mb-5">

                    <span
                        className={`px-3 py-1 rounded-full text-white text-sm ${
                            formData.stock === 0
                                ? "bg-red-500"
                                : formData.stock <= 10
                                    ? "bg-yellow-500"
                                    : "bg-green-500"
                        }`}
                    >
                        {stockStatus()}
                    </span>

                </div>

                {/* Price Update */}
                <div className="flex gap-2 mb-5">

                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-2 w-full outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    <button
                        onClick={() => setShowEditForm(!showEditForm)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 rounded-lg transition"
                    >
                        Update
                    </button>

                </div>

                {/* Product Price */}
                <h3 className="text-3xl font-bold text-indigo-600 mb-6">
                    ${price}
                </h3>

                {/* Action Buttons */}
                <div className="flex gap-3">

                    <button
                        onClick={() => setShowEditForm(!showEditForm)}
                        className="w-full bg-gray-200 hover:bg-gray-300 py-3 rounded-xl font-medium transition"
                    >
                        Edit
                    </button>

                    <button
                        onClick={handleDelete}
                        className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-medium transition"
                    >
                        Delete
                    </button>

                    <button
                        onClick={addProduct}
                        className="w-full bg-gray-200 hover:bg-gray-300 py-3 rounded-xl font-medium transition"
                    >
                        Add New Product
                    </button>

                </div>

            </div>

        </div>
    )
}

export default Portal


/* ---------------------------------------------------------- */
/* EXAMPLE useEffect FETCH REQUESTS */
/* ---------------------------------------------------------- */


/*

import { useEffect, useState } from 'react'

const [deleteTrigger, setDeleteTrigger] = useState(false)

useEffect(() => {

    if (!deleteTrigger) return

    async function deleteProduct() {

        try {

            let response = await fetch(`https://fakestoreapi.com/products/${product.id}`, {
                method: 'DELETE'
            })

            let data = await response.json()

            console.log(data)

        } catch(error) {
            console.error(error)
        }
    }

    deleteProduct()

}, [deleteTrigger])



<button onClick={() => setDeleteTrigger(true)}>
    Delete
</button>

*/


/*

import { useEffect, useState } from 'react'

const [addTrigger, setAddTrigger] = useState(false)

useEffect(() => {

    if (!addTrigger) return

    async function addProduct() {

        try {

            let response = await fetch(`https://fakestoreapi.com/products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(sampleProducts[0])
            })

            let data = await response.json()

            console.log(data)

        } catch(error) {
            console.error(error)
        }
    }

    addProduct()

}, [addTrigger])


<button onClick={() => setAddTrigger(true)}>
    Add Product
</button>

*/


/*

import { useEffect, useState } from 'react'

const [editTrigger, setEditTrigger] = useState(false)

useEffect(() => {

    if (!editTrigger) return

    async function editProduct() {

        try {

            let response = await fetch(`https://fakestoreapi.com/products/${product.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            let data = await response.json()

            console.log(data)

        } catch(error) {
            console.error(error)
        }
    }

    editProduct()

}, [editTrigger])


<button onClick={() => setEditTrigger(true)}>
    Edit Product
</button>

*/