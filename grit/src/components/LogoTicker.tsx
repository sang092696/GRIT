'use client'

import Image from "next/image"
import ApexLogo from "@/assets/images/apex 1.png"
import PulseLogo from "@/assets/images/pulse 1.png"
import CelestiaLogo from "@/assets/images/celestia 1.png"
import EchoLogo from "@/assets/images/echo 1.png"
import QuantumLogo from "@/assets/images/quantum 1.png"
import AcmeLogo from "@/assets/images/acme 1.png"
import { motion } from "framer-motion";

const images = [
    {key:0,src:ApexLogo, alt:"Apex Logo"},
    {key:1,src:PulseLogo, alt:"Pulse Logo"},
    {key:2,src:CelestiaLogo, alt:"Celestial Logo"},
    {key:3,src:EchoLogo, alt:"Echo Logo"},
    {key:4,src:QuantumLogo, alt:"Quantum Logo"},
    {key:5,src:AcmeLogo, alt:"Acme Logo"}]

export const LogoTicker = () =>{
    return(
        <div className="bg-black text-white py-[72px] sm:py-24">
            <div className="container">
                <h2 className="text-xl text-center text-white/70">Trusted by the world's most innovative teams</h2>
                <div className="flex overflow-hidden mt-9 before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
                    <motion.div 
                    transition={{duration:15,ease:"linear",repeat:Infinity}} 
                    initial={{translateX:0}} 
                    animate={{translateX:"-50%"}} 
                    className="flex gap-16 flex-none pr-16">

                        {images.map(({src, alt,key})=>(
                        <Image key={key} className="flex-none h-8 w-auto" src={src} alt={alt}/>
                    ))}
                    {images.map(({src, alt,key})=>(
                        <Image key={key} className="flex-none h-8 w-auto" src={src} alt={alt}/>
                    ))}
                    </motion.div>
                    
                </div>
            </div>
            </div>
    )
}