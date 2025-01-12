import ContextProvider from "@container/Context";
import "@styles/rest.css"
import "@styles/index.scss"
import Navbar from "@components/navbar/Navbar";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from "@components/footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

config.autoAddCss = false;

const Layout = ({ children }) => {
    return (

        <html lang="en">
            <head >
            </head>
           
            <ContextProvider>
                <Navbar />
                <body>
                    {children}
                    <Footer />
                    <ToastContainer/>

                </body>
            </ContextProvider>
        </html>

    );
}

export default Layout;