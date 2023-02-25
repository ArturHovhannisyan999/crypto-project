import React from "react";

const Test = (props, ref)=>{
    console.log(ref,'ref');
    console.log(props,'props');
    return (
        <div>
            <input/>
        </div>
    )
}
// const Test = React.forwardRef((props, ref)=>{
//     console.log(ref.current,'ref');
//     return (
//         <div>
//             <input/>
//         </div>
//     )
// })
export default Test