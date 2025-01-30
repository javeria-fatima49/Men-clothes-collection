import Header from '@/components/Header';
import './globals.css';
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
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
    <ClerkProvider>
    <html lang="en">
      <body>
      <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        <Header />
           <main>{children}</main>
           
      </body>
    </html>
    </ClerkProvider>
  );
}
