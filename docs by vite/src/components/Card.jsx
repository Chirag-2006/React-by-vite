import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"



function Card({ Data, reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:"1.1"}} dragElastic={0.1} dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }} className="relative flex-shrink-0 w-48 h-64 rounded-[45px] px-7 py-8 bg-zinc-900/90 text-white overflow-hidden">
      <FaRegFileAlt />
      <p className='text-sm leading-tight mt-5 font-semibold '>{Data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex justify-between  items-center py-3 px-7 mb-2 ">
          <h5>{Data.filesize}</h5>
          <span className='w-6 h-6 rounded-full bg-zinc-600 flex items-center justify-center'>
            {Data.close ? <IoClose />
              : <FiDownload className='text-white text-md' />}
          </span>
        </div>
        {
          Data.tag.isOpen && (<div className={`tag w-full py-3 ${Data.tag.color === "blue" ?  "bg-blue-600":"bg-green-600"} flex  justify-center items-center`}>
          <h3 className='text-sm font-semibold'>{Data.tag.text}</h3>
        </div>)
        }
        
      </div>
    </motion.div>
  )
}

export default Card