import React from 'react'
import PropTypes from 'prop-types'
export default class EventButton extends React.Component{
    constructor()
    {
        super()
        this.state={color:'pink'}
    }
    handleClick=(e)=>{alert(e.target.name); this.setState({color:e.target.name})}
    render()
    {
        return(
            <div>
            <div style={{backgroundColor:this.state.color,width:100,height:20}}>Change_Color</div>
            <button name='red' onClick={(e)=>this.handleClick(e)}>Red</button>
            <button name='blue' onClick={(e)=>this.handleClick(e)}>Blue</button>
            <button name='green' onClick={(e)=>this.handleClick(e)}>Green</button>
            </div>
            

        )
    }
}