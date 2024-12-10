import { useState } from "react"
import { AlignJustify, Info, MessageSquare, Plus, Settings, SquareActivity, X } from 'lucide-react';


const SideBar = () => {
    const [fullSideBar,setFullSideBar] = useState(true)
    const [bottomSetting] = useState([
        {
            name : "Help",
            icon : <Info />
        },
        {
            name : "Activity",
            icon : <SquareActivity />
        },
        {
            name : "Setting",
            icon : <Settings />
        },
    ])
  return (
      <div className={`${fullSideBar ? 'max-w-60' : 'max-w-16'} duration-300 w-full h-screen bg-gray-100 p-3 flex flex-col`}>
        {/* toogle button */}
    <div className="cursor-pointer" onClick={()=>setFullSideBar(prev=>!prev)}>
         {fullSideBar ? <AlignJustify /> : <X  /> }
    </div>
    {/* start new chat */}
    <div className={` flex items-center space-x-5  bg-gray-300 mt-3 text-lg font-[400] ${fullSideBar ? 'py-2 px-2' : 'p-1'}`}>
         <Plus size={25} /> { fullSideBar && <span >Start New Chat</span>}   
    </div>
    {/* recent chat */}
  <div className="flex-1">
  <div className="flex flex-col">
        <h3 className="text-md my-5">Recent</h3>
    </div>
    <ul>
        <li className=" flex space-x-3 text-gray-600"><MessageSquare /> { fullSideBar &&  <span>What is React?...</span>}
        </li>
    </ul>
  </div>
    {/* bottom  */}
    <ul>
        {
            bottomSetting.map((item, index) =>(
                <li key={index} className=" flex items-center space-x-3 text-gray-500 my-2"> {item.icon} { fullSideBar && <p> {item.name}</p> } </li>
            ))
        }
    </ul>
      </div>

  )
}

export default SideBar
