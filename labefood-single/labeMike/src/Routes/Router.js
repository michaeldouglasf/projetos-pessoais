import { Route, Routes, BrowserRouter } from 'react-router-dom'
import React from 'react'
import SignUp from '../Pages/singUp/SignUp';
import SignUpAdrees from '../Pages/signUpAdress/SignUpAdress';
import Feed from '../Pages/feed/Feed';
import Restaurant from '../Pages/restaurant/Restaurant';
import Profile from '../Pages/profile/Profile';
import Cart from '../Pages/restaurant/styled';
import Error from '../Pages/error/Error';
import Login from '../Pages/login/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>} />
        <Route path="/login " element={< Login/>} />
        <Route path="/signup" element={< SignUp/>} />
        <Route path="/signup/adress" element={< SignUpAdrees/>} />
        <Route path='/feed' element={< Feed/>} />
        <Route path='/feed/:restaurantId' element={< Restaurant/>} />
        <Route path='/profile' element={< Profile/>} />
        <Route path='/cart' element={< Cart/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router
