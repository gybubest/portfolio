import {Link, Route, Switch, useRouteMatch} from 'react-router-dom';
import styled, {keyframes} from 'styled-components';
import projects from '../assets/projectsInfo.js';
import Project from './Project';

const Portfolio = () => {
  const { path, url } = useRouteMatch();
  const portfolio = Object.keys(projects).reverse().map((key, i) => {
    const {title, snapshots} = projects?.[key];
    return (
      <Link to={`${url}/${key}`} key={i}>
        <img src={snapshots?.[0]} alt={`screenshot ${i}`}/>
        <span>{title}</span>
      </Link>
    )
  });

  return (
    <Wrapper>
      <Switch>
        <Route exact path={path}>
          <Title>Projects</Title>
          <Container>{portfolio}</Container>
        </Route>
        <Route path={`${path}/:id`}>
          <Project
            portfolio={projects}
          />
        </Route>
      </Switch>
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
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20%;
  opacity: 0;
  animation: ${fadeInUp} 2s ease 1s forwards;

  @media only screen and (min-width: 576px) {
    margin-top: 10%;
  }
`
const Title = styled.div`
  width: 100%;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 40px;
  
  @media only screen and (min-width: 576px) {
    font-size: 40px;
  }
`

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 50px 35px;
  
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 15px;
    color: #1d1d1f;
    
    img {
      width: 300px;
      height: 150px;
      margin-bottom: 10px;
    }
    
    :hover {
      opacity: 0.7;
    }
  }
  
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    a {
      font-size: 20px;
    }
  }
  
  @media only screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export default Portfolio;
