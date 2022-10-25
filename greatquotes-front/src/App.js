import MainHeader from "./components/header/MainHeader";
import NewQuoteForm from "./components/quotes/NewQuoteForm";
import Quotes from "./components/quotes/Quotes";
import FullQuoteView from "./components/quotes/FullQuoteView";
import {Routes,Route} from "react-router-dom";
import {useEffect, useState} from "react";
import WelcomePage from "./components/WelcomePage";
import quoteItem from "./components/quotes/QuoteItem";

function App() {

  return (
    <>
      <MainHeader/>
        <main>
            <Routes>
                <Route  path={"/"} element={<WelcomePage/>}/>
                <Route path = "/welcome/*" element={<WelcomePage />} />
                <Route path = "/newQuote" element={<NewQuoteForm/>}/>
                <Route path = "/quotes" element={<Quotes/>}/>
                <Route path= "/quotes/:quoteId" element={<FullQuoteView/>}/>
            </Routes>
        </main>
    </>
  );
}

export default App;
