import React from 'react';
import data from '../utils/const';
import { Table, Input, Button, Icon } from 'antd';
import '../App.css';
// import ReactDOM from 'react-dom';

class ProductsDetails extends React.Component {
    state = {  }
    render() { 
        const productID = this.props.match.params.productID;
        return ( 
            <React.Fragment>
            <div className="container">
    <div className="img-container">
        <img src={data[productID-1].image} alt="Mac" />
    </div>
    <div className="specs-container">
        <h1 className="product-name">{ data[productID-1].name }</h1>
        <h3 className="category">{ data[productID-1].category }</h3>
        <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quam dolorem distinctio quisquam aspernatur non eligendi deserunt ex tempore expedita mollitia, eveniet dolor aperiam recusandae quidem. Omnis nesciunt assumenda et.
        </p>
        <h2 className="price">{ data[productID-1].price }</h2>
        <div className="checkout-and-cart-container">
            <Button type="primary">Checkout <i className="fa fa-check-circle" aria-hidden="true"></i>
            </Button>
            <Button type="primary">Add to cart <i className="fa fa-cart-plus" aria-hidden="true"></i>
            </Button>
        </div>
        
    </div>
</div>
            </React.Fragment>
         );
    }
}
 
export default ProductsDetails;