import { FaGithub } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className="h-16 w-full flex justify-between items-center px-4 sm:px-8 md:px-16 transition-all border-b-2 bg-[#f7f8f9]">
            <div className="flex gap-2">
                <div className="bg-red-600 h-4 w-4 rounded-full"></div>
                <div className="bg-yellow-600 h-4 w-4 rounded-full"></div>
                <div className="bg-green-600 h-4 w-4 rounded-full"></div>
            </div>

            <div className="flex items-center gap-8">
                <a href="https://github.com/grantgabriel/FasilkomTI-Competition-Archive">
                    <FaGithub className="h-8 w-8 hover:brightness-75 transition-all text-black" />
                </a>

                <IoMenu className="md:hidden h-8 w-8 text-purple" />
            </div>
        </div>
    )
}

export default Navbar