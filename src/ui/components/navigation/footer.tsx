/** @format */

import React from "react";
import Container from "../container/container";
import Typography from "@/ui/designSystem/typography/typography";
import { footerLinks } from "./app-link";
import { v4 as uuidv4 } from "uuid";
import ActiveLink from "./active-link";
import { FooterLink } from "@/types/app-links";
import { LinkType } from "@/lib/link-type";
import Link from "next/link";
import { RiShieldCheckFill } from "react-icons/ri";
//import Avatar from "@/ui/designSystem/avatar/avatar";

export default function Footer() {
  //const currentYear = new Date().getFullYear();

  // Générer la liste dynamique des liens du footer
  const footNavigationList = footerLinks.map((columnLinks) => (
    <FooterLinks key={uuidv4()} data={columnLinks} />
  ));

  return (
    <div className="py-10 bg-gray">
      <Container className="grid grid-cols-1 sm:grid-cols-2 justify-between pt-4 space-y-4 md:space-y-0 sm:space-x-8">
        <div className="flex flex-col space-y-4  me-2 ">
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
          <Typography variant="caption1" className="mt-5">
            Parieurs Foot est un média de conseil en paris football accessible à
            toutes personnes majeures. Nous proposons chaque jour du contenu,
            des analyses et des pronostics pour vous aider à prendre les
            meilleures décisions dans les paris football. Notre équipe vous
            accompagne 5j/7, de 9h à 19H.
          </Typography>
        </div>
        <div className="grid grid-cols-2 gap-4">{footNavigationList}</div>
      </Container>
      <Container className="space-y-11 pb-4 pt-4">
        <Typography variant="caption1" theme="white" className="text-center">
          {`Copyright © ${new Date().getFullYear()} eskay_dev`}
        </Typography>
      </Container>

      {/* <Container className="space-y-11 pb-2 pt-2">
        <hr className="w-full ps-2 border-gray-4" />
        <div className="flex flex-wrap items-center justify-between gap-1 text-center md:text-center">
          <Typography variant="caption1" theme="gray">
            {`Copyright © 2010 - ${currentYear}`}
          </Typography>
        <div className="flex items-center justify-center">
          <Avatar
            src="/assets/images/badge2.png"
            alt="Logo"/>
          <Avatar
            src="/assets/images/badge3.png"
            alt="Logo"/>
          <Avatar
            src="/assets/images/badge4.png"
            alt="Logo" />
          <Avatar
            src="/assets/images/badge1.png"
            alt="Logo"/>
          <Avatar
            src="/assets/images/Badge.jpg"
            alt="Logo"/>
        </div>
        </div>
      </Container> */}
    </div>
  );
}

interface footerLinkProps {
  data: FooterLink;
}

const FooterLinks = ({ data }: footerLinkProps) => {
  const linksList = data.links.map((link) => (
    <div key={uuidv4()} className="mb-1 md:mb-4 grid-row">
      {link.type === LinkType.INTERNAL && (
        <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
      )}
      {link.type === LinkType.EXTERNAL && (
        <a href={link.baseUrl} target="_blank" rel="noopener noreferrer">
          {link.label}
        </a>
      )}
    </div>
  ));

  return (
    <div className="">
      <Typography
        theme="primary"
        variant="h4"
        weight="medium"
        className="mb-4 lg:mb-7"
      >
        {data.label}
      </Typography>
      <Typography theme="white" variant="caption1" className="">
        {linksList}
      </Typography>
    </div>
  );
};
