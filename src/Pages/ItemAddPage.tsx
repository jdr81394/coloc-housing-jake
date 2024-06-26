import { useState } from "react"
import Button from "../Components/ButtonComponent"
import Input from "../Components/InputComponent"
import useList from "../Hooks/useList"
import { postLists } from "../Services/listService"

const ShoppingList = () => {

  const [name, setName] = useState<string>("")

    
  const { setList, list} : any = useList()

  const handleSetItem = (value: string) => {
      setName(value)
    }
  
    const handleSetList = async () => {
      // setItem
      const item = {name, id: list.length}
  
      const response = await postLists(item)

      if(response) {
        setList(response)
      }

    }

  return <div>
      <Input onChange={handleSetItem} item={name}/>
    <Button label={"add item"} onClick={handleSetList}/>
  </div>
}

export default ShoppingList