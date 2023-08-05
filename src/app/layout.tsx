// app/layout.tsx

import './globals.css'
import {Providers} from "./providers";

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='h-full'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}