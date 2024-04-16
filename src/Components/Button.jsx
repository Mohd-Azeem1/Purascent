import React from "react";

function Button({
    children,
    type = 'button',
    bgColor = 'bg-[#EABEFF]',
    textColor = 'text-black',
    className = '',
    ...props
}){
    return(
        <button className={`px-[1.2vw] py-[.2vw] rounded-lg w-fit rounded-bl-none hover:scale-[1.08] transition-all ${className} ${bgColor} ${textColor}`}
        {...props}>{children}</button>
    )
}

export default Button