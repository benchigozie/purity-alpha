"use client";

import MiniGallery from "./MiniGallery";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const locations = [
    {
        title: "The Matrix",
        images: [
            "/images/studios/thematrix1.jpg",
            "/images/studios/thematrix2.jpg",
            "/images/studios/thematrix3.jpg",
            "/images/studios/thematrix4.jpg",
        ],
    },
    {
        title: "The Cozy Room",
        images: [
            "/images/studios/thecozyroom1.jpg",
            "/images/studios/thecozyroom2.jpg",
            "/images/studios/thecozyroom3.jpg",
        ],
    },
    {
        title: "The Grid Room",
        images: [
            "/images/studios/thegridroom1.jpg",
            "/images/studios/thegridroom2.jpg",
            "/images/studios/thegridroom3.jpg",
            "/images/studios/thegridroom4.jpg",
        ],
    },
    {
        title: "Prestige Room",
        images: [
            "/images/studios/prestigeroom.jpg",
            "/images/studios/prestigeroom2.jpg",
            "/images/studios/prestigeroom3.jpg",
        ],
    },
    {
        title: "De-Rock",
        images: [
            "/images/studios/de-rock1.jpg",
            "/images/studios/de-rock2.jpg",
            "/images/studios/de-rock3.jpg",
        ],
    },
    {
        title: "De-Lane",
        images: [
            "/images/studios/de-lane1.jpg",
            "/images/studios/de-lane2.jpg",
            "/images/studios/de-lane3.jpg",
        ],
    },
];


const EliteSpaces = () => {

    const [studioIndex, setStudioIndex] = useState(0);
    const next = () => setStudioIndex((i) => Math.min(i + 1, locations.length - 1));

    const prev = () => setStudioIndex((i) => Math.max(i - 1, 0));

    return (
        <section className="mt-16 md:mt-22 mx-auto scroll-mt-22" id="studios">
            <div className="max-w-6xl mx-auto px-3 h-full flex flex-col gap-8 md:gap-12">
                <div className="flex flex-col gap-4 px-2">
                    <h2 className="text-my-black text-4xl md:text-6xl font-bold">Explore Our Spaces</h2>
                    <p className="text-lg max-w-xl">Take a look inside our beautifully designed studios and content rooms built to help your content look its best from every angle.</p>
                </div>
                <div className="md:hidden flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={prev}
                            disabled={studioIndex === 0}
                            className="p-3 ring ring-my-gray/20 rounded-full disabled:opacity-40 cursor-pointer"
                        >
                            <ArrowLeft />
                        </button>
                        <button
                            onClick={next}
                            disabled={studioIndex === locations.length - 1}
                            className="p-3 ring ring-my-gray/20 rounded-full disabled:opacity-40 cursor-pointer"
                        >
                            <ArrowRight />
                        </button>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={studioIndex}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                        >
                            <MiniGallery
                                images={locations[studioIndex].images}
                                name={locations[studioIndex].title}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <MiniGallery images={locations[0].images} name={locations[0].title} />
                    <MiniGallery images={locations[1].images} name={locations[1].title} />
                    <MiniGallery images={locations[2].images} name={locations[2].title} />
                    <MiniGallery images={locations[3].images} name={locations[3].title} />
                    <MiniGallery images={locations[4].images} name={locations[4].title} />
                    <MiniGallery images={locations[5].images} name={locations[5].title} />

                </div>
            </div>
        </section>
    )
}

export default EliteSpaces