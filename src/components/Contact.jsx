import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

export const Contact = () => {
  return (
    <section id="contact" className='bg-gray-950 py-16 px-6'>
        <div className='mx-auto'>
            <h2 className='text-center text-5xl font-bold text-gray-300 mb-12'>Contact Me</h2>
            <div className='grid lg:grid-cols-2 gap-10'>
                {/* contact info */}
                <div className='flex flex-col justify-center space-y-8'>
                    <div>
                        <h1 className='text-4xl text-left text-gray-300 font-bold lg:text-6xl'>Let's Talk</h1>
                        <p className='text-gray-300 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam nihil cupiditate deleniti quas autem.</p>
                        <h3 className='text-gray-300 text-2xl font-semibold'>Email</h3>
                        <p className='text-gray-600 mt-2'>
                            <a href="mailto:shivamksbau504@gmail.com" className='text-blue-500 hover:underline'>shivamksbau504@gmail.com</a>
                        </p>
                    </div>
                    <div>
                        <h3 className='text-2xl text-gray-300 font-semibold'>Phone</h3>
                        <p className='text-gray-600 mt-2'>
                            <a href="tel:+91 9958870589" className='text-blue-500 hover:underline'>+91 9958870589</a>
                        </p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold text-gray-300'>Follow Me</h3>
                        <div className='flex gap-3 mt-5 text-2xl transition-all'>
                            <FaFacebook className='text-blue-400'/>
                            <FaInstagram className='text-blue-400'/>
                            <FaLinkedin className='text-blue-400'/>
                            <FaSquareXTwitter className='text-blue-400'/>
                        </div>
                    </div>
                </div>
                {/* Contact Form */}
                <div className='bg-gray-900 rounded-lg shadow-blue-500 p-8 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)]'>
                    <h3 className='text-gray-300 font-semibold text-3xl mb-6'>Get in Touch</h3>
                    <form action="" className='space-y-6'>
                        <div>
                            <label htmlFor="name" className='block text-gray-300 text-sm font-medium'>Name</label>
                            <input type="name" id='name' placeholder='Your Name' className='mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500' />
                        </div>
                        <div>
                            <label htmlFor="email" className='block text-gray-300 text-sm font-medium'>Email</label>
                            <input type="email" id='email' placeholder='Your Email' className='mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500' />
                        </div>
                        <div>
                            <label htmlFor="message" className='block text-sm font-medium text-gray-300'>Message</label>
                            <textarea name="message" id="message" rows={5} placeholder='Your Message' className='mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500'></textarea>
                        </div>
                        <button type='submit' className='bg-blue-500 w-full text-white p-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors'>Send Me</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}
