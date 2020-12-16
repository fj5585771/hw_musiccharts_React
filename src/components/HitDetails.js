import React from "react";

const Hit = ({hit}) => {

    if (!hit) return null;

    return (
        <>
            <p>Entry: {hit['im:name'].label}</p>

        </>
    )
}

export default Hit;