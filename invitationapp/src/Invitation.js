import React from 'react';


    function Invitation(props){
   return(
    <div>
      <p>
      Subject : {props.subject}<br/>
      To : {props.Email}<br/><br/>
      </p>

   <p>
   Hi , {props.personName} <br/>
  
  I am having a {props.event} next Friday at my Home.<br/> Would you like to come ? It will be fun.<br/> 
  Lots of people from my school are coming . you know some of them - {props.friends} .
  
  <br/>My house is behind our school , {props.address}.
  
  <br/><br/>I hope you will come and see you soon .
  
  <br/>from ,<br/>{props.personName}
  </p>
  </div>

);
}

export default Invitation;
