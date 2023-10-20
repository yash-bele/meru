import Home from "../pages/Home"
import Outstation from "../pages/Outstation";
import About from "../pages/About";


const routes = [
{path:'/',name:'Home Page',index:true,element:Home},
{path:'/outstation/:outstation',name:'Home Page',element:Outstation},
{path:'about/:query',name:'About Page',index:true,element:About},
{path:'/meru-biz',name:'Meru Page',index:true,element:Home}
]

export default routes