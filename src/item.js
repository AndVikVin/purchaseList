import React, {Component} from 'react';

class Item extends Component{
    constructor(props){
        super(props)

        this.state = {
           quantity: this.props.it.quantity
        
        }
        this.done = this.done.bind(this);
        this.delete = this.delete.bind(this);
    }

    render(){
        return(
            <section>
                <p>{this.props.it.name + ' ' + this.state.quantity}</p>
                <button onClick={this.done}>Done!</button>
                <button onClick = {this.delete} >Delete</button>
            </section>
        )
    }
    done(){
        const res = this.state.quantity;
        this.setState({
            quantity: +res + 1
        })
    }

    delete(){
        const id = this.props.it.id;
        this.props.delFunc(id)
    }
}

export default Item;