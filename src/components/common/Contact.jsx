import githubLogo from '../../assets/icons/github.png';
import linkedInLogo from '../../assets/icons/linkedin.png';
import addressLogo from '../../assets/icons/address.png';
import phoneLogo from '../../assets/icons/phone.png';
import emailLogo from '../../assets/icons/email.png';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Footer>
      <a href={'https://github.com/gybubest'}><img src={githubLogo} alt={'github'}></img></a>
      <a href={'https://www.linkedin.com/in/bestyugao/'}><img src={linkedInLogo} alt={'linkedIn'}></img></a>
      <a href={'mailto:gaoyububest@gmail.com'}><img src={emailLogo} alt={'email'}></img></a>
      <span><img src={phoneLogo} alt={'phone number'}></img>647.764.6662</span>
      <span><img src={addressLogo} alt={'address'}></img>Toronto, CA</span>
    </Footer>
  );
}

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  width: 100%;
    img {
      width: 50px;
    }
`

export default Contact;