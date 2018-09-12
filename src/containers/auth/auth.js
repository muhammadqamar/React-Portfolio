import React, { Component } from 'react';
import fire from '../../fireconfig/config';
import '../../assets/css/mainlogin.css';


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
         <button onClick={this.signup} style={{marginLeft: '25px'}} classNameName="btn btn-success">Signup</button>
         <button onClick={this.login} style={{marginLeft: '25px'}} classNameName="btn btn-success">login</button>
         <div className="container-login100" style="background-image: url('images/bg-01.jpg');">
		<div className="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
			<form className="login100-form validate-form">
				<span className="login100-form-title p-b-37">
					Sign In
				</span>

				<div className="wrap-input100 validate-input m-b-20" data-validate="Enter username or email">
					<input className="input100" type="text" name="username" placeholder="username or email">
					<span className="focus-input100"></span>
				</div>

				<div className="wrap-input100 validate-input m-b-25" data-validate = "Enter password">
					<input className="input100" type="password" name="pass" placeholder="password">
					<span className="focus-input100"></span>
				</div>

				<div className="container-login100-form-btn">
					<button className="login100-form-btn">
						Sign In
					</button>
				</div>

				<div className="text-center p-t-57 p-b-20">
					<span className="txt1">
						Or login with
					</span>
				</div>

				<div className="flex-c p-b-112">
					<a href="#" className="login100-social-item">
						<i className="fa fa-facebook-f"></i>
					</a>

					<a href="#" className="login100-social-item">
						<img src="images/icons/icon-google.png" alt="GOOGLE">
					</a>
				</div>

				<div className="text-center">
					<a href="#" className="txt2 hov1">
						Sign Up
					</a>
				</div>
			</form>


		</div>
	</div>



	<div id="dropDownSelect1"></div>


      </form>

    );
  }
}

export default Sign;
