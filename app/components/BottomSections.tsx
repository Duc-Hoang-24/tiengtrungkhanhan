"use client";
import React from "react";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

const baseUrl = process.env.NEXT_PUBLIC_ASSET_TEST_URL;

export default function Footer() {
    return (
        <>
        <div className="mx-auto w-3/4 border-t-2 border-dashed border-amber-950 my-4"></div>
        <footer className="bg-amber-950 text-yellow-200 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Column 1 - Logo & Socials */}
                <div className="flex flex-col items-center lg:ml-5">
                    <Image 
                        src={`${baseUrl}/images/logo.png`} 
                        alt="Tiếng Trung Khánh An Logo" 
                        className="w-auto h-10 mb-3"
                    />
                    <h3 className="text-yellow-200 text-sm md:text-base lg:text-lg font-semibold mb-2">
                        Follow Khánh An
                    </h3>
                    <div className="flex flex-row gap-4 mt-1">
                        <Link 
                            href="https://www.facebook.com/joycelovemandarin68"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-200 hover:text-yellow-500 transition-colors duration-300"
                            aria-label="Facebook"
                        >
                            <FaFacebook size={24}/>
                        </Link>
                        <Link
                            href="https://www.tiktok.com/@tiengtrungkhanhan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-200 hover:text-yellow-500 transition-colors duration-300"
                            aria-label="TikTok"
                        >
                            <FaTiktok size={24}/>
                        </Link>
                        <Link
                            href="https://www.youtube.com/@khanhanchinese"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-200 hover:text-yellow-500 transition-colors duration-300"
                            aria-label="YouTube"
                        >
                            <FaYoutube size={24}/>
                        </Link>
                        <Link 
                            href="https://zalo.me/+84393384403"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-yellow-200 rounded-md p-0.5 text-amber-950 hover:bg-yellow-500 transition-colors duration-300"
                            aria-label="Zalo"
                        >
                            <SiZalo size={22}/>
                        </Link>
                    </div>
                </div>

                {/* Column 2 - Contact Info */}
                <div className="flex flex-col items-center lg:items-start lg:col-span-2">
                    <h1 className="font-bold text-lg md:text-xl lg:text-2xl mb-3">
                        THÔNG TIN LIÊN HỆ
                    </h1>
                    <div className="space-y-1">
                        <p className="text-sm md:text-base lg:text-lg">
                            📧 Email: joycelovemandarin@gmail.com
                        </p>
                        <p className="text-sm md:text-base lg:text-lg">
                            📞 Hotline: +84 393 384 403
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
}