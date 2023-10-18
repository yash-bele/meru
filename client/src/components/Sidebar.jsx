import { BsPersonFill, BsArrowBarRight } from "react-icons/bs";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  return (
    <main
      className={`ml-auto bg-white w-72 h-full duration-200 ${
        openSidebar ? "mr-0" : "-mr-72"
      }`}
    >
      <section className="flex items-center justify-between px-5 h-[49.6px] shadow">
        <div className="flex items-center space-x-2.5">
          <div className="border-2 border-slate-500 p-1 rounded-full w-fit">
            <BsPersonFill className="text-slate-500 text-xl" />
          </div>
          <span>Guest</span>
        </div>
        <BsArrowBarRight
          onClick={() => setOpenSidebar(false)}
          className="text-red-500 text-2xl cursor-pointer"
        />
      </section>
    </main>
  );
};

export default Sidebar;
