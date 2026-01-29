'use client';

import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { useEffect } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

export default function RootLayout({ children }) {
  useEffect(() => {
    // Custom cursor
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    cursor.id = 'cursor';

    const cursorFollower = document.createElement('div');
    cursorFollower.className = 'cursor-follower';
    cursorFollower.id = 'cursor-follower';

    document.body.appendChild(cursor);
    document.body.appendChild(cursorFollower);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = (e) => {
      if (e.target.closest('a, button, .interactive')) {
        cursor.classList.add('hover');
        cursorFollower.classList.add('hover');
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.closest('a, button, .interactive')) {
        cursor.classList.remove('hover');
        cursorFollower.classList.remove('hover');
      }
    };

    const animate = () => {
      // Smooth cursor movement
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;

      cursor.style.left = cursorX - 6 + 'px';
      cursor.style.top = cursorY - 6 + 'px';
      cursorFollower.style.left = followerX - 20 + 'px';
      cursorFollower.style.top = followerY - 20 + 'px';

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      cursor.remove();
      cursorFollower.remove();
    };
  }, []);

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta name="description" content="Akshitha Sriyanjith - Software Engineer | Portfolio showcasing web development, mobile apps, and cloud computing projects" />
        <meta name="keywords" content="Software Engineer, Full Stack Developer, Web Development, Flutter, React, .NET, Java Spring Boot" />
        <meta name="author" content="Akshitha Sriyanjith" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
