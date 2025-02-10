/** @format */

import Button from "@/ui/designSystem/button/button";
import Typography from "@/ui/designSystem/typography/typography";
import React from "react";
import Container from "../container/container";
import Image from "next/image";

export default function ContactView() {
  return (
    <Container className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-hidden relative">
      <div className="flex flex-col justify-center space-y-4 py-8 lg:py-24">
        <Typography variant="h4">
          La communauté{" "}
          <span className="text-primary">
            des parieurs passionnés par le football
          </span>{" "}
          enfin réunis au même endroit !
        </Typography>
        <Typography variant="body">
          Parieurs foot te partage chaque jour les meilleurs pronostics sur
          l’ensemble des plus grands championnats de football européens.
          Pronostics sécurisés, buteurs et funs avec comme ambition de gérer sa
          bankroll comme un pro !
        </Typography>
        <div>
          <Button className="btn-primary rounded">S{"'"}inscrire maintenant</Button>
        </div>
      </div>
      <div className="relative w-full">
        <Image
          src="/assets/images/accueil.png"
          alt="accueil"
          width={700} // Augmente la largeur pour dépasser
          height={450}
          objectFit="cover"
          className="absolute right-[-50px] lg:right-[-100px] hover:scale-105 transition-transform duration-500"
        />
      </div>
    </Container>
  );
}
