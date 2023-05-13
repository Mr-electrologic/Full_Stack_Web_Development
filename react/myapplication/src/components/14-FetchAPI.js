import React from 'react'
class FetchData extends React.Component{
    constructor()
    {
        super()
        this.state={loading:true,dat:[]}
    }

    componentDidMount()
    {
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/5').then
       ((response)=>response.json()).then(d=>{this.setState({dat:d,loading:false})})
    }
    render()
    {
        let h=(this.state.loading)?<h1>Loading...</h1>
        :
       <div>
            <h1>{this.state.dat[2].name}</h1>
            <img src={this.state.dat[2].image} />
        </div>
     
        return(
            <div>
  {h}
            </div>
          
        )
    }
}

export default FetchData
//fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1') 
