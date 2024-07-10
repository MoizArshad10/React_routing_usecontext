import React from 'react';
import UserContext from '../../context/UserContext';

function Profile(){
    const {user} = React.useContext(UserContext);

    if(!user) {
        return <div class="relative   h-[400px] w-90 rounded-md">
        <img
          src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="AirMax Pro"
          class="z-0 h-full w-full rounded-md object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div class="absolute bottom-4 left-4 text-left">
          <h1 class="text-3xl font-semibold text-blue-400">Please Login</h1>
          <marquee class="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </marquee>
          <button class="mt-2 inline-flex cursor-pointer items-center text-3xl font-semibold text-blue-400">
           Please Login
          </button>
        </div>
      </div>
      
    }

    else{
        return <div class="relative   h-[400px] w-90 rounded-md">
        <img
          src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="AirMax Pro"
          class="z-0 h-full w-full rounded-md object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div class="absolute bottom-4 left-4 text-left">
          <h1 class=" text-3xl font-semibold text-blue-400">Welcome {user.username}</h1>
          <marquee class="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </marquee>
          <button class="mt-2 inline-flex cursor-pointer  items-center text-3xl font-semibold text-blue-400">
          Welcome {user.username}
          </button>
        </div>
      </div>
      
      
    }
}

export default Profile;