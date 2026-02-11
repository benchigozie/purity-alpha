"use client"

import { scrollToId } from '@/utils/ScrollToId'
import Image from 'next/image'

const Footer = () => {
    return (
        <section className="mt-16 md:mt-22 mx-auto bg-my-black text-neutral-300 pt-10 md:pt-16">
            <div className="max-w-6xl mx-auto px-3 h-full flex flex-col gap-8 md:gap-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20">
                    <div className='flex flex-col gap-12 md:mr-10'>
                        <div className='flex gap-4 items-center'>
                            <div className="w-max h-max">
                                <Image src="/images/alphamedialogo.png" className='relative -left-0.5' width={55} height={100} alt='' />
                            </div>
                            <p className='text-4xl font-bold'>Alpha Media</p>
                        </div>
                        <p className='text-lg'>Purity Alpha is the standard for high-performance content creation. We engineer the infrastructure of tomorrow's biggest icons.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        <div className='order-2 md:order-1'>
                            <h4 className="text-lg text-my-blue font-semibold">LINKS</h4>
                            <ul className="mt-3">
                                <li>
                                    <button onClick={() => { scrollToId('studios') }} className='cursor-pointer'>
                                        Studios
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => {scrollToId('membership')}} className='cursor-pointer'> 
                                        Pricing
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => { scrollToId('alpha-circle') }} className='cursor-pointer'>
                                        Testimonials
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className='order-1 md:order-2'>
                            <h4 className="text-lg text-my-blue font-semibold">CONNECT</h4>
                            <div className="flex gap-2 mt-3">
                                <a href="https://web.facebook.com/profile.php?id=61575962561164" target='_blank'>
                                    <Image src="/images/facebook.png" width={35} height={35} alt='' />
                                </a>
                                <a href="https://www.instagram.com/alphamediang_/" target='_blank' className='relative bottom-1.5'>
                                    <Image src="/images/instagram.png" width={45} height={45} alt='' />
                                </a>
                                <a href="https://www.tiktok.com/@alphamediang_?lang=en" target='_blank'>
                                    <Image src="/images/tiktok.png" width={35} height={35} alt='' />
                                </a>
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