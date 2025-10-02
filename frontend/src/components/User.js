import { useState } from "react"
const User=({name})=>{

    const [count]=useState(0)

    return <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
        <h2>Name: {name}</h2>
        <h3>Location:Andheri</h3>
        <h4>Contact:kamaan551@gmail.com</h4>
    </div>

}
export default User