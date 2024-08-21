import React from "react";
 

function Contact(){

    return(
        <div className="contact">
        <h2 id="con">  Contact US</h2>

        <div class="form-containerrr"> 

           
<input style={{padding:10, width:'30%'}} type="text" id="name"placeholder='Name' name="name" required/> 
<br/>
<br/>

<input style={{padding:12, width:'30%'}} type="email" id="email" placeholder='Email' name="email" required/>
<br/> 
<br/>

<input style={{padding:12, width:'30%'}} type="tel" id="phone"placeholder='phone' name="phone" required/>
<br/>
<br/>

<input style={{padding:12, width:'30%'}} type="text" id="address" placeholder='address' name="Address" required/>
<br/>
<br/>

<textarea style={{padding:12, width:'30%'}} id="message" placeholder='message' name="Message" required>Message</textarea>
<br/>
<br/>
<button id='frmm' type="submit">Submit</button>
</div>











        
        </div>

    );
}
export default Contact;