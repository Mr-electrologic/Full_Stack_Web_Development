import React from 'react'
 class Formsubmission extends React.Component{
    constructor()
    {
        super()
        this.state={rollno:'', name:'',age:'',submitFlag:false}
    }

    handleChange=(e)=>{this.setState({[e.target.name]:e.target.value})}
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({submitFlag:true})
        const{rollno,name,age,submitFlag}=this.state

//alert(rollno)
//alert(name)
    }
    render() 
    {
        let details
        
        const{rollno,name,age,submitFlag}=this.state
        if(submitFlag)
        details=<h1>{rollno}-{name}-{age}</h1>
        return(
            <div>
            <form onSubmit={this.handleSubmit} >
                <input type='text'  onChange={this.handleChange} name='rollno'  value={rollno} /> 
                <input type='text' onChange={this.handleChange} name='name' value={name} />  
                <input type='text' onChange={this.handleChange} name='age' value={age} /> 
                <button type='submit'>submit</button>
                
            </form>
            {details}
            </div>

        )
    }
}
export default Formsubmission
