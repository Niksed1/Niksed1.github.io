"use client";
import Image from 'next/image';
import myImage from '../lib/Vector-1.avif';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiNodedotjs, SiTailwindcss, SiMysql } from 'react-icons/si';


export default function About() {
    return (
        <div id="about" className="w-full min-h-screen flex flex-col justify-center items-center pl-5 border-gray-500 text-neutral-content">
        <div className="w-full flex flex-row justify-between items-start">
            <div className="w-1/2 ml-20">
                <section className="wrapper">
                <div className="top text-4xl font-bold mb-4"><span style={{color: 'pink'}}>About me</span></div>
                </section>
                <div className="text-xl">
                    <p>I hold a Bachelor’s degree in <strong>Computer Science</strong> from the University of California, Irvine.</p>
                    <p>Since middle school, I have been passionate about utilizing technology to make a meaningful impact on the world.</p>
                    <p>This passion led me to join the <span style={{ color: 'lightblue' }}>Design and Partnership Lab @ UCI</span> as a <strong>full-stack student developer.</strong></p>
                    <p>At DAP Lab We've built tools that provide access to college resources, mental health support, and counseling services for students and teachers.</p>
                </div>
            </div>
                <div className="w-1/2 flex flex-col items-center">
                    <Image src={myImage} alt="Description of image" width={200} height={200} className="" />
                    <div className="flex flex-col items-center space-y-4 ">
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
        </div>
    );
}


function about() {
    return (
        <div id="about" className="font-mont text-xl h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
            <p>Welcome stranger!</p>
            <p>I hold a Bachelor’s degree in Computer Science from the University of California, Irvine.</p>
            <p>Since middle school, I have been passionate about leveraging technology to make a meaningful impact on the world.</p>
            <p>This passion led me to join the Design and Partnership Lab @ UCI as a full-stack student developer, where I contributed to building tools that empower students and educators by providing access to valuable resources, mental health support, and counseling services.</p>
        </div>
    );
}