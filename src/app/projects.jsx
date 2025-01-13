"use client";
import Image from 'next/image';
import img from '../lib/landing.png';
import Link from "next/link";
import Footer from "../components/footer";
export default function Projects() {
    return(
        <div id="projects" className="text-xl h-screen flex flex-col items-center justify-end ">
            <fieldset className="flex flex-row border border-gray-500 p-5 rounded-md max-w-7xl relative">
                <div className="flex-1 mr-7">
                    <p className="text-6xl mb-5"><span className="text-pink-200">Careergram</span></p>
                    <p className="max-w-lg">
                    A career exploration platform enhanced with <span className="text-pink-200">AI</span>, designed to explore career opportunities, 
                    fostering the development of youths' occupational identities. 
                    </p> 
                    <br/>
                    <p className="max-w-lg mb-10">
                    Integrated <span className="text-pink-200">OpenAI's ChatGPT</span> to enable personalized reflections through AI-powered natural language processing. 
                    </p>
                    <div className="absolute bottom-0 left-0 mb-10 ml-10">
                        <Link href="https://github.com/Design-and-Partnership-Lab/tangram-demo" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-outline btn-secondary mr-3 text-lg px-6">&lt;GitHub&gt;</button>
                        </Link>
                        <Link href="https://careergram.edsight.io/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-outline btn-secondary text-lg px-6">&lt;Website&gt;</button>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center bg-gradient-to-r from-purple-100 via-pink-200 to-fuchsia-900 rounded-md">
                    <Image src={img} width={600} height={300} alt="Careergram" className="mt-12 mb-12 ml-5 mr-5 rounded-lg" />
                </div>
            </fieldset>
            <Link href="/#top"> 
                <div 
                    className="text-xl text-neutral-content bou px-4 py-2 rounded animate-bounce mt-5">
                    back ↑
                </div>
            </Link>
            <Footer />
        </div>
    );
}