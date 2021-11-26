import * as React from 'react';
import Header from '@/components/main/header';
import Footer from '@/components/main/footer';


import { PreloadProvider } from '@/context/PreloadContext';


export default function Layout({ children }) {
  return (
    <>
      <Header />
      <PreloadProvider>{children}</PreloadProvider>
      <Footer />
    </>
  )
}
