/** @format */

import React, { useState } from "react";
import Container from "../container/container";
import Typography from "@/ui/designSystem/typography/typography";
import { Input } from "@/ui/designSystem/forms/input";
import { SubmitHandler, useForm } from "react-hook-form";
import Avatar from "@/ui/designSystem/avatar/avatar";
import Button from "@/ui/designSystem/button/button";
import {
  RiCupFill,
  RiFlashlightFill,
  RiFootballFill,
  RiTelegram2Fill
} from "react-icons/ri";
interface FormData {
  nom: string;
  prenom: string;
  numeroDeTelephone: string;
  message: string;
}
export default function AbonneEtape() {
  const [isLoading, setisLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Données soumises :", data);
    setisLoading(true);
    reset();
    setisLoading(false); // Reset loading state after successful submission
  };
  return (
    <div>
      <Container className="py-8">
        <Typography variant="h4">
          <span className="text-primary">3 étapes</span> pour rejoindre <br />
          <span className="text-primary">Parieurs Foot</span>
        </Typography>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 sm:grid-cols-3 sm:gap-8 mt-8"
          >
            <div className="col-span-2 mb-10 sm:mb-auto space-y-10">
              <div className="bg-white p-4 md:p-8 rounded">
                <Typography variant="h4" theme="gray">
                  1 - Choisissez votre{" "}
                  <span className="text-primary">FORMULE</span>
                </Typography>
                <Typography theme="gray" className="pt-4">
                  <div className="lg:justify-between items-center hidden lg:flex">
                    <div>Formule</div>
                    <div>Prix</div>
                  </div>
                  <hr className="text-gray hidden lg:block" />
                  <div className="my-4">
                    <label
                      htmlFor="troisJours"
                      className="grid grid-cols-1 mb:grid-cols-3 items-center my-4"
                    >
                      <div className="flex items-center gap-4">
                        <input type="radio" name="boutton" id="troisJours" />
                        <div className="font-bold sm:font-normal">Formule decouverte</div>
                      </div>
                      <div className="text-center sm:text-right">3 jours d{"'"}accès depronostic*</div>
                      <div className="text-center sm:text-right">1.00 €</div>
                    </label>
                    <label
                      htmlFor="unMois"
                      className="grid grid-cols-1 sm:grid-cols-3 items-center my-4"
                    >
                      <div className="flex items-center gap-4">
                        <input type="radio" name="boutton" id="unMois" />
                        <div className="font-bold sm:font-normal">Formule 1 mois</div>
                      </div>
                        <div></div>
                      <div className="text-center sm:text-right">39 €</div>
                    </label>
                    <label
                      htmlFor="troisMois"
                      className="grid grid-cols-1 mb:grid-cols-3 items-center my-4"
                    >
                      <div className="flex items-center gap-4">
                        <input type="radio" name="boutton" id="troisMois" />
                        <div className="font-bold sm:font-normal">Formule 3 mois</div>
                      </div>
                      <div className="text-center sm:text-right">
                        39 € * 3 = <span className="line-through">117 €</span>{" "}
                      </div>
                      <div className="text-center sm:text-right">79 €</div>
                    </label>
                    <label
                      htmlFor="sixMois"
                      className="grid grid-cols-1 mb:grid-cols-3 items-center my-4"
                    >
                      <div className="flex items-center gap-4">
                        <input type="radio" name="boutton" id="sixMois" />
                        <div className="font-bold sm:font-normal">Formule 6 mois</div>
                      </div>
                      <div className="text-center sm:text-right">
                        39 € * 6 = <span className="line-through">234 €</span>{" "}
                      </div>
                      <div className="text-center sm:text-right">159 €</div>
                    </label>
                  </div>
                </Typography>
              </div>
              <div className="bg-white p-4 md:p-8 rounded">
                <Typography variant="h4" theme="gray">
                  2 - Vos <span className="text-primary">coordonnées</span>
                </Typography>
                <Typography className="space-y-8 mt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 items-center sm:space-x-4 w-full">
                    <Input
                      isLoading={isLoading}
                      placeholder="Prenom"
                      type="email"
                      register={register}
                      errors={errors}
                      errorMsg="Champs obligatoire"
                      id="prenom"
                      required={true}
                      isAutoCompleted={false}
                    />
                    <Input
                      isLoading={isLoading}
                      placeholder="Nom"
                      type="email"
                      register={register}
                      errors={errors}
                      errorMsg="Champs obligatoire"
                      id="prenom"
                      required={true}
                      isAutoCompleted={false}
                    />
                  </div>
                  <Input
                    isLoading={isLoading}
                    placeholder="Téléphone"
                    type="email"
                    register={register}
                    errors={errors}
                    errorMsg="Champs obligatoire"
                    id="prenom"
                    required={true}
                    isAutoCompleted={false}
                  />
                  <Input
                    isLoading={isLoading}
                    placeholder="Adresse de messagerie"
                    type="email"
                    register={register}
                    errors={errors}
                    errorMsg="Champs obligatoire"
                    id="prenom"
                    required={true}
                    isAutoCompleted={false}
                  />
                </Typography>
              </div>
              <div className="bg-white p-4 md:p-8 rounded">
                <Typography variant="h4" theme="gray">
                  3 - Moyens de <span className="text-primary">paiement</span>
                </Typography>
                <Typography className="space-y-8 mt-4" theme="gray">
                  <label htmlFor="sixMois" className="flex items-center my-2 sm:my-4">
                    <div className="flex items-center sm:gap-4">
                      <input type="radio" name="boutton" id="sixMois" />
                      <div>Paiement par carte bancaire</div>
                      <Avatar src="/assets/images/visa1.png" alt="visa1" />
                      <Avatar src="/assets/images/americanExpress.png" alt="americanExpress" className="py-4" />
                      <Avatar src="/assets/images/mastercard.png" className="py-2" alt="mastercard" />
                    </div>
                  </label>
                  <Input
                    isLoading={isLoading}
                    placeholders="1234 1234 1234 1234"
                    type="email"
                    register={register}
                    errors={errors}
                    errorMsg="Champs obligatoire"
                    id="prenom"
                    required={true}
                    isAutoCompleted={false}
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 items-center sm:space-x-4 w-full">
                    <Input
                      isLoading={isLoading}
                      placeholders="MM/AA"
                      type="text"
                      register={register}
                      errors={errors}
                      errorMsg="Champs obligatoire"
                      id="prenom"
                      required={true}
                      isAutoCompleted={false}
                    />
                    <Input
                      isLoading={isLoading}
                      placeholders="CVC"
                      type="email"
                      register={register}
                      errors={errors}
                      errorMsg="Champs obligatoire"
                      id="prenom"
                      required={true}
                      isAutoCompleted={false}
                    />
                  </div>
                  <Typography variant="caption4" theme="grad">
                    * Conditions de l’offre découverte : 1€ pour les 3 premiers
                    jours et reconduction tacite (automatique) à 29,90€ / mois
                    sans désengagement de votre part. Ne pas re-créer un nouveau
                    compte à la fin de l’offre d’essai si vous continuez
                    l’engagement.
                  </Typography>
                </Typography>
                <div className="flex justify-center pt-10">
                  <Button type="submit" className="min-w-1/3 rounded-full mx-auto">
                    S{"'"}abonner
                  </Button>
                </div>
              </div>
              <div className="items-center justify-center bg-white rounded p-6">
                <Typography theme="gray" className="text-center">Paiement sécurisé</Typography>
                <div className="flex justify-center items-center pt-4">
                  <Avatar src="/assets/images/visa.webp" alt="visa" size="large" />
                  <Avatar src="/assets/images/mastercard.png" alt="mastercard" size="large" />
                  <Avatar src="/assets/images/stripe.png" alt="stripe" size="large" />
                  <Avatar src="/assets/images/americanExpress.png" alt="americanExpress" size="large" />
                  <Avatar src="/assets/images/discover.png" alt="americanExpress" size="large" />
                </div>
              </div>
            </div>
            <div className="w-full justify-center">
              <div className="bg-white p-4 md:p-8 rounded">
                <Typography theme="gray">
                  Tu es à <span className="text-primary">1 min </span> d’accéder
                  à...
                </Typography>
                <Typography theme="gray" variant="caption4" className="py-6">
                  Accès en illimité aux pronostics. Analyse en avant match,
                  pronos en direct, viens vivre une expérience esport unique !
                </Typography>
                <div className="flex items-center my-5 gap-2 sm:gap-6">
                  <RiFootballFill className="text-primary text-5xl" />
                  <Typography variant="h4" theme="primary">
                    Pronostics Football
                  </Typography>
                </div>
                <Typography theme="gray">
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
                <div className="flex items-center my-5 gap-2 sm:gap-6">
                  <RiFlashlightFill className="text-primary text-5xl" />
                  <Typography variant="h4" theme="primary">
                    Pronostics montantes
                  </Typography>
                </div>
                <Typography theme="gray">
                  Découvre les montantes proposées par David. Avec une mise de
                  départ, le but sera de faire x5, x10 et même x50 ! Notre
                  équipe sélectionne pour vous les paliers les plus sûrs.
                </Typography>
                <hr className="text-white my-9" />
                <div className="flex items-center my-5 gap-2 sm:gap-6">
                  <RiCupFill className="text-primary text-5xl" />
                  <Typography variant="h4" theme="primary">
                    Jeux Concours
                  </Typography>
                </div>
                <Typography theme="gray">
                  Des freebets, des invitations aux lives privés, places de
                  football, des maillots de football à gagner chaque mois,
                  exclusivement pour les membres payants de Parieurs Foot.
                </Typography>
                <hr className="text-white my-9" />
                <div className="flex items-center my-5 gap-2 sm:gap-6">
                  <RiTelegram2Fill className="text-primary text-5xl" />
                  <Typography variant="h4" theme="primary">
                    Groupe Telegram
                  </Typography>
                </div>
                <Typography theme="gray">
                  Pour ne rien rater, accède à notre groupe Telegram pour
                  recevoir instantanément une notification lorsqu’un pronostic
                  est disponible ou qu’un live va démarrer.
                </Typography>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
