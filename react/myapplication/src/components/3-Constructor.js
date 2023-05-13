import React from "react"
import ReactDom from "react-dom/client"

class Car extends React.Component{
    constructor(){
        super()
        this.state1={name:'Swift Dzire VDi',color:'#1ca9c9'}
        this.state2={name:'Alto K10 VXi',color:'#f4852e'}
    }
    render(){
        return(
            <div>
            <h1><font color={this.state1.color}>Car name :{this.state1.name}</font></h1>
            <h1><font color={this.state2.color}>Car name :{this.state2.name}</font></h1>

            </div>
        )
    }
}
export default Car