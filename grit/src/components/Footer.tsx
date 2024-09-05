import InstaIcon from "@/assets/icons/Property 1=Instagram.svg"
import LinkedinIcon from "@/assets/icons/Property 1=LinkedIn.svg"
import XIcon from "@/assets/icons/Property 1=X.svg"
import YoutubeIcon from "@/assets/icons/Property 1=Youtube.svg"


export const Footer = () =>{
    return(
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
        <div className="container">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                <div className="text-center">@ 2024 Grit, Inc. All rights reserved</div>
                <ul className="flex justify-center gap-2.5">
                    <li><InstaIcon /></li>
                    <li><XIcon /></li>
                    <li><LinkedinIcon /></li>
                    <li><YoutubeIcon /></li>
                </ul>
            </div>
        </div>
    </footer>)
}