//import logo from './logo.svg';
//import './App.css';
import Greeting from "./Greeting"
import Contact from "./Contact"
import About from "./About"
import Home from "./Home"
import Header from "./Header"
function App() {
  return (
    <div>
   <h1>Hello from ReactJS</h1>
   <Header />
   <Home  name ={'Rohi'} age ={25}
    />
    <Greeting name ={'Vishnu'}/>
    <Greeting name ={'vyshu'}/>
   <About />
   <Contact />
   </div>
  );
}

export default App;
