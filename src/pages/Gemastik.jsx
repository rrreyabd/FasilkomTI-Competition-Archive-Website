import { Link } from "react-router-dom"

const Gemastik = () => {
  return (
    <div className="flex flex-col bg-customWhite flex-grow">
      <div className="h-16 w-full bg-white border-b-2 flex items-center px-4 sm:px-8">
        <p className="text-2xl font-semibold">Gemastik</p>
      </div>

      <div className="p-6 flex flex-grow">
        <div className="bg-white w-full rounded-md border p-6">
          <div className="flex">
            <Link>2023</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gemastik