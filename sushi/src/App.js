import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Cart from "./components/Cart/Cart";
import Hero from "./components/Hero/Hero";
import Catalog from "./components/Catalog/Catalog";
import News from "./components/News/News";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <div className="flex flex__container">
                <Aside/>
                <main className="main__content">
                    <Header/>
                    <Hero/>
                    <Catalog/>
                    <News/>
                    <About/>
                    <Footer/>
                </main>
                <Cart/>
            </div>
        </>
    );
}

export default App;
