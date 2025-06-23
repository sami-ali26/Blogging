import { Avatar } from "./BlogCard";
import { Write } from "./Write";
import { Link,  } from "react-router-dom";

export const Appbar = ({ authorName = "anonymous" }: { authorName?: string }) => {
  
  return (
    <div className="flex justify-between items-center p-2 border-b border-slate-400 px-10 py-4">
      <Link to={'/blogs'}>
      <div className="flex flex-col justify-center font-semibold text-2xl cursor-pointer">
        Meduim
      </div>
      </Link>

      <div className="flex justify-center items-center gap-6">
        <div className="flex justify-center gap-2 cursor-pointer items-center py-2" >
        <Link to={'/creatblog'}>
          <Write />
          <button className="font-thin text-md cursor-pointer" >Write</button>
          </Link>
          
          <Link to={'/signin'}>
          <button type="button" className="py-2 px-3 me-2 ml-1 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-100 " onClick={() => {
            localStorage.removeItem('token')
            alert('Now you Logged Out')
          }}>Log-Out</button>
          </Link>

        </div>
        <Link to={'/user'}>       
         <Avatar size={"big"} authorName={authorName[0] } />
        </Link>
      </div>
    </div>
  );
};
