import { FC } from "react"

type ButtonProps = {
    onClick: () => void
    label: string
}

const Button: FC<ButtonProps> = ( { onClick, label })  => {

    return <button onClick={onClick}> {label} </button>
}

export default Button