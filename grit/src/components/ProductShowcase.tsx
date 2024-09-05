'use client'
import Image from "next/image";
import appNight from "@/assets/images/App Night.png"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from "react";

export const ProductShowcase = () =>{
    const appImage = useRef<HTMLImageElement>(null)
    const { scrollYProgress } = useScroll({
        target:appImage,
        offset:[
            'start end',
            'end end'
        ]
    }); //returns a num between 0 and 1

    const opacity = useTransform(scrollYProgress,[0,1],[0.5,1])
    const rotateX = useTransform(scrollYProgress,[0,1],[40,0])

    return(
        <div className="bg-black text-white bg-gradient-to-b from-black to-[#759FC6] py-[72px] sm:py-24">
            <div className="container">
                <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter ">Intuitive interface</h2>
                <div className="max-w-xl mx-auto">
                <p className="text-xl text-center text-white/70 mt-5">
                Experience the ease of applying with an interface designed to simplify your journey, guide your choices, and empower your success, one application at a time.
                </p>
                </div>
                <motion.div style={{
                    opacity:opacity,
                    rotateX: rotateX,
                    transformPerspective:"800px"
                }}>
                    <Image ref={appImage} className="mt-14 mx-auto" src={appNight} alt="Product example"/>
                    </motion.div>
            </div>
        </div>
    )
};