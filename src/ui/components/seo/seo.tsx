import Head from 'next/head'
import React from 'react'
interface Props{
    description: string;
    title: string;
}

export default function Seo({ description, title }: Props) {
  return (
    <Head >
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
    </Head>
  )
}
