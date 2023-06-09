import styled from "styled-components";
import { contactList } from "../Data";
// import { IoIosPeople } from 'react-icons/io';

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

const SearchArea = styled.div`
    display: flex;
    background: #f6f6f6;
    padding: 10px;
`;

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: white;
    border-radius: 16px;
    width: 100%;
    padding: 20px 0;
`;

const SearchIcon = styled.img`
    width: 27px;
    height: 27px;
    padding-left: 10px;     
`;

export const SearchInput = styled.input`
    width: 100%;
    outline: none;
    border: none;
    padding-left: 15px;
    font-size: 17px;
    margin-left: 10px;
`;

const ContactItem =styled.div`
    display: flex;
    flex-direction : row;
    border-bottom: 1px solid #f2f2f2;
    background: white;
    cursor: pointer;
    padding: 15px 12px;
`;

const ProfileIcon = styled(ProfileImage)` 
    width: 38px;
    height: 38px;
`;

const ContactName= styled.span`
    width: 100%;
    font-size: 16px;
    color:black;
`;

const MessageText = styled.span`
    width: 100%;
    font-size: 14px;
    margin-top: 3px;
    color: rgba (0,0,0,0.8);
`;

const MessageTime = styled.span`
    width: 30%;
    font-size: 14px;
    margin-top: 3px;
    color: rgba (0,0,0,0.8);
`;

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 19px;
`;

const ContactComponent =(props) => {
    const { userData } = props;
    return ( 
        <ContactItem> 
            <ProfileIcon src={userData.profilePic}/>
            <ContactInfo>
                <ContactName>{userData.name}</ContactName>
                <MessageText>{userData.lastText}</MessageText>
            </ContactInfo>
            <MessageTime>{userData.lastTextTime}</MessageTime>
        </ContactItem>
    );
};

function Contacts() {
    return <Container>
                <ProfileDiv>
                    <ProfileImage src="/profile/profpic.png"/>
                </ProfileDiv>
                <SearchArea>
                    <SearchContainer>
                        <SearchIcon src={"search-icon.svg"}/>
                        <SearchInput placeholder="Search or start new chat"/>
                    </SearchContainer>
                </SearchArea>
                {contactList.map((userData) => (
                    <ContactComponent userData={userData}/>
                ))}
           </Container>;
};

export default Contacts;