/** @format */

import React from "react";
import Container from "../container/container";
import Typography from "@/ui/designSystem/typography/typography";
import Button from "@/ui/designSystem/button/button";

export default function Question() {
  return (
    <div>
      <Container className="my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div></div>
          <div>
            <Typography variant="h4" className="text-center">
              Foire aux <span className="text-primary">questions</span>
            </Typography>
            <hr className="my-10 text-white" />
            <Typography theme="primary" className="mb-4">
              Foire aux questions Pourquoi avoir créé Parieurs Foot ?
            </Typography>
            <Typography>
              Je partage depuis bientôt dix ans mes connaissances dans le
              domaine du pronostic football. Mon objectif ? Aller encore plus
              loin et t’apporter toujours plus de conseils. Parieurs Foot te
              propose du contenu vidéo quotidien et également de vibrer avec toi
              devant chaque match.
            </Typography>
            <hr className="my-10 text-white" />
            <Typography theme="primary" className="mb-4">
              Comment rejoindre le Telegram pour accéder aux pronostics ?
            </Typography>
            <Typography>
              Tu souhaites être informé de la sortie de nos contenus (vidéos,
              lives, etc.) ? Si tu rejoins notre groupe Telegram, nous
              t’enverrons des notifications pour que tu ne rates aucune
              actualité. Pour cela, il te suffit de télécharger Telegram et de
              t’abonner à notre conversation
            </Typography>
            <hr className="my-10 text-white" />
            <Typography theme="primary" className="mb-4">
              Les pronostics sur le football sont-ils fiables ?
            </Typography>
            <Typography>
              Tous les pronostics football sur Internet manquent de fiabilité.
              Chez Parieurs Foot, nous suivons avec rigueur l’actualité sportive
              depuis des années afin de proposer la meilleure fiabilité de nos
              pronostics. Nous partageons nos analyses complètes chaque jour
              afin que tu saches exactement d’où viennent nos conseils en paris
              sportifs.
            </Typography>
          </div>
        </div>
        <hr className="my-15 text-white" />
        <div className="flex flex-wrap justify-between items-center my-15">
            <Typography className="h4">Rejoins le <span className="text-primary">Club Parieurs Foot</span>  dès maintenant !</Typography>
            <div>
                <Button className="rounded">S{"'"}inscrire maintenant</Button>
            </div>
        </div>
      </Container>
    </div>
  );
}
