
import axios from "axios"
import { Appbar } from "../Components/Appbar"
import { useState, type ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"

const apiUrl = import.meta.env.VITE_API_URL;


export const CreateBlog = () => {
    const navigate = useNavigate()
    const [disable, setdisable] = useState(true)
    const [title, setTitle] = useState('')
    const [content, setDescription] = useState('')
    return <div>
        <Appbar/>
    <div className="flex justify-center w-full pt-4">
       <div className="max-w-screen-lg w-full">
          <input  className=" p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Title "
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          ></input>
       <TextEditor  onChange={(e) => {
        setdisable(false)
        setDescription(e.target.value)
       }}/>
       <button onClick={async () => {
        setdisable(true)
       const response = await axios.post(`${apiUrl}/api/v1/blog`, {
            title,
            content
        },
       {
        headers: {
        Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json"
        }
    });
        navigate(`/blog/${response.data.id}`)
       }}  type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-700" disabled={disable}>
           {disable ? <DisableButton/>: 'Submit'}
       </button>
       </div>
    </div>
    </div>
}

function TextEditor({ onChange }: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
    return <form>
       <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 mt-4">  
           <div className="px-4 py-2 bg-white rounded-b-lg ">
               <label className="sr-only">Publish post</label>
               <textarea id="editor" rows={8} className="focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white  p-4 pl-4" placeholder="Write blog..." required 
               onChange={onChange}
               ></textarea>
           </div>
       </div>
       
    </form>
    
}
function DisableButton() {
    return <button className="cursor-not-allowed  ..." disabled>Submit</button>
}