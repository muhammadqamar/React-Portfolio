import React, {Component} from 'react';
import  {Navlink} from 'react-router-dom';
import '../../assets/css/main.css'
import  flower from '../../assets/images/bg-01.jpg';




class Images extends Component{
state ={
 count: 10



}

componentDidMount(){

      for(var x=0;x<10;x++){
    <div class="col-xs-6">
          <img src={flower}  class="img-responsive"/>
    </div>
  }
  

}
render(){



  return(

<div class="container-fluid" id="img-container">
    <script type="text/javascript" src="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.min.js"></script>
     <div class="row">
            <div class="col-xs-12 col-sm-5 list-img">
                    <div class="row all-images " >


                                <div class="col-xs-6">
                                      <img src={flower}  class="img-responsive"/>
                                </div>
                                <div class="col-xs-6">
                                <img src={flower}  class="img-responsive"/>
                                </div>
                                <div class="col-xs-6">
                                      <img src={flower}  class="img-responsive"/>
                                </div>
                                <div class="col-xs-6">
                                <img src={flower}  class="img-responsive"/>
                                </div>
                                <div class="col-xs-6">
                                      <img src={flower}  class="img-responsive"/>
                                </div>
                                <div class="col-xs-6">
                                <img src={flower}  class="img-responsive"/>
                                </div>
                                <div class="col-xs-6">
                                      <img src={flower}  class="img-responsive"/>
                                </div>
                                <div class="col-xs-6">
                                <img src={flower}  class="img-responsive"/>
                                </div>
                                <div class="col-xs-6">
                                      <img src={flower}  class="img-responsive"/>
                                </div>
                                <div class="col-xs-6">
                                <img src={flower}  class="img-responsive"/>
                                </div>
                                <div class="col-xs-6">
                                      <img src={flower}  class="img-responsive"/>
                                </div>
                                <div class="col-xs-6">
                                <img src={flower}  class="img-responsive"/>
                                </div>
                                <div class="col-xs-6">
                                      <img src={flower}  class="img-responsive"/>
                                </div>
                                <div class="col-xs-6">
                                <img src={flower}  class="img-responsive"/>
                                </div>
                                <div class="col-xs-6">
                                      <img src={flower}  class="img-responsive"/>
                                </div>
                                <div class="col-xs-6">
                                <img src={flower}  class="img-responsive"/>
                                </div>
                                <div class="col-xs-6">
                                      <img src={flower}  class="img-responsive"/>
                                </div>
                                <div class="col-xs-6">
                                <img src={flower}  class="img-responsive"/>
                                </div>
                                <div class="col-xs-6">

                                </div>
                    </div>


            </div>
            <div class="col-xs-12 col-sm-7 slider-img">
                <div class="your-class">

                </div>
            </div>

        </div>
</div>
  )
}
}
export default Images
