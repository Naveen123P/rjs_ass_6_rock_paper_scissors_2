import {ListItem, Image} from './StyledComponent'
import './index.css'

const ChooseItem = props => {
  const {item, clickOnChoice} = props
  const {id, imageUrl} = item

  const onClickChoice = () => {
    clickOnChoice(item)
  }

  //   const getButtonId = () => {
  //     let buttonId
  //     if (id === 'ROCK') {
  //       buttonId = 'rockButton'
  //     } else if (id === 'SCISSORS') {
  //       buttonId = 'scissorsButton'
  //     } else {
  //       buttonId = 'PAPER'
  //     }
  //     return buttonId
  //   }

  return (
    <ListItem>
      <button data-testid={`${id.toLowerCase()}Button`} type="button">
        <Image src={imageUrl} alt={id} onClick={onClickChoice} />
      </button>
    </ListItem>
  )
}

export default ChooseItem
