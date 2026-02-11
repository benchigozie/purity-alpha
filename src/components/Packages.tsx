"use client" 

import Image from "next/image";
import { CircleStar } from "lucide-react";
import { scrollToId } from "@/utils/ScrollToId";

const Packages = () => {
    return (
        <section className="mt-16 md:mt-22 mx-auto scroll-mt-22" id="membership">
            <div className="max-w-6xl mx-auto px-3 h-full flex flex-col gap-8 md:gap-12">
                <div className="flex flex-col gap-4 px-2">
                    <h2 className="text-my-black text-4xl md:text-6xl font-bold">Packages</h2>
                    <p className="text-lg max-w-xl">Scalable investment tiers for every stage of your creative evolution.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                    <div className="relative p-6 md:p-10 rounded-4xl ring ring-my-gray/20 flex flex-col gap-4 md:gap-7 hover:shadow-md hover:ring-my-blue/60 hover:shadow-my-gray/20 transition-all duration-300 group">
                        <div className="p-4 rounded-3xl bg-my-blue/10 w-max">
                            <Image src="/images/medal.png" alt="" width={35} height={35} />
                        </div>
                        <h3 className="font-bold text-3xl text-my-black">Creator</h3>
                        <p>Suited for content creators or single individuals seeking professional infrastructure.</p>
                        <p className="text-my-black my-3 text-4xl font-bold">N80k<span className="text-my-gray text-base font-normal">/mo</span></p>
                        <button onClick={() => scrollToId('booking')} className="font-semibold text-my-white hover:text-my-black hover:ring hover:ring-my-black w-full rounded-full p-3 bg-my-black hover:bg-my-white transition-colors duration-300 hover:cursor-pointer">Inquire Now</button>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -top-8 mx-auto left-1/2 -translate-x-1/2 bg-my-blue py-2 px-5 rounded-full text-my-white text-xs">Starting Point</div>
                    </div>
                    <div className="relative p-6 md:p-10 rounded-4xl ring ring-my-gray/20 flex flex-col gap-4 md:gap-7 hover:shadow-md hover:ring-my-blue/60 hover:shadow-my-gray/20 transition-all duration-300 group">
                        <div className="p-4 rounded-3xl bg-yellow-100 w-max">
                            <Image src="/images/wand.png" alt="" width={35} height={35} />
                        </div>
                        <h3 className="font-bold text-3xl text-my-black">Professional</h3>
                        <p>For Industry experts who want to build a brand and establish their authority.</p>
                        <p className="text-my-black my-3 text-4xl font-bold">N150k<span className="text-my-gray text-base font-normal">/mo</span></p>
                        <button onClick={() => scrollToId('booking')} className="font-semibold text-my-white hover:text-my-black hover:ring hover:ring-my-black w-full rounded-full p-3 bg-my-black hover:bg-my-white transition-colors duration-300 hover:cursor-pointer">Inquire Now</button>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -top-8 mx-auto left-1/2 -translate-x-1/2 bg-my-blue py-2 px-5 rounded-full text-my-white text-xs">Elite Choice</div>
                    </div>
                    <div className="relative p-6 md:p-10 rounded-4xl ring ring-my-gray/20 flex flex-col gap-4 md:gap-7 hover:shadow-md hover:ring-my-blue/60 hover:shadow-my-gray/20 transition-all duration-300 group">
                        <div className="p-4 rounded-3xl bg-purple-100 w-max">
                            <CircleStar size={35} className="text-purple-500" />
                        </div>
                        <h3 className="font-bold text-3xl text-my-black">Enterprise</h3>
                        <p>For businesses, brands and organizations looking to scale production.</p>
                        <p className="text-my-black my-3 text-4xl font-bold">N350k<span className="text-my-gray text-base font-normal">/mo</span></p>
                        <button onClick={() => scrollToId('booking')} className="font-semibold text-my-white hover:text-my-black hover:ring hover:ring-my-black w-full rounded-full p-3 bg-my-black hover:bg-my-white transition-colors duration-300 hover:cursor-pointer">Inquire Now</button>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -top-8 mx-auto left-1/2 -translate-x-1/2 bg-my-blue py-2 px-5 rounded-full text-my-white text-xs">Built for Growth</div>
                    </div>
                    <div className="relative p-6 md:p-10 rounded-4xl ring ring-my-gray/20 flex flex-col gap-4 md:gap-7 hover:shadow-md hover:ring-my-blue/60 hover:shadow-my-gray/20 transition-all duration-300 group">
                        <div className="p-4 rounded-3xl bg-red-100 w-max">
                            <Image src="/images/users.png" alt="" width={35} height={35} />
                        </div>
                        <h3 className="font-bold text-3xl text-my-black">Custom</h3>
                        <p>Tailored solutions for media houses and high-volume content teams.</p>
                        <p className="text-my-black my-3 text-4xl font-bold">Bespoke</p>
                        <button onClick={() => scrollToId('booking')} className="font-semibold text-my-white hover:text-my-black hover:ring hover:ring-my-black w-full rounded-full p-3 bg-my-black hover:bg-my-white transition-colors duration-300 hover:cursor-pointer">Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Packages;