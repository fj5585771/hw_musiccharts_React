import React from "react";
import HitDetails from "./HitDetails";

const TopChartList = ({ hit }) => {

    const hitNodes = hit.map((hit) => {
        return <HitDetails hit={hit}/>
    });

    return (
        <>
            <p> Top Chart List </p>
                <ul>
                    {hitNodes}

                </ul>
        </>
    )
}

export default TopChartList;