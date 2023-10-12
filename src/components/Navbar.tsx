"use client"

import * as React from "react"
import { Moon, Sun, Menu } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import Image from "next/image"
import LogoUnivalleClaro from '../../public/LogoUnivalleClaro.jpeg'
import LogoUnivalleOscuro from '../../public/LogoUnivalleOscuro.jpeg'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { navbarLinks } from "@/constants"

export default function Navbar() {
  const { setTheme } = useTheme()
  return (
    <nav className="flex flex-row justify-around  items-center bg-[#7a0030] ">
      <div className="flex">
        <Image
          src={LogoUnivalleOscuro}
          alt="Logo univalle"
          height={100}
          width={300}
        />

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex">
            {
              navbarLinks.map((navbarLink) => (
                <NavigationMenuItem key={navbarLink.id}>
                  <Link href={`/${navbarLink.id}`} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {navbarLink.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))
            }
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="hidden lg:flex">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Claro
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Oscuro
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              Sistema
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="lg:hidden flex">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:text-white text-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {
              navbarLinks.map((navbarLink) => (
                <DropdownMenuItem key={navbarLink.id} >
                  <Link href={`/${navbarLink.id}`} legacyBehavior passHref>
                    {navbarLink.title}
                  </Link>
                </DropdownMenuItem>
              ))
            }

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Claro
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Oscuro
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  Sistema
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}
