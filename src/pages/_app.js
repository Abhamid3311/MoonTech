import '@/styles/globals.css'
import { store } from '@/redux/store';

import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider } from "next-auth/react";




export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return <SessionProvider session={pageProps.session}>
    <Provider store={store}> {getLayout(<Component {...pageProps} />)}</Provider>
  </SessionProvider>
}