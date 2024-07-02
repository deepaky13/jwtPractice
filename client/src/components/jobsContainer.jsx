import React from "react";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useAllJobsContext } from "../pagers/AllJobs";
const jobsContainer = () => {
  const { data } = useAllJobsContext();
  const { jobs } = data;
  if (jobs.length === 0) {
    <Wrapper>
      <h2>no jobs to display...</h2>
    </Wrapper>;
  }
  return (
    <Wrapper>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default jobsContainer;
