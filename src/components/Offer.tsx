import Image from "next/image";
import { Check } from "lucide-react";


const Offer = () => {
    return (
        <section className="mt-20 md:mt-16 mx-auto">
            <div className="max-w-6xl mx-auto px-3 h-full">
                <div className="ring-2 md:ring-3 ring-my-blue rounded-4xl md:rounded-[60px] p-7 md:p-12 grid gap-4 md:gap-1  grid-cols-1 md:grid-cols-[2fr_1fr]">
                    <div className="flex flex-col gap-7">
                        <div className="px-6 py-2 bg-my-green/20 flex items-center rounded-full gap-2 w-max">
                            <div className='rounded-full'>
                                <Image src="/images/greenbolt.png" alt="" width={15} height={15} />
                            </div>
                            <p className="text-xs font-medium tracking-wider text-my-deep-green">LIMITED TIME ENTRY OFFER</p>
                        </div>
                        <div>
                            <h2 className="text-my-black text-4xl md:text-7xl font-bold">Start Your Journey for</h2>
                            <div className="flex items-baseline">
                                <p className="text-my-green text-4xl md:text-7xl font-bold"><span className="font-inter">&#8358;</span>30,000</p>
                                <p className="text-xl font-semibold">/month</p>
                            </div>
                        </div>
                        <p className="text-xl">Exclusively for single creators. Get started at our lowest entry price for your first 3 months. No barriers, just growth.</p>
                        <div className="flex flex-col md:flex-row gap-3">
                            <button className="font-semibold transition-all duration-300 hover:cursor-pointer rounded-3xl px-6 py-3 md:px-8 md:py-5 bg-my-deep-green  text-my-white hover:text-my-deep-green hover:scale-105 hover:bg-my-white hover:ring hover:ring-my-deep-green/40 flex gap-3 justify-center items-center" ><span>Claim Offer Now</span> <span><Image src="/images/power.png" alt="" width={13} height={13} /></span></button>
                            <button className="flex gap-3 font-semibold transition-all duration-300 hover:cursor-pointer rounded-3xl px-4 py-3 md:px-8 md:py-5 bg-my-white hover:scale-105 hover:bg-my-white ring ring-my-gray/20 items-center justify-center" ><span className="p-1 h-max rounded-full bg-my-green"> <Check className="text-my-white relative top-0.5" size={15} strokeWidth={2.2} color="#FBFCFD" /></span> <span>Standard Price <span className="font-inter">&#8358;</span>80k/mo</span></button>
                        </div>
                    </div>
                    <div className="bg-my-white rounded-4xl p-10 ring-2 ring-my-gray/10 flex flex-col justify-center items-center gap-4 my-auto">
                        <div className="p-5 rounded-full bg-my-green/15 w-max">
                            <Image src="/images/creator.png" alt="" width={60} height={60} />
                        </div>
                        <p className="mt-4 font-semibold tracking-wider text-sm">CREATOR INTRO</p>
                        <p className="font-bold text-3xl md:text-5xl text-my-black">
                            <span><span className="font-inter">&#8358;</span>30k</span>
                        </p>
                        <p className="font-bold">for first 3 months</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer