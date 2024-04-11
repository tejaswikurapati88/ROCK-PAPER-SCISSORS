import {Images, List, ListButton} from '../../StyledComponents'

const ChoiceItem = props => {
  const {itemDetails, onAnsSelection} = props
  const {id, imageUrl} = itemDetails
  const onSelect = () => {
    onAnsSelection(id)
  }

  return (
    <List>
      <ListButton
        type="button"
        data-testid={`${id.toLowerCase()}Button`}
        onClick={onSelect}
      >
        <Images src={imageUrl} alt={id} />
      </ListButton>
    </List>
  )
}

export default ChoiceItem
