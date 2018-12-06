import React from 'react';


const XRenderList = ({title, list}) => {
    return(
        <>
            <h1>{title}</h1>
            <ul>
                {list.map(el => <li>{el.name}</li>)}
            </ul>
        </>
    )
}

export default XRenderList;