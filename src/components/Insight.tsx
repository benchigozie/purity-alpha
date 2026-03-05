"use client"

import Image from "next/image";
import { Check } from "lucide-react";
import Button from "./Button";
import { scrollToId } from "@/utils/ScrollToId";

function Insight() {
    return (
        <section className="mt-20 md:mt-16 mx-auto">
            <div className="max-w-6xl mx-auto px-3 h-full">
                <div className="bg-my-white border border-my-gray/15 rounded-4xl md:rounded-[60px] p-7 md:p-14 grid gap-6 lg:gap-1  grid-cols-1 md:grid-cols-[3fr_2fr]">
                    <div className="flex flex-col gap-3">
                        <div>
                            <h2 className="text-my-black text-4xl md:text-6xl lg:text-7xl font-bold">Start Without <span className="text-my-blue">Pressure</span></h2>
                        </div>
                        <p className="text-lg">We know trying a new studio can feel like a big step.</p>
                        <p className="text-lg">So instead of asking you to “trust us”… <br />We invite you to experience it first.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-1 lg:mt-4">
                            <div className="flex items-center gap-2 mt-1 lg:mt-4">
                                <div className="bg-my-green  w-max p-1 rounded-2xl gap-1">
                                    <Check size={13} className="text-white" />
                                </div>
                                <p className="">Book a Free Inspection</p>
                            </div>
                            <div className="flex items-center gap-2 mt-1 lg:mt-4">
                                <div className="bg-my-green  w-max p-1 rounded-2xl gap-1">
                                    <Check size={13} className="text-white" />
                                </div>
                                <p className="">Test the Environment</p>
                            </div>
                            <div className="flex items-center gap-2 mt-1 lg:mt-4">
                                <div className="bg-my-green  w-max p-1 rounded-2xl gap-1">
                                    <Check size={13} className="text-white" />
                                </div>
                                <p className="">Meet the Team</p>
                            </div>
                            <div className="flex items-center gap-2 mt-1 lg:mt-4">
                                <div className="bg-my-green  w-max p-1 rounded-2xl gap-1">
                                    <Check size={13} className="text-white" />
                                </div>
                                <p className="">Plan your ideal setup</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-7 md:mt-0 relative bg-my-white h-full rounded-4xl shadow-xl shadow-my-gray/5 p-10 ring-2 ring-my-gray/5 flex flex-col justify-center items-center gap-4 my-auto">
                        <div className="absolute -right-3 -top-3 bg-my-green flex items-center justify-center w-11 h-11 rounded-full text-my-white text-3xl">
                            <p>&#9733;</p>
                        </div>
                        <div className="flex flex-col gap-4 md:gap-8">
                            <div className="flex gap-2 items-center">
                                <Image src="/images/camcorder.png" alt="insight" width={30} height={30} />
                                <p className="text-my-deep-green font-medium">EXCLUSIVE OPPORTUNITY</p>
                            </div>
                            <p className="text-2xl">
                                And if you qualify...... <br />
                                You may get a <span className="text-my-green font-medium">FREE TRIAL SESSION</span> to record your first content.
                            </p>
                            <div onClick={() => scrollToId("membership")}>
                                <Button btnText="Claim Your Inspection Slot" className="w-full rounded-3xl px-6 py-3 md:px-8 md:py-5 bg-my-blue lg:text-lg  text-my-white hover:text-my-blue hover:scale-105 hover:bg-my-white hover:ring hover:ring-my-blue/40" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Insight