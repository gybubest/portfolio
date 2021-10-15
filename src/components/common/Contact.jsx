import {useEffect, useState} from 'react';
import styled from 'styled-components';

import github from '../../assets/icons/github.png';
import linkedIn from '../../assets/icons/linkedin.png';
import location from '../../assets/icons/location.png';
import phone from '../../assets/icons/phone.png';
import email from '../../assets/icons/email.png';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const PHONE_NUMBER = '+16477646662';
  const EMAIL_ADDRESS = 'gaoyububest@gmail.com';

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [copied]);

  const copyToClipBoard = (data) => {
    navigator.clipboard.writeText(data);
    setCopied(true);
  };

  return (
    <Wrapper>
      <CopyMessage>
        {copied ? 'Copied to clipboard.' : ''}
      </CopyMessage>
      <SocialMedia>
        <CopyContact onClick={() => copyToClipBoard(EMAIL_ADDRESS)}><SMIcons src={email} alt={'Email'} title={'Copy Email Address'}></SMIcons></CopyContact>
        <CopyContact onClick={() => copyToClipBoard(PHONE_NUMBER)}><SMIcons src={phone} alt={'Phone number'} title={'Copy Phone Number'}></SMIcons></CopyContact>
        <a href={'https://github.com/gybubest'} target="_blank" rel="noreferrer"><SMIcons src={github} alt={'Github'} title={'Checkout my Github'}></SMIcons></a>
        <a href={'https://www.linkedin.com/in/bestyugao/'} target="_blank" rel="noreferrer"><SMIcons src={linkedIn} alt={'LinkedIn'} title={'Connect on LinkedIn'}></SMIcons></a>
        <a href={'https://goo.gl/maps/LSkREq3DofbbDZ8o9'} target="_blank" rel="noreferrer"><SMIcons src={location} alt={'Location'} title={'Toronto, Canada'} lastIcon></SMIcons></a>
      </SocialMedia>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: 'Lato', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`

const CopyMessage = styled.div`
  text-align: center;
  margin-bottom: 10px;
  height: 20px;
`

const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const SMIcons = styled.img`
    width: 30px;
    margin-right: ${props => props.lastIcon ? "0" : "20px"};
`

const CopyContact = styled.span`
  cursor: pointer;
`

export default Contact;