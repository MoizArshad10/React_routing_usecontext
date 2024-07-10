import React from 'react';

import UserContext from '../../context/UserContext';

function Login(){
    const [username , setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const {setUser} = React.useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        setUser({username , password});
    }
    return(
        <>
        <div className='bg-slate-950  p-10 text-white'>
        <div className="w-20  md:w-1/3">
  <input
  value={username}
  onChange={(e)=> setUsername(e.target.value)}
    class="flex mt-2 text-white ml-80 h-10 w-full rounded-md border border-orange-700 bg-transparent px-3 py-2 text-sm placeholder:text-white-600 focus:outline-none focus:ring-1 focus:ring-orange-700 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type="text"
    placeholder="Username"
  />
</div>

<div class="w-10 md:w-1/3">
  <input
  value={password}
  onChange={(e)=> setPassword(e.target.value)}
    class="flex mt-2 text-white ml-80 h-10 w-full rounded-md border border-orange-700 bg-transparent px-3 py-2 text-sm placeholder:text-white-600 focus:outline-none focus:ring-1 focus:ring-orange-700 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type="password"
    placeholder="Password "
  />
</div>

<button
onClick={handleSubmit}
    type="button"
    class="rounded-md ml-80 mt-5 bg-orange-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    Submit
  </button>
  </div>
        </>
    )
}

export default Login;