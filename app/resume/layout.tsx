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

// export const metadata: Metadata = {
//   title: 'Resume - Tran Dung',
//   description:
//     'Tran Dung - Software Engineer specializing in web development, cloud computing, and more. Explore my portfolio, skills, and experience.',
//   keywords: [
//     'Tran Dung',
//     'CV',
//     'Resume',
//     'Portfolio',
//     'Software Engineer',
//     'Web Developer',
//     'Cloud Computing',
//     'React Developer',
//     'Node.js',
//     'Frontend Developer',
//     'Tran Dung Resume',
//     'Full Stack Developer',
//   ],
//   robots: 'index, follow',
//   applicationName: 'Tran Dung Portfolio',
//   generator: 'Next.js',
//   // icons: {
//   //   icon: '/favicon.ico',
//   //   apple: '/favicon.ico',
//   //   shortcut: '/favicon.ico',
//   // },
// };
export const metadata: Metadata = {
  title: 'Portfolio - Tran Dung',
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
  //   icon: '/favicon1.ico',
  //   apple: '/favicon1.ico',
  //   shortcut: '/favicon1.ico',
  // },
  alternates: {
    canonical: 'https://trandung.online',
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    title: 'Portfolio - Tran Dung',
    description:
      'Tran Dung - Software Engineer specializing in web development, cloud computing, and more. Explore my portfolio, skills, and experience.',
    url: 'https://trandung.online',
    siteName: 'Tran Dung Portfolio',
    images: [
      {
        url: 'https://trandung.online/education.png',
        width: 1200,
        height: 630,
        alt: 'Tran Dung Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Tran Dung',
    description:
      'Tran Dung - Software Engineer specializing in web development, cloud computing, and more. Explore my portfolio, skills, and experience.',
    creator: '@tran_dung2001',
    images: ['https://trandung.online/education.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://trandung.online" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
