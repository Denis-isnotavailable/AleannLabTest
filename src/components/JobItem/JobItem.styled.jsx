import styled from "styled-components";

export const JobItemStyled = styled.li`
    list-style: none;
    
    padding: 13px 16px;
    border-radius: 8px;
    
    background-color: #EFF0F5;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);

    font-weight: 400;
    font-size: 16px;
    line-height: 1.56;
    letter-spacing: 0.23619px;

    color: #878D9D;

    :not(:last-child) {
        margin-bottom: 8px;
    }

    @media screen and (min-width: 414.5px) {
        padding: 24px 16px;

        background-color: #ffffff;
        box-shadow: 2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12);
    }
`;

export const JobBoxStyled = styled.div`
    display: flex;
`;

export const JobImageStyled = styled.div`
    margin-top: 45px;
    margin-right: 19px;
    
    img {
        width: 66px;
        height: 66px;
        border-radius: 50%;
    }

    @media screen and (min-width: 414.5px) {
        margin-top: 0;
        margin-right: 26px;
        img {
            width: 85px;
            height: 85px;            
        }
    }
`;

export const JobDescriptionStyled = styled.div`    
    a {
        text-decoration: none;        

        font-weight: 400;
        font-size: 18px;
        line-height: 1.33;

        letter-spacing: -0.5625px;

        color: #3A4562;
    }

    p {
        margin-top: 5px;
        margin-bottom: 7px;
    }

    span {
        display: flex;
        align-items: center;
    }

    @media screen and (min-width: 414.5px) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;

        div {
            max-width: 712px;
        }

        a {            
            font-weight: 700;
            font-size: 20px;
            line-height: 1.25;

            letter-spacing: -0.625px;
        }

        p {
            margin-top: 8px;
            margin-bottom: 8px;
        }
    }
`;

export const JobRatingStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    margin-bottom: 17px;

    

    @media screen and (min-width: 414.5px) {
        margin-bottom: 0;
        margin-left: 32px;
        gap: 32px;
    }
`;

export const JobDateStyled = styled.div`
    p {
        margin: 0;
        font-weight: 300;
        font-size: 14px;
        line-height: 1.21;
        letter-spacing: 0.206667px;

        color: #878D9D;
    }

    div {
        display: none;
    }

    @media screen and (min-width: 414.5px) {        
        display: flex;
        flex-direction: column;
        /* align-content: space-between; */
        height: 100%;
        

        p {
            font-weight: 400;
            font-size: 16px;
            line-height: 1.56;
            letter-spacing: 0.23619px;
        }
        
        div {
            display: block;
            /* width: 100%; */
            margin-left: auto;
            margin-bottom: 50px;
        }
    }
`;