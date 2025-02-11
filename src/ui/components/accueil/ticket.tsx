/** @format */

import React from "react";
import Container from "../container/container";
import Typography from "@/ui/designSystem/typography/typography";
import Image from "next/image";
//import Button from "@/ui/designSystem/button/button";

export default function Ticket() {
  return (
    <div>
      <Container className="my-8">
        <Typography
          variant="h4"
          className="text-2xl font-bold text-center my-8"
        >
          Nos tickets <span className="text-primary">gagnants</span>{" "}
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="bg-white rounded-lg shadow-md">
            <Image src="/assets/images/ticket1.png" alt="Ticket 1" width={600} height={100} />
            {/* <Typography theme="gray" className="mt-2">
              Ticket 1
            </Typography> */}
          </div>
          <div className="bg-white rounded-lg shadow-md">
            <Image src="/assets/images/ticket2.png" alt="Ticket 2" width={600} height={100} />
          </div>
          <div className="bg-white rounded-lg shadow-md">
            <Image src="/assets/images/ticket3.png" alt="Ticket 2" width={600} height={100} />
          </div>
        </div>
      </Container>

      {/* <Container className="my-4 lg:my-20 grid grid-cols-1 md:grid-cols-3 gap-10">
      <hr className="text-primary-300 sm:p-8" />
        <div></div>
        <div className="col-span-2">
          <Typography variant="h4" >
            Rejoins-nous <span className="text-primary">gratuitement</span> sur{" "}
            <span className="text-primary">Instagram</span>
          </Typography>
          <Typography  className="my-8">
            Ajoute-nous sur Instagram pour recevoir les alertes et être notifié quand les pronostics sont disponibles. Nous donnons aussi chaque jour les résultats des pronostics et si tu as de la chance quelques pronostics en live gratuits pour te convaincre de nous faire confiance !
          </Typography>
          <div className="flex justify-center mt-4">
            <Button className="rounded" >Rejoins Instagram</Button>
          </div>
        </div>
      </Container> */}
    </div>
  );
}
