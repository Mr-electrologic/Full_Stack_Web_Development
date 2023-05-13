import React from 'react'
class CarUpdate extends React.Component{
    constructor()
    {
        super()
        this.state={color:'red'}
    }

    componentDidMount()
    {
        setTimeout(() => {this.setState({color:'blue'})}, 2000);

        setInterval(()=>{this.setState({color:(this.state.color=='blue' )?'red':'blue'})},2000)
    }


    getSnapshotBeforeUpdate(pp,ps)
    {
        document.getElementById("div1").innerHTML=ps.color 

    }

    componentDidUpdate(){
        document.getElementById("div2").innerHTML=this.state.color

    }
    /*shouldComponentUpdate()
    {
        return  false
    }*/
    render()
    {
        return(
            <div>         
            <div id="div1" ></div>
            <div id="div2"></div>
            <font color ={this.state.color} >
                <h1>color changing</h1>
            </font>
            </div>
        )
    }
}
export default CarUpdate
