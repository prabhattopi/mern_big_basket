import { useState } from "react";
import Logo from "../assets/bigbasket.jpg"

import { AiOutlineSearch } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx"
import {FiShoppingBag} from "react-icons/fi"
import {AiOutlineCaretDown} from "react-icons/ai"
import {BiSolidUpArrow} from "react-icons/bi"
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [arrow,setIsArrow]=useState(false)
    
    // const { logout, user } = useAuth()


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

 
    const handleLogout = () => {
        // logout()
    }

    const handleDropArrow=()=>{
     setIsArrow(!arrow)
    }
    return (
        <nav className="bg-gray-800 sticky top-0 z-50 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between" style={{ height: "62px" }}>
                    <div className="flex items-center md:flex-1 gap-2">
                        <div className="flex-shrink-0 rounded-md w-16 h-16 px-2 py-2">
                            <img className="rounded-md w-full h-full object-contain" src={Logo} alt="Logo"/>
                        </div>
                     
                        <div className="flex-1 relative">
                            <input type="text" placeholder="Search" className="text-black h-[3rem] w-full px-4 py-4 outline-none rounded-md"/>
                            <button
             
                //   disabled={!state.searchQuery}
                //   onClick={() => dispatch({ type: "SET_QUERY", payload: "" })}
                  className={`${true && "text-black"
                    } absolute right-2 top-1 ml-2 px-4 py-2 text-black rounded-md`}
                >
                  {true ? (
                    <AiOutlineSearch size={20} className="" />
                  ) : (
                    <RxCross2 size={20} />
                  )}
                </button>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {/* <Link
                                to="/"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Home
                            </Link>
                            {
                                user.role !== "guest" ? <Link
                                    to="/post"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Create
                                </Link> : <Link to="/members" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Membership ⭐</Link>
                            } */}
                            <div>
                            <button onClick={handleDropArrow} className="bg-gray-400 rounded-lg h-[2rem] px-2 py-2 flex justify-center items-center">
                            <p className="font-bold w-24">Category</p>
                            {!arrow?(<AiOutlineCaretDown size={20}/>):(<BiSolidUpArrow size={20}/>)}

                        </button>
                            </div>
                               
                        <div>
                        <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={handleLogout}>
                                <span>Logout</span> 

                            </button>
                        </div>
                            
                        <div className="relative">
                            <FiShoppingBag size={30} className="text-white"/>
                            <div className="font-bold flex justify-center items-center absolute top-4 left-3 rounded-full text-red-500 bg-white w-6 h-6 px-2 py-2">
                                0
                            </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden absolute top-35 w-full bg-gray-800 z-50 max-h-[calc(100dvh-62px)] overflow-auto">
                    <div onClick={()=>setIsMenuOpen(false)} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {/* {
                            user.role !== "guest" ? <Link
                                to="/post"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Create
                            </Link> : <Link to="/members" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Membership ⭐</Link>
                        } */}
                        <div className="flex  mb-8 mt-4 items-center justify-around">

                        <button className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={handleLogout}>
                            Logoutdfsdfsfsfdsf
                        </button>
                        <div className="relative text-gray-300 hover:bg-gray-700 hover:text-white ml-5">
                            <FiShoppingBag size={30} className="text-white"/>
                            <div className="font-bold flex justify-center items-center absolute top-4 left-3 rounded-full text-red-500 bg-white w-6 h-6 px-2 py-2">
                                0
                            </div>
                            </div>

                        </div>
                        
                           <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                             Fruits & Vegetables
                            </div>
                            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                             Fruits & Vegetables
                            </div>
                            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                             Fruits & Vegetables
                            </div>
                            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                             Fruits & Vegetables
                            </div>
                            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                             Fruits & Vegetables
                            </div>
                            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                             Fruits & Vegetables
                            </div>
                            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                             Fruits & Vegetables
                            </div>
                            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                             Fruits & Vegetables
                            </div>
                            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                             Fruits & Vegetables
                            </div>
                            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                             Fruits & Vegetables
                            </div>
                            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                             Fruits & Vegetables
                            </div>
                            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                             Fruits & Vegetables
                            </div>
                            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                             Fruits & Vegetables
                            </div>
                            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                             Fruits & Vegetables
                            </div>
                            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                             Fruits & Vegetables
                            </div>

                            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                             Fruits & Vegetables
                            </div>
                            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                             Fruits & Vegetables
                            </div>
                            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                             Fruits & Vegetables
                            </div>

                            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                             Fruits & Vegetables
                            </div>
                            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                             Fruits & Vegetables
                            </div>

                            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                             Fruits & Vegetables
                            </div>
                            <div className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                             Fruits & Vegetables
                            </div>

                       

                    </div>
                </div>
            )}

            {/* {<div className="flex justify-end bg-gray-700 py-2 px-2">
                <div className="hidden"></div>
                <form onSubmit={handleSearchSubmit} className="w-full sm:w-2/5 flex relative">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                        className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        placeholder="Search..."
                    />
                    <button type="submit" disabled={!searchQuery} className={`${!searchQuery && "text-gray-300"} absolute right-2 top-1 ml-2 px-4 py-2 text-black rounded-md`}>
                        <AiOutlineSearch size={20} className="" />                    </button>
                </form>
            </div>} */}
        </nav>
    );
};

export default Navbar;