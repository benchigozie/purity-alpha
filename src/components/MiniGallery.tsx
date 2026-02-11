"use client";

import { scrollToId } from "@/utils/ScrollToId";
import Image from "next/image";
import { useEffect, useState } from "react";

const MiniGallery = ({ images, name }: { images: string[], name: string }) => {
    const [active, setActive] = useState(0);

    const prevImage = () => setActive((prev) => (prev - 1 + images.length) % images.length);
    const nextImage = () => setActive((prev) => (prev + 1) % images.length);


    useEffect(() => {
        if (images.length <= 1) return;

        const id = setInterval(() => {
            setActive((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(id);
    }, [images.length]);

    return (
        <div className="relative rounded-4xl overflow-hidden h-110 bg-my-gray">
            {images.map((src, i) => (
                <Image
                    key={`${src}-${i}`}
                    src={src}
                    alt=""
                    fill
                    className={`object-cover transition-opacity duration-500 ease-linear ${i === active ? "opacity-100" : "opacity-0"
                        }`}
                />
            ))}

            <div className="px-6 absolute bottom-6 w-full flex flex-col gap-4">
                <p className="text-my-white text-4xl font-bold">{name}</p>
                <button onClick={() => scrollToId('membership')} className="w-full px-7 py-4 ring ring-my-white/50 rounded-3xl text-center text-my-white bg-my-gray/40 backdrop-blur-sm hover:bg-my-blue transition-all duration-300 hover:cursor-pointer">Reserve Space</button>
            </div>

            <div className="absolute bottom-36 left-4 flex gap-1.5 px-5">

                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`h-2 rounded-full transition-[width] duration-400 ${i === active
                            ? "w-5 bg-my-white"
                            : "w-2 bg-my-white/50 hover:bg-my-white/80"
                            }`}
                    />
                ))}
            </div>

            <button
                onClick={prevImage}
                className="absolute top-1/2 hover:cursor-pointer left-4 w-12 h-12 -translate-y-1/2 bg-my-gray/40 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/50 transition"
            >
                &#10094;
            </button>
            <button
                onClick={nextImage}
                className="absolute hover:cursor-pointer top-1/2 right-4 w-12 h-12 -translate-y-1/2 bg-my-gray/40 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/50 transition"
            >
                &#10095;
            </button>
        </div>
    );
};

export default MiniGallery;
