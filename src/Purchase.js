import React,{Component} from 'react';

class Purchase extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: '',
            quantity: ''
        }
        this.addName = this.addName.bind(this);
        this.addQuantity = this.addQuantity.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }

    render(){
        return(
            <section>
                <input type='text' value={this.state.name} onChange={this.addName}></input>
                <input type='text' value={this.state.quantity} onChange={this.addQuantity}></input>
                <button onClick={this.onAdd}>Add</button>
            </section>
        )
    }    
    addName(e){
        this.setState({
            name: e.target.value
        })
    }
    
    addQuantity(e){
        this.setState({
            quantity: +e.target.value
        })
       
    }    
    onAdd(){
        this.props.mainAdd(this.state.name,this.state.quantity)
    }
}
export default Purchase;