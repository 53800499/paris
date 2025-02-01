/** @format */

import { FooterLink } from "@/types/app-links";
import { AppLinks } from "@/types/app-links";

export const footerApplicationLinks: AppLinks[] = [
  {
    label: "Option de payement",
    baseUrl: "https://www.paypal.com",
    type: "external"
  },
  {
    label: "Service client",
    baseUrl: "/contact",
    type: "internal"
  },
  {
    label: "F.A.Q",
    baseUrl: "/#",
    type: "internal"
  },
  {
    label: "Politique de protection des données",
    baseUrl: "/#",
    type: "internal"
  }
];
export const footerApplicationUsers: AppLinks[] = [
  {
    label: "Mon compte",
    baseUrl: "/",
    type: "internal"
  },
  {
    label: "Mentions légales",
    baseUrl: "/#",
    type: "internal"
  },
  {
    label: "Politique de confidentialité",
    baseUrl: "/#",
    type: "internal"
  },
  {
    label: "Conditions générales de vente",
    baseUrl: "/#",
    type: "internal"
  }
];

export const footerLinks: FooterLink[] = [
  {
    label: "Liens util",
    links: footerApplicationUsers
  },
  {
    label: "Contacts",
    links: footerApplicationLinks
  }
];
export const navMenus = [
  
  {
    name: "Telegram",
    link: "/#telegram"
  },
  {
    name: "Espace members",
    link: "/#espace-members"
  }
];
