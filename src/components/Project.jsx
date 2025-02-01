import React from 'react'
import shoes from '../assets/shoes_export.jpg'

const projects = [
    {
        title: "E-shop Store",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
        techStack: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
        link: "https://business420.netlify.app/",
        github: 'https://github.com/rohitsingh93300/YTBusiness',
        image: shoes, // Replace with your project screenshot
    },
    {
        title: "iNotebook",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
        techStack: ["React", "Node.js", "MongoDB", "ShadCn UI"],
        link: "https://nike-topaz-delta.vercel.app/",
        github: 'https://github.com/rohitsingh93300/YT-Nike',
        image: shoes, // Replace with your project screenshot
    },
    {
        title: "NewsAlexa",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
        techStack: ["React.js", "REST API"],
        link: "https://clothify-two.vercel.app/",
        github: 'https://github.com/rohitsingh93300/YT-Clothify',
        image: shoes, // Replace with your project screenshot
    },
];

export const Project = () => {
    return (
        <section id='project' className='bg-gradient-to-r bg-gray-900 py-16 px-6'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-5xl font-bold text-center text-gray-300 mb-12'>Projects</h2>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        projects.map((project, index) =>(
                            <div key={index} className='bg-gray-950 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105'>
                                <img src={project.image} alt={project.title} className='w-full h-48 object-cover px-3 pt-3 rounded-2xl' />
                                <div className="p-6">
                                    <h3 className='text-2xl font-semibold text-gray-300 mb-2'>{project.title}</h3>
                                    <p className='text-gray-300 mb-4'>{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack.map((tech, idx)=>(
                                            <div key={idx} className='bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full'>{tech}</div>
                                        ))}
                                    </div>
                                    <div className='flex gap-3'>
                                        <a href={project.link}target='_blank' className='inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors'>View Projects</a>
                                        <a href={project.github} className='flex gap-2 items-center bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition-colors'>GitHub</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
