import React from "react";
import LeftSide from "./Components/LeftSide/LeftSide";
import RightSide from "./Components/RightSide/RightSide";
import Navbar from "./Components/Navbar/Navbar";
import SidebarMenu from "./Components/Sidebar/SidebarMenu";
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
      <Navbar />
      <PageContent>
      <SidebarMenu/>
        <LeftSide />
        <RightSide />
      </PageContent>
    </Container>
  );
}

export default App;
