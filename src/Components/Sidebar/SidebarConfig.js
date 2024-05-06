import { AiOutlineHome, AiFillHome, AiOutlineSearch, AiOutlineCompass, AiFillCompass, AiOutlineMessage, AiFillMessage, AiOutlineNotification, AiFillNotification, AiOutlinePlusCircle, AiFillPlusCircle } from "react-icons/ai"
import { CgProfile } from "react-icons/cg"
import { RiVideoFill, RiVideoLine } from "react-icons/ri"

const menu = [
    {
        title:"Home", icon: <AiOutlineHome></AiOutlineHome>, activeIcon: <AiFillHome></AiFillHome>
    },
    {
        title:"Search", icon: <AiOutlineSearch></AiOutlineSearch>, activeIcon: <AiOutlineSearch></AiOutlineSearch>
    },
    {
        title:"Explore", icon: <AiOutlineCompass></AiOutlineCompass>, activeIcon: <AiFillCompass></AiFillCompass>
    },
    {
        title:"Reels", icon: <RiVideoLine></RiVideoLine>, activeIcon: <RiVideoFill></RiVideoFill>
    },
    {
        title:"Message", icon: <AiOutlineMessage></AiOutlineMessage>, activeIcon: <AiFillMessage></AiFillMessage>
    },
    {
        title:"Notification", icon: <AiOutlineNotification></AiOutlineNotification>, activeIcon: <AiFillNotification></AiFillNotification>
    },
    {
        title:"Create", icon: <AiOutlinePlusCircle></AiOutlinePlusCircle>, activeIcon: <AiFillPlusCircle></AiFillPlusCircle>
    },
    {
        title:"Profile", icon: <CgProfile></CgProfile>, activeIcon: <CgProfile></CgProfile>
    }
]