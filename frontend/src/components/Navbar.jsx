import { useState } from "react";
import Logo from "../assets/bigbasket.jpg"

import { AiOutlineSearch } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx"
import { FiShoppingBag } from "react-icons/fi"
import { AiOutlineCaretDown } from "react-icons/ai"
import { BiSolidUpArrow } from "react-icons/bi"
import Login from "./Login";
import useAuth from "../hooks/useAuth";
import useItem from "../hooks/useItem";
import CategorModla from "./CategorModla";
import SearchBox from "./SearchBox";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [catarrow, setCatIsArrow] = useState(false)
    const [searchValue,setSearchValue]=useState("")
    const [arrow, setIsArrow] = useState(false)
    const { user, logout } = useAuth()

    const { state,selectedCategoryItem,searchItemArray} = useItem()
    const categoryList=state.items.reduce((array,e)=>{
        array.push(e.category)
        return array
    },[])


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const handleLogout = async () => {
        await logout()
    }

    const handleDropArrow = (id) => {
        if (id == "category") {
            setCatIsArrow(!catarrow)
        }
        else {

            setIsArrow(!arrow)
        }

    }
    return (
        <nav className="bg-gray-800 sticky top-0 z-50 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between" style={{ height: "62px" }}>
                    <div className="flex items-center md:flex-1 gap-2">
                        <div className="flex-shrink-0 rounded-md w-16 h-16 px-2 py-2">
                            <img className="rounded-md w-full h-full object-contain" src={Logo} alt="Logo" />
                        </div>

                        <div className="flex-1 relative">
                            <input value={searchValue} type="text" placeholder="Search" onChange={(e)=>{
                                searchItemArray(e.target.value)
                                setSearchValue(e.target.value)
                            }} className="text-black h-[3rem] w-full px-4 py-4 outline-none rounded-md" />
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
                            {searchValue&&<SearchBox/>}
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4 relative">

                            <div>
                                <button onClick={() => handleDropArrow("category")} className="bg-gray-400 rounded-lg h-[2rem] px-2 py-2 flex justify-center items-center">
                                    <p className="font-bold w-24">Category</p>
                                    {!catarrow ? (<AiOutlineCaretDown size={20} />) : (<BiSolidUpArrow size={20} />)}

                                </button>
                                {
                                    catarrow && <CategorModla catarrow={catarrow} setCatIsArrow={setCatIsArrow}/>

                                }
                        
                            </div>

                            <div>
                                {
                                    !user ? (<Login />) : (
                                        <div className="relative ">
                                            <button onClick={() => handleDropArrow("")} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                                {user.email}
                                                {!arrow ? (<AiOutlineCaretDown size={20} />) : (<BiSolidUpArrow size={20} />)}
                                            </button>

                                            {arrow && <button className="z-10 absolute top-12 left-0 text-white bg-black px-3 py-2 rounded-md text-sm font-medium" onClick={handleLogout}>logout</button>}
                                        </div>

                                    )
                                }

                            </div>
                            {
                                user && <div className="relative">
                                    <FiShoppingBag size={30} className="text-white" />
                                    <div className="font-bold flex justify-center items-center absolute top-4 left-3 rounded-full text-red-500 bg-white w-6 h-6 px-2 py-2">
                                        {state.cartItem.length}
                                    </div>
                                </div>
                            }



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
                <div className="md:hidden absolute top-35 w-full bg-gray-800 z-50 max-h-[calc(100dvh-62px)]">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <div className="flex  mb-8 mt-4 items-center justify-around">
                            {
                                !user ? (<Login />) : (
                                    <div className="relative ">
                                        <button onClick={() => handleDropArrow("")} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                            {user.email}
                                            {!arrow ? (<AiOutlineCaretDown size={20} />) : (<BiSolidUpArrow size={20} />)}
                                        </button>

                                        {arrow && <button className="z-10 absolute top-12 left-0 text-white bg-black px-3 py-2 rounded-md text-sm font-medium" onClick={handleLogout}>logout</button>}
                                    </div>

                                )
                            }






                            {user && <div className="relative text-gray-300 hover:bg-gray-700 hover:text-white ml-5">
                                <FiShoppingBag size={30} className="text-white" />
                                <div className="font-bold flex justify-center items-center absolute top-4 left-3 rounded-full text-red-500 bg-white w-6 h-6 px-2 py-2">
                                {state.cartItem.length}
                                </div>

                            </div>
                            }

                        </div>
                        <div className="text-white font-bold hover:text-white block">
                            Select Categories
                        </div>
                        <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex flex-col gap-4 
                        max-h-[calc(100dvh-162px)] overflow-auto pb-8">
                            <div onClick={()=>selectedCategoryItem("All")} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">All</div>
                            {
                                [...new Set(categoryList)].map(e=>(
                                      <div onClick={()=>selectedCategoryItem(e)} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                {e}
                            </div>
                                    
                                ))
                            }

                          
                           

                        </div>





                    </div>
                </div>
            )}


        </nav>
    );
};

export default Navbar;