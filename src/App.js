import "./App.css";
import "cirrus-ui";
import useFetchJobs from "./Hooks/useFetchJobs";
import { useState } from "react";
import Job from "./Components/Job";
import "fa-icons";
import "react-bootstrap";
import SearchForm from "./Components/SearchForm";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }

  return (
    <div className="App m-4">
      <h1 className="animated fadeIn m-6">💼jobsearch</h1>
      {loading && (
        <span class="icon">
          <i
            class="fa fa-wrapper fa-heart animated pulse"
            aria-hidden="true"
          ></i>
        </span>
      )}
      {error && <h4>Error. Try Refreshing!</h4>}
      <SearchForm params = {params} onParamChange={handleParamChange} />
      {jobs.map((job) => {
        return (
          <Job
            key={job.id}
            job={job}
            className="u-flex u-justify-center u-align-center animated fadeIn"
          />
        );
      })}
    </div>
  );
}

export default App;
