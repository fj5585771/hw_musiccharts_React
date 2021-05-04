import { useState, useEffect } from "react";
import TopChartList from "../components/TopChartList";
import GenreDropdown from "../components/GenreDropdown";

// state is for data, use effect is for time (for lifecycles in component)
const TopChartContainer = () => {

    const [hit, setHit] = useState([]);

    // const showSelectedHits = () => {
    //     const entry = this.hit.feed;
    //     const arr = [];

    //     for (const key in entry) {
    //         arr.push(entry[key]);
    //     }

    const genres = [
        {
            name: "Rock",
            url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json"
        },
        {
            name: "Country",
            url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json"
        },
        {
            name: "All Songs",
            url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
        }

    ]
    
    const getHit = (url) => {
    console.log("getting music info", url);

    fetch(url)
    .then(res => res.json())
        .then((data) => {
            setHit(data.feed.entry) // << data.feed.entry should be used Headers.  with this, we are discarding all the other json data, and taking only what we need.  feed (object) > entry
        })
        .catch(err => console.error);
    };

    useEffect(() => {
        getHit(genres[2].url);
        
    }, [genres.url]);

    const handleGenreSelect = (e) => {
       getHit(e.target.value);
    }


    const handlePlayPause = (audioSrc) => {
        audioSrc.paused ? audioSrc.play() : audioSrc.pause();
        audioSrc.classList.toggle('playing');
    }

    return (
        <>
        <h1>UK TOP 20 list</h1>
        <GenreDropdown genrePicker={handleGenreSelect} genres={genres} 
        />
        <TopChartList songs={hit} handlePlayPause={handlePlayPause}/>
        </>
    )
}  

    export default TopChartContainer;