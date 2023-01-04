import {BrowserRouter} from "react-router-dom";
import Admin from "./Components/Admin";
import {ToastContainer} from "react-toastify";
import {HelmetProvider, Helmet} from "react-helmet-async"

const App = () => {
    return (
        <>
            <HelmetProvider>
                <ToastContainer rtl={true} position="top-right" theme="colored"/>
                <BrowserRouter>
                    <Admin/>
                </BrowserRouter>
            </HelmetProvider>

        </>
    );
}

export default App;
