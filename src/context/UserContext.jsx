import { createContext, useState } from "react";


export const Context = createContext(null);

export function UserProvider ({children}) {
    const [state,setState] = useState(null);
    const [friends,setFriends] = useState(null)
    const [protect,setProtect] = useState(false)
    const [protect1,setProtect1] = useState(false)
    const [follow, setFollow] = useState(false)
    return(
        <Context.Provider value={{state,setState,protect,setProtect,protect1,setProtect1,friends,setFriends,follow, setFollow}}>
            {children}
        </Context.Provider>
    )
}

