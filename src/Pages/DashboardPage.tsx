import { useEffect } from "react"
import Display from "../Components/DisplayComponent"
import useList from "../Hooks/useList"
import { ItemInterface } from "../Interfaces/ItemInterface"


const Dashboard =({children} : {children: any}) => {
    const {  list} : {list: ItemInterface[]} = useList()

    useEffect(() => {

        // DEMONSTRATION OF MOUNT && UNMOUNT
        const resizeFunc = () => console.log('resize event')

        window.addEventListener("resize", resizeFunc)

        // return func to handle any potential memory leaks from open listeners
        return () => {
            window.removeEventListener("resize", resizeFunc)  // memory leak prevented 
            console.log("event listener was removed!")
        }
    }, [])

    return (
    <div> 
        <Display  value={list}/>
        {children}
    </div>
    )

}

export default Dashboard