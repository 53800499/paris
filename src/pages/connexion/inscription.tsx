/** @format */

import Seo from "@/ui/components/seo/seo";

import Layout from "@/ui/components/layout/layout";
import RegisterContainer from "@/ui/modules/authentication/register/register.container";
import Breadcrumbs from "@/ui/components/breadcrumbs/breadcrumbs";
import { GUEST } from "@/lib/session-status";

export default function Inscription() {
  return (
    <>
      <Seo
        title="Inscription à ShopiMarket | Accédez à votre espace client"
        description="Créez-vous un compte ShopiMarket pour suivre vos commandes en temps réel, gérer vos informations personnelles et bénéficier de promotions exclusives."
      />

      <Layout sessionStatus={GUEST} isDisplayCreadCrumbs={false}>
        <Breadcrumbs />
        <RegisterContainer />
      </Layout>
    </>
  );
}
