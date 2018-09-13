
import React, { Component } from 'react';
import Menu from '../../components/menu/menu';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Images from '../../components/images/images';
import Contacts from '../../components/contacts/contact';
import Documents from '../../components/documents/document';



class Home extends Component {


  render() {
    return (
      <BrowserRouter>
        <div>

          <Switch>
            <Route path="/" component={Images} exact  />
              <Route path="/images" component={Images}  />
                <Route path="/contact" component={Contacts}  />
                  <Route path="/doc" component={Documents}  />

          </Switch>
            <Menu />
        </div>

      </BrowserRouter>



    );
  }
}

export default Home;
