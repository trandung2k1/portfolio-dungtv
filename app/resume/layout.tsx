import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Resume - Tran Dung',
  description:
    'Tran Dung - Software Engineer specializing in web development, cloud computing, and more. Explore my portfolio, skills, and experience.',
  keywords: [
    'Tran Dung',
    'CV',
    'Resume',
    'Portfolio',
    'Software Engineer',
    'Web Developer',
    'Cloud Computing',
    'React Developer',
    'Node.js',
    'Frontend Developer',
    'Tran Dung Resume',
    'Full Stack Developer',
  ],
  robots: 'index, follow',
  applicationName: 'Tran Dung Portfolio',
  generator: 'Next.js',
  // icons: {
  //   icon: '/favicon.ico',
  //   apple: '/favicon.ico',
  //   shortcut: '/favicon.ico',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
