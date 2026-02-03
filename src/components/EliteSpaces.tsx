import MiniGallery from "./MiniGallery";

const locations = [
    {
        title: "Alpha Pro Studio",
        images: [
            "/images/demostudio.jpg",
            "/images/demostudio.jpg",
            "/images/demostudio.jpg",
        ],
    },
    {
        title: "The Creator Loft",
        images: [
            "/images/demostudio.jpg",
            "/images/demostudio.jpg",
            "/images/demostudio.jpg",
        ],
    },
    {
        title: "Podcast Suite",
        images: [
            "/images/demostudio.jpg",
            "/images/demostudio.jpg",
            "/images/demostudio.jpg",
        ],
    },
];


const EliteSpaces = () => {
    return (
        <section className="mt-16 md:mt-22 mx-auto">
            <div className="max-w-6xl mx-auto px-3 h-full flex flex-col gap-8 md:gap-12">
                <div className="flex flex-col gap-4">
                    <h2 className="text-my-black text-4xl md:text-6xl font-bold">Elite Spaces</h2>
                    <p className="text-lg max-w-xl">Explore multiple angles of our high-performance environments engineered for visual perfection.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <MiniGallery images={locations[0].images} name={locations[0].title} />
                    <MiniGallery images={locations[1].images} name={locations[1].title} />
                    <MiniGallery images={locations[2].images} name={locations[2].title} />

                </div>
            </div>
        </section>
    )
}

export default EliteSpaces