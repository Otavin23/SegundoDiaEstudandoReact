import React from "react"


export default ({description, link, })=>{
    if(props.link){
        return (
            <>
                <p>{description}</p>
                <p>
                    <a href={link}>{link}</a>
                </p>
            </>
        )
    }
    else{
        return (
            <>
                <p><u>{description}</u></p>
            </>
        )
    }
}

