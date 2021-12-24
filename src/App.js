import  React, {useState} from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [phone, setPhone] = useState("");
  const [url, setUrl] = useState("");
  const [display, setDisplay] = useState(false);
  const [displayF, setDisplayF] = useState(true);
  function emailOnChange(val) {
    setEmail(val.target.value);
  }
  function phoneOnChange(val) {
    setPhone(val.target.value);
  }
  function userOnChange(val) {
    setUser(val.target.value);
  }
  function urlChange(val) {
    setUrl(val.target.value);
  }
  function create() {
    if(email !== '' && user !== '' && url !== '' && phone !== '' ) {
      setDisplay(true);
      setDisplayF(false);
    }
  }
  function fDelete() {
    setDisplay(false);
    setDisplayF(true);
  }
  return (
    <div className="App">
      <h1>Card Creator</h1>
      {
        displayF ?
        <div id="form">
          <label>Please Enter your name</label>
          <p data-testid="message"></p>
          <div>
            <input type="text" onChange={userOnChange} data-testid="name"  placeholder="Name"></input>         
          </div>
          <label>Please Enter your email</label>
          <div>
            <input type="email" onChange={emailOnChange} data-testid="email" placeholder="Email"></input>
          </div>
          <label>Enter your contact number</label>
          <div>
            <input type="number" onChange={phoneOnChange} data-testid="contactno" placeholder="Contact number"></input>
          </div>
          <label>Paste your profile picture URL</label>
          <div>
            <input type="url" onChange={urlChange} data-testid="image" placeholder="URL"></input>
          </div>
          <button data-testid="create" onClick={create} id="create" >Create Card</button>
        </div>
        : ""
      }
      {
          display ? 
            <div className="cardDisplay">
              <img id="imgDisplay" src={url}></img>
              <p data-testid="cardname">Name : {user}</p>
              <p data-testid="cardemail">Email : {email}</p>
              <p data-testid="contactnumber">Contact number : {phone}</p>
              <button id="delete" onClick={fDelete}>Delete</button>
            </div>
          : ""
      }
    </div>
  );
}
export default App;
