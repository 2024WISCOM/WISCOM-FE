import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  color: white;
  margin: 0 auto;
  padding: 0 10%;
  position: relative;
  height:625px;


  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 0 2%;
    height:auto;
  }
    

    @media (min-width: 1025px) and (max-width: 1236px) {
      height:500px;
  }
`;

export const TextSection = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-size: 3vw;
  line-height: 1.5;
  color: #FFFFFF;
  text-align: left;
  width: 50%;
  margin-top: 15vh;
  position: relative;

  @media (max-width: 768px) {
    font-size: 2.0em;
    width: 100%;
    text-align: center;
    margin-top: 5%;
    margin-bottom:5%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 2.0em;
    width: 50%;
    text-align: left;
    margin-top: 10vh;
  }

`;

export const CDContainer2 = styled.div`
  display: flex;
  width: 35vw;
  height: auto;
  position: relative;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 70vw;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 50%;
    height: auto;
  }
`;

export const CDImage2 = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const SignText2 = styled.img`
  position: absolute;
  top: 60%;
  left: 52%;
  transform: translate(-50%, -50%);
  width: 30vw;

  @media (max-width: 768px) {
    width: 50vw;
    top: 55%;
    left:48%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 35vw;
    top: 50%;
  }
`;

export const BarcodeImage2 = styled.img`
  position: absolute;
  top: 5%;
  right: 5%;
  width: 7%;

  @media (max-width: 768px) {
    width: 10%;
    top: 5%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 6%;
    top: 5%;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  position: absolute;
  font-weight: bold;
  color: black;
  font-size: 1.1em;
  padding:0;
  margin:0;

  &.to-label {
    top: 5%;
    left: 15%;
  }

  &.from-label {
    bottom: 5%;
    right: ${({ length }) => `${Math.min(-130+length * 5, 30)}px`};
  }

  @media (max-width: 768px) {
    font-size: 1em;
     

    &.to-label {
      top: 5%;
      left: 15%;
    }

    &.from-label {
      bottom: 5%;
      right:${({ length }) => `${-60+Math.min(length * 3, 20)}px`};
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 1.1em;
    margin:0;
    padding:0;
    

    &.to-label {
      top: 5%;
    }

    &.from-label {
      margin:0;
      right:${({ length }) => `${-90+Math.min(length * 4, 25)}px`}; 
    }
  }
`;

export const Input = styled.input`
  height: 5%;
  width: 50%;
  border: none;
  color: black;
  background: transparent;
  font-size: 1.5em;
  padding: 0%;
  margin:0;
  text-align: left;
  z-index: 10;
  

  &::placeholder {
    color: #D9D9D9;
    font-size: 1em;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 1em;
    width: auto;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 1.1em;
    width:33%;
    margin:0;
    padding:0;
    
  }
`;

export const TextArea = styled.textarea`
  position: absolute;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  width: 70%;
  height: 60%;
  border: none;
  color: black;
  background: transparent;
  font-size: 1.4em;
  resize: none;
  text-align: left;
  z-index: 10;
  margin: 0;
  left: 15%;
  top: 22%;

  &::placeholder {
    color: #D9D9D9;
    font-size: 1em;
    font-family: 'Pretendard';
    font-weight: 400;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 65%;
    height: 60%;
    top: 20%;
    left:15%;
    font-size: 1.1em;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 70%;
    height: 60%;
    top: 22%;
    font-size:1.3em;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  bottom: -10%;
  left: 0;
  right: 0;
  margin: 0 1%;

  @media (max-width: 768px) {
  position: relative;
    width: 100%;
    top: 50px;
    margin-bottom:15%;


  }

  @media (min-width: 769px) and (max-width: 1024px) {
    top: 420px;
    gap: 5%;
  }
`;

export const HighlightedText = styled.span`
  font-weight: bold;
  color: black;
  font-size: 1.8em;
  margin:0;
  padding:0;

  @media (max-width: 768px) {
    font-size: 1.1em;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 1.5em;
  }
`;
