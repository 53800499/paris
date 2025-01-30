/** @format */

import Button from "@/ui/designSystem/button/button";
import Link from "next/link";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { navMenus } from "./app-link";
import Container from "../container/container";
import { RiFacebookBoxFill, RiFacebookFill } from "react-icons/ri";
const Navigation = () => {
  return (
    
    <Container className="mt-4 ">
      
      <div className="flex justify-between ">
        <div>
          <Button
          theme="blue"
          icon={{ icon: RiFacebookFill }}
          className="mx-2 -mt-3 rounded-full bg-blue"
        />
          Eskay_dev</div>
        <div>
          {navMenus.map((nav) => (
            <Link href={nav.link} key={uuidv4()} className="mx-2">
              {nav.name}
            </Link>
          ))}
          <Button theme="blue" className="mx-2 -mt-3 rounded border-radius bg-primary">
            Contact
          </Button>
          <Button
          theme="blue"
          icon={{ icon: RiFacebookFill }}
          className="mx-2 -mt-3 rounded-full bg-blue"
        />
        </div>
      </div>
    </Container>
  );
};

export default Navigation;
