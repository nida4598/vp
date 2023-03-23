import './App.css';
import Quiz from '../Components/Quiz';
import ContactUs from '../Components/ContactUs';
import Header from '../Components/Header';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  return (
    <>
    <Header searchBar={false}/>
    <Quiz/>
    <ContactUs/>
    
    </>
  )
}

export default App;
