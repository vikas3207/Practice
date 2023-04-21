// import logo from './logo.svg';
import './App.css';
import Invitation from './Invitation';

function App() {
  return (
    <div className="App">
        <div className='invitation'>
        
        <Invitation 
        subject ="Birthday party Invitation " 
        Email=" jaGdish@gmail.com" 
        personName="jaGdish" 
        address="Green field Avenue" 
        event="Birthdat Party"
        friends="Ritu,Sourabh, Kartik"
        />
        </div>
      
    </div>
  );
}

export default App;
