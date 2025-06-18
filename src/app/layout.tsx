import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Selva | MERN Stack Developer',
  description:
    "Hi, I'm Selva, a MERN Stack Developer building fast, scalable React & Next.js apps. Explore my portfolio & projects!",
  keywords:
    'MERN Developer, React Developer, Node Developer, Selva, MERN Stack Developer, React, Node.js, Express, MongoDB, Frontend Engineer, Full-Stack Developer, Next js, TypeScript',
  applicationName: 'Selva Portfolio',
  authors: [{ name: 'Selva' }],
  robots: 'index, follow',

  openGraph: {
    title: 'Selva - MERN Stack Developer',
    description:
      "Hi, I'm Selva, a MERN Stack Developer building fast, scalable React & Next.js apps.",
    url: 'https://selva-briefview.vercel.app',
    type: 'website',
    images: [
      {
        url: 'https://selva-briefview.vercel.app/screenshot-desktop.png',
        width: 1200,
        height: 630,
        alt: 'Selva Portfolio',
      }
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Selva | MERN Stack Developer',
    description: "Showcasing Selva's expertise in MERN stack development.",
    images: ['https://selva-briefview.vercel.app/screenshot-desktop.png'],
  },

  verification: {
    google: '_XQOyHXHilWx3j2XV-ha7iZXjimXsP_Zh0VvDE5MfUE',
    other: {
      bing: 'A8F3F0C4B0D4E4EF608341951E6A3EE9',
      msvalidate: 'A8F3F0C4B0D4E4EF608341951E6A3EE9',
    },
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Selva',
  jobTitle: 'MERN Stack Developer',
  url: 'https://selva-briefview.vercel.app',
  sameAs: [
    'https://www.linkedin.com/in/selva-mern',
    'https://github.com/selva-mern12',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
  description:
    'Experienced MERN Stack Developer specializing in scalable web applications.',
  knowsAbout: [
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'MongoDB',
    'JavaScript',
    'TypeScript',
    'HTML5',
    'CSS3',
    'REST APIs',
    'Git & GitHub',
    'Responsive Design',
    'Web Performance Optimization',
    'SEO Best Practices',
    'JWT Authentication',
    'Form Handling',
    'Server-side Rendering (SSR)',
    'Client-side Rendering (CSR)',
    'Progressive Web Apps (PWA)',
    'Frontend Architecture',
    'Backend Development',
    'Deployment (Vercel, Netlify, Render)',
    'Database Design',
    'Mongoose',
    'JSON',
    'Asynchronous Programming',
    'State Management',
    'React Hooks',
    'React Router',
    'EmailJS / Nodemailer',
  ]

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script id="gtm-head" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=GTM-W46LL7GR'+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W46LL7GR');
          `}
        </Script>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="theme-color" content="#000000" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <link rel="canonical" href="https://selva-briefview.vercel.app" />

        {/* Fonts performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link rel="manifest" href="/manifest.json" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://selva-briefview.vercel.app",
            "name": "Selva Portfolio",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://selva-briefview.vercel.app/?search={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }) }}
        />
      </head>
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1KBZDHEM2Q"
          strategy="beforeInteractive"
        />
        <Script id="ga-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1KBZDHEM2Q', {
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure',
            });
          `}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W46LL7GR"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        {children}
      </body>
    </html>
  );
}