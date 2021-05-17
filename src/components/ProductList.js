import products from '../assets/data.json'

function ProductList () {
    const displayPrice = (product) => {
        return (product.isSale) ? parseFloat(product.salePrice).toFixed(2) : parseFloat(product.price).toFixed(2)
    }
    
    return (
        <div className="flex justify-center bg-gray-100 py-10">
            <div className="grid grid-cols-4"> 
                {products.map((product, index) => (
                    <div 
                        className="m-10"
                        key={product.id}
                    >
                        <a
                            href="/"
                        >
                            <img
                                id={product.id}
                                type="image"
                                alt=""
                                src={product.image}
                            />
                        </a>
                        <div>
                            <p>{product.title}</p>
                            <p style={{ color: product.isSale ? 'red': 'black' }}>${displayPrice(product)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList;