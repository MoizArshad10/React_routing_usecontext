import React, {useState} from 'react';
function Color(){

    const [color , setColor] = useState("lavender")
    return(
        <>
            <div className="h-screen" style={{backgroundColor : color}}>
            <div class="flex flex-col justify-center pt-80 space-y-2 md:flex-row md:space-x-2 md:space-y-0">
  <button
  onClick={()=> setColor("black")}
    type="button"
    class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    Button text
  </button>
  <button
  onClick={()=> setColor("yellow")}
    type="button"
    class="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
  >
    Button text
  </button>
  <button
  onClick={()=> setColor("red")}
    type="button"
    class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
  >
    Button text
  </button>
  <button
  onClick={()=> setColor("green")}
    type="button"
    class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
  >
    Button text
  </button>
</div>


            </div>
        </>
    );
}

export default Color;