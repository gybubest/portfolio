import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Project = (props) => {
  const { id } = useParams();
  const { title, description, link, snapshots } = props.portfolio?.[id];
  const pictures = snapshots?.map((snapshot, i) => {
    return (
      <img key={i} src={snapshot}/>
    )
  })
  const linkName = link ? link.type === 'website' ? 'Website link' : 'Github Repo' : null;

  return (
    <Wrapper>
      <h3>{title}</h3>
      {linkName &&
        <a href={link?.url} target="_blank" rel="noreferrer">
          <span>{linkName}</span>
        </a>
      }
      <p>{description}</p>
      <Container>
        {pictures}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 10%;
`
const Title = styled.div`
  width: 100%;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 40px;
  
  @media only screen and (min-width: 576px) {
    font-size: 40px;
  }
  
  @media only screen and (min-width: 1200px) {
    width: 30%;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 400px;
    // height: 200px;
    margin-bottom: 10px;
  }
  
  // @media only screen and (max-width: 992px) {
  //   grid-template-columns: repeat(1, 1fr);
  //   img {
  //     width: 30px;
  //     height: 30px;
  //   }
  // }
`

export default Project;
