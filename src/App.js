
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Signin from './component/Signin';
import Homepage from './component/Homepage';
import Navbar from './component/Navbar';
import HomeAdmin from './component/HomeAdmin';
import HomeUser from './component/HomeUser';
import AddeventList from './component/AddeventList';
import AllEvent from './component/AllEvents';
import AllEventUser from './component/AllEventUser';
import MyBooking from './component/MyBooking';
import AllBooking from './component/AllBooking';
import AllBookingAdmin from './component/AllBookingAdmin';
import Payment from './component/Payment';
import PaymentHistory from './component/PaymentHistory';
import PaymentHistoryadmin from './component/PaymentHistoryadmin';

function App() {
  return (
    <div className="App">
      {/* <PaymentHistory/> */}
  {/* <Payment/> */}
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Homepage/>}/>
      <Route path="/signi" element={<Homepage />} />
      <Route path='/sign' element={<Signin/>}/>
      <Route path='/signin' element={<Login/>}/>
      <Route path='/Adminpage' element={<HomeAdmin/>}/>
      <Route path='/Userpage' element={<HomeUser/>}/>
      <Route path='/Logout' element={<Homepage/>}/>
      <Route path='/Addeve' element={<AddeventList/>}/>
      <Route path='/Alleve' element={<AllEvent/>}/>
      <Route path='/alleven' element={<HomeAdmin/>}/>
      <Route path='/allev' element={<AllEventUser/>}/>
      <Route path='/homee' element={<HomeAdmin/>}/>
      <Route path='/uhome' element={<HomeUser/>}/>
      <Route path='/sthome' element={<Homepage/>}/>
      <Route path='/mybook' element={<MyBooking/>}/>
      <Route path='/mybookingg' element={<MyBooking/>}/>
      <Route path='/allbookingg' element={<AllBooking/>}/>
      <Route path='/allbookingAd' element={<AllBookingAdmin/>}/>
      <Route path='/payment' element={<PaymentHistoryadmin/>}/>
      <Route path='/payments' element={<PaymentHistory/>}/>
      
      </Routes>
      </BrowserRouter>
      {/* <Homepage/> */}
         </div>
  );
}

export default App;
