import type { AppProps } from 'next/app';

function FatherComponent({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default FatherComponent;
