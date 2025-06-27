import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Quote Generator',
  description: 'Random inspirational quotes',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
