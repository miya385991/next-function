import "../styles/main.css";
import '../styles/globals.css'
const Noop = ({ children }) => <>{ children }</>;


function MyApp({ Component, pageProps }) {
    const Layout = Component.Layout ?? Noop;
  return (
    <Layout className="fit">
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp

