import React, { Component } from 'react';
import fire from '../../fireconfig/config'

class Sign extends Component {


  state = {

    email:"qamar",
    pass:"muhammad"




  }

ComponentDidMount()
{


}

validatinguser = (e) =>{


this.setState({


email:e.target.value



}
)


}
validatingpass= (e) =>{


this.setState({


pass:e.target.value,





}
)


}


login = e => {
   e.preventDefault();
   alert(this.state.email)
    alert(this.state.pass)
   fire.auth().signInWithEmailAndPassword(this.state.email, this.state.pass).then((u)=>{
   alert('success')}).catch((error) => {
       console.log(error);
       alert(error)
     });
 }
 signup = e =>{
   e.preventDefault();
   fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.email).then((u)=>{
   }).then((u)=>{

     fire.auth().currentUser.sendEmailVerification().then(function() {
      alert('email send')
     }, function(error) {
      alert('cant send email :()')
     });


   })
   .catch((error) => {
      alert(error)
     })
 }



  render() {

    return (
      <form>
      <label>Email : </label><input onChange={this.validatinguser} type="email"></input>
      <label>Password : </label><input onChange={this.validatingpass} type="password"></input>

      <hr />
      <button > Login  facebook </button>
      <button > login Google </button>
         <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
         <button onClick={this.login} style={{marginLeft: '25px'}} className="btn btn-success">login</button>


      </form>

    );
  }
}

export default Sign;
