import Styled from 'styled-components'

export const BGContainer = Styled.div`
  display: flex;
  flex-direction: column;
  background-color: #223a5f;
  font-family: "Bree Serif";
  color: #ffffff
  justify-content: center;
  align-items: center;
  overflow: auto;
  width: 100%;
  padding: 40px;
`
export const PopUpBody = Styled.div`
display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  padding: 20px;
  margin: 20px;
  background-color: #ffffff;
  height: 80vh;

`
export const PopupContainer = Styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  
`
export const PopUpImage = Styled.img`
width: 90%;
  align-self: center;
  height: 90%
`
export const CloseButton = Styled.button`
border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
`
export const HeaderContainer = Styled.div`
  display: flex;
  border: 2px solid #ffffff;
  justify-content: space-between;
  padding: 20px;
  width: 80%;
  border-radius: 15px
`
export const Container = Styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
`
export const Images = Styled.img`
  height: 160px;
`
export const Heading = Styled.h1`
  font-size: 25px;
  margin: 0px;
  color: ${props => (props.score ? '#223a5f' : '#ffffff')};
  font-weight: bold;
`
export const Score = Styled.h1`
font-family: 'Roboto';
color: #223a5f;
margin-top: 5px;
font-size: 30px;
font-weight: bold
`
export const ScoreContainer = Styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 130px;
  border: none;
  border-radius: 15px;
  justify-content: center;
  padding-bottum: 5px;
`

export const PlayAgainButton = Styled.button`
  background-color: #ffffff;
  padding: 10px;
  color: #223a5f;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 10px;
  align-self: ${props => (props.rule ? 'flex-end' : 'center')};
  font-weight: bold;
  margin-top: 10px;
  font-family: 'Bree Serif';
  font-size: 20px;
`

export const ListButton = Styled.button`
  background-color: transparent;
  border: none;
  padding: 0px;
  
  cursor: pointer;
  outline: none;
`
export const List = Styled.li`
  list-style-type: none;
  display: inline-block;
  width: 500px;
  text-align: center;
`
export const Ul = Styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 100px;
  justify-content: space-around;
`
