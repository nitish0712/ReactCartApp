import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase';
import 'firebase/firestore';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: [],
      loading: true
    }
    this.db = firebase.firestore();
  }

  componentDidMount(){
    this.db
    .collection('products')
    .onSnapshot((snapshot) => {
      // console.log(snapshot);

      // snapshot.docs.map((doc) => {
      //   console.log(doc.data())
      // });

      const products = snapshot.docs.map((doc)=>{
        const data = doc.data();

        data['id'] = doc.id;
        return data;
      })

      this.setState({
        products,
        loading: false
      })
    })
  }

  handleIncreaseQuantity = (product)=>{
      // console.log('Heyy please increase the quantity of ', product);
      const {products} = this.state;
      const index = products.indexOf(product);

      // products[index].qty+=1;

      // this.setState({
      //     products
      // })

      const docRef = this.db.collection('products').doc(products[index].id);
      docRef
      .update({
        qty:products[index].qty+1
      })
      .then(()=>{
        console.log('Updated Successfully')
      })
      .catch((error)=>{
        console.log("Error: ", error)
      })
  }
  handleDecreaseQuantity = (product)=>{
      // console.log('Heyy please decrease the quantity of ', product);
      const {products} = this.state;
      const index = products.indexOf(product);

      if(products[index].qty===0){
          return;
      }

      // products[index].qty-=1;

      // this.setState({
      //     products
      // })

      const docRef = this.db.collection('products').doc(products[index].id);
      docRef
      .update({
        qty:products[index].qty-1
      })
      .then(()=>{
        console.log('Updated Successfully')
      })
      .catch((error)=>{
        console.log("Error: ", error)
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

  addProduct = () => {
    this.db
    .collection('products')
    .add({
      img:'data:image/jpeg;base64,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',
      price: 150,
      qty:1,
      title: 'Watch'
    })
    .then((docRef)=>{
      console.log('Product added');
    })
    .catch((error)=>{
      console.log('Error: ', error);
    })
  }

  render(){
    const {products, loading} = this.state;
      return (
        <div className="App">
          <Navbar 
            count={this.getCartCount()}
          />
          {/* <button onClick={this.addProduct} style={{padding:5, fontSize:20}}>Add product</button> */}
          <Cart
            products ={products} 
            onIncreaseQuantity = {this.handleIncreaseQuantity}
            onDecreaseQuantity = {this.handleDecreaseQuantity}
            onDeleteProduct = {this.handleDeleteProduct}
          />
          {loading && <h1>Loading Products</h1>}
          <div style={{padding:10}}>Total: {this.getCartTotal()}</div>
        </div>
      );
    }
}

export default App;
