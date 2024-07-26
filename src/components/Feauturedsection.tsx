'use client'
import React from 'react'
import Link from 'next/link';

import Coursedata from '../data/music_module.json';
import {HoverEffect}  from './ui/card-hover-effect';
import { title } from 'process';


interface Courses {
    id: number,
    title: String,
    slug: String,
    description: String,
    price: number,
    instructor: String,
    isFeatured: boolean,
    image: String
}


function Feauturedsection(){
    const featuredCourses = Coursedata.courses.filter((course:Courses) => course.isFeatured);
    return(
        <div className='py-12 bg-gray-900 mt-20'>
            <div>
                <div className="text-center">
                    <h2 className='text-base text-teal-600 font-semibold 
                     tracking-wide'>Featured Courses</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight
                    text-white sm:text-4xl'>Learn With the Best</p>
                </div>
            </div>
            <div className='mt-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-8 justify-center'>
                {featuredCourses.map((course:Courses) => (
                    <div key={course.id} className='flex justify-center'>
                       <HoverEffect className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 
                       overflow-hidden h-full max-w-sm'>
                        <div className='p-4 sm:p-6 flex flex-col items-center
                        text-center flex-grow'>
                            <p>{course.title}</p>
                            <p>{course.image}</p>
                            <p>{course.description}</p>
                        </div>
                       </HoverEffect>
                    </div>
                ))}
            </div>
            </div>
            <div className='mt-20 text-center'>
                <Link href={"/courses"} className='px-4 py-2 rounded border border-neutral-600
                text-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
                View all Courses 
                </Link>

            </div>
        </div>
    )
}

export default Feauturedsection;