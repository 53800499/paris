/** @format */

import Button from "@/ui/designSystem/button/button";
import Typography from "@/ui/designSystem/typography/typography";
import React from "react";
import Container from "../container/container";

export default function ContactView() {
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
      <div></div>
    </Container>
  );
}
