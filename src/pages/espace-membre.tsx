/** @format */

import Layout from "@/ui/components/layout/layout";
import Seo from "@/ui/components/seo/seo";
import React from "react";

export default function EspaceMembre() {
  return (
    <>
      <Seo description="ParisFoot" title="Site de paris" />
      <Layout className="bg-gray">
        <div className="h-screen">
          <h1 className="text-white">Hello World</h1>
        </div>
      </Layout>
    </>
  );
}
