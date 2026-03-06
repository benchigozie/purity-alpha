import Image from "next/image";

type Card = {
    icon: string;
    heading: string;
    text: string;
}

const cards: Card[] = [
    { icon: '/images/stars.png', heading: "Content Strategy", text: "Helping creators turn ideas into reality with custom roadmaps designed to scale your authority and reach across digital platforms." },
    { icon: "/images/video.png", heading: "Video Production", text: "Professional 4K recording with cinematic lighting and elite sound engineering to make your content stand out."},
    { icon: "/images/movie.png", heading: "Video Editing", text: "High-energy cinematic cuts, trending transitions, and viral pacing specifically tailored for each social media platform."},    
    { icon: "/images/script.png", heading: "Script Writing", text: "Psychology-backed scripts designed for maximum retention, conversion, and community engagement."},    
    { icon: "/images/content.png", heading: "Content Planning", text: "Organized content calendars and systems to ensure consistent publishing without the creator burnout."},    
]

const Process = () => {

    return (
        <section className="mt-16 md:mt-26 mx-auto">
            <div className="max-w-6xl mx-auto px-3 flex flex-col">
                <h2 className="text-my-black text-4xl md:text-6xl font-bold px-2">Our Process</h2>
                <p className="text-lg max-w-xl mt-3 px-2">Alpha Media runs the system. You bring the vision. We manage everything that happens off-camera so your creativity stays front and center.</p>
                <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                 { cards.map((card) => (
                    <div
                        key={card.heading}
                        className='overflow-clip group bg-my-white hover:shadow-md ring ring-my-gray/10 hover:-translate-y-3 hover:ring-my-blue/40 hover:shadow-my-gray/10 rounded-4xl p-8 md:p-14 transition-all duration-300 flex flex-col gap-6 justify-center relative'
                    >
                       <div className="p-3 md:p-5 rounded-4xl bg-my-blue/10 w-max">
                        <Image className="w-8 h-8 md:w-11 md:h-11" src={card.icon} alt="" width={45} height={45} />
                       </div>
                       <h3 className="mt-3 text-xl md:text-2xl text-my-black font-bold">{card.heading}</h3>
                       <p className="text-lg">{card.text}</p>
                    </div>
                  ))}
                </div>
            </div>
        </section>
    )
}

export default Process;