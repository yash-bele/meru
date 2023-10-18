import { Link } from "react-router-dom";

const Submenus = ({ subMenu, setSubMenu }) => {
  return (
    <>
      <ul
        onMouseEnter={() => setSubMenu("mumbai")}
        onMouseLeave={() => setSubMenu("")}
        className={`absolute left-[261px] top-[49.6px] rounded-md text-sm bg-white overflow-hidden shadow w-max ${
          subMenu === "mumbai" ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <Link
          to="/outstation/mumbai-to-goa"
          className="px-5 py-2 hover:bg-slate-100 hover:text-red-500 flex items-center justify-between"
        >
          <span>Mumbai to Goa</span>
        </Link>
        <Link
          to="/outstation/mumbai-to-pune"
          className="px-5 py-2 hover:bg-slate-100 hover:text-red-500 flex items-center justify-between"
        >
          <span>Mumbai to Pune</span>
        </Link>
        <Link
          to="/outstation/mumbai-to-nashik"
          className="px-5 py-2 hover:bg-slate-100 hover:text-red-500 flex items-center justify-between"
        >
          <span>Mumbai to Nashik</span>
        </Link>
        <Link
          to="/outstation/mumbai-to-lonavala"
          className="px-5 py-2 hover:bg-slate-100 hover:text-red-500 flex items-center justify-between"
        >
          <span>Mumbai to Lonavala</span>
        </Link>
        <Link
          to="/outstation/mumbai-to-mahabaleshwar"
          className="px-5 py-2 hover:bg-slate-100 hover:text-red-500 flex items-center justify-between"
        >
          <span>Mumbai to Mahabaleshwar</span>
        </Link>
      </ul>
      <ul
        onMouseEnter={() => setSubMenu("pune")}
        onMouseLeave={() => setSubMenu("")}
        className={`absolute left-[261px] top-[calc(49.6px+36px)] rounded-md text-sm bg-white overflow-hidden shadow w-max ${
          subMenu === "pune" ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <Link
          to="/outstation/pune-to-kolhapur"
          className="px-5 py-2 hover:bg-slate-100 hover:text-red-500 flex items-center justify-between"
        >
          <span>Pune to Kolhapur</span>
        </Link>
        <Link
          to="/outstation/pune-to-mumbai"
          className="px-5 py-2 hover:bg-slate-100 hover:text-red-500 flex items-center justify-between"
        >
          <span>Pune to Mumbai</span>
        </Link>
        <Link
          to="/outstation/pune-to-nashik"
          className="px-5 py-2 hover:bg-slate-100 hover:text-red-500 flex items-center justify-between"
        >
          <span>Pune to Nashik</span>
        </Link>
      </ul>
      <ul
        onMouseEnter={() => setSubMenu("bangalore")}
        onMouseLeave={() => setSubMenu("")}
        className={`absolute left-[261px] top-[calc(49.6px+(2*36px))] rounded-md text-sm bg-white overflow-hidden shadow w-max ${
          subMenu === "bangalore"
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        <Link
          to="/outstation/bangalore-to-chennai"
          className="px-5 py-2 hover:bg-slate-100 hover:text-red-500 flex items-center justify-between"
        >
          <span>Bangalore to Chennai</span>
        </Link>
        <Link
          to="/outstation/bangalore-to-coorg"
          className="px-5 py-2 hover:bg-slate-100 hover:text-red-500 flex items-center justify-between"
        >
          <span>Bangalore to Coorg</span>
        </Link>
        <Link
          to="/outstation/bangalore-to-kodaikanal"
          className="px-5 py-2 hover:bg-slate-100 hover:text-red-500 flex items-center justify-between"
        >
          <span>Bangalore to Kodaikanal</span>
        </Link>
      </ul>
    </>
  );
};

export default Submenus;
