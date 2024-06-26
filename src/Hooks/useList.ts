import { useContext } from "react";
import { ListContext } from "../Contexts/ListContext";


const useList = () => {

    const context : any = useContext(ListContext)

    if (context === undefined) {
        throw new Error('use items must be used within a MyProvider');
    }

    return context;

}

export default useList;