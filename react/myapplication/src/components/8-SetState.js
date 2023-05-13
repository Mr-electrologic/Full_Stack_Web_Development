import React from 'react'
class ColoredCar extends React.Component{
    constructor(props )
    {
        super(props )
       this.state=props
    }

   changeColor=(c)=>{this.setState({color:c})}
    render()
    {
        return (
            <div> 
            <font color={this.state.color} >
            <ol>
                <li>{this.state.brand}</li>
                <li>{this.state.model}</li>
            </ol>
            </font>
            <button onClick={()=>{let color=prompt('enter color:') ;this.changeColor(color)}}>change color</button>
            </div>
        )
    }
}

 export default ColoredCar
