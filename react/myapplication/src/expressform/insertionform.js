import React from 'react'
import axios from 'axios'
import {DisplayForm} from './DisplayForm'
export default class InsertForm extends React.Component{
    constructor(){
        super()
        this.state={rollno:'',name:'',cl:''}
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})

    }
    handleSubmit=()=>{
        var d=this.state
        axios.post("http://127.0.0.1:5000/insert",d).then(res=>console.log('rec inserted'))
    }
    handleUpdate=()=>{
        var d=this.state
        axios.post("http://127.0.0.1:5000/update",d).then(res=>console.log('rec updated'))
    }
    handleDelete=()=>{
        var d=this.state
        axios.post("http://127.0.0.1:5000/delete",d).then(res=>console.log('rec deleted'))
    }
        render()
    {
        return(
            <div>
                <h1 align='center'>Insert Details to be edited in Database </h1>
            <form class='form'>
                <input type='text' placeholder='rollno' name='rollno' onChange={this.handleChange} /><br/>
                <input type='text' placeholder='name' name='name' onChange={this.handleChange} /><br/>
                <input type='text' placeholder='class' name='cl' onChange={this.handleChange} /><br/>
                <button type='submit' onClick={this.handleSubmit}>Submit</button>
                <button type='submit' onClick={this.handleUpdate}>Update</button>
                <button type='submit' onClick={this.handleDelete}>Delete</button>
                <form>
                
                </form>
            </form><br/>
            <DisplayForm />
            </div>
        )
    }
}