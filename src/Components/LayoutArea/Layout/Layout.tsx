import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Links from "../Links/Links";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    const date= new Date();
    const thisYear = date.getFullYear()


    return (
        <div className="Layout">
            
            <header>
                <Header />
            </header>

            <aside>
                <Links />
            </aside>

            <main>
               <Routing />
            </main>
           
            <footer>
                <Footer year={thisYear} />
            </footer>

        </div>
    );
}

export default Layout;
