import React from "react";
import { image } from "framer-motion/client";
import StoryViewer from "../../Components/StoryComponents/StoryViewer";

const Story = () => {
    const story = [
        {
            image: "https://images.pexels.com/photos/29940494/pexels-photo-29940494/free-photo-of-elegant-fashion-portrait-in-bold-fur-coat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },{
            image: "https://images.pexels.com/photos/29837298/pexels-photo-29837298/free-photo-of-christmas-gingerbread-cookies-in-teacup-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },{
            image: "https://images.pexels.com/photos/28183013/pexels-photo-28183013/free-photo-of-a-dog-standing-in-a-field-with-its-tongue-out.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },{
            image: "https://images.pexels.com/photos/29598871/pexels-photo-29598871/free-photo-of-festive-nutcracker-with-holiday-greenery.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },{
            image: "https://images.pexels.com/photos/19319997/pexels-photo-19319997/free-photo-of-carousel-and-mulled-wine-sign-in-christmas-market-in-dresden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },{
            image: "https://images.pexels.com/photos/29875437/pexels-photo-29875437/free-photo-of-two-women-enjoying-winter-outdoors-with-luggage-cart.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
    ]

    return(
        <div>
            <StoryViewer stories={story} />
        </div>
    )
}

export default Story;