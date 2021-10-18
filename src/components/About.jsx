import styled, { css, keyframes } from 'styled-components';
import useDocumentScrollHook from '../hooks/useDocumentScrollHook';
import aboutMe from '../assets/aboutMeInfo'

const About = () => {
  const show = useDocumentScrollHook().scrolled;
  const { technologies, hobbies, flags } = aboutMe;
  const skillsIHave = Object.keys(technologies).map((t, i) => {
    return (
      <div key={i}>
        <img src={technologies[t]}/>
        <span>{t}</span>
      </div>
    )
  });
  const thingsIEnjoy = hobbies.map((h, i) => <span key={i}>{h}</span>);
  const placesIVisited = flags.map((f, i) => <span key={i}>{f}</span>);

  return (
    <Wrapper show={show}>
      <Container>
        <Title>Skills I Have</Title>
        <Content>{skillsIHave}</Content>
      </Container>

      <Container>
        <Title>Things I Enjoy</Title>
        <Content>{thingsIEnjoy}</Content>
      </Container>

      <Container>
        <Title>Places I Visited</Title>
        <Content>{placesIVisited}</Content>
      </Container>
    </Wrapper>
  );
}

const fadeInUp = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 30px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #fbfbfd;
  opacity: 0;
  animation: ${props => props.show && css`${fadeInUp} 2s ease forwards`};
  
  @media only screen and (min-width: 576px) {
    margin: 20% auto 8%;
  }
  
  @media only screen and (min-width: 768px) {
    margin: 17% auto 6%;
  }
  
  @media only screen and (min-width: 992px) {
    margin: 12% auto 4%;
  }
`

const Container = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10% 7% 15% 7%;
  
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  
  @media only screen and (min-width: 768px) {
    margin: 5% 7% 5% 7%;
  }
  
  @media only screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 10%;
  }
`

const Title = styled.div`
  width: 100%;
  font-size: 30px;
  font-weight: bold;
  margin: 0 40px 40px auto;
  
  @media only screen and (min-width: 576px) {
    font-size: 40px;
  }
  
  @media only screen and (min-width: 1200px) {
    width: 30%;
  }
`

const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 35px 15px;
  
  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    img {
      margin-right: 10px;
    }
  }
  
  @media only screen and (max-width: 575px) {
    font-size: 15px;
    img {
      width: 30px;
      height: 30px;
    }
  }
  
  @media only screen and (min-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media only screen and (min-width: 1200px) {
    width: 70%;
    grid-template-columns: repeat(4, 1fr);
  }
`

export default About;
