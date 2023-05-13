import React from 'react'
import Button ,{HandleClick,HandleExit,HandleSave} from './13-ReusableCmp'
/*class ButtonApp extends React.Component{
    render(){
        return(
            <div>
            <Button handle={HandleClick} backcolor='red'  >Click me</Button>
            <Button handle={HandleSave} backcolor='green'  >notify me</Button>
            <Button handle={HandleExit} backcolor='blue'  >Exit</Button>
            </div>
            
        )
    }
}
  */

  const ButtonApp=()=>{
      return(
    <div>
        <Button handle={HandleClick} backcolor='red'  >Click me</Button>
        <Button handle={HandleSave} backcolor='green' >notify me</Button>
        <Button handle={HandleExit} backcolor='blue'  >Exit</Button>
    </div>
      )
  }
export default ButtonApp
