import React from 'react'
class CarMount extends React.Component{
    constructor()
    {
        super()
        this.state={color:'red'}
    }

    componentDidMount()
    {
        setTimeout(() => {this.setState({color:'blue'})
            
        }, 2000);

        setInterval(()=>{this.setState({color:(this.state.color=='blue')?'red':'blue'})

        },2000)
    }
    render()
    {
        return(
            <div>
                <font color={this.state.color} >
                    <h1>Color changing...</h1>
                </font>
            </div>
        )
    }
}
export default CarMount
