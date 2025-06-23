import { Quote } from "../Components/Quote";
import { Auth } from "../Components/Auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token") || ""
    if (!token) {
      navigate("/signup");
    } else {
      navigate("/blogs")
      alert("You're already signed up !");
    }
  }, []);
  return (
    <div className="grid grid-cols-2">
      <div>
        <Auth type="signup" />
      </div>
      <div className="hidden  md:block">
        <Quote></Quote>
      </div>
    </div>
  );
};
