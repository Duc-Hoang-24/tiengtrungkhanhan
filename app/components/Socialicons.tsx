"use client";
import Link from "next/link";
import {FaFacebookMessenger, FaPhone, FaEnvelope} from "react-icons/fa";

type SocialiconProps = {
    href: string;
    type: "phone" | "messeger" | "mail"
};
export default function Socialicon({href, type}: SocialiconProps) {
    const Icon = type == "phone"? FaPhone : type == "messeger"? FaFacebookMessenger: FaEnvelope;

    return (
        <Link 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-950 text-yellow-200 hover:bg-red-700 transition shadow-lg hover:scale-110" 
        >
         <Icon size={25}/>   
        </Link>
    )
}
