"use client"

import Image from "next/image";
import { CircleStar, Check } from "lucide-react";
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
                    <div className="relative p-6 md:p-10 rounded-4xl ring ring-my-gray/20 flex flex-col gap-4 md:gap-5 hover:shadow-md hover:ring-my-blue/60 hover:shadow-my-gray/20 transition-all duration-300 group">
                        <div className="p-4 rounded-3xl bg-my-green/15 w-max">
                            <Image src="/images/start.png" alt="" width={35} height={35} />
                        </div>
                        <h3 className="font-bold text-3xl text-my-black">Starter</h3>
                        <p>For early-stage creators ready to step into a structured production space.</p>
                        <div>
                            <div className="flex items-center gap-2 mt-1 lg:mt-4">
                                <div className="bg-my-green  w-max p-1 rounded-2xl gap-1">
                                    <Check size={13} className="text-white" />
                                </div>
                                <p className="text-[15px]">Clean Wall Background</p>
                            </div>
                            <div className="flex items-center gap-2 mt-1 lg:mt-4">
                                <div className="bg-my-green  w-max p-1 rounded-2xl gap-1">
                                    <Check size={13} className="text-white" />
                                </div>
                                <p className="text-[15px]">Tripod setup</p>
                            </div>
                            <div className="flex items-center gap-2 mt-1 lg:mt-4">
                                <div className="bg-my-green  w-max p-1 rounded-2xl gap-1">
                                    <Check size={13} className="text-white" />
                                </div>
                                <p className="text-[15px]">Microphone for clear audio</p>
                            </div>
                            <div className="flex items-center gap-2 mt-1 lg:mt-4">
                                <div className="bg-my-green  w-max p-1 rounded-2xl gap-1">
                                    <Check size={13} className="text-white" />
                                </div>
                                <p className="text-[15px]">Ring light setup</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm text-my-gray/80">BEST FOR</p>
                            <p className="font-semibold">Simple talking videos, practice shoots, and entry-level content creation.</p>
                        </div>
                        <p className="text-my-black my-3 text-4xl font-bold">N30k<span className="text-my-gray text-base font-normal">/session</span></p>
                        <button onClick={() => scrollToId('booking')} className="font-semibold text-my-white hover:text-my-black hover:ring hover:ring-my-black w-full rounded-full p-3 bg-my-black hover:bg-my-white transition-colors duration-300 hover:cursor-pointer">Inquire Now</button>
                    </div>
                    <div className="relative p-6 md:p-10 rounded-4xl ring ring-my-gray/20 flex flex-col gap-4 md:gap-7 hover:shadow-md hover:ring-my-blue/60 hover:shadow-my-gray/20 transition-all duration-300 group">
                        <div className="p-4 rounded-3xl bg-my-blue/10 w-max">
                            <Image src="/images/medal.png" alt="" width={35} height={35} />
                        </div>
                        <h3 className="font-bold text-3xl text-my-black">Creator</h3>
                        <p>For creators ready to produce professional-looking content consistently.</p>
                        <div>
                            <div className="flex items-center gap-2 mt-1 lg:mt-4">
                                <div className="bg-my-green  w-max p-1 rounded-2xl gap-1">
                                    <Check size={13} className="text-white" />
                                </div>
                                <p className="text-[15px]">Everything in Starter</p>
                            </div>
                            <div className="flex items-center gap-2 mt-1 lg:mt-4">
                                <div className="bg-my-green  w-max p-1 rounded-2xl gap-1">
                                    <Check size={13} className="text-white" />
                                </div>
                                <p className="text-[15px]">Professional camera for high-quality visuals</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm text-my-gray/80">BEST FOR</p>
                            <p className="font-semibold">YouTube videos, brand content, social media authority building.</p>
                        </div>
                        <p className="text-my-black my-3 text-4xl font-bold">N80k<span className="text-my-gray text-base font-normal">/session</span></p>
                        <button onClick={() => scrollToId('booking')} className="font-semibold text-my-white hover:text-my-black hover:ring hover:ring-my-black w-full rounded-full p-3 bg-my-black hover:bg-my-white transition-colors duration-300 hover:cursor-pointer">Inquire Now</button>

                    </div>
                    <div className="relative p-6 md:p-10 rounded-4xl ring ring-my-gray/20 flex flex-col gap-4 md:gap-7 hover:shadow-md hover:ring-my-blue/60 hover:shadow-my-gray/20 transition-all duration-300 group">
                        <div className="p-4 rounded-3xl bg-yellow-100 w-max">
                            <Image src="/images/wand.png" alt="" width={35} height={35} />
                        </div>
                        <h3 className="font-bold text-3xl text-my-black">Professional</h3>
                        <p>For individuals building a serious brand presence.</p>
                        <div>
                            <div className="flex items-center gap-2 mt-1 lg:mt-4">
                                <div className="bg-my-green  w-max p-1 rounded-2xl gap-1">
                                    <Check size={13} className="text-white" />
                                </div>
                                <p className="text-[15px]">Everything in Creator</p>
                            </div>
                            <div className="flex items-center gap-2 mt-1 lg:mt-4">
                                <div className="bg-my-green  w-max p-1 rounded-2xl gap-1">
                                    <Check size={13} className="text-white" />
                                </div>
                                <p className="text-[15px]">Content consultation</p>
                            </div>
                            <div className="flex items-center gap-2 mt-1 lg:mt-4">
                                <div className="bg-my-green  w-max p-1 rounded-2xl gap-1">
                                    <Check size={13} className="text-white" />
                                </div>
                                <p className="text-[15px]">Video editing service</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm text-my-gray/80">BEST FOR</p>
                            <p className="font-semibold">Thought leaders, coaches, experts building authority-driven content.</p>
                        </div>
                        <p className="text-my-black my-3 text-4xl font-bold">N150k<span className="text-my-gray text-base font-normal">/session</span></p>
                        <button onClick={() => scrollToId('booking')} className="font-semibold text-my-white hover:text-my-black hover:ring hover:ring-my-black w-full rounded-full p-3 bg-my-black hover:bg-my-white transition-colors duration-300 hover:cursor-pointer">Inquire Now</button>

                    </div>
                    <div className="relative p-6 md:p-10 rounded-4xl ring ring-my-gray/20 flex flex-col gap-4 md:gap-7 hover:shadow-md hover:ring-my-blue/60 hover:shadow-my-gray/20 transition-all duration-300 group">
                        <div className="p-4 rounded-3xl bg-purple-100 w-max">
                            <CircleStar size={35} className="text-purple-500" />
                        </div>
                        <h3 className="font-bold text-3xl text-my-black">Enterprise</h3>
                        <p>For teams, brands & organizations producing at scale.</p>
                        <div>
                            <div className="flex items-center gap-2 mt-1 lg:mt-4">
                                <div className="bg-my-green  w-max p-1 rounded-2xl gap-1">
                                    <Check size={13} className="text-white" />
                                </div>
                                <p className="text-[15px]">Everything in Professional</p>
                            </div>
                            <div className="flex items-center gap-2 mt-1 lg:mt-4">
                                <div className="bg-my-green  w-max p-1 rounded-2xl gap-1">
                                    <Check size={13} className="text-white" />
                                </div>
                                <p className="text-[15px]">Multiple microphones (for group recordings)</p>
                            </div>
                            <div className="flex items-center gap-2 mt-1 lg:mt-4">
                                <div className="bg-my-green  w-max p-1 rounded-2xl gap-1">
                                    <Check size={13} className="text-white" />
                                </div>
                                <p className="text-[15px]">Multi-camera setup (for multiple angles)</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm text-my-gray/80">BEST FOR</p>
                            <p className="font-semibold">Panel discussions, interviews, corporate content, large-scale production.</p>
                        </div>
                        <p className="text-my-black my-3 text-4xl font-bold">N350k<span className="text-my-gray text-base font-normal">/session</span></p>
                        <button onClick={() => scrollToId('booking')} className="font-semibold text-my-white hover:text-my-black hover:ring hover:ring-my-black w-full rounded-full p-3 bg-my-black hover:bg-my-white transition-colors duration-300 hover:cursor-pointer">Inquire Now</button>

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