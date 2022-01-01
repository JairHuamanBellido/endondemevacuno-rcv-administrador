import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#FF1A59" />

          <meta
            name="application-name"
            content="En Donde Me Vacuno - Gestión"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="En Donde Me Vacuno - Gestión"
          />
          <meta
            name="description"
            content="Aplicación de gestión para responsables de centro de vacunación"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#FF1A59" />

          <link rel="apple-touch-icon" href="/icon.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/icon.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icon.png" />
          <link rel="apple-touch-icon" sizes="167x167" href="/icon.png" />

          <link rel="icon" type="image/png" sizes="32x32" href="/icon.svg" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icon.svg" />
          <link rel="mask-icon" href="/icon.svg" color="#FF1A59" />
          <link rel="shortcut icon" href="/favicon.ico" />

          {/* <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://yourdomain.com" />
          <meta name="twitter:title" content="En Donde Me Vacuno - Gestón" />
          <meta
            name="twitter:description"
            content="Aplicación de gestión para responsables de centro de vacunación"
          />
          <meta
            name="twitter:image"
            content="https://yourdomain.com/icons/android-chrome-192x192.png"
          />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="En Donde Me Vacuno - Gestón" />
          <meta
            property="og:description"
            content="Aplicación de gestión para responsables de centro de vacunación"
          />
          <meta property="og:site_name" content="En Donde Me Vacuno - Gestón" />
          <meta property="og:url" content="https://yourdomain.com" />
          <meta
            property="og:image"
            content="https://yourdomain.com/icons/apple-touch-icon.png"
          />

          <link
            rel="apple-touch-startup-image"
            href="/images/apple_splash_2048.png"
            sizes="2048x2732"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple_splash_1668.png"
            sizes="1668x2224"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple_splash_1536.png"
            sizes="1536x2048"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple_splash_1125.png"
            sizes="1125x2436"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple_splash_1242.png"
            sizes="1242x2208"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple_splash_750.png"
            sizes="750x1334"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple_splash_640.png"
            sizes="640x1136"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
