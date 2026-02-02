import Image from "next/image"
import Button from "./Button"
import { TrendingUp } from "lucide-react"

const Hero = () => {
    return (
        <section className="pt-16 md:pt-15 min-h-[80vh] md:min-h-screen flex justify-center">
            <div className="max-w-6xl mx-auto px-3 my-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-8 pt-10 md:pt-0">
                    <div className="flex flex-col gap-8 justify-center">
                        <div className="p-2 bg-my-gray/10 flex items-center rounded-xl gap-2 w-max">
                            <div className='z-10 w-2.5 relative h-2.5 rounded-full'>
                                <div className=' absolute -z-10 w-2.5 h-2.5 bg-my-green/50 rounded-full animate-pulse-ring'>
                                </div>
                                <div className='z-10 w-2.5 relative h-2.5 bg-my-green rounded-full'></div>
                            </div>
                            <p className="text-xs md:text-sm font-medium tracking-wider">THE WORLD'S ELITE CREATOR NETWORK</p>
                        </div>
                        <h1 className="text-my-black text-4xl md:text-7xl font-bold">Scale Your <span className="text-transparent bg-linear-to-r from-my-blue to-my-green bg-clip-text">Creative</span> Power</h1>
                        <p className="text-lg md:text-xl font-light">We provide the high-performance infrastructure, strategy, and execution needed for creators to dominate the digital landscape.</p>
                        <div className="flex flex-col md:flex-row gap-3">
                            <Button btnText="Book Studio Session" className="rounded-3xl px-6 py-3 md:px-8 md:py-5 bg-my-blue lg:text-lg  text-my-white hover:text-my-blue hover:scale-105 hover:bg-my-white hover:ring hover:ring-my-blue/40" />
                            <Button btnText="Our Portfolio" className="rounded-3xl px-6 py-3 md:px-8 md:py-5 bg-my-white lg:text-lg  text-my-black hover:scale-105 hover:bg-my-white ring ring-my-gray/20" />
                        </div>
                    </div>
                    <div className="p-2 rounded-[50px] bg-my-white shadow-2xl shadow-my-gray/40 relative mx-4 md:mx-0">
                        <Image src="/" width={500} height={500} className="bg-my-gray rounded-[50px] w-full h-full  min-h-72" alt="" />
                        <div className="absolute shadow-lg shadow-my-gray/10 -bottom-8 md:-bottom-10 lg:-bottom-14 -left-6 md:-left-10 lg:-left-14 bg-my-white w-max rounded-2xl p-3 md:p-6 flex gap-3 items-center">
                            <div className="bg-my-blue/20  w-max p-3 rounded-2xl">
                                <TrendingUp size={25} className="text-my-blue"/>
                            </div>
                            <div>
                                <p className="text-[10px] md:text-sm">GROWTH RATE</p>
                                <p className="text-lg md:text-2xl font-bold text-my-black">+420% avg.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero