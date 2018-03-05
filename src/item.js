import React, {Component} from 'react';

class Item extends Component{
    constructor(props){
        super(props)

        this.state = {
           quantity: this.props.it.quantity,
           doneQuantity: 0,
           isDone: false 
        }
        this.done = this.done.bind(this);
        this.delete = this.delete.bind(this);
    }

    render(){
        
        return(
            <section>
                <p className = {(this.state.isDone === false)?"undone":"done"}>{this.props.it.name + ' ' + this.state.quantity + '/' + this.state.doneQuantity}</p>
                <button onClick={this.done}>Done!</button>
                <button onClick = {this.delete} >Delete</button>
            </section>
        )
    }
    done(){
        const res = this.state.doneQuantity;
        (res < this.state.quantity)?this.setState({
            doneQuantity: +res + 1
        }):true;
         if(res === +this.state.quantity-1)
            this.setState({
                isDone: true
            });
        
    }

    delete(){
        const id = this.props.it.id;
        this.props.delFunc(id)
    }
}

export default Item;