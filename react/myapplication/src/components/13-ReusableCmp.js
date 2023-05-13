import React from 'react'
/*class Button extends React.Component{
    render()
    {
        return(
            <button onClick={this.props.handle} style={{backgroundColor:this.props.backcolor}}>{this.props.children}</button>
        )
    }
}
*/

const Button=(props)=><button onClick={props.handle} style={{backgroundColor:props.backcolor}}>{props.children}</button>
export default Button

export const HandleClick=()=>alert('click')
export const HandleSave=()=>alert('Save')
export const HandleExit=()=>alert('exit')

 
