import PopUp from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {Button, CloseButton, Image} from './styledComponent'
import './index.css'

const GameRulesView = () => (
  <PopUp
    model
    trigger={<Button type="button">Rules</Button>}
    position="top right"
  >
    {close => (
      <div className="model-bg">
        <CloseButton type="button" onClick={() => close()}>
          <RiCloseLine className="close-icon" />{' '}
        </CloseButton>
        <Image
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
        />
      </div>
    )}
  </PopUp>
)

export default GameRulesView
