import {Component} from 'react'
import {
  AppBg,
  Para,
  ScoreCardContainer,
  ScoreCard,
  Heading,
  ScoreText,
  Score,
  UnList,
  GameResultItem,
  GameResultView,
  Image,
  Heading2,
  Button,
} from './styledComponent'
import GameRulesView from './components/GameRulesView'
import ChooseItem from './components/ChooseItem'
// import ScoreCardView from "./components/ScoreCardView"
// import GameResultView from "./components/GameResultView"
// import PlayingView from "./components/PlayingView"
// import ScoreCardView from "./components/ScoreCardView"
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const gameResults = {
  win: 'YOU WON',
  tie: 'IT IS DRAW',
  lose: 'YOU LOSE',
}

class App extends Component {
  state = {
    score: 0,
    playerChoice: choicesList[0],
    systemChoice: choicesList[1],
    result: gameResults.win,
  }

  renderScoreCardView = () => {
    const {score} = this.state
    return (
      <ScoreCardContainer>
        <div>
          <Heading>ROCK</Heading>
          <Heading>PAPER</Heading>
          <Heading>SCISSORS</Heading>
        </div>
        <ScoreCard>
          <ScoreText>Score</ScoreText>
          <Score>{score}</Score>
        </ScoreCard>
      </ScoreCardContainer>
    )
  }

  renderPlayingView = () => (
    <UnList>
      {choicesList.map(each => (
        <ChooseItem key={each.id} item={each} />
      ))}
    </UnList>
  )

  renderGameResultView = () => {
    const {playerChoice, systemChoice, result} = this.state

    return (
      <GameResultView>
        <GameResultItem>
          <div>
            <Para>YOU</Para>
            <Image src={playerChoice.imageUrl} alt="your choice" />
          </div>
          <div>
            <Para>OPPONENT</Para>
            <Image src={systemChoice.imageUrl} alt="opponent choice" />
          </div>
        </GameResultItem>
        <Heading2>{result}</Heading2>
        <Button>Play Again</Button>
      </GameResultView>
    )
  }

  render() {
    return (
      <AppBg className="app-bg">
        {this.renderScoreCardView()}
        {/* {this.renderPlayingView()} */}
        {this.renderGameResultView()}
        <GameRulesView />
      </AppBg>
    )
  }
}

export default App
