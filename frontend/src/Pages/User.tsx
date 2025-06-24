import axios from "axios"
import { useEffect, useState } from "react"
import { api_url } from "../hooks"

interface UserData {
    title: string,
    content: string,
    author?: {
        name: string 
    }
}

export const User = () => {
    const [userinfo, setUserinfo] = useState<UserData[]>([])

    useEffect(() => {
        axios.get(`${api_url}/api/v1/user/info`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then(respone => (
            setUserinfo(respone.data.userinfo)
        ))
    }, [])
    return <div>
        <div>
            {userinfo[0]?.author?.name && <div>{userinfo[0].author.name}</div>}
        </div>
        <div>
        {userinfo.map((item, index) => <UserBlogs
        key={index}
        title={item.title}
        content={item.content}
        />)}
        </div>
    </div>
}

function UserBlogs({title, content}: UserData){
    return <div>
        <div>
            {title}
        </div>
        <div>
            {content}
        </div>
    </div>
}