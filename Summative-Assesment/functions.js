let BASE_URL = "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json"

export const productData = async () => {
    try{
        let response = await fetch(`${BASE_URL}`)
        if(!response.ok){
            throw new Error("HTTP error")
        }
        let data = await response.json()
        return data

    }catch(error){
        console.error("Error getting products", error )
    }
}