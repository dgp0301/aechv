import React from 'react'

function Nav() {
    return (
        <nav className="w-screen h-12 flex content-center ">
           <img src="./aechvlogolg.png" alt="Animal Emergency Clinic of Hudson Valley" className="h-12 flex-shrink-0"/>
           <div className="flex self-center justify-around flex-1">
            <ul className="flex self-center">
                <li className="px-2"><a href="" className="hover:text-blue-400">Home</a></li>
                <li className="px-2"><a href="" className="hover:text-blue-400">About Us</a></li>
                <li className="px-2"><a href="" className="hover:text-blue-400">Services</a></li>
                <li className="px-2"><a href="" className="hover:text-blue-400">Policies</a></li>
                <li className="px-2"><a href="" className="hover:text-blue-400">Links</a></li>
                <li className="px-2"><a href="" className="hover:text-blue-400">Directions</a></li>
            </ul>
            <button className="bg-blue-gray hover:bg-blue-400 text-white ml-auto mr-1 px-2 py-2 rounded">Contact Us</button>
           </div>
        </nav>
    )
}

export default Nav
