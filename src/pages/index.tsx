import ContactContainer from '@/ui/components/contact/contact.container'
import Layout from '@/ui/components/layout/layout'
import Footer from '@/ui/components/navigation/footer'
import Seo from '@/ui/components/seo/seo'
import React from 'react'

export default function Home() {
  return (
    <>
      <Seo description='ParisFoot' title='Site de paris'/>
      <Layout className='bg-gray'>
        <ContactContainer/>
        <Footer/>
      </Layout>
    </>
  )
}
