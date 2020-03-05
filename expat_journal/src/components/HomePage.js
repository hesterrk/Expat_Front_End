import React from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes, ThemeProvider } from "styled-components";
import NoSsr from "@material-ui/core/NoSsr";
import { createMuiTheme } from "@material-ui/core/styles";
import { palette, spacing, typography } from "@material-ui/system";

const Span = styled.span`
  padding-top: 40px;
`;
const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 300px;
  border: 6px solid whitesmoke;
  border-radius: 7px;
`;

const animationName = keyframes`
  0% { color: #61045F; }
  50% { color: #2b5876; }
  75% { color: #4e4376; }
  100% { color: #16A085; }
`;

const H5 = styled.h5`
  animation: ${animationName} 4s ease infinite alternate;
`;

const H1 = styled.h1`
  color: #2b32b2;
`;

const Button = styled.button`
  border-radius: 20px;
  padding: 20px 20px 20px 20px;
  margin-top: 20px;
  color: white;
  background: #2b32b2;
  font-size: 1rem;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  &:hover {
    background-color: #7474BF;
  }
`;

const SpecialDiv = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

const Div = styled.div`
  border: 2px red solid, ${palette} ${spacing} ${typography};
`;

const theme = createMuiTheme();

function HomePage() {
  return (
    <NoSsr>
      <ThemeProvider theme={theme}>
        <Div
          className="homeWrapper"
          color="primary.main"
          bgcolor="lavender"
          fontFamily="h6.fontFamily"
          fontSize={{ xs: "h6.fontSize" }}
          p={{ xs: 2, sm: 3, md: 4 }}
        >
          <H1> 🌍 Expat Journal App 🌍 </H1>
          <H5> A place for you to share your story with other expats </H5>

          <Span className="imageContainer">
            <Img
              className="homeImage"
              src="https://images.unsplash.com/photo-1530453029958-05ad3266af54?ixlib=rb-1.2.1&auto=format&fit=crop&w=2237&q=80"
              alt="header"
            />
          </Span>
          <H5> The best place to organize and share stories, pictures, information as an expat </H5>

          <SpecialDiv>
            <NavLink exact to="/signup">
              <Button className="signupButton">Sign Up </Button>
            </NavLink>
            <NavLink exact to="/login">
              <Button className="loginButton">Login </Button>
            </NavLink>
            <NavLink exact to="/journallist">
              <Button className="journalButton">Your Journal Board </Button>
            </NavLink>
          </SpecialDiv>
        </Div>
      </ThemeProvider>
    </NoSsr>
  );
}

export default HomePage;
