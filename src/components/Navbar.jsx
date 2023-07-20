import React, { useState } from "react";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  

  return (
    <>
      <div className=" ">
        <div className="bg-black h-20 shadow-2xl  flex  flex-nowrap text-white items-center px-5 w-full  justify-between  ">
          <div>
           <Link to={'/'}> <h1 className="font-bold">Aloo Movie App </h1></Link>
          </div>
         
          <div className="flex flex-nowrap ">
          
             <div>
                

            </div>
            <div className="sm:hidden relative" onClick={() => setOpen(!open)}>
              {open ? (
                <>
                  <AiOutlineClose />
                  <div className="bg-gray-900 text-center z-50 text-white fixed pt-10 bottom-0 left-0 h-1/2 w-full">
                    <Link to={"/About"}>About</Link>
                  </div>
                </>
              ) : (
                <AiOutlineBars />
              )}
            </div>
          </div>
          <div className="sm:block hidden">
                <Link to={"/About"}>About</Link>
                </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
