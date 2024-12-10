
import { ImagePlus, Mic, SendHorizontal } from "lucide-react"
import { suggestions } from "../../static"

const Chat = () => {
  return (
    <div className=" max-h-screen overflow-y-scroll">
      {/* header */}
      <section className=" flex justify-between items-center w-full p-5">
        <h1 className="text-xl ">Gemini</h1>
        <img className=" size-12 rounded-full" src="https://th.bing.com/th/id/OIP.XSZAFm-5JI7nriDLwZqRQQHaE7?rs=1&pid=ImgDetMain" alt="" />
      </section>

      {/* content */}
      <section className="xl:px-60 lg:px-40 md:px-10 py-10 p-5 h-[60%]">
          <div>
              <span className="text-5xl font-semibold text-gradient">Hello , Dev</span>
              <h1 className="text-3xl md:text-5xl font-semibold text-gray-300 my-6">How can i help you today?</h1>
          </div>
          <div className=" my-20 flex flex-wrap justify-between items-center gap-2">
         {
          suggestions.map((data,index)=>(
            <div className=" bg-gray-200 p-5 rounded-md max-w-72" key={index}>
            <p className=" text-gray-800">{ data.text }</p>
          <div className=" mt-8 size-10 rounded-full flex items-center justify-center float-right bg-white">
        < data.icon/>
          </div>
          </div>
          ))
         }
          </div>        
      </section> 
           {/* message input */}
            <section className="xl:px-60 lg:px-40 md:px-10 py-10 p-5">
              <div className="w-full  bg-slate-200 p-3 px-5 rounded-full flex justify-between">
                <input type="text" className="  outline-none bg-slate-200" placeholder="Enter a prompt here ..." />
                <div className=" flex items-center space-x-2 text-gray-700">
                <ImagePlus />
                <Mic />
                <SendHorizontal />
                </div>
              </div>
            </section>
    
    </div>
  )
}

export default Chat
