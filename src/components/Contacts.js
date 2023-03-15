import styled from "styled-components";

import { IoIosPeople } from 'react-icons/io';

// class Question extends React.Component {
//   render() {
//     return <h3> Lets go for a <FaBeer />? </h3>
//   }
// }

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 0.8;
`;

const ProfileDiv = styled.div`
    display: flex;
    flex-direction: row;
    background: #ededed;
    padding: 15px;
`;

const ProfileImage = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
`;

function Contacts() {
    return <Container>
        <ProfileDiv>
            <ProfileImage src="/profile/profpic.png"/>
        </ProfileDiv>
        Contact List Component</Container>;
}

export default Contacts;