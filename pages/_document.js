import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
class WebDocument extends Document
{
    render()
    {
        return (
            <Html lang="en-US" className="scroll-smooth">
                <Head>
                    <link rel="icon" type="image/png" href="images/favicon.png" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link
                        href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
                        rel="stylesheet"
                    />
                    <Script strategy="afterInteractive" dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MG9F62J');`}}></Script>
                </Head>
                <body>
                    <noscript dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MG9F62J"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
                    <Main />
                    <NextScript>
                    </NextScript>
                </body>
            </Html>
        )
    }
}
export default WebDocument