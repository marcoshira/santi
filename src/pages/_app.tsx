import { GlobalStyles } from '../styles/global-styles';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { BlogThemeProvider } from '../contexts/BlogThemeContext';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <BlogThemeProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </BlogThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
