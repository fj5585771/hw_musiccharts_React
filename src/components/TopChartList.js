import React from "react";
import Hit from "./Hit";
import {
    Grid, List
} from 'semantic-ui-react';


const TopChartList = ({ songs, handlePlayPause }) => {

    if (!songs) return null;

    const hitNodes = songs.map((song, index) => {

    return  <List.Item>
                <Hit 
                key={index}
                song={song} 
                audio={song.link[1].attributes.href} 
                handlePlayPause={handlePlayPause}  
                />
            </List.Item>
            

    });


    return (
        <>
        {/* <Grid container columns={3}> */}
        <List horizontal ordered>
            {/* <ol> */}
                {hitNodes}
            {/* </ol> */}
        {/* </Grid> */}
        </List>
        </>
    )
}

export default TopChartList;