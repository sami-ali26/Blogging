import { useNavigate } from "react-router-dom";
import { Appbar } from "../Components/Appbar";
import { BlogCard } from "../Components/BlogCard";
import { BlogsSkeleton } from "../Components/BlogsSkeleton";
import { useBlogs } from "../hooks";
import { useState, useEffect } from "react";
import axios from "axios";

import { API_URL } from "../hooks";

export const Blogs = () => {
  const {loading, blogs} = useBlogs();
  const [username, setUsername] = useState("")
  const navigate = useNavigate()
  

  const token = localStorage.getItem("token") || ""
  

  useEffect(() => {
      const fetchUsername = async () => {
          if(!token){
              navigate("/signin")
          }else{
          const res = await axios.get(`${API_URL}/api/v1/user/info`,{
              headers: {
                  Authorization: localStorage.getItem("token")
              }
          })
          setUsername(res.data.data)
      }
      }
      fetchUsername()
  }, [token])

  if (loading) { 
    return <div>
      <Appbar authorName={username[0]}/>
      <div className="flex justify-center">
      <div>
          <BlogsSkeleton/>
          <BlogsSkeleton/>
          <BlogsSkeleton/>
          <BlogsSkeleton/>
      </div>
    </div>
    </div>
  } 
   {
    return <div>
        <Appbar authorName={username[0]}/>
        <div className="flex justify-center ">
            <div>
                {blogs.map(blog => <BlogCard 
                key={blog.id}
                id={blog.id}
                authorName={blog.author.name}
                titile={blog.title}
                content={blog.content}
                publishedDate="2nd Feb 2025"
                />)}
            </div>
        </div>
    </div>
  
  }
};
