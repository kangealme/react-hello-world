import React, { Component} from 'react';
import '../Products/Product.css';

class CardProduct extends Component {
    state = {
        order: 4,
        name: 'kangealme',
    }

    handleCounterChage = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChage(this.state.order);
        })
    }

    handleMinus = () => {
        if(this.state.order > 0)
        {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChage(this.state.order)
            })
        }
    }

    render(){
        return(
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://picsum.photos/300/200" alt="Product Images" />
                </div>
                <p className="product-title">Iwak Pitik Goreng</p>
                <p className="product-price">Rp. 34.000,-</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order} />
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
        );
    }
}

export default CardProduct;