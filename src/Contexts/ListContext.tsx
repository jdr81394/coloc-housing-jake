import { useState, createContext, useEffect } from "react"
import {getLists} from "../Services/listService"
import { ItemInterface } from "../Interfaces/ItemInterface"

export const ListContext = createContext({})

ListContext.displayName ="ListContext"

export const ListContextProvider = ({children} : {children: any}) => {
  const [list, setList] = useState<ItemInterface[]>([])
  useEffect(() => {
    
    // service call
    const dummyHttpCall = async () => {
      // await http call return set list
        const data = await getLists()
        setList(data)
    }

    dummyHttpCall();

}, [])

  const store = {list, setList}

  return <ListContext.Provider value={store} >{children}</ListContext.Provider>
}
