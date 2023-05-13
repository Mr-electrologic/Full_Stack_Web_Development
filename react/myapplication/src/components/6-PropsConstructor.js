import React from 'react'
class Suv extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={brand:this.props.brand,model:this.props.model ,color:this.props.color}

    }
    render()
    {
        return(
            <div>
                <font color={this.state.color} >
                    <h1>Brand {this.state.brand} - {this.state.model}</h1>
                </font>
            </div>
        )
    }
}
export default Suv
