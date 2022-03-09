import type { AppProps } from 'next/app';
import '../styles/global.scss';

function FatherComponent({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default FatherComponent;
