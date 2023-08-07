// app/layout.tsx

import './globals.css'
import {Providers} from "./providers";
import Head from './head';

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='h-full'>
      <Head />
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}