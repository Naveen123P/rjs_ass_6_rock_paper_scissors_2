import {ListItem, Image} from './StyledComponent'

const ChooseItem = props => {
  const {item} = props
  const {id, imageUrl} = item

  return (
    <ListItem>
      <Image src={imageUrl} alt={id} />
    </ListItem>
  )
}

export default ChooseItem
