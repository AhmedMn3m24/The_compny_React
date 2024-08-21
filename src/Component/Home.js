import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Home() {
  return (
    <>
<div>

  
              {/* ############################################################# */}
<div id='slider'>
<img className='photo' src='https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-content-bg01.jpg'/>
</div>
<p id='slide'>Medical Services<br/> Trusted by Clients</p>
<button>Make an appointment</button>
<button style={{margin:25}}>Departments</button>
</div>
       {/* ******************************************************* */}
 <div className='section1'>
 <h2> Why Choose Our Clinic</h2>
 <p className='p-1'>For more than a century, people from all walks of life<br/> Here are some reasons why more than a million people<br/> each year choose our Clinic for their medical care:</p>
 <h4>More exprnince<br/>
 Every year, more than a million people come to the Clinic for care. Our highly specialized experts are deeply experienced in treating rare and complex conditions. </h4>
 <h5> Seamless care<br/>
 At our Clinic, every aspect of your care is coordinated and teams of experts work together to provide exactly the care you need. What might take months elsewhere can often be done in days here. </h5>
 </div>
                   {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}

<div className='section2'>
<h2 id='text'>Our Services</h2>
<img  src='https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-home-img01.jpg'/>
<img src='https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-home-img02.jpg'/>
<img src='https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-home-img03.jpg'/>

<p>General Practice</p>
<p id='two'>Vaccination</p>
<p id='three'>Health Packages</p>
<button class="btnn" id="scrollButton">View All</button>
</div>

<div className='section3'>
<p id='pragraph3'>Make an Appointment</p>
<h6  id='pragh'>You can book a visit right now by filling up the online form or give us <br/>a call to check the available time for a visit.</h6>

<img  id='slid3' src='https://img.freepik.com/premium-photo/male-doctor-labcoat-stethoscope-with-folded-arms-standing-hospital-hallway_752325-3503.jpg'/>

<div class="form-container"> 

           
            <input style={{padding:12, width:'20%'}} type="text" id="name"placeholder='Name' name="name" required/> 
          <br/>
          <br/>
           
            <input style={{padding:12, width:'20%'}} type="email" id="email" placeholder='Email' name="email" required/>
            <br/> 
            <br/>
   
            <input style={{padding:12, width:'20%'}} type="tel" id="phone"placeholder='phone' name="phone" required/>
            <br/>
            <br/>
        
            <input style={{padding:12, width:'20%'}} type="text" id="address" placeholder='address' name="Address" required/>
            <br/>
            <br/>
     
            <textarea style={{padding:12, width:'20%'}} id="message" placeholder='message' name="Message" required>Message</textarea>
            <br/>
            <br/>
            <button id='frm' type="submit">Make an Appointment</button>
    </div>
    {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}


    <div className='section4'>
  <p className='pragh4' >100$ <br/>Quality</p>
  <p className='pragh4'>2480<br/>Patients a year</p>
  <p className='pragh4'>26<br/>People working</p>
  <p className='pragh4'>30 <br/>Years of experience</p>
    </div>
               {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}


   <div className='section5'>
    <h2 id ="pragh5">Our Doctors</h2>
    <div id='sora'>
    <img src='https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-team-img01.jpg'/>
    <img src='https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-team-img02.jpg'/>
    <img src='https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-team-img03.jpg'/>
    <img src='https://template66408.motopreview.com/mt-demo/66400/66408/mt-content/uploads/2018/05/mt-1451-team-img04.jpg'/>
    </div>
    
    <h5 id="txt1">Dr.Nick Sims,,<br/>He possesses numerous other skills including experience with vaccinations,,</h5>
    <h5 id="txt2">Dr. Max Turner,,<br/>He possesses numerous other skills including experience with vaccinations</h5>
    <h5 id="txt3">Dr. Amy Adams ,, <br/>He possesses numerous other skills including experience with vaccinations</h5>
    <h5 id="txt4" >Dr.Nick Sims ,, <br/>He possesses numerous other skills including experience with vaccinations</h5>

  </div>
             {/******************************************/}
  
    <div className='footer'></div>
    <p id='foter1'>About us<br/></p>
    <h6 id='foterone'>Medical Clinic promotes health and wellbeing of all our patients by providing accessible, high-quality medical care for people of all ages.</h6>
    <p id='foter2'>Services</p>
    <span className='fotertwo'>Outpatient Surgery</span>
    <br/>
    <br/>
    <span className='fotertwo'>Cardiac Clinic </span>
    <br/>
    <br/>
    <span className='fotertwo'>Ophthalmology Clinic</span>
    <br/>
    <br/>
    <span className='fotertwo'>Gynaecological Clinic</span>
    <br/>
    <br/>
    <span className='fotertwo'>Outpatient Rehabilitation</span>
    <p id='foter3'>Doctors</p>
    <span className="foterthree">Dr. Nick Sims</span>
    <br/>
    <br/>
    <span className="foterthree">Dr. Michael Linden</span>
    <br/>
    <br/>
    <span className="foterthree">Dr. Max Turner</span>
    <br/>
    <br/>
    <span className="foterthree">Dr. Amy Adams</span>
    <br/>
    <br/>
    <span className="foterthree">Dr. Julia Jameson </span>
    </div>

    {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}

  </>
  );
}





export default Home;