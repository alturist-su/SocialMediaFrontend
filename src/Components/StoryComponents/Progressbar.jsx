import React, {useState, useEffect} from "react";
import "./Progressbar.css";

const Progressbar = ({index, activeIndex, duration}) => {

    const [progress, setProgress] = useState(0);
    const isActive = index === activeIndex;

    useEffect(() => {
        if(isActive){
            setProgress(0);
            const interval = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress < 100) {
                        return prevProgress + 1;
                    }
                    clearInterval(interval);
                    return prevProgress;
                });
            }, duration/100); 
            return () => clearInterval(interval);
        }
        else{
            setProgress(0);
        }
    }, [isActive, duration]);

    return(
        <div className={`progress-bar-container ${isActive?"active":""}`}> 
            <div 
                className={`progress-bar ${isActive?"progress-bar":""}`} 
                style={{width:`${progress}%`}}>

            </div>
        </div>
    )
}

export default Progressbar;