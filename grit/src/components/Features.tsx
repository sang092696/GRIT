import EcosystemIcon from '@/assets/icons/Frame 21.svg'
import { Feature } from './Feature'

const features = [
    {title:"Personalized School Matching",description:"Receive a tailored list of schools that match your GPA, recommendations, and coursework, helping you target institutions where you're most likely to succeed."},
    {title:"Comprehensive School Database",description:"Access a detailed database with all the essential information about each school, making it easy to compare programs and choose the best fit for you."},
    {title:"Application Tracking and Management",description:"Easily manage and track your applications from start to finish, ensuring you meet deadlines and stay organized throughout the process."}
]

export const Features = () =>
{return(
    <div className="bg-black text-white py-[72px] sm:py-24">
        <div className="container">
            
            <h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tighter'>Everything you need</h2>
            <div className='max-w-xl mx-auto'>
            <p className='text-center mt-5 text-xl text-white/70'>Experience personalized school matching, collaborative tools, and smart tracking—all in one platform. Set goals, receive timely reminders, and effortlessly monitor your application progress.</p>
            </div>
            <div className='mt-16 flex flex-col sm:flex-row gap-4'>
                {features.map(({title, description})=>(
                    <Feature title={title} description={description} key={title}/>
                ))}
            </div>
        </div>
    </div>
)}