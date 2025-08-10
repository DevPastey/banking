'use client'
import Image from "next/image"
import Menu from "@/src/icons/hamburger.svg";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { useState } from "react";


import { motion } from "motion/react";
import { cn } from "@/lib/utils";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/app/components/ui/sheet"



  const MobileNav = ({ user }: MobileNavProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
      setIsOpen((isOpen) => !isOpen)
      console.log(isOpen);
    };

  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        {/* Trigger - stays as one element (SVG) */}
        <SheetTrigger asChild>
          <Menu className="cursor-pointer" width={30} height={30} />
        </SheetTrigger>

        {/*
          Tailwind slide:
          - start off-screen: -translate-x-full
          - when Radix sets data-state="open", Tailwind applies translate-x-0
          - transition handles the animation
        */}
        <SheetContent className="" side="left"
           
        >
          <div className="px-4 py-6">
            <SheetHeader className="sr-only">
              <SheetTitle>Menu Navigation</SheetTitle>
              <SheetDescription>
                This contains all the links to navigate through the app.
              </SheetDescription>
            </SheetHeader>

            <div className="flex items-center gap-3">
              <Link href="/icons/logo.svg" className="flex items-center gap-1">
                <Image
                  src="/icons/logo.svg"
                  width={34}
                  height={34}
                  alt="logo"
                  className="size-[24px] max-xl:size-[24px]"
                />
              </Link>
              <h1 className="font-ibm-plex-serif text-[26px] font-bold text-black">
                Horizon
              </h1>
            </div>

            <p className="mt-3">Welcome {user?.firstName}</p>
          </div>

          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto px-4">
            <nav className="flex h-full flex-col gap-3 pt-4">
              {sidebarLinks.map((link) => {
                const Icon = link.imgURL
                const isActive =
                  pathname === link.route ||
                  (pathname.startsWith(`${link.route}`) && link.route !== "/")

                return (
                  // ONE SheetClose per link — it closes the sheet and still allows navigation
                  <SheetClose asChild key={link.route}>
                    <Link
                      href={link.route}
                      className="w-full"
                    >
                      {/* Link has exactly one child (the span) — avoids React.Children.only errors */}
                      <span
                        className={`flex items-center gap-3 rounded-lg p-4 w-full transition-colors duration-200 ${
                          isActive
                            ? "bg-bankGradient text-white"
                            : "hover:bg-gray-100 text-black"
                        }`}
                      >
                        <Icon
                          width={20}
                          height={20}
                          stroke={isActive ? "white" : undefined}
                          className="w-6 h-6"
                          style={{ filter: isActive ? "brightness(3)" : "none" }}
                        />
                        <span className={`${isActive ? "text-white" : "text-black"}`}>
                          {link.label}
                        </span>
                      </span>
                    </Link>
                  </SheetClose>
                )
              })}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav
