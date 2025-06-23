import type { Blogdata } from "../hooks"
import { Avatar } from "./BlogCard"


export const OneBlog = ({ blog }: {blog: Blogdata}) => {
    return <div className="flex justify-center">
        <div className="grid grid-cols-12 w-screen px-6 pt-15 max-w-screen-xl ">
        <div className="col-span-9">
            <div className="text-4xl font-extrabold">
                {blog.title}
            </div>
            <div className="text-slate-500 pt-2">
                Post on 2nd December
            </div>
            <div className="pt-4">
                {blog.content}
            </div>
        </div>
        <div className="cols-span-3 ">
            <div className="text-slate-600 text-lg">
            Author
            </div>
            <div className="flex">
                <div className="pr-2 flex-col justify-center">
                <Avatar size="big" authorName={blog.author.name[0]}/>
                </div>
                <div>
                    <div className="text-xl font-bold">
                        {blog.author.name}
                    </div>
                    <div className="pt-2 text-slate-500 w-xs">
                        Random catch phrase aabout the author's ability to graab the user's attention
                    </div>
                </div>
            </div>
        </div>
        
     
    </div>
    </div>
    
}