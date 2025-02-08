/** @format */

import Button from "@/ui/designSystem/button/button";
import React, { useState } from "react";
import Container from "../container/container";
import Typography from "@/ui/designSystem/typography/typography";
import ActiveLink from "./active-link";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiShieldCheckFill } from "react-icons/ri";
const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="py-4 bg-gray sticky top-0 z-50">
      <Container>
        <div className="flex justify-between text-white">
          <Link href="/">
            <Typography
              variant="h2"
              theme="white"
              className="flex items-center gap-3"
            >
              <div>
                <RiShieldCheckFill />
              </div>{" "}
              <div>ParisFoot</div>
            </Typography>
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
                baseUrl="/abonne"
                className=" rounded border-radius bg-primary"
              >
                Je m{"'"}abonne !
              </Button>
            </div>
          </div>
          <div className="lg:hidden  items-center space-x-7">
            <button
              onClick={toggleMobileMenu}
              className=" p-2 rounded text-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
              aria-label="Basculer le menu mobile"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
