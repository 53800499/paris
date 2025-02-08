/** @format */

import React from "react";
import Container from "../container/container";
import Typography from "@/ui/designSystem/typography/typography";
import Button from "@/ui/designSystem/button/button";

export default function Contact() {
  return (
    <div className="bg-white">
      <Container className="py-20">
        <Typography theme="gray" variant="h4" className="text-center">
          Restez en contact avec{" "}
          <span className="text-primary">Parieurs Foot !</span>
        </Typography>
        <div className="flex justify-center">
          <form className="w-full w-2/3 min-w-[300px] p-4">
            <div className="flex justify-between border border-primary rounded-full mb-4">
              <input
                className="shadow appearance-none rounded-full w-full rounded-r py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Adresse email"
              />
              <Button className="bg-primary text-white rounded-full w-full rounded-l px-4 py-2">Rejoindre la communauté</Button>
            </div>
            <div className="flex gap-2 items-center">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <label htmlFor="checkbox">J’accepte de recevoir la newsletter de Parieurs Foot</label>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
