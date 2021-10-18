import {useEffect, useState} from 'react';
import styled from 'styled-components';
import contactInfo from '../../assets/contactInfo';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const { phone, email, github, linkedIn, location } = contactInfo;

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
        <CopyContact onClick={() => copyToClipBoard(email.value)}><SMIcons src={email.icon} alt={email.alt} title={email.title}></SMIcons></CopyContact>
        <CopyContact onClick={() => copyToClipBoard(phone.value)}><SMIcons src={phone.icon} alt={phone.alt} title={phone.title}></SMIcons></CopyContact>
        <a href={github.value} target="_blank" rel="noreferrer"><SMIcons src={github.icon} alt={github.alt} title={github.title}></SMIcons></a>
        <a href={linkedIn.value} target="_blank" rel="noreferrer"><SMIcons src={linkedIn.icon} alt={linkedIn.alt} title={linkedIn.title}></SMIcons></a>
        <a href={location.value} target="_blank" rel="noreferrer"><SMIcons src={location.icon} alt={location.alt} title={location.title} lastIcon></SMIcons></a>
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
    
    :hover {
      opacity: 0.7;
    }
`

const CopyContact = styled.span`
  cursor: pointer;
`

export default Contact;