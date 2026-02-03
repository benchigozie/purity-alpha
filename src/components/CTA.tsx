import { Rocket } from "lucide-react"

const CTA = () => {
    return (
        <section className="mt-16 md:mt-22 mx-auto px-3">
            <div className="max-w-6xl mx-auto h-full flex flex-col items-center gap-5 md:gap-9 rounded-4xl md:rounded-[60px] bg-linear-to-r from-my-blue to-my-green px-5 md:px-15 py-18 md:py-24 text-my-white text-center">
                <h2 className="text-3xl md:text-8xl font-bold">Ready to Go Alpha?</h2>
                <p className="text-lg md:4xl max-w-150">Join the elite circle of creators scaling with professional strategy and gear. Your journey starts here.</p>
                <button className="flex items-center gap-3 bg-my-white px-7 md:px-14 py-4 md:py-6 rounded-2xl md:rounded-4xl w-max mx-auto text-my-black font-semibold md:font-bold text-lg md:text-2xl hover:scale-105 duration-300 transition-all cursor-pointer"><span>Apply for Session</span><Rocket size={25}/></button>
            </div>
        </section>
    )
}

export default CTA