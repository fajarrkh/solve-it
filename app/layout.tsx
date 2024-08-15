import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/app/globals.css";
import { cn } from '@/app/lib/utils';
import Sidebar from '@/app/components/Sidebar';
import Navbar from '@/app/components/Navbar';

const fontSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: "SolveIT",
  description: "Solve your problem by IT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-dark-300 font-sans antialiased', fontSans.variable)}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-6 bg-gray-100 ml-[20%] mt-[5vh]">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
