/** @format */

import { REGISTERED } from "@/lib/session-status";
import Layout from "@/ui/components/layout/layout";
import Seo from "@/ui/components/seo/seo";
import React from "react";

export default function EspaceMembre() {
  return (
    <>
      <Seo description="ParisFoot" title="Site de paris" />
      <Layout sessionStatus={REGISTERED} className="bg-gray">
        <div className="bg-white">
          <h1>Hello World</h1>
        </div>
      </Layout>
    </>
  );
}
