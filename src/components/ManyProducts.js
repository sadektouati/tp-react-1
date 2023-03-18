import Product from './Product'

const ManyProducts = ({products, onDeleteMany, onUpdateMany}) => {
    return(
        <section className={`content`}>
            {products.map((product)=>(
                <Product key={product.id} product={product} onDelete={onDeleteMany} onUpdate={onUpdateMany}/>
            ))}
        </section>
    )
}

export default ManyProducts