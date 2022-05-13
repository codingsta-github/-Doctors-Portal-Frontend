
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Contact from './Pages/Home/Contact/Contact';
import Home from './Pages/Home/Home';
import Testimonials from './Pages/Home/Testimonials/Testimonials';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <div className='App'>
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
