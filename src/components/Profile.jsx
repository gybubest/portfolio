import styled from 'styled-components';

const Profile = () => {
  return (
    <ProfileBox>
      <Title>
        Hello, I'm Yu Gao.
      </Title>
      <Description>
        A Full-Stack Developer.
      </Description>
    </ProfileBox>
  );
}

const ProfileBox = styled.div`
  font-family: 'Ubuntu', sans-serif;
  height: 300px;
  width: 100%;
  margin: 10% auto;
  text-align: center;
`

const Title = styled.div`
    font-size: 50px;
`

const Description = styled.div`
  height: 300px;
  width: 100%;
  font-size: 80px;
  font-weight: 700;
`

export default Profile;
