import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import weblink from '../assets/icons/weblink.png';

const Project = (props) => {
  const { id } = useParams();
  const { title, description, link, snapshots } = props.portfolio?.[id];
  const pictures = snapshots?.map((snapshot, i) => {
    return (
      <img key={i} src={snapshot}/>
    )
  })

  return (
    <Wrapper>
      <Title>
        <span>{title}</span>
        {link && <a href={link?.url} target="_blank" rel="noreferrer">
          <img src={weblink}/>
        </a>}
      </Title>
      <p>{description}</p>
      <Container>
        {pictures}
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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  
  p {
    line-height: 1.5;
  }
  
  @media only screen and (min-width: 768px) {
    width: 70%;
    margin-left: 15%;
  }
  
  @media only screen and (min-width: 992px) {
    p {
      font-size: 20px;
    }
  }
`
const Title = styled.div`
  width: 100%;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  
  span {
    margin-right: 20px;
  }
   
  img {
    width: 15px;
    height: 15px;
    
    :hover {
      opacity: 0.7;
    }
  }
  
  @media only screen and (min-width: 576px) {
    font-size: 40px;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  opacity: 0;
  animation: ${fadeInUp} 2s ease 0.5s forwards;
  
  img {
    width: 100%;
    margin-bottom: 20px;
  }
`

export default Project;
