import React from 'react'
import PropTypes from 'prop-types'
class Validation extends React.Component{
    render()
    {
        let h=(this.props.paid)?'true':'false'
        return(
            <div>
            <h1>{this.props.name}-{this.props.age}</h1>
            <h1>{h}</h1>
            </div>
            
        )
    }
}
export default Validation
Validation.defaultProps={
    name:'Harsh',
    age:20,
    paid:true
}

Validation.propTypes={
    name:PropTypes.string,
    age:PropTypes.string,
    paid:PropTypes.bool
}