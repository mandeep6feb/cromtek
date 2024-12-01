
import './App.css';
import Footersection from './Components/Footersection';
import Header from './Components/Header';
import Partnersection from './Components/Partnersection';
import Socialsection from './Components/Socialsection';
import AboutPage from './Pages/AboutPage';
import Home from './Pages/Home';
import {Route, Routes} from 'react-router-dom'
import ServicePage from './Pages/ServicePage';
import SolutionPage from './Pages/SolutionPage';
import MobilityPage from './Pages/MobilityPage';
import EcommercePage from './Pages/EcommercePage';
import ContactPage from './Pages/ContactPage';
import DomainPage from './Pages/DomainPage';
import NavSolutionsection from './Components/NavSolutionsection';
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/About' element={<AboutPage/>} />
      <Route exact path='/Services' element={<ServicePage/>} />
      <Route exact path='/Solution' element={<SolutionPage/>}/>
      <Route exact path='/MobileApp' element={<MobilityPage/>}/>
      <Route exact path='/E-commerce' element={<EcommercePage/>} />
      <Route exact path='/Contact' element={<ContactPage/>} />
      <Route exact path='/DomainExpert' element={<DomainPage/>} />
    </Routes>
    <Partnersection/>
    <Socialsection/>
    <Footersection/>
    </>
  );
}

export default App;
