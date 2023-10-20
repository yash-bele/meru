import { BsPersonFill, BsArrowBarRight } from "react-icons/bs";
import navigation from "../navigation/nav";
import { Link } from "react-router-dom";
const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  return (
    <main
      className={`ml-auto bg-white w-72 h-full duration-200 ${
        openSidebar ? "mr-0" : "-mr-72"
      }`}
    >
      <section className="flex items-center justify-between px-5  shadow">
        <div className="flex items-center space-x-2.5 p-2">
          <div className="border-2 border-slate-500 p-1 rounded-full w-fit">
            <BsPersonFill className="text-slate-500 text-4xl" />
          </div>
          <div>
            <h3>
               <span>Guest</span><br/>
               <span className="text-red-500 cursor-pointer hover:text-red-700">Sign In</span>
            </h3>
          </div>
        </div>
        <div>
        </div>
    

        <BsArrowBarRight
          onClick={() => setOpenSidebar(false)}
          className="text-red-500 text-2xl cursor-pointer"
        />
      </section>
      <section>
        {
          navigation.map((el)=>{
            return  <Link to={el.path} className="p-4 text-md cursor-pointer hover:bg-red-400 block
                     hover:text-white  transition ease-in duration-300 ">
                     {el.name}
                    </Link>
          })
        }
      </section>

    </main>
  );
};

export default Sidebar;
