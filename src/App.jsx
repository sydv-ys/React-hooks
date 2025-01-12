import UseStateBasics from "./tutorial/01-useState/starter/02-useState-basics";
import UseStateArray from "./tutorial/01-useState/starter/03-useState-array";
import UseStateObject from "./tutorial/01-useState/starter/04-useState-object";
import LatestValue from "./tutorial/01-useState/starter/05-useState-gotcha";
import UseEffect from "./tutorial/02-useEffect/starter/04-fetch-data";
import ConditionalRendering from "./tutorial/03-conditional-rendering/starter/01-multiple-returns-basics";
import MultipleReturnsFetchData from "./tutorial/03-conditional-rendering/starter/02-multiple-returns-fetch-data";
import ShortCircuitOverview from "./tutorial/03-conditional-rendering/starter/04-short-circuit-overview";
import ToggleChallenge from "./tutorial/03-conditional-rendering/starter/06-toggle-challenge";
import UserChallenge from "./tutorial/03-conditional-rendering/starter/07-user-challenge";
import Leverage from "./tutorial/05-leverage-javascript/starter/List";

function App() {
  return (
    <div className="container">
      {/* <UseStateBasics /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      {/* <LatestValue /> */}
      {/* <UseEffect /> */}
      {/* <ConditionalRendering /> */}
      {/* <MultipleReturnsFetchData /> */}
      {/* <ToggleChallenge /> */}
      {/* <UserChallenge /> */}
      <Leverage />
    </div>
  );
}

export default App;
