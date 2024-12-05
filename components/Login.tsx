import './Login.css'

const Login = () => {
  return (
    <div className='login'>
        <div className='flex flex-col justify-center '>
            <div className='socials-container'>
                <a href='https://www.facebook.com/imperialworld.2023'></a>
                <a href='https://www.instagram.com/imperialartz3/'></a>
                <a href='https://github.com/TerranceFinleyZ'></a>
            </div>
            <form className='forms'>
                <h2 className='text-4xl font-bold text-center text-blue-300 py-6'> Welcome Back!</h2>
                <div className='flex flex-col py-2'>
                    <label>UserName</label>
                    <input className='border p-2' type='text' />
                </div>
                <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input className='border p-2' type='Password' />
                </div>
                <button className='border w-full my-5 py-2 bg-indigo-400 hover:bg-red-600 text-white'>Sign In</button>
                <div className='flex justify-between'>
                    <p className='flex items-center'><input className='mr-2' type='checkbox' /> Remember Me</p>
                    <p className='pp'>Create an account</p>
                </div>
            </form>
            <button className='guest'>Continue as Guest...</button>
        </div>
        <div className='displays'>
        <h3 className='h3'>Imperial-World </h3>
        
        </div>
        
    </div>
    
  )
}

export default Login