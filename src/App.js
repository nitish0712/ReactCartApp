import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: [
        {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
            id:1
        },
        {
            price: 99,
            title: 'Watch',
            qty: 1,
            img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
            id:2
        },
        {
            price: 9999,
            title: 'Laptop',
            qty: 1,
            img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxhcHRvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
            id: 3
        }
      ]
    }
  }
  handleIncreaseQuantity = (product)=>{
      // console.log('Heyy please increase the quantity of ', product);
      const {products} = this.state;
      const index = products.indexOf(product);

      products[index].qty+=1;

      this.setState({
          products
      })
  }
  handleDecreaseQuantity = (product)=>{
      // console.log('Heyy please decrease the quantity of ', product);
      const {products} = this.state;
      const index = products.indexOf(product);

      if(products[index].qty===0){
          return;
      }

      products[index].qty-=1;

      this.setState({
          products
      })
  }
  handleDeleteProduct =(id) => {
      const {products} = this.state;

      // return items having id not eqal to deleted id
      const items = products.filter((item)=>item.id !== id);

      this.setState({
          products: items
      })
  }

  getCartCount= ()=>{
    const {products} = this.state;

    let count=0;
    products.forEach((product) => {
      count+=product.qty;
    });
    return count;
  }

  getCartTotal=()=>{
    const{products}= this.state;

    let cartTotal = 0;

    products.forEach((product) => {
      cartTotal=cartTotal+ product.qty*product.price
    });

    return cartTotal;

  }

  render(){
    const {products} = this.state;
      return (
        <div className="App">
          <Navbar 
            count={this.getCartCount()}
          />
          <Cart
            products ={products} 
            onIncreaseQuantity = {this.handleIncreaseQuantity}
            onDecreaseQuantity = {this.handleDecreaseQuantity}
            onDeleteProduct = {this.handleDeleteProduct}
          />
          <div style={{padding:10}}>Total: {this.getCartTotal()}</div>
        </div>
      );
    }
}

export default App;
