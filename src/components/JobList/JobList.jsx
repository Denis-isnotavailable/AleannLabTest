import JobItem from "components/JobItem/JobItem";
import { JobListStyled } from "./JobList.styled";


const JobList = ({ jobList }) => {

    return (
        <JobListStyled>
            {
                jobList.map(job => <JobItem key={job.id} job={job} />)
            }
        </JobListStyled>
    );
}

export default JobList;