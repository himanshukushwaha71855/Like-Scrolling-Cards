import React from "react";
import { CIcon } from "@coreui/icons-react";
import { cilFile, cilArrowCircleBottom, cilXCircle } from "@coreui/icons";
import { motion } from "framer-motion"

const Card = ({ data ,reference}) => {
  
  return (
    <>
      <motion.div drag dragConstraints={reference}  whileHover={{ scale: 1.2 }} dragElastic={0.2} dragTransition={{bounceDamping: 200,bounceStiffness:100}} className="w-60 h-72 bg-zinc-900/90 rounded-[40px] text-white px-8 py-10 overflow-hidden relative m-2 flex-shrink-0">
        <CIcon icon={cilFile} className="size-4 " />
        <p className="mt-5 text-sm font-semibold leading-tight">
          {" "}
          {data.descraption}
        </p>

        <div className="absolute bottom-0 left-0 w-full footer bg-zinc-900/90 ">
          <div className="flex items-center justify-between px-8 py-3 ">
            <h5 className="my-[-5px]">{data.filesize}</h5>
            <span className="flex items-center justify-center w-7 h-7 gb-zinc-600 rounded-fulll">
              {data.close ? (
                <CIcon
                  icon={cilArrowCircleBottom}
                  className="size-4 "
                  color="#fff"
                />
              ) : (
                <CIcon icon={cilXCircle} className="size-4 " color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full ${
                data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
              } flex justify-center items-center py-4`}
            >
              <h3 className="text-sm font-semibold"> Download Now</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
