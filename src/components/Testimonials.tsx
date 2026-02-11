"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"

type TestimonialProps = {
    name: string;
    position: string;
    content: string;
    image: string;
};

const testimonials: TestimonialProps[] = [
    {
        name: "Sarah Jenkins 1",
        position: "TECH INFLUENCER",
        content: "Purity Alpha literally took my YouTube channel from 2k to 50k subs in just 3 months. Their strategy is elite.",
        image: "/images/client1.jpg",
    },
    {
        name: "Sarah Jenkins 2",
        position: "TECH INFLUENCER",
        content: "Purity Alpha literally took my YouTube channel from 2k to 50k subs in just 3 months. Their strategy is elite.",
        image: "/images/client1.jpg",
    },
    {
        name: "Sarah Jenkins 3",
        position: "TECH INFLUENCER",
        content: "Purity Alpha literally took my YouTube channel from 2k to 50k subs in just 3 months. Their strategy is elite.",
        image: "/images/client1.jpg",
    },
    {
        name: "Sarah Jenkins 4",
        position: "TECH INFLUENCER",
        content: "Purity Alpha literally took my YouTube channel from 2k to 50k subs in just 3 months. Their strategy is elite.",
        image: "/images/client1.jpg",
    },
    {
        name: "Sarah Jenkins 5",
        position: "TECH INFLUENCER",
        content: "Purity Alpha literally took my YouTube channel from 2k to 50k subs in just 3 months. Their strategy is elite.",
        image: "/images/client1.jpg",
    },
    {
        name: "Sarah Jenkins 6",
        position: "TECH INFLUENCER",
        content: "Purity Alpha literally took my YouTube channel from 2k to 50k subs in just 3 months. Their strategy is elite.",
        image: "/images/client1.jpg",
    },
    {
        name: "Sarah Jenkins 7",
        position: "TECH INFLUENCER",
        content: "Purity Alpha literally took my YouTube channel from 2k to 50k subs in just 3 months. Their strategy is elite.",
        image: "/images/client1.jpg",
    },
    {
        name: "Sarah Jenkins 8",
        position: "TECH INFLUENCER",
        content: "Purity Alpha literally took my YouTube channel from 2k to 50k subs in just 3 months. Their strategy is elite.",
        image: "/images/client1.jpg",
    },
    {
        name: "Sarah Jenkins 9",
        position: "TECH INFLUENCER",
        content: "Purity Alpha literally took my YouTube channel from 2k to 50k subs in just 3 months. Their strategy is elite.",
        image: "/images/client1.jpg",
    },
]

const Testimonials = () => {

    const [visibleCount, setVisibleCount] = useState(3);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const updateVisibleCount = () => {
            if (window.innerWidth < 640) setVisibleCount(1)
            else if (window.innerWidth < 1024) setVisibleCount(2)
            else setVisibleCount(3)
        }

        updateVisibleCount()
        window.addEventListener("resize", updateVisibleCount)
        return () => window.removeEventListener("resize", updateVisibleCount)
    }, [])

    useEffect(() => {
        setIndex((prev) =>
            Math.min(prev, testimonials.length - visibleCount)
        )
    }, [visibleCount])

    const visibleTestimonials = testimonials.slice(
        index,
        index + visibleCount
    )

    const next = () => {
        setIndex((prev) =>
            Math.min(prev + visibleCount, testimonials.length - visibleCount)
        )
    }

    const prev = () => {
        setIndex((prev) => Math.max(prev - visibleCount, 0))
    }

    return (
        <section className="mt-16 md:mt-22 scroll-mt-22 mx-auto" id="alpha-circle">
            <div className="max-w-6xl mx-auto px-3 h-full flex flex-col gap-8 md:gap-12">
                <div className="flex flex-col gap-4 md:flex-row justify-between">
                    <div className="flex flex-col gap-4">
                        <h2 className="px-2 md:px-0 text-my-black text-4xl md:text-6xl font-bold">Testimonials</h2>
                        <p className="text-lg max-w-xl px-2 md:px-0">Hear what our clients say about working with us.</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={prev} disabled={index === 0}
                            className="h-max p-4 ring ring-my-gray/20 rounded-full cursor-pointer hover:bg-my-blue transition hover:text-my-white hover:scale-120 disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            <ArrowLeft />
                        </button>
                        <button
                            onClick={next}
                            disabled={index >= testimonials.length - visibleCount}
                            className="h-max p-4 ring ring-my-gray/20 rounded-full cursor-pointer hover:bg-my-blue transition hover:text-my-white hover:scale-120 disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            <ArrowRight />
                        </button>
                    </div>
                </div>
                <div>
                    <div className={`min-h-100 grid gap-6 ${visibleCount === 1 ? "grid-cols-1" :
                        visibleCount === 2 ? "grid-cols-2" :
                            "grid-cols-3"
                        }`}>
                        <AnimatePresence mode="wait">
                            {visibleTestimonials.map((t, i) => (
                                <motion.div
                                    key={index + i}
                                    initial={{ opacity: 0, x: 40 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -40 }}
                                    transition={{ duration: 0.35, ease: "easeOut" }}
                                    className="bg-white p-10 rounded-4xl shadow-md shadow-my-gray/10 flex flex-col justify-center gap-6 md:gap-8">
                                    <div className="flex gap-5 justify-left items-center">
                                        <div className="rounded-3xl p-1 h-max bg-my-white shadow-md shadow-my-gray/20">
                                            <Image src={t.image} alt={t.name} width={60} height={60} className="rounded-3xl" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-my-black">{t.name}</p>
                                            <p className="text-[17px] font-medium tracking-wider text-my-blue">{t.position}</p>
                                        </div>
                                    </div>
                                    <p className="text-lg font-light">"{t.content}"</p>
                                    <div className="text-yellow-400 text-xl" aria-label="5 out of 5 stars">
                                        <span aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;