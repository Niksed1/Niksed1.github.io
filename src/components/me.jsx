'use client';
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";
export default function Me()
{

    return(
        <div className=" pt-10 flex flex-col items-center ">
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" />

            <div className="flex flex-col items-center font-mont text-5xl text-neutral-content">
                <p>Hello world, I'm Alex </p>
                <p>a web developer</p>
            </div>
            <Link href="/#projects">
                <div 
                    className="font-mont text-xl text-neutral-content bou px-4 py-2 rounded animate-bounce mt-10"
                    style={{ width: 'auto' }}
                >
                    my work ↓
                </div>
            </Link>
        </div>
    );
}