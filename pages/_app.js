import '../styles/globals.css'
import WhatsAppButton from '../components/WhatsAppButton'
import Script from 'next/script'
import Head from 'next/head'

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? ''

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Bem Concreto',
  url: 'https://www.bemconcreto.com',
  description:
    'Plataforma de tokenização imobiliária — investimento em imóveis reais representado por tokens digitais.',
  taxID: '37.566.745/0001-22',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: '+5511965862850',
    availableLanguage: 'Portuguese',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </Head>
      {META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}</Script>
      )}
      <Component {...pageProps} />
      <WhatsAppButton />
    </>
  )
}
