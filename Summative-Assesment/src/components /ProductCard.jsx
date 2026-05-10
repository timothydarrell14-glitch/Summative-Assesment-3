

function ProductCard({image, rating, description, name, price, category, subCategory}){
    return(
        <div>
            <img src={image} alt={name}></img>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{price}</p>
            <h4>{category}</h4>
            <h5>{subCategory}</h5>
            <p>{rating}</p>
        </div>
    )
}

export default ProductCard