import { useEffect } from "react";
import { useState } from "react";
import './styles.css'


export default function LoadMoreData() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disable, setDisable] = useState(false);

    async function fetchProducts(){
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const data = await response.json();

            if(data) {
                setProducts((prevData)=> [...prevData, ...data.products]);
                setLoading(false)
            }
        }catch(e){
            console.log(e);
            setError(e)
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchProducts();
    },[count])

    useEffect(()=>{
        if (products && products.length === 100) {
            setDisable(true);
        }
    },[products])

    if (loading) {
        return (
            <div>Loading Data</div>
        )
    }

    if (error !==null) {
        return (
            <div>Error Loading Data</div>
        )
    }

    return(
        <div className="container-p">
            <div className="product-container">
                {
                    products && products.length ?
                    products.map((item, index)=>
                        <div
                            className="product"
                            key={item.id}
                        >
                            <img 
                                src={item.thumbnail}
                                alt={item.title}
                            />
                            <p>{item.title}</p>   
                        </div>    
                    ) : null
                }
            </div>
            <div className="button-container">
                <button disable={disable} onClick={()=> setCount(count+1)}>Load More Items</button>
                {
                    disable ? <p>You have reach max items</p> : null
                }
            </div>
        </div>
    )
}