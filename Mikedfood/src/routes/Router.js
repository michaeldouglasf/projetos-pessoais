import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from '../pages/login/Login';
import SignUp from '../pages/signup/SignUp';
import Restaurant from '../pages/restaurant/Restaurant';
import Feed from '../pages/feed/Feed';
import SignUpAdress from '../pages/signupAdress/SignUpAdress';
import Profile from '../pages/profile/Profile';
import Cart from '../pages/cart/Cart';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>} />
        <Route path="/signup" element={< SignUp/>} />
        <Route path="/signup/adress" element={< SignUpAdress/>} />
        <Route path='/feed' element={< Feed/>} />
        <Route path='/feed/:restaurantId' element={< Restaurant/>} />
        <Route path='/profile' element={< Profile />} />
        <Route path='/cart' element={< Cart/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router
