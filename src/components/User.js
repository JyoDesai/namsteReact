import { useState } from "react";

const user = ({name}) =>{

    const [count, setCount] = useState(0);
    const [count2,setCount2] = useState(1);

    return(
        <div className="user-card">
            {/* <h1>this is user component functional one</h1> */}
            <h1>count: {count}</h1>
            <h1>count2: {count2}</h1>
            <button onClick={()=>
                setCount(count + 1)}>
                    Increase counter</button>
            <h2>name: {name}</h2>
            <h2>Location: panvel</h2>
            <h2>email: jyodesai@.com</h2>
        </div>
    )
}
export default user;