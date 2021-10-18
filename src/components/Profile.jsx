import styled, { keyframes } from 'styled-components';

const Profile = () => {
  return (
    <Wrapper>
      <Title>
        Hello, my name is Yu Gao.
      </Title>
      <Subtitle>
        A Full-Stack Developer.
      </Subtitle>
    </Wrapper>
  );
}

const typewriter = keyframes`
  to {
    left: 100%;
  }
`;

const blink = keyframes`
  to {
    background: transparent;
  }
`;

const fadeInUp = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  height: 300px;
  padding: 5%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media only screen and (max-width: 576px) {
    margin-top: 20%;
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

const Title = styled.div`
    position: relative;
        
      ::before,
        ::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
      
      ::before {
        background: #fff;
        animation: ${typewriter} 2s steps(25) 1s forwards;
      }
      
      ::after {
        width: 0.125em;
        background: black;
        animation: 
          ${typewriter} 2s steps(25) 1s forwards,
          ${blink} 750ms steps(25) infinite;
      }
      
      @media only screen and (max-width: 575px) {
        font-size: 20px;
        margin-bottom: 10%;
      }
      
      @media only screen and (min-width: 576px) {
        font-size: 30px;
        margin-bottom: 5%;
      }
      
      @media only screen and (min-width: 768px) {
        font-size: 40px;
        margin-bottom: 3%;
      }
      
      @media only screen and (min-width: 992px) {
        font-size: 50px;
        margin-bottom: 1%;
      }
`

const Subtitle = styled.div`
  width: 100%;
  font-weight: 700;
  opacity: 0;
  transform: translateY(3rem);
  animation: ${fadeInUp} 2s ease 3s forwards;
      @media only screen and (max-width: 576px) {
        font-size: 35px;
      }
      
      @media only screen and (min-width: 576px) {
        font-size: 55px;
      }
      
      @media only screen and (min-width: 768px) {
        font-size: 60px;
      }
      
      @media only screen and (min-width: 992px) {
        font-size: 80px;
      }
`

export default Profile;
