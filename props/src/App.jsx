import { AlertClock } from "./AlertClock";
import Clock from "./Clock";
import Colors from "./Lists/Colors";
import { Counter } from "./Counter";
import MouseClicker from "./MouseClicker";
import MyForm from "./MyForm";
import { Welcome } from "./Welcome";
import Container from "./Container";
import { LanguageContext } from "./LanguageContext";
import { useState } from "react";
import GithubUser from "./GithubUser";


export function App() {

    const [language, setLanguage] = useState('en')

    function handletSetLanguage(language) {
        console.log(language)
        setLanguage(language)
    }

    // function handleShowCurrentTime() {
    //     const currentTime = new Date()

    //     alert(`The current time is: ${currentTime.toLocaleTimeString()}`)
    // }

    return(
        <Container title={<h1>Learning React.</h1>}>
            <hr />
            <Welcome name="John" age={10} />
            <GithubUser username={"macaicedoa"}/>
            <hr />
            <LanguageContext.Provider value={language}>
                <select value={language} onChange={(e)=>handletSetLanguage(e.target.value)}>
                    <option value="es">ES</option>
                    <option value="en">EN</option>
                </select>
                <Clock/>

            </LanguageContext.Provider>
            <hr />
            <MouseClicker />
            <hr />
            <MyForm/>
        </Container>  
    )
}

