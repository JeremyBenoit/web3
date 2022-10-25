import NewOpinionForm from "components/NewOpinionForm/NewOpinionForm";
import OpinionsList from "components/OpinionsList/OpinionsList";

function App() {
    return (
        <div className="App">
            <OpinionsList/>
            <NewOpinionForm/>
        </div>
    );
}

export default App;
