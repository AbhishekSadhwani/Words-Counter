import { useEffect, useState } from "react"
import { Joke } from "../Components/Joke";
import { Header } from "../Components/Header";

export const ShowJokes = () => {
    const [joke,setJoke] = useState({}); 
    
    useEffect(() => {
        async function getJoke(){
            const response = await fetch("https://api.chucknorris.io/jokes/random");
            const data = await response.json();
            setJoke(data);
        };
        getJoke();
    },[])

    return (
        <main>
            <Header heading={"ChuckNorris Jokes"} subHeading={"Free JSON API for hand curated Chuck Norris facts."} /> 
            <section className="joke-section">
                <Joke joke={joke} />
            </section>
        </main>
    )
}
