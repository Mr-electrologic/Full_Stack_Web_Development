import React from 'react'
class Suv extends React.Component{
    constructor(p)
    {
        super(p)
       // this.state={brand:this.props.brand,model:this.props.model ,color:this.props.color}
  this.state=p
    }
    changeColor=()=>{this.setState({color:(this.state.color=='red')?'blue':'red'})}
     render()
    { 
        return(
            <div>
                
                 <font color={this.state.color} >
                    <h1>Brand {this.state.brand} - {this.state.model}</h1>
                </font>
                <button onClick={this.changeColor} >Change color</button>
               
            
            </div>
        )
    }
}
export default Suv
