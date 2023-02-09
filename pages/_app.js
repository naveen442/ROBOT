import '@/styles/globals.css';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.css'
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header/>
      <Component {...pageProps} />
    </div>
  )
}
