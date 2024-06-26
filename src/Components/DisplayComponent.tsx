import { FC } from "react"
import { useNavigate } from "react-router-dom"

type DisplayProps = {
    value: any | any[]
}

const Display: FC<DisplayProps> = ({value}) => {


    const navigate = useNavigate()

    if(Array.isArray(value)) {
            
            return <div>
            {
                value.map((v, i) => {
                    return <div onClick={() => navigate("item/"+v.id)} key={i}> {v.id} - {v.name} </div>
                })
            }
            </div>
    }

    return <div> {value} </div>
}

export default Display