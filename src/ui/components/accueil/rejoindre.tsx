/** @format */

import React from "react";
import Container from "../container/container";
import Typography from "@/ui/designSystem/typography/typography";
import {
  RiCupFill,
  RiFlashlightFill,
  RiFootballFill,
  RiTelegram2Fill
} from "react-icons/ri";
import Button from "@/ui/designSystem/button/button";
import Image from "next/image";

export default function Rejoindre() {
  return (
    <Container className="bg-white py-2 sm:py-10">
      <Typography theme="gray" variant="h3" className="text-center">
        Rejoins la{" "}
        <span className="text-primary">communauté Parieurs Foot</span>{" "}
      </Typography>
      <Container className="bg-gray lg:mt-10 rounded grid grid-cols-1 sm:grid-cols-2 relative overflow-hidden">
        {/* Image qui prend toute la droite */}
        <div className="relative w-full min-h-[500px] hidden sm:block">
          <Image
            src="/assets/images/ecranParis2.png"
            alt="accueil"
            width={1000}
            height={550}
            className="object-cover absolute inset-0 w-full h-full left-[-50px] lg:left-[-100px] hover:scale-105 transition-transform duration-500" 
          />
        </div>
        <div className="lg:py-10 py-2">
          <Typography>
            Accès en illimité aux pronostics de Parieurs Foot. Pronostic avant
            match, réaction en live sur telegram, viens partager ta passion des
            pronostics avec la team !
          </Typography>
          <div className="flex items-center my-5 gap-6">
            <RiFootballFill className="text-primary text-5xl" />
            <Typography variant="h4" theme="primary">
              Pronostics Football
            </Typography>
          </div>
          <Typography>
            <ul className="list-disc  ">
              <li className="flex items-center gap-2">
                <div className="bg-white w-2 h-2 rounded-full mr-2"></div>
                Pronostics ( double chance, remboursés sécurisés…)
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <div className="bg-white w-2 h-2 rounded-full mr-2"></div>{" "}
                Pronostics buteurs
              </li>
              <li className="flex items-center gap-2">
                <div className="bg-white w-2 h-2 rounded-full mr-2"></div>
                Pronostics funs (et oui on aime tous vibrer devant un gros
                combiné)
              </li>
            </ul>
          </Typography>
          <hr className="text-white my-9" />
          <div className="flex items-center my-5 gap-6">
            <RiFlashlightFill className="text-primary text-5xl" />
            <Typography variant="h4" theme="primary">
              Pronostics montantes
            </Typography>
          </div>
          <Typography>
            Découvre les montantes proposées par David. Avec une mise de départ,
            le but sera de faire x5, x10 et même x50 ! Notre équipe sélectionne
            pour vous les paliers les plus sûrs.
          </Typography>
          <hr className="text-white my-9" />
          <div className="flex items-center my-5 gap-6">
            <RiCupFill className="text-primary text-5xl" />
            <Typography variant="h4" theme="primary">
              Jeux Concours
            </Typography>
          </div>
          <Typography>
            Des freebets, des invitations aux lives privés, places de football,
            des maillots de football à gagner chaque mois, exclusivement pour
            les membres payants de Parieurs Foot.
          </Typography>
          <hr className="text-white my-9" />
          <div className="flex items-center my-5 gap-6">
            <RiTelegram2Fill className="text-primary text-5xl" />
            <Typography variant="h4" theme="primary">
              Groupe Telegram
            </Typography>
          </div>
          <Typography>
            Pour ne rien rater, accède à notre groupe Telegram pour recevoir
            instantanément une notification lorsqu’un pronostic est disponible
            ou qu’un live va démarrer.
          </Typography>
          <div className="flex justify-center items-center my-5 gap-6">
            <Button className="rounded">Rejoins la team</Button>
          </div>
        </div>
      </Container>
      <Container className="my-2 lg:my-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="col-span-2">
          <Typography variant="h4" theme="gray">
            Rejoins-nous <span className="text-primary">gratuitement</span> sur{" "}
            <span className="text-primary">Telegram</span>
          </Typography>
          <Typography theme="gray" className="my-8">
            Ajoute-nous sur Telegram pour recevoir les alertes et être notifié
            quand les pronostics sont disponibles. Nous donnons aussi chaque
            jour les résultats des pronostics et si tu as de la chance quelques
            pronostics en live gratuits pour te convaincre de nous faire
            confiance !
          </Typography>
          <div>
            <Button className="rounded">Rejoins Telegram</Button>
          </div>
        </div>
        <div></div>
      </Container>
    </Container>
  );
}
