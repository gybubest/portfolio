import NavBar from './common/NavBar';
import Contact from './common/Contact';
import styled from 'styled-components';
import Profile from './Profile';

const About = () => {
  return (
    <Wrapper>
      <NavBar></NavBar>
      <Profile></Profile>
      <Contact></Contact>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: 'Lato', sans-serif;
  background-color-: #fff;
  color: #1d1d1f;
  font-size: 20px;
  height: 100%;
  padding: 20px;
`

export default About;
