
import { Route, Routes } from 'react-router-dom';
import Home from "./Componets/Home/Home"
import About from "./Componets/About/About"
import Service from "./Componets/Services/Service"
import Project from "./Componets/Projects/Project"
import Contack from "./Componets/Contack/Contack"
import Navber from "./Componets/Navber"
import Footer from "./Componets/Footer/Footer"
import './App.css';
import MyHome from './Componets/MyHome/MyHome';


function App() {
  return (
    <div >
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<MyHome></MyHome>}></Route>
        <Route path="/home" element={<MyHome></MyHome>}></Route>

        <Route path="/about" element={<About></About>}></Route>
        <Route path="/service" element={<Service></Service>}></Route>
        <Route path="/project" element={<Project></Project>}></Route>
        <Route path="/contack" element={<Contack></Contack>}></Route>
      </Routes>
      <Footer></Footer>









    </div>
  );
}

export default App;
