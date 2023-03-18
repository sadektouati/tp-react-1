 
const Product = ({product, onDelete, onUpdate}) => {
    return(
        <section className={`product`}>
            <h3>
                <span>{product.name}</span>
                <span className="manage">
                    <button className="edit" onClick = {() => onUpdate(product.id)}>edit</button>
                    <button className="delete" onClick = {() => onDelete(product.id)}>delete</button>
                </span>
            </h3>
            <div>{product.description}</div>
            <div>{product.category}</div>
            <sub><b>{product.price}</b>cad</sub>
        </section>
    )
}

export default Product