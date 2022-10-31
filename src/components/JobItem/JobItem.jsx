import { IoBookmarkOutline } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
const { JobItemStyled, JobBoxStyled, JobImageStyled, JobDescriptionStyled, JobRatingStyled, JobDateStyled } = require("./JobItem.styled")


const JobItem = ({ job }) => {  

    function randomPicture() {        
        return Math.floor(Math.random() * 3);
    }

    return (
        <JobItemStyled>
            <JobBoxStyled>
                <JobImageStyled>
                    <img src={job.pictures[randomPicture()]} alt={job.name} />
                </JobImageStyled>

                <JobDescriptionStyled>
                    <JobRatingStyled>                        
                        <div>
                            <AiFillStar size={13} fill="#384564" />
                            <AiFillStar size={13} fill="#384564" />
                            <AiFillStar size={13} fill="#384564" />
                            <AiFillStar size={13} fill="#384564" />
                            <AiFillStar size={13} fill="#384564" />
                        </div>

                        <JobDateStyled>
                            <div><IoBookmarkOutline size={32} /></div>                            
                            <p>Posted {Math.round((Date.now() - new Date(job.createdAt)) / (86400000 * 365))} years ago </p>
                        </JobDateStyled> 
                    </JobRatingStyled>                
                    
                    <div>
                        <a href="/"> {job.title} </a>
                        <p> Department name • {job.name} Krankenhaus der Stadt Wien - AKH </p>
                        
                        <span> <ImLocation size={18} /> Vienna, Austria </span>
                    </div>                    
                </JobDescriptionStyled>                                
            </JobBoxStyled>            
        </JobItemStyled>
    );
}

export default JobItem;


