/** @format */

import React from "react";
import Container from "../container/container";
import Typography from "@/ui/designSystem/typography/typography";
import { RiAddBoxLine, RiHeadphoneFill, RiSecurePaymentFill } from "react-icons/ri";

export default function securite() {
  return (
    <div className="bg-white">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
        <div className="text-center">
          <div>
            <RiSecurePaymentFill className="text-primary text-8xl m-auto" />
          </div>
          <Typography theme="primary" variant="h4" className="py-4">Traitement sécurisé</Typography>
          <Typography theme="gray">
            Chaque commande est traitée de manière totalement sécurisée, cryptée
            sur 256 bits, afin de garantir votre confidentialité.
          </Typography>
        </div>
        <div className="text-center">
          <div>
            <RiAddBoxLine className="text-primary text-8xl m-auto" />
          </div>
          <Typography theme="primary" variant="h4" className="py-4">Abonnement</Typography>
          <Typography theme="gray">
            Votre abonnement est reconduit en tacite reconduction pour la même durée de l’engagement choisi. Vous pouvez vous désabonner sur le site dans la rubrique « Mon Compte » puis dans l’onglet « Abonnement ».
          </Typography>
        </div>
        <div className="text-center">
          <div>
            <RiHeadphoneFill className="text-primary text-8xl m-auto" />
          </div>
          <Typography theme="primary" variant="h4" className="py-4">Traitement sécurisé</Typography>
          <Typography theme="gray">
            Chaque commande est traitée de manière totalement sécurisée, cryptée
            sur 256 bits, afin de garantir votre confidentialité.
          </Typography>
        </div>
      </Container>
    </div>
  );
}
