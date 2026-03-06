import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import { Suspense } from "react";
import Script from "next/script";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";

import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Alpha Media",
  description: "Alpha Media is a content creation agency that helps creators and brands grow their online presence through strategic content creation and production.",
  icons: {
    icon: "/images/alphamedialogo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vr8b28zthg");
          `}
        </Script>
        <Script 
        id="meta-pixel"
        strategy="afterInteractive"
        >{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1637731120440004');
          fbq('track', 'PageView');
          `}
        </Script>
        <noscript><img height="1" width="1" style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1637731120440004&ev=PageView&noscript=1"
        /></noscript>

      </head>
      <body
        className={`${geistSans.variable} ${inter.variable} antialiased`}
      >
        <Header />
        <Suspense fallback={null}>
          <AnalyticsTracker />
        </Suspense>
        <main className="bg-my-white">
          {children}
        </main>
      </body>
    </html>
  );
}
