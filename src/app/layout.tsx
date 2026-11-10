import React from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-black antialiased selection:bg-[#E5383B] selection:text-white">
        {children}
      </body>
    </html>
  );
}
