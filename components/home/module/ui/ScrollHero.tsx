"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export function HeroScroll() {
	return (
		<div className="flex flex-col overflow-hidden bg-gradient-to-b from-black to-slate-900">
			<ContainerScroll
				titleComponent={
					<>
						{/* Subtle badge */}
						<motion.div
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="mb-6 inline-flex items-center px-4  bg-blue-500/10 border border-blue-500/20 rounded-full">
							<div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
							<span className="text-blue-400 text-sm font-medium">
								Premium Investment Solutions
							</span>
						</motion.div>

						{/* Enhanced heading */}
						<h1 className="text-4xl font-semibold text-white mb-4">
							Maximize Your <br />
							<span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
								Equity Potential
							</span>
						</h1>

						{/* Enhanced description */}
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.8 }}
							className="text-xl  text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
							Strategic investment management and comprehensive financial
							advisory services tailored for{" "}
							<span>institutional investors</span> and{" "}
							<span className="text-blue-400 font-medium">
								high-net-worth individuals
							</span>
							.
						</motion.p>
					</>
				}>
				{/* Enhanced image with Next.js Image component */}
				<div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl shadow-blue-900/10">
					<Image
						src="https://www.launchuicomponents.com/app-dark.png"
						alt="EquityVantage Dashboard"
						height={720}
						width={1400}
						className="mx-auto object-cover h-full object-left-top"
						draggable={false}
						priority
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
				</div>
			</ContainerScroll>
		</div>
	);
}
