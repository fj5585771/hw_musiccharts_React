import { useState, useEffect } from "react";
import TopChartList from "../components/TopChartList";
import HitDetails from "../components/HitDetails";

const TopChartContainer = () => {

    const [hit, setHit] = useState([]);


    // const showSelectedHits = () => {
    //     const entry = this.hit.feed;
    //     const arr = [];

    //     for (const key in entry) {
    //         arr.push(entry[key]);
    //     }
    

    const getHit = () => {
        console.log("getting music info");

        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
        .then((res) => {
            return res.json() 
            .then((data) => {
                setHit(data);
            });
        })
    };

    useEffect(() => {
        getHit();
    }, [hit]);
    // << if any of THESE variables change, thats the only time we want to run useEffect(). We're handing NO VARIABLES over, so there is no changed state that would cause useEffect() to run

    return (
        <>
            <h1>UK TOP 20 list</h1>
            <TopChartList />
            <HitDetails hit={hit}/>  
            {/* rendering hits details we wanna past full hits object down.   */}
        </>
    )
}  

    export default TopChartContainer;