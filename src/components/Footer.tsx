import Image from 'next/image'

const Footer = () => {
    return (
        <section className="mt-16 md:mt-22 mx-auto bg-my-black text-neutral-300 pt-10 md:pt-16">
            <div className="max-w-6xl mx-auto px-3 h-full flex flex-col gap-8 md:gap-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20">
                    <div className='flex flex-col gap-12 md:mr-10'>
                        <div className='flex gap-4 items-center'>
                            <div className="p-2 rounded-full bg-my-white w-max h-max">
                                <Image src="/images/purityalphalogo.svg" className='relative -left-0.5' width={55} height={100} alt='' />
                            </div>
                            <p className='text-4xl font-bold'>Purity Alpha</p>
                        </div>
                        <p className='text-lg'>Purity Alpha is the standard for high-performance content creation. We engineer the infrastructure of tomorrow's biggest icons.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        <div className='order-2 md:order-1'>
                            <h4 className="text-lg text-my-blue font-semibold">LINKS</h4>
                            <ul className="mt-3">
                                <li>Elite Studios</li>
                                <li>Services</li>
                                <li>Memberships</li>
                                <li>Alpha Circle</li>
                            </ul>
                        </div>
                        <div className='order-1 md:order-2'>
                            <h4 className="text-lg text-my-blue font-semibold">CONNECT</h4>
                            <div className="flex gap-4 mt-3">
                                <div className="p-2 rounded-3xl bg-my-blue/15 border border-my-gray/20"></div>
                                <div className="p-2 rounded-3xl bg-my-blue/15 border border-my-gray/20"></div>
                                <div className="p-2 rounded-3xl bg-my-blue/15 border border-my-gray/20"></div>
                                <div className="p-2 rounded-3xl bg-my-blue/15 border border-my-gray/20"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-5 border-t border-my-gray/30'>
                    <p className="text-center text-sm md:text-base">
                        &copy; {new Date().getFullYear()} Purity Alpha. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer