import styled from "styled-components";
import Contacts from "./components/Contacts";
import Chats from "./components/Chats";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  background: #f8f9fb;
`

function App() {
  return <Container>
    <Contacts/>
    <Chats/>
  </Container>
}

export default App;
