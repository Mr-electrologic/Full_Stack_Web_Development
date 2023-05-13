import React from 'react'
import axios from 'axios'
export class DisplayForm extends React.Component{
    constructor()
    {
        super()
        this.state={records:[]}
    }
     componentDidMount()
     {
         axios.get("http://127.0.0.1:5000/display").then(res=>this.setState({records:res.data})).catch(err=>console.log(err))
     }
     render()
     {
     var trs=   (this.state.records.length ==0)?<h1></h1>:
     this.state.records.map((e)=> 
         <tr>
             <td>
                 {e.rollno}
             </td>
             <td>
                 {e.name}
             </td>
             <td>
                 {e.cl}
             </td>
         </tr>
     
     
     )
     
     return(
        <div>
        <h1 align="center">Details in the Database</h1>
        <table border="1" align='center' >
        <th>Rollno
        </th>
        <th>Name
        </th>
        <th>Class
        </th>
        <tbody>
            {trs}
        </tbody>
        </table>
        </div>
    )
     }

}