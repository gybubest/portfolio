import styled, { css, keyframes } from 'styled-components';
import useDocumentScrollHook from '../hooks/useDocumentScrollHook';
import angularIcon from '../assets/tech/angular-icon.png';
import bootstrapIcon from '../assets/tech/bootstrap-icon.png';
import cssIcon from '../assets/tech/css-icon.png';
import htmlIcon from '../assets/tech/html-icon.png';
import javascriptIcon from '../assets/tech/javascript-icon.png';
import jestIcon from '../assets/tech/jest-icon.png';
import mongoDBIcon from '../assets/tech/mongoDB-icon.jpeg';
import nodeIcon from '../assets/tech/node-icon.svg';
import postgresqlIcon from '../assets/tech/postgresql-icon.png';
import pythonIcon from '../assets/tech/python-icon.png';
import railsIcon from '../assets/tech/rails-icon.svg';
import reactIcon from '../assets/tech/react-icon.svg';
import rubyIcon from '../assets/tech/ruby-icon.png';
import rxjsIcon from '../assets/tech/rxjs-icon.png';
import sqlIcon from '../assets/tech/sql-icon.jpeg';
import typescriptIcon from '../assets/tech/typescript-icon.png';

const About = () => {
  const show = useDocumentScrollHook().scrolled;
  const technologies = {
    'Javascript': javascriptIcon,
    'React': reactIcon,
    'Angular': angularIcon,
    'RxJS': rxjsIcon,
    'Typescript': typescriptIcon,
    'Node.js': nodeIcon,
    'HTML': htmlIcon,
    'CSS': cssIcon,
    'Bootstrap': bootstrapIcon,
    'Ruby': rubyIcon,
    'Rails': railsIcon,
    'Python': pythonIcon,
    'SQL': sqlIcon,
    'PostgreSQL': postgresqlIcon,
    'MongoDB': mongoDBIcon,
    'Jest': jestIcon
    };
  const skillsIHave = Object.keys(technologies).map((t, i) => {
    return (
      <div key={i}>
        <img src={technologies[t]}/>
        <span>{t}</span>
      </div>
    )
  });

  const hobbies = ['👨🏻‍💻 Coding', '📚 Reading', '🚶🏻 Walking', '🍪 Baking', '💪🏼 Workout', '📽 Movie', '🌲 Nature', '✈️ Travel'];
  const thingsIEnjoy = hobbies.map((h, i) => <span key={i}>{h}</span>);

  const flags = ['🇨🇦 Canada', '🇬🇧 UK', '🇪🇸 Spain', '🇺🇿 Uzbekistan', '🇦🇲 Armenia', '🇧🇾 Belarus', '🇵🇱 Poland', '🇨🇿 Czech Republic', '🇰🇬 Kyrgyzstan', '🇹🇭 Thailand', '🇷🇺 Russia', '🇨🇳 China'];
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
  align-items: self-start;
  background-color: #fbfbfd;
  opacity: 0;
  animation: ${props => props.show && css`${fadeInUp} 2s ease forwards`};

  @media only screen and (max-width: 576px) {
    margin: 20% auto;
  }
  
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
  display: flex;
  flex-direction: column;
  align-items: width: 100%;;
  justify-content: start;
  font-size: 30px;
  font-weight: bold;
  margin: 0 40px 40px auto;
  
  @media only screen and (min-width: 576px) {
    font-size: 40px;
  }
  
  @media only screen and (min-width: 1200px) {
    width: 30%;
    align-items: center;
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
    gap: 35px 15px;
  }
  
  @media only screen and (min-width: 1200px) {
    width: 70%;
    grid-template-columns: repeat(4, 1fr);
    gap: 35px 15px;
  }
`

export default About;
