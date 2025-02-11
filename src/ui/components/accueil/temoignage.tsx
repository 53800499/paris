import React from 'react'
import Container from '../container/container'
import Typography from '@/ui/designSystem/typography/typography'
import Image from 'next/image'

export default function Temoignage() {
  return (
    <div className='bg-white py-20'>
      <Container>
        <Typography theme='gray' variant='h4' className='text-center'>Les <span className='text-primary   text-center'>témoignages</span>  de notre communauté</Typography>
        {/* Temoignages */}
        <Typography theme='gray' className='text-center'>Retrouve-ci dessous l’ensemble des retours des parieurs qui nous suivent et des tickets gagnants que nous recevons chaque semaine sur nos réseaux. Si toi aussi, tu es satisfait du service, envoie-nous tes tickets et tes avis pour donner de la force à Parieurs Foot !</Typography>
        {/* Card */}
        <div className='flex gap-4 justify-center mt-10'>
          <div>
            <Image src="/assets/images/temoignage1.jpg" alt="Ticket 2" width={200} height={100} />
          </div>
          <div>
            <Image src="/assets/images/temoignage1.jpg" alt="Ticket 2" width={200} height={100} />
          </div>
          {/* <div>
            <Image src="" alt="Ticket 2" width={100} height={100} />
          </div> */}
        </div>
      </Container>
    </div>
  )
}
