"use client";
import Image from 'next/image';
import myImage from '../lib/Vector-1.avif';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiNodedotjs, SiTailwindcss, SiMysql } from 'react-icons/si';
import Link from "next/link";

export default function About() {
    return (
        <div id="about" className="min-h-screen flex flex-col justify-start items-center pl-5 border-gray-500 text-neutral-content pt-12">
            <div className="relative w-full text-center">
                <h1 className="text-6xl text-neutral-content relative inline-block">
                <span className="text-pink-200">About</span> Me
                </h1>
            </div>
            <div className="w-full flex flex-row mt-24">
                <div className="w-1/2 ml-24 flex flex-col justify-center">
                    <div className="text-2xl">
                        <p>I hold a Bachelor’s degree in <span className="text-pink-200">Computer Science</span> from the University of California, Irvine.</p>
                        <br/>
                        <p>Since middle school, I have been passionate to make a meaningful impact on the world through technology.</p>
                        <p>This passion led me to create websites to assist local dance teams, create AI-augmented chat for mental health support, and join the <span className="text-pink-200">Design and Partnership Lab @ UCI</span> as a full-stack student developer.</p>
                        <p>At DAP Lab We've built tools that provide access to college resources, mental health support, and counseling services for students and teachers.</p>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <Image src={myImage} alt="Description of image" width={250} height={200} className="" />
                    <div className="flex flex-col items-center space-y-2">
                        <div className="flex space-x-4">
                            <SiTailwindcss size={100} color="#38B2AC" />
                            <SiMysql size={100} color="#4479A1" />
                        </div>
                        <div className="flex space-x-4">
                            <FaReact size={100} color="#61DAFB" />
                            <SiNextdotjs size={100} color="#000000" />
                            <SiNodedotjs size={100} color="#339933" />
                        </div>
                    </div>
                </div>
            </div>
            <Link href="/#projects">
                <div 
                    className="font-mont text-xl text-neutral-content bou px-4 py-2 rounded animate-bounce mt-24">
                    my work ↓
                </div>
            </Link>
        </div>
    );
}