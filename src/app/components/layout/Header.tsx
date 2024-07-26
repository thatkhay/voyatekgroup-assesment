"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import bell from "../../../assets/bell.svg";
import wallet from "../../../assets/wallet.svg";
import info from "../../../assets/info.svg";
import settings from "../../../assets/settings.svg";
import profile from "../../../assets/profile.svg";
import menu from "../../../assets/more.png";
import MobileMenu from "./MobileMenu";

type Props = {};

const Header: React.FC<Props> = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<div className="h-[80px] px-4 py-[20px] flex flex-col md:flex-row items-center gap-4 justify-between bg-white shadow-md fixed left-0 right-0 z-50">
			<div className="w-full md:w-1/2 flex flex-col md:flex-row items-center gap-4 sm:flex-col">
				<Image src={logo} alt="logo" width={40} height={40} />

				<form className="w-full md:w-auto flex-grow">
					<label
						htmlFor="default-search"
						className="mb-2 text-sm font-medium text-gray-900 sr-only"
					>
						Search
					</label>
					<div className="relative">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg
								className="w-4 h-4 text-gray-500"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 20"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
								/>
							</svg>
						</div>
						<input
							type="search"
							id="default-search"
							className="block w-full px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500"
							placeholder="Search here..."
							required
						/>
					</div>
				</form>
			</div>
			<div className="w-full md:w-auto flex flex-col md:flex-row items-center gap-4 md:gap-x-8 text-[#647995] max-sm:hidden">
				<ul className="flex flex-col md:flex-row gap-4 md:gap-x-6 w-full md:w-auto ">
					<li className="flex flex-col gap-y-2 items-center">
						<Image src={bell} width={15} height={15} alt="icon" />
						<span className="text-[12px]">Notifications</span>
					</li>
					<li className="flex flex-col gap-y-2 items-center">
						<Image src={wallet} width={15} height={15} alt="icon" />
						<span className="text-[12px]">Wallet</span>
					</li>
					<li className="flex flex-col gap-y-2 items-center">
						<Image src={info} width={15} height={15} alt="icon" />
						<span className="text-[12px]">Inquiries</span>
					</li>
					<li className="flex flex-col gap-y-2 items-center">
						<Image src={settings} width={15} height={15} alt="icon" />
						<span className="text-[12px]">Settings</span>
					</li>
				</ul>
				<Image src={profile} alt="icon" width={40} height={40} />
			</div>
			<div className="hidden max-sm:flex absolute top-8 right-5 w-6  items-center flex-col" onClick={toggleMobileMenu}>
				<div className="w-6 h-[1px] bg-black mb-1"></div>
				<div className="w-6 h-[1px] bg-black mb-1"></div>
				<div className="w-6 h-[1px] bg-black mb-1"></div>
			</div>

			{isMobileMenuOpen && <MobileMenu />}
		</div>
	);
};

export default Header;
