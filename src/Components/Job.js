import "cirrus-ui";
import ReactMarkdown from "react-markdown";
import { Collapse, Fade} from "react-bootstrap";
import { useState } from "react";

const Job = ({ job }) => {
  const [open, setOpen] = useState(false);

  return (
    <div class="u-flex u-justify-center u-align-center m-3">
      <div class="card" style={{ maxWidth: "1000px", width: "100%" }}>
        <div>
          <div class="card__header">
            <p class="font-bold px-3">
              {job.title} -{" "}
              <a class="font-thin" href="!#">
                @ {job.company}
              </a>
            </p>
          </div>
          <div className="u-flex u-justify-space-between">
            <div class="content u-text-left" style={{ margin: "25px" }}>
              <div
                class="tag-container group-tags"
                style={{ marginTop: "10px" }}
              >
                <div class="tag tag--dark">{job.type}</div>
                <div class="tag tag--primary">{job.location}</div>
              </div>
              <div style={{ wordBreak: "break-all", maxWidth: "85%" }}>
                
                 <a href={job.how_to_apply}><ReactMarkdown children={job.how_to_apply}/></a>
                
              </div>
            </div>
            <div>
              <img
                src={job.company_logo}
                style={{
                  height: "50px",
                  position: "relative",
                  top: "50%",
                  right: "25%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                alt={job.company}
              />
            </div>
          </div>
          <div class="card__footer level" style={{ margin: "25px" }}>
            {new Date(job.created_at).toLocaleDateString()}
          </div>
          <div class="card__action-bar u-center">
            <button
              onClick={() => setOpen(open)}
              class="outline btn-info btn-animated btn-small hover-grow"
              style={{ margin: "5px 0" }}
            >
              {open ? "Hide Details" : "Show Details"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
