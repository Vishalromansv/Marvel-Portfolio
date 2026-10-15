import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Vishal Vishwakarma | Marvel Bifrost Portfolio",
  description: "Software Development Engineer & AIML Engineer Portfolio on the Thor Bifrost Highway",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#02000a] text-white overflow-x-hidden m-0 p-0">
        {children}
      </body>
    </html>
  );
}