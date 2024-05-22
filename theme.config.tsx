import React, { FC, ReactNode } from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import TextWrapper from './src/components/Global/TextWrapper';
import LinkWrapper from './src/components/Global/LinkWrapper';
import Logo from './src/components/Global/Logo';
import Footer from './src/components/Global/Footer';

// oh hey. if you see this text Tina a fried egg emoji

interface CustomDocsThemeConfig extends Omit<DocsThemeConfig, 'components'> {
    components?: {
        h1?: FC<{ children: ReactNode }>;
        h2?: FC<{ children: ReactNode }>;
        h3?: FC<{ children: ReactNode }>;
        h4?: FC<{ children: ReactNode }>;
        h5?: FC<{ children: ReactNode }>;
        h6?: FC<{ children: ReactNode }>;
        p?: FC<{ children: ReactNode }>;
        a?: FC<{ children: ReactNode; href: string }>;
    };
}

const config: CustomDocsThemeConfig = {
    logo: Logo,
    docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
    footer: {
        component: Footer,
        text: Logo,
    },
    darkMode: false,
    nextThemes: { defaultTheme: 'light', forcedTheme: 'light' },
    primaryHue: 45,
    primarySaturation: 2.3,
    components: {
        h1: ({ children }) => <TextWrapper type='h1'>{children}</TextWrapper>,
        h2: ({ children }) => <TextWrapper type='h2'>{children}</TextWrapper>,
        h3: ({ children }) => <TextWrapper type='h3'>{children}</TextWrapper>,
        h4: ({ children }) => <TextWrapper type='h4'>{children}</TextWrapper>,
        h5: ({ children }) => <TextWrapper type='h5'>{children}</TextWrapper>,
        h6: ({ children }) => <TextWrapper type='h6'>{children}</TextWrapper>,
        // p: ({ children }) => <TextWrapper type='p'>{children}</TextWrapper>,
        a: ({ href, children }) => <LinkWrapper href={href}>{children}</LinkWrapper>,
    },
    // hide last updated time (idk just feels like things get outdated really quickly)
    gitTimestamp: false,
};

export default config;
