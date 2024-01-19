import React from 'react'
import styled from "styled-components";

const Copyright = () => {
    const year = new Date().getFullYear();

    return(
        <>
        <Footer>
            <p>Copyright &copy; {year} - By Chetan Kumar</p>

        </Footer>
            {/* <div style={{
    position:"absolute",
    right: "2px",
    bottom:"2px",
}}>
                <p>By Chetan Kumar</p>
            </div> */}


        </>
    )
}

export default Copyright;

const Footer = styled.footer`
display: flex;
justify-content: center;
align-items: center;
height: 10vh;
color: black;


`;
