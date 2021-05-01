import "cirrus-ui";
import useFetchJobs from "../Hooks/useFetchJobs";

const Job = ({ job }) => {
  return (
    <div class="card">
      <div class="card__header">
        <p class="font-bold px-3">{job.title} - <span className="font-light">{ job.company }</span></p>
      </div>
      <div class="content">
        <p>
          Full time/ Part time
          <a href="!#">@Cirrus</a>
        </p>
      </div>
      <div class="card__footer level content">6:32 PM - 3 Jul 18</div>
      <div class="card__action-bar u-center">
        <button class="btn-transparent outline">View Details</button>
      </div>
    </div>
  );
};

export default Job;
