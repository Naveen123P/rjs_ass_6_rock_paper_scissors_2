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
} from './styledComponent'
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

class App extends Component {
  state = {
    score: 0,
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

  render() {
    return (
      <AppBg className="app-bg">
        {this.renderScoreCardView()}
        {this.renderPlayingView()}
      </AppBg>
    )
  }
}

export default App
