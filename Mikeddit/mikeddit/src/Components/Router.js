import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
  import LoginPage from "./LoginPage.js"
  
    
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<LoginPage />}>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/post/:postId" element={<PostPage />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Route>
  </Routes>
</BrowserRouter>