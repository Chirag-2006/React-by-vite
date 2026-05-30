import React, { useState, useRef } from "react";
import Card from "./Card";

function Forground() {

    const ref = useRef(null);

    const Data = [
        {
            desc: "This is the background color of the card that will be displayed", 
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true , text: 'Download Now', color: 'green' }
        },
        {
            desc: "This is the background color of the card that will be displayed", 
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true , text: 'Download Now', color: 'blue' }
        },
        {
            desc: "This is the background color of the card that will be displayed", 
            filesize: ".9mb",
            close: false,
            tag: { isOpen: false , text: 'Download Now', color: 'green' }
        },
    ];
    return (
        <div ref={ref} className="fixed top-0 left-0 w-full h-full z-[3] p-5 flex gap-3 flex-wrap ">
            {Data.map((item, index) => (
                <Card Data = {item} reference = {ref} />
            ))}
        </div>
    );
}

export default Forground;
