import { Lato } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from '@/components/shared/theme-provider';
import ThemeWrapper from '@/components/shared/ThemeWrapper';
import Head from 'next/head';

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-lato',
})

export const metadata = {
  title: "HRBox Africa website",
  description: "Everything HR/ Your People our Priority/ We know people",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} antialiased bg-[#eef9ff]`}
      >
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
         <ThemeWrapper>
          {children}
         </ThemeWrapper>
      </body>
    </html>
  );
}
