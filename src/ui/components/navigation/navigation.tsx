/** @format */

import Button from "@/ui/designSystem/button/button";
import React, { useState } from "react";
import Container from "../container/container";
import Typography from "@/ui/designSystem/typography/typography";
import ActiveLink from "./active-link";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiShieldCheckFill } from "react-icons/ri";
import clsx from "clsx";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="py-4 bg-gray sticky top-0 z-50 shadow-md">
      <Container>
        <nav className="flex justify-between items-center text-white">
          {/* Logo */}
          <Link href="/">
            <Typography
              variant="h2"
              theme="white"
              className="flex items-center gap-3"
            >
              <RiShieldCheckFill />
              <span>ParisFoot</span>
            </Typography>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-7">
            <ActiveLink href="https://www.instagram.com" className="text-2xl">
              Instagram
            </ActiveLink>
            <ActiveLink href="/espace-membre" className="text-2xl">
              Espace Membre
            </ActiveLink>
            <Button baseUrl="/abonne" className="rounded bg-primary">
              Je m&apos;abonne !
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded text-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            aria-label="Ouvrir/fermer le menu mobile"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={clsx(
            "lg:hidden bg-white transition-all duration-300 ease-in-out overflow-hidden",
            {
              "max-h-screen py-4": isMobileMenuOpen,
              "max-h-0": !isMobileMenuOpen,
            }
          )}
        >
          <div className="flex flex-col items-center space-y-4">
            <ActiveLink
              href="https://www.instagram.com"
              className="text-xl text-gray-800"
            >
              Instagram
            </ActiveLink>
            <ActiveLink
              href="/espace-membre"
              className="text-xl text-gray-800"
            >
              Espace Membre
            </ActiveLink>
            <Button
              baseUrl="/abonne"
              className="rounded bg-primary"
            >
              Je m&apos;abonne !
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navigation;
