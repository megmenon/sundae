import styled from 'styled-components';
import img from '../../images/sundae2.png';

export const SplitContainer = styled.div`
  height: 100%;
  width: 50%;
  display: grid;
  grid-template-rows: 1fr, 1fr;
  position: fixed;
  left: 50%;
  background-color: #dc3958;
`;

export const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 20%;
  background-color: #dc3958;
`;

export const ListContainer = styled.div`
  display: flex;
  position: relative;
  left: 20%;
`;

export const List = styled.div`
  background-color: #FFF;
  border-radius: 50%;
  border: 2px solid;
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListNumber = styled.p`
  font-family: Lato, sans-serif;
  font-size: 15px;
  color: #000;
  font-weight: 900;
`;

export const DetailsContainer = styled.div`
  width: 60%;
  position: relative;
  bottom: 18%;
`;

export const Heading = styled.h6`
  font-family: Lato, sans-serif;
  margin-left: 20px;
  font-size: 20px;
  margin-bottom: 5px;
  font-weight: 900;
  color: #000;
  position: relative;
  bottom: 40px;
`;

export const Detail = styled.p`
  font-family: Lato, sans-serif;
  font-size: 15px;
  margin-left: 20px;
  line-height: 1.6;
  color: #FFF;
  position: relative;
  bottom: 40px;
`;

export const Button = styled.button`
  background-color: #000;
  width: 8%;
  height: 50px;
  position: absolute;
  bottom: 10%;
  left: 46%;
  border-radius: 5%;
  outline: #000;
  -webkit-box-shadow: 0 0 5px #000;
  cursor: pointer;
`;

export const ButtonText = styled.p`
  font-family: Merriweather, serif;
  font-size: 13px;
  padding: 0 8px 0 8px;
  color: #FFF;
  font-weight: 900;
`;

export const SundaeImage = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  position: absolute;
  bottom: 20%;
  left: 10%;
  height: 500px;
  width: 50%;
`
