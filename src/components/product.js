import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch ,useSelector} from "react-redux";
import { add } from "../Store/CartSlice";
import {getProducts}  from "../Store/ProductSlice";

const Product=()=>{
    const dispatch = useDispatch();
    const { data: products,status } = useSelector(state => state.products);
    useEffect(()=>{
        //dispatch an action for fetchProducts
        dispatch(getProducts());
        //api
        // fetch("https://fakestoreapi.com/products")
        // .then(data => data.json())
        // .then(result =>setProducts(result))
    },[dispatch]);
    
    if(status === 'Loading'){
      return <p>Loading...</p>
    }
    if(status === 'error'){
      return <p>Something went wrong! Try again later</p>
    }

    const addToCart=(product)=>{
      //dispatch an add action
      dispatch(add(product))
    };

    const cards=products.map(product => {
      return(
        <div className='col-md-3'style={{marginBottom:'10px'}}>
            <Card key={product.id} className="h-100">
                <div className="text-center">
                  <Card.Img variant="top" src={product.image} style={{width:'100px',height:'130px'}}/>
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR: {product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{background:'white'}}>
                   <Button variant="primary" onClick={()=>addToCart(product)}>Add To Cart</Button>
                </Card.Footer>
            </Card>
        </div>
      )
    })
    return(
        <>
          <h1>Product Dashbord</h1>
          <div className='row'>
            {cards}
          </div>
        </>
    )
}

export default Product;