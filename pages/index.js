import bg from '../assests/bg.jpg'
import { useState } from 'react'
export default function Home() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email,password)
  }
  return (
    <><div className='w-[100vw] h-[100vh] py-44' style={{backgroundImage:`url('${bg.src}')`,
    backgroundSize: `cover`,
    backgroundPosition: `center center`,
    backgroundRepeat: `no-repeat`,
    }}>
      <div className="w-full max-w-xs mx-auto "
      >
      <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 border-y-4 border-blue-500">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className='p-1'>
          Don't have an account? <a href="/Signup" className='text-blue-500'>Sign up</a>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
    </div>
    </>
  )
}
