import React, { Component } from 'react';
import fire from '../../fireconfig/config'

class Home extends Component {
  logout() {
       fire.auth().signOut();
   }

  render() {
    return (
      <div>
    <div>Home Page</div>
    <button onClick={this.logout} style={{marginLeft: '25px'}} className="btn btn-success">logout</button>
</div>

    );
  }
}

export default Home;
