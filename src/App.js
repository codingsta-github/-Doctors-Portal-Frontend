
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Authentication/Login';
import SignUp from './Pages/Authentication/SignUp';
import Contact from './Pages/Home/Contact';
import Home from './Pages/Home/Home';
import Testimonials from './Pages/Home/Testimonials';
import NotFound from './Pages/NotFound';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';


function App() {
  return (
    <div className='App '>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/appointment' element={<Appointment></Appointment>}></Route>
       <Route path='/testimonial'  element={<Testimonials></Testimonials>}></Route>
       <Route path='/contact' element={<Contact></Contact>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
