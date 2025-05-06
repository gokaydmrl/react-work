import { useEffect, useState, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // function api<T>(url: string): Promise<T> {
  //   return fetch(url).then((response) => {
  //     if (!response.ok) {
  //       throw new Error(response.statusText);
  //     }

  //     return response.json() as Promise<T>;
  //   });
  // }
  function useApi() {
    const api = useCallback(<T,>(url: string): Promise<T> => {
      return fetch(url).then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        return response.json() as Promise<T>;
      });
    }, []);

    return api;
  }
  const apit = useApi();

  useEffect(() => {
    const fetchData = async () => {
      const res = apit("http://localhost:3000/12");
      const data = await res;
      console.log("data", data);
    };
    fetchData();
    console.log("hellow rold");
  }, []);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React asdasd</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p style={{color:"purple"}} className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
