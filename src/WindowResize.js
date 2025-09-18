import React, { useState, useEffect } from "react";

function WindowResize() {
    const [resizeScreen, setResizeScreen] = useState(
        {width: window.innerWidth,
        height: window.innerHeight});

        const handleResize = () => {
            setResizeScreen({width: window.innerWidth,
                height: window.innerHeight}
            )
        };
  useEffect(()=>{ 
         window.addEventListener("resizeScreen", handleResize);

        return () =>{ window.removeEventListener("resizeScreen", handleResize);
    };   
 }, []);

    return <h3>Current window width: {resizeScreen.width}px
    <br></br>
    Current window width: {resizeScreen.height}px</h3>;

}
export default WindowResize;


// import { useRef } from "react";

// export default function CatFriends() {
//   const listRef = useRef(null);

// function ScrollIndex(index) {
//   const listNode = listRef.current;
//   const imgNode =  listNode.querySelectorAll('li > img')[index];
//   imgNode.ScrollIntoView(
//     {
//       behaviour:'smooth',
//       block: 'nearset',
//       inline:'center '
//     });
//   }
//  return(
//   <>
//   <nav>
//   <button onClick={()=>ScrollIndex(0)}>
//     neo
//   </button>
//   <button onClick={()=>ScrollIndex(1)}>
//     skew
//   </button>
//   <button onClick={()=>ScrollIndex(2)}>
//     transy
//   </button>
//   </nav>
//    <div>
//         <ul ref={listRef}>
//           <li>
//             <img
//               src="https://placecats.com/neo/300/200"
//               alt="Neo"
//             />
//           </li>
//           <li>
//             <img
//               src="https://placecats.com/millie/200/200"
//               alt="Millie"
//             />
//           </li>
//           <li>
//             <img
//               src="https://placecats.com/bella/199/200"
//               alt="Bella"
//             />
//           </li>
//         </ul>
//       </div>
//   </>
//  )
// }