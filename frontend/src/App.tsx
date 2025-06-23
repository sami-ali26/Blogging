import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { Signup } from "./Pages/Signup";
import { Signin } from "./Pages/Signin";
import { Blog } from "./Pages/Blog";
import { Blogs } from "./Pages/Blogs";
import { CreateBlog } from "./Pages/CreatBlog";
import { User } from "./Pages/User";





function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<HomePage/>}/>
          <Route path="/signup" element= {<Signup/>}/>
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/creatblog" element={<CreateBlog />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
