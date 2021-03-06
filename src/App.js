import "./App.scss"
import Header from "./view/Header/Header";
import Main from "./view/Main/Main";
import Aside from "./view/Aside/Aside";

function App(){
    return (
        <div className={"App"}>
            <div className={"resume"}>
                <Header/>
                <Aside/>
                <Main/>
            </div>
        </div>
    )
}

export default App;
