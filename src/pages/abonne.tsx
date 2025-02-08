/** @format */

import AbonneContainer from "@/ui/components/abonne/abonne.container";
import Layout from "@/ui/components/layout/layout";
import Seo from "@/ui/components/seo/seo";
import React from "react";

export default function EspaceMembre() {
  return (
    <>
      <Seo description="ParisFoot" title="Site de paris" />
      <Layout className="bg-gray">
        <AbonneContainer/>
      </Layout>
    </>
  );
}
