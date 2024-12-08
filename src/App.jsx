import Chat from "./components/Chat"
import SideBar from "./components/SideBar"

const App = () => {
 
  return (
    <div className="w-full  flex">
      {/* side bar */}
    <SideBar />
    {/* main */}
<div className="flex-1">
<Chat/>
</div>
    </div>
  )
}

export default App
