import {
  HeaderContainer,
  Container,
  Heading,
  ScoreContainer,
  Score,
} from '../../StyledComponents'

const Header = props => {
  const {score} = props
  return (
    <HeaderContainer>
      <Container>
        <Heading>ROCK PAPER SCISSORS</Heading>
      </Container>
      <ScoreContainer>
        <Heading as="p" score>
          Score
        </Heading>
        <Score as="p">{score}</Score>
      </ScoreContainer>
    </HeaderContainer>
  )
}

export default Header
