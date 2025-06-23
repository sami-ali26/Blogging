import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import { Appbar } from "../Components/Appbar"
import { OneBlog } from "../Components/OneBlog"
import { SingleSkeleton } from "../Components/SingleSkeleton"

 

export const Blog = () => {
  const { id } = useParams()
  const { blog} = useBlog({
    id: id || "" 
  })
  
   
    return <div>
      <Appbar />
      {!blog ? <SingleSkeleton/> : <OneBlog blog={blog}/>}
    </div>
  
}
