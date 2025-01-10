"use client";
import Image from 'next/image';
import img from '../lib/landing.png';
export default function Projects() {
    return(
        <div id="projects" className="text-xl h-screen text-neutral-content flex flex-col items-center justify-center">
            <fieldset className="flex flex-row border border-gray-500 p-5 rounded-lg max-w-7xl space-x-5">
                <div className= "flex-1">
                    <p className="font-bold text-3xl mb-4"><span style={{ color: 'pink' }}>Careergram</span></p>
                    <p className="text-xl">
                    A career exploration platform enhanced with <strong>AI</strong>, designed to inspire fresh insights and informed decision-making in youth programs, 
                    fostering the development of youths' occupational identities. 
                    </p> 
                    <br/>
                    <p>
                    Integrated <strong>OpenAI's ChatGPT</strong> to enable personalized reflections through AI-powered natural language processing. 
                    Migrated the existing <strong>REST API to GraphQL</strong>, optimizing database management and improving the efficiency of data retrieval.
                    </p>
                </div>
                <div className="flex-1 flex flex-col items-center relative bg-pink-100 rounded-md " >
                    <Image src={img} width={700} height={500} alt="Careergram" className="mt-7 rounded-lg shadow-2xl relative" />
                </div>
            </fieldset>
        </div>
    );
}