'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // App Router için uygun
import classNames from 'classnames';
import logoImg from '@/assets/logo.png';
import Image from 'next/image';
import headerStyles from '@/app/styles/Header.module.css';

function Header() {
    const pathname = usePathname(); // Geçerli rota

    const isActive = (path: string) => pathname === path;

    return (
        <header className={classNames(headerStyles.container)}>
            <Link href="/" className={classNames(headerStyles.logo)}>
                <Image src={logoImg} alt="pochita" priority />
                Leitner
            </Link>
            <nav className={classNames(headerStyles.nav)}>
                <ul className={classNames(headerStyles.ul)}>
                    <li>
                        <Link
                            href="/repetition"
                            className={classNames(headerStyles.link, {
                                [headerStyles.active]: isActive('/repetition'),
                            })}
                        >
                            Practice
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/learning"
                            className={classNames(headerStyles.link, {
                                [headerStyles.active]: isActive('/learning'),
                            })}
                        >
                            Add New Words
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
