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
    playView: true,
  }

  renderScoreCardView = () => {
    const {score} = this.state
    return (
      <ScoreCardContainer>
        <div>
          <Heading>
            Rock <br />
            Paper
            <br />
            Scissors
          </Heading>
        </div>
        <ScoreCard>
          <ScoreText>Score</ScoreText>
          <Score>{score}</Score>
        </ScoreCard>
      </ScoreCardContainer>
    )
  }

  getScore = result => {
    const {score} = this.state
    let updatedScore
    if (gameResults.win === result) {
      updatedScore = score + 1
    } else if (gameResults.lose === result) {
      updatedScore = score - 1
    } else {
      updatedScore = score
    }
    return updatedScore
  }

  getResult = (playerId, systemId) => {
    let result
    if (playerId === systemId) {
      result = gameResults.tie
    } else if (playerId === 'PAPER' && systemId === 'ROCK') {
      result = gameResults.win
    } else if (playerId === 'SCISSORS' && systemId === 'ROCK') {
      result = gameResults.lose
    } else if (playerId === 'ROCK' && systemId === 'PAPER') {
      result = gameResults.lose
    } else if (playerId === 'SCISSORS' && systemId === 'PAPER') {
      result = gameResults.win
    } else if (playerId === 'ROCK' && systemId === 'SCISSORS') {
      result = gameResults.win
    } else if (playerId === 'PAPER' && systemId === 'SCISSORS') {
      result = gameResults.lose
    }
    return result
  }

  clickOnChoice = object => {
    const randomIndex = Math.floor(Math.random() * choicesList.length)
    const sysChoice = choicesList[randomIndex]
    this.setState({
      score: this.getScore(this.getResult(object.id, sysChoice.id)),
      playerChoice: object,
      systemChoice: sysChoice,
      result: this.getResult(object.id, sysChoice.id),
      playView: false,
    })
  }

  renderPlayingView = () => (
    <UnList>
      {choicesList.map(each => (
        <ChooseItem
          key={each.id}
          item={each}
          clickOnChoice={this.clickOnChoice}
        />
      ))}
    </UnList>
  )

  onClickPalyAgain = () => {
    this.setState({playView: true})
  }

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
        <Para>{result}</Para>
        <Button type="button" onClick={this.onClickPalyAgain}>
          PLAY AGAIN
        </Button>
      </GameResultView>
    )
  }

  render() {
    const {playView} = this.state
    return (
      <AppBg className="app-bg">
        {this.renderScoreCardView()}
        {playView ? (
          <>{this.renderPlayingView()}</>
        ) : (
          <>{this.renderGameResultView()}</>
        )}
        <GameRulesView />
      </AppBg>
    )
  }
}

export default App
