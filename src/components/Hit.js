import React from "react";
import { Image, List } from 'semantic-ui-react';

const Hit = ({song, handlePlayPause}) => {

    if (!song) {
        return null;
    }

    let audioSrc;

    return (
    <>
    <div className="hit-Text">
        
        <List.Content>
        <h3>{song.title.label}</h3>

        <Image src={song["im:image"][2].label}
        />

        <Image 
        className="audio-control"
        src="https://image.freepik.com/free-icon/play-button_318-42541.jpg"
        onClick={()=>{handlePlayPause(audioSrc)}}
        />
            
        <audio 
        src= {song.audio} 
        ref={(audio) => audioSrc = audio} />

        </List.Content>
    </div>
    </>
    )
}

export default Hit;