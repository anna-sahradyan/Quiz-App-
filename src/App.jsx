import React from 'react';
import Pyramid from "./components/Pyramid/Pyramid";
import Main from "./components/Main/Main";


const App = () => {
    return (
        <>
            <div className={"wrapper"}>
                <div className={"main"}>
                    <Main/>
                </div>
                <div className={"pyramid"}>
                    <Pyramid/>
                </div>

            </div>

        </>
    );
};

export default App;