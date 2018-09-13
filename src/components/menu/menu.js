import React,{Component} from 'react'
import fire from '../../fireconfig/config';
import '../../assets/css/component1.css';
import classie from"../../assets/js/polyfills.js";
import { NavLink } from 'react-router-dom';


class Menu extends Component{

    logout() {
         fire.auth().signOut();
         }
       componentDidMount() {

            var button = document.getElementById('cn-button'),

             wrapper = document.getElementById('cn-wrapper'),
             overlay = document.getElementById('cn-overlay');
              //open and close menu when the button is clicked
          var open = false;
          button.addEventListener('click', handler, false);
          wrapper.addEventListener('click', cnhandle, false);

          function cnhandle(e){
            e.stopPropagation();
          }

          function handler(e){
            if (!e) var e = window.event;
            e.stopPropagation();//so that it doesn't trigger click event on document

              if(!open){
                openNav();
              }
            else{
                closeNav();
              }
          }
          function openNav(){
            open = true;
              button.innerHTML = "-";
              classie.add(overlay, 'on-overlay');
              classie.add(wrapper, 'opened-nav');
          }
          function closeNav(){
            open = false;
            button.innerHTML = "+";
            classie.remove(overlay, 'on-overlay');
            classie.remove(wrapper, 'opened-nav');
          }
          document.addEventListener('click', closeNav);
       }
       render()
         {
    return(

      <div className="container">


        <div className="component">

          <button className="cn-button" id="cn-button">+</button>
          <div className="cn-wrapper" id="cn-wrapper">

              <ul>
                <li><NavLink to="/" className="icon-picture"> </NavLink></li>
                <li><NavLink to="/doc" className="icon-headphones"> </NavLink></li>
                  <li><NavLink to="/contact" className="icon-home"> </NavLink></li> 



               </ul>

          </div>
          <div id="cn-overlay" className="cn-overlay"></div>

        </div>
      </div>



    )
  }
}
export default Menu
