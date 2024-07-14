import { useRef, useState } from "react";

export const Counter = () => {
    const [charCount, setCharCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);

    const textData = useRef();
   
    const handleCount = () => {
        const value = textData.current.value;
        setCharCount(value.length);
        setWordCount(value.length ? value.trim().split(" ").length : 0);
    };

    const handleClear = () => {
        textData.current.value = "";
        handleCount();
    };

    return (
        <section className="counter">
            <textarea onChange={handleCount} ref={textData} className="text" placeholder="Type or paste your text" spellCheck="false"></textarea>
            <button onClick={handleClear} className="clear" disabled={`${charCount ? "" : "disabled"}`}>Clear</button>
            <div className="counts">
                <span className="character">Character: {charCount}</span>
                <span className="word">Word: {wordCount}</span>
            </div>
        </section>
    )
}
