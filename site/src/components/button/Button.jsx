
const Button = ({ buttonType, text, onClick}) => {
    const classes = {
        1: "btn-outline-secondary",
        2: "bg-blue text-white"
    }

    const getClasses = () => {
        return classes[buttonType]
    }

    return (
        <button onClick={onClick} className={`btn ${getClasses()}`}>
            <span>{text}</span>
        </button>
    )
}

export default Button