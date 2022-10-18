import MainHeader from "./components/header/MainHeader";
import NewQuoteForm from "./components/quotes/NewQuoteForm";
import Quotes from "./components/quotes/Quotes";
import FullQuoteView from "./components/quotes/FullQuoteView";
import {Routes,Route} from "react-router-dom";
import {useEffect, useState} from "react";
import WelcomePage from "./components/WelcomePage";

function App() {

    const [fullQuote,setFullQuote] = useState("");

    function setQuoteDetail(quoteName,quoteAuthor){
        //console.log(quoteName)
        setFullQuote(
            {
                quote : quoteName,
                author : quoteAuthor,
            }
        )
    }

    useEffect(()=>{
        console.log(fullQuote)
    },[fullQuote])
  return (
    <>
      <MainHeader/>
        <main>
            <Routes>
                <Route  path={"/"} element={<WelcomePage/>}/>
                <Route path = "/welcome/*" element={<WelcomePage />} />
                <Route path = "/newQuote" element={<NewQuoteForm/>}/>
                <Route path = "/quotes" element={<Quotes onFullQuoteView={setQuoteDetail}/>}/>
                <Route path= "/quotes/:quoteId" element={<FullQuoteView quote={fullQuote}/>}/>
            </Routes>
            {/*<NewQuoteForm/>
            <Quotes/>
            <FullQuoteView/>*/}
        </main>
    </>
  );
}

export default App;
