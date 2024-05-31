import { Link, useLocation } from "react-router-dom";
import { contests } from "../lib/contests";

const Sidenav = () => {
  const location = useLocation();

  return (
    <div className="hidden md:flex flex-col justify-between py-8 pl-4 sm:pl-8 md:pl-16 pr-10 w-80 bg-white border-r-2">
      <div>
        <Link to={"/"} className="text-2xl font-bold text-purple text-center">
          <p>Fasilkom-TI Archive</p>
        </Link>

        <div className="flex flex-col gap-2 mt-8 h-96 overflow-y-auto sidenav_scrollbar">
          {contests.length > 0 &&
            contests.map((contest) => {
              const isActive = location.pathname === contest.path;

              return (
                <Link
                  to={contest.path}
                  key={contest.path}
                  className={`text-lg px-4 py-2 font-semibold rounded-md hover:bg-lightPurple hover:text-purple transition-all
                ${isActive ? "bg-lightPurple text-purple" : "text-gray-500"}
                `}
                >
                  {contest.name} - {contest.year}
                </Link>
              );
            })}
          <div className="mt-32">
            <h3 className="text-lg font-bold px-4 py-2">Akan Ditambahkan</h3>
            <div className="">
              <p className="px-4 text-gray-500 font-semibold">Pilmapres - 2023</p>
              <p className="px-4 text-gray-500 font-semibold">PKM - 2023</p>
              <p className="px-4 text-gray-500 font-semibold">Satria Data - 2023</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="text-center text-sm font-medium text-gray-500">v1.1</p>
      </div>
    </div>
  );
};

export default Sidenav;
