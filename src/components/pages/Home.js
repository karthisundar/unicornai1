import React, {  useEffect } from 'react';
import '../../App.css';
import image1 from './image1.png';
import WOW from 'wowjs';

import her from './her.jpg';
import 'animate.css';

import {Link } from 'react-router-dom';

import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/Dashboard';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';

export default function Home() {

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])
  return (
    <div className="body">
            <div class="wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">

    <div id="hero-area" class="hero-area-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
          <div class="contents">

            <h2 class="head-title" class="wow flipInY" data-wow-interation="10">Unicorn-Ai-Labs</h2> <br /> <br />
            <br /> <br />
            <h1 className="head-titlee">Building AI Powerd Solution</h1>
            <p>Building AI & Analytics Solutions For Solving business Challenge Building AI Powerd Solutions
                        <p> Team of AI Scientiest Building Custom Knitted Solutions to Evey Day Business Challenges.Using AI And Machine Learning</p>

            </p>
            </div>
            </div>
            <div class="d-flex justify-content-end">
            <img className="img-fulid" id="detail" src={image1}  />
            </div>
          </div>
          </div>
  </div>
  <section id="services" class="section-padding">
        <div className='testimonials' id='testimonials'>
            <div className='container'>

               <div class="section-header ">
          <h5 class="section-title wow fadeInDown" align="center">Our Services</h5>
          <div class="shape wow fadeInDown" data-wow-delay="0.3s"></div>
        </div>
                <div className='content'>

                    <div className='card'>
                    <div class="c">

                    <div class="icon">
                    <div class="services-item wow fadeInRight" data-wow-delay="0.6s">

                    <i class="lni-cog"></i>
                    <Link to ="./NLP">
                    <div class="icon">
                <i class="lni-stats-up"></i>

                        <CodeIcon />
                        </div>
                        </Link>
                        </div>
                        <p>NLP</p>
                        <p>Supply chain management is the handling of the entire production flow of a good or service — starting from the raw components all the way to delivering the final product to the consumer. A company creates a network of suppliers (“links” in the chain) that move the product along from the suppliers of raw materials to those organizations that deal directly with users.</p>
                    </div>
                    </div>
                    </div>
                    <div className='card'>
                    <div class="services-item wow fadeInRight" data-wow-delay="0.6s">

                        <Link to ="./Vision">
                        <div class="icon">
                <i class="lni-stats-up"></i>
                      <DashboardIcon />
                      </div>
                      </Link>

                        <p>In just 2 very short meetings with John he managed to find the solution personally catered to my situation and expectations. Punctual, well informed and very reliable.</p>
                        <p><span>Carol Harper</span></p>
                        <p>Director at Risktec Solutions Ltd</p>
                    </div>
                    </div>
                    <div className='card'>
                    <div class="services-item wow fadeInRight" data-wow-delay="0.6s">

                        <Link to ="Dashborad">
                        <div class="icon">
                      <VisibilityIcon />
                      </div>
                      </Link>
                        <p>A very professional financial advisor, who is true to his word. John has demonstrated a high amount of integrity in the time I have known him, and he is fast to respond to my concerns.</p>
                        <p><span>Snow.J.R.</span></p>
                        <p>Managing Director of BPW Global</p>
                    </div>
                    </div>
                    <div className='card'>
                    <div class="services-item wow fadeInRight" data-wow-delay="0.6s">

                        <Link to ="Devlopment">
                        <div class="icon">
                <i class="lni-stats-up"></i>
                      <PermPhoneMsgIcon />
                      </div>
                      </Link>
                        <p>A very professional financial advisor, who is true to his word. John has demonstrated a high amount of integrity in the time I have known him, and he is fast to respond to my concerns.</p>
                        <p><span>Snow.J.R.</span></p>
                        <p>Managing Director of BPW Global</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>

        <section id="contact" class="section-padding bg-gray">
<div class="container">
 <div class="section-header text-center">
<h2 class="section-title wow fadeInDown animated" data-wow-delay="0.3s" >Countact Us</h2>
<div class="shape wow fadeInDown animated" data-wow-delay="0.3s" ></div>
</div>
<div class="row contact-form-area wow fadeInUp animated" data-wow-delay="0.3s" >
<div class="col-lg-7 col-md-12 col-sm-12">
<div class="contact-block">
<form id="contactForm" novalidate="true">
<div class="row">
<div class="col-md-6">
<div class="form-group">
<div class="help-block with-errors"></div>
</div>
</div>
<div class="col-md-6">
<div class="form-group">
<div class="help-block with-errors"></div>
</div>
</div>
<div class="col-md-12">
<div class="form-group">
<input type="text" placeholder="Subject" id="msg_subject" class="form-control" required="" data-error="Please enter your subject" />
<div class="help-block with-errors"></div>
</div>
</div>
<div class="col-md-12">
<div class="form-group has-error">
<textarea class="form-control" id="message" placeholder="Your Message" rows="7" data-error="Write your message" required=""></textarea>
<div class="help-block with-errors"><ul class="list-unstyled"><li>Write your message</li></ul></div>
</div>
<div class="submit-button text-left">
<button class="btn btn-common disabled" id="form-submit" type="submit" >Send Message</button>
<div id="msgSubmit" class="h3 text-center hidden"></div>
<div class="clearfix"></div>
</div>
</div>
</div>
</form>
</div>
</div>
<div class="col-lg-5 col-md-12 col-xs-12">
<div class="map">
<object  data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34015.943594576835!2d-106.43242624069771!3d31.677719472407432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75d90e99d597b%3A0x6cd3eb9a9fcd23f1!2sCourtyard+by+Marriott+Ciudad+Juarez!5e0!3m2!1sen!2sbd!4v1533791187584"></object>
</div>
</div>
</div>
</div>
</section>
 <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <Link to ='/Services'>
                            Services
                        </Link></li>
                    <li className='nav-item'>
<Link to ="/Porducts"> Products
</Link>                   </li>

<li className='nav-item'>
                        <Link to ='/ContactUs'>
                        ContactUs
                        </Link></li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2022 Unicorn AI Labs, Inc. All rights reserved</p>

                </div>
            </div>
        </div>
    </div>
    </div>




)
}
