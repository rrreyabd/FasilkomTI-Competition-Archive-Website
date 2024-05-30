import { Link, useLocation } from "react-router-dom"
import { contests } from "../lib/placeholder-data"

const Sidenav = () => {
  const location = useLocation();

  return (
    <div className="hidden md:flex flex-col justify-between py-8 pl-4 sm:pl-8 md:pl-16 pr-10 w-80 bg-white border-r-2">
      <div>
        <Link to={'/'} className="text-2xl font-bold text-purple text-center">
          <p>Fasilkom-TI Archive</p>
        </Link>

        <div className="flex flex-col gap-2 mt-8">
          {contests.length > 1 && contests.map((contest) => {
            const isActive = location.pathname === contest.url;

            return (
              <Link to={contest.url} className={`text-lg px-4 py-2 font-semibold rounded-md ${isActive
                ? 'bg-lightPurple text-purple'
                : 'text-gray-500'}
            `}>{contest.name}</Link>
            )
          })}
        </div>
      </div>

      <p className="text-center text-sm font-medium text-gray-500">v1.0</p>
    </div>
  )
}

export default Sidenav