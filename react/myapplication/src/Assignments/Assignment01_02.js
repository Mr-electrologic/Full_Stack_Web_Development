import React from "react";
import ReactDOM from "react-dom/client";
export default class Assignmaent extends React.Component{
    constructor(props){
        super(props)
        this.state={name:'',check:false,color:''}
    }
    myfunction=()=>{this.setState({check:!this.state.check})}
    render(){
        let h=(this.state.check)?<h1>Fees Paid</h1>:<font color="red"><h1>Fees Not Paid</h1></font>
        return(
            <div>
                <label>Person Name</label>
                <input type="text" value={this.props.name}/><br/>
                <label>Fees Paid</label>
                <input type="checkbox" checked={this.state.check} onChange={this.myfunction}/>
                {h}
            </div>
        )
    }
}