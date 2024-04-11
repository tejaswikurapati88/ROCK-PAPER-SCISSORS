import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import {
  Images,
  Heading,
  List,
  BGContainer,
  Ul,
  PlayAgainButton,
  PopupContainer,
  PopUpBody,
  PopUpImage,
  CloseButton,
} from '../../StyledComponents'

import Header from '../Header'
import ChoiceItem from '../ChoiceItem'

const gameStatusConstants = {
  inProgress: 'IN_PROGRESS',
  win: 'WIN',
  lost: 'LOST',
  draw: 'DRAW',
}

class PlayingView extends Component {
  state = {
    myChoice: '',
    opponentChoice: '',
    score: 0,
    gameStatus: gameStatusConstants.inProgress,
  }

  getOpponentChoice = () => {
    const {choicesList} = this.props
    const gameChoicesList = choicesList.map(choice => choice.id)
    const randomIndex = Math.floor(Math.random() * 3)
    return gameChoicesList[randomIndex]
  }

  onAnsSelection = ans => {
    this.setState({myChoice: ans, opponentChoice: this.getOpponentChoice()})
    this.evaluateGame()
  }

  evaluateGame = () => {
    const {myChoice, opponentChoice} = this.state
    if (myChoice === opponentChoice) {
      this.setState({gameStatus: gameStatusConstants.draw})
    } else if (myChoice === 'ROCK') {
      if (opponentChoice === 'SCISSORS') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          gameStatus: gameStatusConstants.win,
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          gameStatus: gameStatusConstants.lost,
        }))
      }
    } else if (myChoice === 'SCISSORS') {
      if (opponentChoice === 'ROCK') {
        this.setState(prevState => ({
          score: prevState.score - 1,
          gameStatus: gameStatusConstants.lost,
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score + 1,
          gameStatus: gameStatusConstants.win,
        }))
      }
    } else if (myChoice === 'PAPER') {
      if (opponentChoice === 'ROCK') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          gameStatus: gameStatusConstants.win,
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          gameStatus: gameStatusConstants.lost,
        }))
      }
    }
  }

  playAgain = () => {
    this.setState({gameStatus: gameStatusConstants.inProgress})
  }

  renderGameView = () => {
    const {gameStatus} = this.state
    switch (gameStatus) {
      case gameStatusConstants.inProgress:
        return this.renderGameInProgressView()
      case gameStatusConstants.win:
        return this.renderGameWonView()
      case gameStatusConstants.lost:
        return this.renderGameLostView()
      case gameStatusConstants.draw:
        return this.renderGameDrawView()
      default:
        return null
    }
  }

  renderGameInProgressView = () => {
    const {choicesList} = this.props
    return (
      <>
        <Ul>
          {choicesList.map(eachItem => (
            <ChoiceItem
              key={eachItem.id}
              onAnsSelection={this.onAnsSelection}
              itemDetails={eachItem}
            />
          ))}
        </Ul>
        <PopupContainer>
          <Popup
            modal
            trigger={
              <PlayAgainButton type="button" rule>
                RULES
              </PlayAgainButton>
            }
            closeOnExcape
            window
          >
            {close => (
              <PopUpBody>
                <PopUpImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine />
                </CloseButton>
              </PopUpBody>
            )}
          </Popup>
        </PopupContainer>
      </>
    )
  }

  renderGameWonView = () => {
    const {myChoice, opponentChoice} = this.state
    const {choicesList} = this.props

    const myChoiceItem = choicesList.filter(each => each.id === myChoice)

    const oponentItem = choicesList.filter(each => each.id === opponentChoice)
    return (
      <Ul>
        <List>
          <Heading>YOU</Heading>
          <Images src={myChoiceItem[0].imageUrl} alt="your choice" />
        </List>
        <List>
          <Heading>OPPONENT</Heading>
          <Images src={oponentItem[0].imageUrl} alt="opponent choice" />
        </List>
        <List>
          <Heading>YOU WON</Heading>
          <PlayAgainButton type="button" onClick={this.playAgain}>
            PLAY AGAIN
          </PlayAgainButton>
        </List>
      </Ul>
    )
  }
  renderGameDrawView = () => {
    const {myChoice, opponentChoice} = this.state
    const {choicesList} = this.props

    const myChoiceItem = choicesList.filter(each => each.id === myChoice)

    const oponentItem = choicesList.filter(each => each.id === opponentChoice)
    return (
      <Ul>
        <List>
          <Heading>YOU</Heading>
          <Images src={myChoiceItem[0].imageUrl} alt="your choice" />
        </List>
        <List>
          <Heading>OPPONENT</Heading>
          <Images src={oponentItem[0].imageUrl} alt="opponent choice" />
        </List>
        <List>
          <Heading>IT IS DRAW</Heading>
          <PlayAgainButton type="button" onClick={this.playAgain}>
            PLAY AGAIN
          </PlayAgainButton>
        </List>
      </Ul>
    )
  }

  renderGameLostView = () => {
    const {myChoice, opponentChoice} = this.state
    const {choicesList} = this.props

    const myChoiceItem = choicesList.filter(each => each.id === myChoice)

    const oponentItem = choicesList.filter(each => each.id === opponentChoice)
    return (
      <Ul>
        <List>
          <Heading>YOU</Heading>
          <Images src={myChoiceItem[0].imageUrl} alt="your choice" />
        </List>
        <List>
          <Heading>OPPONENT</Heading>
          <Images src={oponentItem[0].imageUrl} alt="opponent choice" />
        </List>
        <List>
          <Heading>YOU LOST</Heading>
          <PlayAgainButton type="button" onClick={this.playAgain}>
            PLAY AGAIN
          </PlayAgainButton>
        </List>
      </Ul>
    )
  }

  render() {
    const {score} = this.state

    return (
      <BGContainer>
        <Header score={score} />
        {this.renderGameView()}
      </BGContainer>
    )
  }
}

export default PlayingView
