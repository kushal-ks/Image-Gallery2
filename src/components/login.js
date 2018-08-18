import React,{ Component } from 'react';
export class LogIn extends Component{

    render(){
			debugger
      if(this.props.show === true){
				return(
				<div class="container">
				<center>
					<div class="shadow p-3 mb-5 bg-white rounded">
						<h1>Log In</h1>
						<div style={{backgroundColor:'' }}>
						<h1></h1>
							<table>
								<tr>
									<td>Email</td>
									<td><input type="text" className= "form-control" /> </td>
								</tr>
								<tr>
									<td>Password</td>
									<td><input type="password" className= "form-control" /> </td>
								</tr>
							</table>
								<button className= "btn btn-outline-success my-2 my-sm-0"   >LogIn</button>
							</div>
					</div>
					</center>
				</div>
			)
			
			} 
			return '';
    }
} 