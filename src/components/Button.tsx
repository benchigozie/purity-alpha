type ButonProps = {
    btnText : string;
    className: string;
}
const Button = ( { btnText, className } : ButonProps) => {
    return (
        <button className={`px-5 py-3 rounded-2xl font-semibold transition-colors duration-300 hover:cursor-pointer ${className}`}>
           {btnText}
        </button>
    )
}

export default Button