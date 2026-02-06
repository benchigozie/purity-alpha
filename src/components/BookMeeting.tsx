import { Meeting } from "./Meeting"

const BookMeeting = () => {
    return (
        <section className="mt-20 md:mt-28 mx-auto">
            <div className="max-w-6xl mx-auto px-3 h-full flex flex-col gap-8 md:gap-12">
                <div className="flex flex-col gap-4">
                    <h2 className="text-my-black text-3xl md:text-5xl max-w-5xl mx-auto w-full font-bold">Book A Session</h2>
                    <p></p>
                </div>
                <div className="">
                    <Meeting />
                </div>
            </div>
        </section>
    )
}

export default BookMeeting