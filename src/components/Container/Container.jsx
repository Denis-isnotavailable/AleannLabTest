import JobList from "components/JobList/JobList";

import { useEffect } from "react";
import { useState } from "react";
import { ContainerStyled } from "./Container.styled";


const Container = () => {
    const [jobList, setJobList] = useState([]);

    useEffect(() => {
        const url = `https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu`;

        function getJobs(url) {
            fetch(url).then(response => response.json()).then(data => {
                console.log("data ", data);
                setJobList(data);
                // console.log("jobList ", jobList);
            }).catch(e => {
                console.log(e.message);
            });
        }

        getJobs(url);       
        
    }, []);

    


    return (
        <ContainerStyled>
            <JobList jobList={jobList} />
        </ContainerStyled>
    );

}

export default Container;