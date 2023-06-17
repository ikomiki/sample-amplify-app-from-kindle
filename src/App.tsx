import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { Amplify, Auth } from "aws-amplify";
import aws_exports from "./aws-exports";
// import { withAuthenticator } from "@aws-amplify/ui-react"; // ①
import { Authenticator } from "@aws-amplify/ui-react"; // ②

Amplify.configure(aws_exports);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Authenticator>
        {/* ② */}
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <a className="App-link" href="#" onClick={() => Auth.signOut()}>
          Sign out
        </a>
        {/* ② */}
      </Authenticator>
    </>
  );
}

export default App; // ②
// // eslint-disable-next-line react-refresh/only-export-components
// export default withAuthenticator(App);// ①
