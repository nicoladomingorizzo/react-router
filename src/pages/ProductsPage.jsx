import { useEffect, useState } from "react"

export default function ProductPage() {

    const apiUrl = 'https://fakestoreapi.com/products'
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
                return data;
            })
    }, [])

    return (

        <main className="pb-2">
            <h2 className="text-center fs-1 pt-5">I NOSTRI PRODOTTI</h2>
            <div className="row row-cols-1 row-cols-lg-2 g-4 my-5 mx-2">

                {products.length && products.map(product => {
                    return (
                        <div className="col" key={product.id}>
                            <div className="card h-100 text-center">
                                <figure className="card-img-top text-center">
                                    <img src={product.image} alt={product.title} className="img-fluid p-3" style={{ width: '200px' }} />
                                </figure>
                                <div className="card-body d-flex flex-column justify-content-end fw-bold">
                                    <p>{`Categoria: ${product.category}`}</p>
                                    <p>{`Nome Prodotto: ${product.title.toUpperCase()}`}</p>
                                    <p>{`Prezzo: $${product.price.toFixed(2)}`}</p>
                                    <p className="">{`Valutazione: ⭐ ${product.rating.rate}`}</p>
                                    <p>{`Acquistate: ${product.rating.count}`}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
                )}

            </div>
        </main>

    )
}