type ButonProps = {
    btnText : string;
    className: string;
}
const Button = ( { btnText, className } : ButonProps) => {
    return (
        <button className={` font-semibold transition-all duration-300 hover:cursor-pointer ${className}`}>
           {btnText}
        </button>
    )
}

export default Button