import "./App.css";
import "cirrus-ui";
import useFetchJobs from "./Hooks/useFetchJobs";
import { useState } from "react";
import Job from "./Components/Job";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);

  return (
    <div className="App">
      {loading && (
        <div class="animated loading hide-text">
          <p>Hidden</p>
        </div>
      )}
      {error && <h1>Error. Try Refreshing!</h1>}
      {jobs.map((job) => {
        return <Job key={job.id} job={job} className="u-flex u-justify-center u-align-center animated fadeIn" />;
      })}
    </div>
  );
}

export default App;
