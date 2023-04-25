
import './App.css';
import Cardcomponet from './Cardcomponent';

function App() {

    function Btnfunction(name){
    return (
      window.alert ("")
    );
  }
  return (
    
   
       <div className="main-container">
          <Cardcomponet
         
          address="https://i.pinimg.com/originals/a5/0c/e5/a50ce5dc08899907ffaad9708bdc20b6.jpg"
          subtitle="UI/UX Designer"
          name="Aryan Shirani"
          content="A UI/UX designer's job is to create user-friendly interfaces that enable users to understand how to use complex technical products."
          btnFunction={Btnfunction}
          />
          <Cardcomponet
          address="https://img.freepik.com/premium-vector/hacker-mascot-sports-esports-logo_382438-261.jpg?w=2000"
          subtitle="Frontend Developer"
          name="Mr. Vicky"
          content="The React. js framework is an open-source JavaScript framework and library developed by Facebook"
          btnFunction={Btnfunction}
          />
          <Cardcomponet
          address="https://cdn.dribbble.com/users/5657242/screenshots/15332155/untitled-1-01.jpg"
          subtitle="Backend Developer"
          name="V.K"
          content="Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites."
          btnFunction={Btnfunction}
          />
      
    
    </div>
  );
}

export default App;
