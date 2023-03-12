import { Link } from "react-router-dom";
import './ProductList.css';

function ProductList(props){
    const server = "http://localhost:5000/images/";
    return(
        <div className="border rounded-md p-3">
            <img src={server+props.product.image} className="img-fluid"/>
            <div className="name">{props.product.name}</div>
            <div className="category">{props.product.category}</div>
            <Link to={`/productdetails/${props.product._id}`}>
               <button className="btn btn-primary">Show Details</button>
            </Link>
        </div>
    )
}


export default ProductList;