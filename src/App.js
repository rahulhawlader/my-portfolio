import './App.css';
import About from './Componets/About/About';
import Contack from './Componets/Contack/Contack';
import Footer from './Componets/Footer/Footer';
import Home from './Componets/Home/Home';
import Navber from './Componets/Navber';
import Project from './Componets/Projects/Project';
import Service from './Componets/Services/Service';

function App() {
  return (
    <div >
      <Navber></Navber>
      <Home></Home>
      <About></About>
      <Service></Service>
      <Project></Project>
      <Contack></Contack>
      <Footer></Footer>
    </div>
  );
}

export default App;
