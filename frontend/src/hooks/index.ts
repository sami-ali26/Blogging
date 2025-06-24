import { useEffect, useState } from "react";
import axios from "axios";

export const api_url = import.meta.env.VITE_API_URL;

export interface Blogdata {
  content: string;
  title: string;
  id?: number;
  author: {
    name: string;
  };
}
export const useBlog = ({id}: {id: string}) => {
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState<Blogdata>();

  useEffect(() => {
    axios.get(`${api_url}/api/v1/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(response => {
        setBlog(response.data.blog);
        setLoading(true);
      });
  }, [id]);

  
  
  return {
    loading,
    blog,
  };

}
export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blogdata[]>([]);

  useEffect(() => {
    axios
      .get(`${api_url}/api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(response => {
        setBlogs(response.data.blogs);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    blogs,
  };
};

