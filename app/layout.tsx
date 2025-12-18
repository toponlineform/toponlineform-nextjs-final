import React from 'react';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const viewport: Viewport = {
  themeColor: '#1e3a8a',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://toponlineform.com'),
  title: {
    default: 'TopOnlineForm - Latest Govt Jobs, Sarkari Result, Admit Card 2024',
    template: '%s | TopOnlineForm'
  },
  description: 'TopOnlineForm.com provides fastest updates for Sarkari Result, Latest Govt Jobs, Admit Card, Answer Key, Syllabus and Online Forms for SSC, Bank, Railway, UP Police.',
  keywords: ['Sarkari Result', 'Latest Jobs', 'Govt Jobs 2024', 'Admit Card', 'TopOnlineForm', 'Online Form'],
  authors: [{ name: 'TopOnlineForm Team' }],
  robots: 'index, follow',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://toponlineform.com',
    siteName: 'TopOnlineForm',
    images: [
      {
        url: 'https://toponlineform.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TopOnlineForm - Latest Govt Jobs',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome is required for the icons used in navigation and job details */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="min-h-screen flex flex-col bg-gray-100 font-sans antialiased">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8 max-w-7xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}