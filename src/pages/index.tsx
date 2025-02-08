import AccueilContainer from '@/ui/components/accueil/accueil.container'
import Layout from '@/ui/components/layout/layout'
import Seo from '@/ui/components/seo/seo'
import React from 'react'

export default function Home() {
  return (
    <>
      <Seo description='Site de paris' title='ParisFoot'/>
      <Layout isDisplayCreadCrumbs={false} className='bg-gray'>
        <AccueilContainer/>
      </Layout>
    </>
  )
}
