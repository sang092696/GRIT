'use client'

import FrameIcon from "@/assets/icons/Frame.svg"
import MinusIcon from "@/assets/icons/minus-svgrepo-com.svg"
import { useState } from "react"
import clsx from "clsx"
import { motion,AnimatePresence } from "framer-motion"

const items = [
    {
        question: 'How does Grit match me with schools?',
        answer: 'Grit uses advanced algorithms to analyze your academic data, including GPA, recommendations, and coursework, and matches you with schools where you have the strongest potential for acceptance based on their specific requirements and criteria.'
    },
    {
        question: 'Can I customize the criteria for school matching?',
        answer: 'Yes, Grit allows you to adjust and prioritize certain factors like location, program length, and specific school preferences to ensure that the matches align with your personal goals and needs.'
    },
    {
        question: 'What information is included in the school database?',
        answer: 'The database provides comprehensive details on each school, including program offerings, faculty credentials, application deadlines, tuition costs, student success rates, and more, so you can make informed decisions about where to apply.'
    },
    {
        question: 'Can I save and revisit my matches and application progress?',
        answer: 'Yes, Grit allows you to save your matched schools and monitor your application progress at any time, so you can return to your work and continue from where you left off.'
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information.'
    },
    {
        question: 'Is my data secure?',
        answer: 'Yes, Grit takes your privacy seriously and uses advanced security measures to protect your personal information, ensuring that your data is safe and confidential.'
    },
]

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="py-7 border-b border-white/30" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex items-center ">
                <span className="flex-1 text-lg font-bold">{question}</span>
                {isOpen ? <MinusIcon />:<FrameIcon />}
            </div>
            <AnimatePresence>
                {isOpen && (
                <motion.div 
                
                initial={{
                    opacity:0,
                    height:0,
                    marginTop:0,
                }}
                animate={{
                    opacity:1,
                    height:"auto",
                    marginTop:"16px",
                }}
                exit={{
                    opacity:0,
                    height:0,
                    marginTop:0,
                    }}>
                    {answer}
                </motion.div>
            )}
            </AnimatePresence>
            
            
        </div>
    )
}

export const FAQs = () => {
    return (
        <div className="bg-black text-white bg-gradient-to-b from-[#759FC6] to-black py-[72px] sm:py-24">
            <div className="container">
                <h2 className="text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter">Frequently asked questions</h2>
                <div className="mt-12 max-w-[648px] mx-auto">
                    {items.map(({ question, answer }) => (
                        <AccordionItem  question={question} answer={answer} key={question}/>
                    ))}
                </div>
            </div>
        </div>
    )
};