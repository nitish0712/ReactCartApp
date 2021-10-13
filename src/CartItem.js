import React from "react";

class CartItem extends React.Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         price: 999,
    //         title: 'Mobile Phone',
    //         qty: 1,
    //         img: ''
    //     }
    //     // this.increaseQuantity = this.increaseQuantity.bind(this);
    // }
    increaseQuantity=()=>{
        //console.log('this.state', this.state);
        //setState form 1
        // this.setState({
        //     qty:this.state.qty+1
        // });

        // setState Form 2 - if previous state required
        this.setState((prevState)=>{
            return {
                qty: prevState.qty+1
            }
        });
    }
    decreaseQuantity=()=>{
        const {qty}= this.state;

        if(qty==0){
            return;
        }
        this.setState((prevState)=>{
            return {
                qty:prevState.qty-1
            }
        });
    }
    render(){
        // const {price, title, qty } = this.state;
        const {price, title, qty } = this.props.product;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style= { {fontSize: 25} }> {title}</div>
                    <div style= { {color: '#777'} }>Rs: {price}</div>
                    <div style= { {color: '#777'} }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* {Buttons} */}
                        <img 
                            alt ="increase" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt ="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                            onClick={this.decreaseQuantity}
                        />
                        <img 
                            alt ="delete" 
                            className="action-icons" 
                            src="https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg" 
                        />
                    </div>
                </div>

            </div>
        );
    }
}

export default CartItem;

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}