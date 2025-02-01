/** @format */

import Button from "@/ui/designSystem/button/button";
import React, { useState } from "react";
import Container from "../container/container";
import Typography from "@/ui/designSystem/typography/typography";
import ActiveLink from "./active-link";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="">
      <Container className="py-4 ">
        <div className="flex justify-between text-white">
          <Link href="/">
            <Typography variant="h2" theme="white">ParisFoot</Typography>
          </Link>
          <div className=" gap-7 space-x-5 flex items-center">
            <div className="hidden lg:flex items-center space-x-7">
              <ActiveLink href="/" className="text-2xl">
                Instagrame
              </ActiveLink>
              <ActiveLink href="/espace-membre" className="text-2xl">
                Espace Membre
              </ActiveLink>
              <Button
                className=" rounded border-radius bg-primary"
              >
                Je m{"'"}abonne !
              </Button>
            </div>
            <div className="lg:hidden flex items-center space-x-7"> 
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 rounded text-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
                aria-label="Basculer le menu mobile"
              >
                {isMobileMenuOpen ? (
                  <FaTimes size={24} />
                ) : (
                  <FaBars size={24} />
                )}
              </button>
            </div>
          </div>
          {/* Menu Mobile */}
          <div
            className={`lg:hidden bg-white dark:bg-gray-900 transition-max-height duration-300 overflow-hidden ${
              isMobileMenuOpen ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="flex flex-col px-12 py-4 space-y-4">
              <ActiveLink
                href="#about"
                className="block py-2 text-lg transition hover:opacity-80"
              >
                Instagrame
              </ActiveLink>
              <ActiveLink
                href="#work"
                className="block py-2 text-lg transition hover:opacity-80"
              >
                Espace Membres
              </ActiveLink>

              <Button
                className=" rounded border-radius bg-primary"
              >
                Je m{"'"}abonne !
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
