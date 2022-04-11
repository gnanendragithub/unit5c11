function App(){
    return(
        <><div className="cricket">
            <h3>Match</h3>
            <div className="Banner">
                <div>
                    runs:{" "}
                    <h1 className="runsCount">

                    </h1>
                </div>
            </div>
            Number_of_wickets:{" "}
            <h1 className="Wickets">

            </h1>
        </div><div>
                Over:{" "}
                <h1 className=" overs">

                </h1>
            </div><div className="addScore">
        Add score

        <button className="addScore1">Add 1</button>
        <button className="addScore4">Add4</button>
        <button className="addScore6">Add6</button>
    </div><div className="Wicket">
            <button>add 1 wicket</button>
        </div><div className="addBall">
            <button>add 1 ball</button>
        </div></>

    );
}
export default App()
