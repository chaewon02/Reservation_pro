import React,{Component} from "react";
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ReserveDiv = styled.div`
    height: 100%;
    width: 100%;
    border: 2px rgb(90, 127, 231) solid;
    border-radius: 30px;
    padding: 20px;
`;

class Reserve extends Component{
    render(){
        return(
            <Container>
                <ReserveDiv>
                    <h1>[예약 방법]</h1>
                </ReserveDiv>
            </Container>
        );
    }
};

export default Reserve;