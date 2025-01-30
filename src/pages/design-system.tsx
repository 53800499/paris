/** @format */

import Container from "@/ui/components/container/container";
import Button from "@/ui/designSystem/button/button";
import React from "react";
import { RiFacebookFill } from "react-icons/ri";

export default function DesignSystem() {
  return (
    <>
      <Container >
        <Button theme="white" className="rounded">coucou</Button>
        <Button theme="white" className="rounded">coucou</Button>

        <Button theme="white" className="rounded">coucou</Button>
      </Container>
      <Container>
        <Button theme="blue" className="rounded">coucou</Button>
        <Button theme="blue" className="rounded">coucou</Button>

        <Button theme="blue" className="rounded">coucou</Button>
      </Container>
      <Container>
        <Button
          theme="white"
          icon={{ icon: RiFacebookFill }}
          className="mx-2 -mt-3 bg-white rounded"
        />
        <Button
          theme="white"
          icon={{ icon: RiFacebookFill }}
          className="mx-2 -mt-3 bg-white rounded"
        />
        <Button
          theme="white"
          icon={{ icon: RiFacebookFill }}
          className="mx-2 -mt-3 bg-white rounded"
        />
        <Button
          theme="white"
          icon={{ icon: RiFacebookFill }}
          className="mx-2 -mt-3 bg-white rounded"
        />
      </Container>
      <Container>
        <Button
          theme="white"
          icon={{ icon: RiFacebookFill }}
          className="mx-2 -mt-3 bg-white rounded-full"
        />{" "}
        <Button
          theme="white"
          icon={{ icon: RiFacebookFill }}
          className="mx-2 -mt-3 bg-white rounded-full"
        />{" "}
        <Button
          theme="white"
          icon={{ icon: RiFacebookFill }}
          className="mx-2 -mt-3 bg-white rounded-full"
        />
        <Button
          theme="blue"
          icon={{ icon: RiFacebookFill }}
          className="mx-2 -mt-3 rounded-full bg-blue"
        />
      </Container>
    </>
  );
}
