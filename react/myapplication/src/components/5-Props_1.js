import React from "react";
class Student extends React.Component{
    render(){
        return(
            <div>
                <h1>Roll No.: {this.props.rno}</h1>
                <h1>Name.: {this.props.name}</h1>
                <h1>Class: {this.props.cls}</h1>
            </div>
        )
    }
}
export default Student