import React from "react";
import LeftSide from "./Components/LeftSide/LeftSide";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import styled from "styled-components";

const Container = styled.div`
  /* Empty CSS styles */
`

const PageContent = styled.main`
  display: flex;
`

function App() {
  return (
    <Container>
      <Navbar/>
      <PageContent>
        <Sidebar/>
        <LeftSide />
      </PageContent>
    </Container>
  );
}

export default App;
