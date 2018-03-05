import React,{Component} from 'react';
import Purchase from './Purchase';
import Item from './item';

class PurchaseLi extends Component{
    constructor(props){
        super(props)

        this.state = {
            purchases: []
        }
        this.addPurchase = this.addPurchase.bind(this);
        this.onDelete = this.onDelete.bind(this);
        


    }
    render(){
        const li = this.state.purchases.map(x => <Item it={x} key ={x.id} delFunc = {this.onDelete}/>) 
        return(
            <section>
                <Purchase mainAdd={this.addPurchase}/>
                {li}
            </section>
        )
    }

    addPurchase(name,quantity){
        const newPurchase = [...this.state.purchases]
        newPurchase.push({id: Math.random(), name, quantity})
        this.setState({
            purchases: newPurchase
        })
    }
    onDelete(id){
        const del = this.state.purchases.findIndex(q => q.id === id);
        const refreshLi = [...this.state.purchases];
        refreshLi.splice(del , 1);
        this.setState({
            purchases: refreshLi
        });
    }
}
export default PurchaseLi;
