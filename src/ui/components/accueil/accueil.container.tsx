import React from 'react'
import ContactView from './contact.view'
import Rejoindre from './rejoindre'
import Ticket from './ticket'
import Temoignage from './temoignage'
import Question from './question'
import Contact from './contact'

export default function AccueilContainer() {
  return (
    <>
      <ContactView/>
      <Rejoindre/>
      <Ticket/>
      <Temoignage/>
      <Question/>
      <Contact/>
    </>
  )
}
