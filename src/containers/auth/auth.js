import React, { Component } from 'react';
import fire from '../../fireconfig/config';
import '../../assets/css/mainlogin.css';
import '../../assets/css/util.css';
import '../../assets/css/main.css';
import google from  '../../assets/images/icons/icon-google.png';


class Sign extends Component {
state = {
    email:"qamar",
    pass:"muhammad"
  }
ComponentDidMount()
{}

validatinguser = (e) =>{
this.setState({
email:e.target.value
})
}

validatingpass= (e) =>{
this.setState({
pass:e.target.value,
})
}

login = e => {
   e.preventDefault();

   fire.auth().signInWithEmailAndPassword(this.state.email, this.state.pass).then((u)=>{
  }).catch((error) => {
       console.log(error);
       alert(error)
     });
 }

 signup = e =>{
   e.preventDefault();
   fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass).then((u)=>{
   }).then((u)=>{
     fire.auth().currentUser.sendEmailVerification().then(function() {
    
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
      <div>
       <div className="container-login100" style={{'background-image': 'url(assets/images/bg-01.jpg)'}}>
		   <div className="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
			<form className="login100-form validate-form">
				<span className="login100-form-title p-b-37">
					Sign In
				</span>

				<div className="wrap-input100 validate-input m-b-20" data-validate="Enter username or email">
					<input  onChange={this.validatinguser} className="input100" type="text" name="username" placeholder="username or email"></input>
					<span  className="focus-input100"></span>
				</div>

				<div className="wrap-input100 validate-input m-b-25" data-validate = "Enter password">
					<input onChange={this.validatingpass} className="input100" type="password" name="pass" placeholder="password"></input>
					<span className="focus-input100"></span>
				</div>


        <div className="container-login100-form-btn">
 					<button onClick={this.login} className="login100-form-btn">
 						Login
 					</button>
 				</div>
    <br />
        <div className="container-login100-form-btn">
          <button onClick={this.signup} className="login100-form-btn">
            Sign In
          </button>
        </div>


				<div  className="text-center p-t-57 p-b-20">
					<span className="txt1">
						Or login with
					</span>
				</div>

				<div className="flex-c p-b-112">
					<a href="#" className="login100-social-item">
						<i className="fa fa-facebook"></i>
					</a>

					<a href="#" className="login100-social-item">
						<img src={google} alt="GOOGLE"></img>
					</a>
				</div>


			</form>


		</div>
	</div>



	<div id="dropDownSelect1"></div>


      </div>

    );
  }
}

export default Sign;
