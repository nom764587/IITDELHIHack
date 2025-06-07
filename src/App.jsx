import {Canvas} from "@react-three/fiber";
import Game from "./Game"

import {
    createBrowserRouter,
    RouterProvider,useNavigate,
  } from "react-router-dom";
import Chat from "./Chat";
import Meet from "./Meet";
import UPI from "./UPI";


const G=()=>{
    const navigate = useNavigate();

   return<>
<div className="aim">
    <button className='ai' onClick={()=>{
        console.log("pp")
        navigate("/chat")
    }}>Ai Assist</button>
    <button className='ai' onClick={()=>{
        console.log("pp")
        navigate("/upi")
    }}>UPI</button>
    </div>
  <Canvas camera={{ fov: 45 }} shadows><Game/></Canvas></>}



const router = createBrowserRouter([
    {
      path: "/",
      element:<G/>,
    },
    {
        path:"/chat",
        element:<Chat/>
    },{
      path:"/meet",
      element:<Meet/>
    },{
      path:"/upi",
      element:<UPI/>
    }
  ]);
export default function App(){
    return <RouterProvider router={router} />
}