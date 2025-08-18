'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ContactIcons from '../Contact/ContactIcons';

const SideBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <Image src="/images/me.jpg" alt="Arthur Gassner" width={200} height={200} priority />
        </Link>
        <header>
          <h2>Arthur Gassner</h2>
          <p>
            <a href="mailto:arth.gassner@gmail.com">arth.gassner@gmail.com</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          Hi, I&apos;m Arthur. I am an ML Engineer, <a href="https://www.epfl.ch/en">EPFL</a>{' '}
          graduate and passionate about solving problems through data.
        </p>
        <ul className="actions">
          <li>
            {pathname && !pathname.includes('/resume') ? (
              <Link href="/resume" className="button">
                Learn More
              </Link>
            ) : (
              <Link href="/about" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Michael D&apos;Angelo <Link href="/"></Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
