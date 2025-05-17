"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [pos, setPos] = useState({ x: 0, y: 0})

  // useEffect

  return (
    <div className="h-screen relation bg-blue-200">
      <motion.div className="min-w-[20rem] min-h-[10rem] absolute bg-red-100" draggable 
      animate={{left: `${pos.x}px`, top: `${pos.y}px`}}
      onDrag={(e) => {
          setPos({x: e.clientX, y: e.clientY})
      }}
      >
        <motion.div
          className="h-10 select-none bg-red-200"
        >
          Target
        </motion.div>
      </motion.div>
    </div>
  );
}

// export default function TestHomePage() {
//   const [moving, setMoving] = useState(false);
//   const [pos, setPos] = useState({ x: 10, y: 20 });
//   return (
//     <div className="h-screen relation bg-blue-200" >
//       <motion.div
//         className="min-w-[20rem] min-h-[10rem] absolute resize"
//         d
//         // animate={{
//         //   left: `${pos.x}px`,
//         //   top: `${pos.y}px`,
//         //   backgroundColor: moving ? "green" : "blue",
//         // }}
//         // onMouseDown={() => {
//         //   setMoving(true);
//         // }}
//         // onMouseMove={(e) => {
//         //   if (!moving) return;
//         //   setPos({
//         //     x: e.clientX - e.currentTarget.offsetLeft,
//         //     y: e.clientY - e.currentTarget.offsetTop,
//         //   });
//         // }}
//         // onMouseUp={() => {
//         //   setMoving(false);
//         // }}
//       >
//         <h1>Hello</h1>
//       </motion.div>
//     </div>
//   );
// }
