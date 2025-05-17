import React,{useState} from 'react'

const Password = () => {
    const [ShowPassword, setShowPassword] = useState(false)
const handleclick = () => {
    alert("Password is shown")
}

  return (
    <div className="flex flex-col items-center mx-auto text-black p-6">
        <input type={ShowPassword ? 'text' : 'password'} placeholder="Enter your password" className="border-2 border-gray-300 rounded-md p-2 w-full active:border-blue-500" />
        <button className="bg-blue-500 text-black rounded-md p-2 mt-4 hover:bg-blue-600" onClick={() => setShowPassword(!ShowPassword) }>{ShowPassword ? "Hide Password" : "Show Password"}</button>
    </div>
  )
}

export default Password