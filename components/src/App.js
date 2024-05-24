import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Banner 
                title="Welcome to Bacchus's Movie Library!!!" 
                text="Your One-Stop Shop for the Latest Movies and Series." 
                buttons={[
                    { text: "Movies Catalogue", style: "button-secondary", link: "#movie-catalogue" },
                    { text: "Series Catalogue", style: "button-primary", link: "#series-catalogue" }
                ]}
            />
            <Gallery />
            <Footer />
        </div>
    );
}

export default App;

