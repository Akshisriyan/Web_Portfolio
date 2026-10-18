import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './globals.css';

// Font Awesome's CSS is imported above, so stop it injecting a second copy at runtime
config.autoAddCss = false;

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display-face',
  weight: ['600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  title: 'Akshitha Sriyanjith — Software Engineer',
  description:
    'Akshitha Sriyanjith - Software Engineer | Portfolio showcasing web development, mobile apps, and cloud computing projects',
  keywords: ['Software Engineer', 'Full Stack Developer', 'Web Development', 'Flutter', 'React', '.NET', 'Java Spring Boot'],
  authors: [{ name: 'Akshitha Sriyanjith' }],
  icons: { icon: '/favicon.svg', apple: '/favicon.svg' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f7fb' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0c16' },
  ],
};

// Runs before first paint so the saved / system theme is applied without a flash
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.setAttribute('data-theme',t)}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
