export const Hero = () => {
    return (
    <div className="bg-[linear-gradient(to_bottom,#000,#0F172A_34%,#1E272E_65%,#2C3A47_82%)] py-[72px] sm:py-24 relative overflow-clip">
        <div className="absolute h-[375px] w-[750px] sm:w-[3000px] sm:h-[786px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#759FC6_20%] bg-[radial-gradient(closest-side,#000_82%,#759FC6_100%)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
        <div className="container relative">
            <div className="flex items-center justify-center">
                <a href="#" className="border py-1 px-2 rounded-lg border-white/30">
                    <span>Grit is now live!</span>
                </a></div>

            <div className="flex justify-center">
            <h1 className="text-[64px] sm:text-8xl font-bold tracking-tighter text-center mt-8 leading-tight inline-flex">Your Journey, Your Future-<br />Find the Perfect School with<br /> Grit.</h1>
            </div>
            <div className="flex justify-center">
            <p className="text-center text-xl mt-8 max-w-xl">Streamline your med, PA, or CRNA school applications by<br /> matching with programs that fit your unique profile, all <br />while exploring detailed insights on every option with Grit.</p>
            </div>
           <div className="flex justify-center mt-8">
                <button className=" bg-white text-black py-3 px-5 rounded-lg font-medium">Get started</button>
            </div>
            
        </div>
    </div>)
}