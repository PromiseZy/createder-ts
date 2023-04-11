import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
       <Head>
          {/* Paste the Google Fonts code here */}
          <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
