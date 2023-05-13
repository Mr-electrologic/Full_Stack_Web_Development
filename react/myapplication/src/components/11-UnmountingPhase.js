import React from 'react'
class Container extends React.Component{
    constructor()
    {
        super()
        this.state={show:true}
    }
delHeader=()=>{this.setState({show:!this.state.show})}
    render(){
       let head
        if(this.state.show)
        head=<Child />
        return(
            <div>
                {head}
                <button onClick={this.delHeader}>click me</button>
            </div>
        )
    }
}

export default Container

class Child extends React.Component{
    render(){
        return(
            <h1>Child Component</h1>
        )
    }
    componentDidMount()
    {
        alert('mounting..')
    }
    componentWillUnmount()
    {
        alert('unmounting now')
    }
}
