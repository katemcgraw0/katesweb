import '@/styles/globals.css'
import CustomCursor from '../components/customCursor';

export default function App({ Component, pageProps }) {
  return (
    <>
      <CustomCursor />
      <Component {...pageProps} />
    </>
  );
}