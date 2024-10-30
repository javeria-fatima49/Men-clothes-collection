import Header from '@/components/Header';
import './globals.css';
export const metadata = {
  title: 'Boy Clothes Collection',
  description: 'A simple boy clothes e-commerce site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
           <main>{children}</main>
           
      </body>
    </html>
  );
}
