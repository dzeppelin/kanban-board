import { useState } from 'react'
import {
  NewItemButton,
  NewItemFormContainer,
  NewItemInput,
} from '../styles/styled'
import { useFocus } from '../utils/useFocus'

type NewItemFormProps = {
  onAdd(text: string): void
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState('')
  const inputRef = useFocus()
  const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onAdd(text)
    }
  }

  return (
    <NewItemFormContainer>
      <NewItemInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        ref={inputRef}
        onKeyPress={handleAddText}
      />
      <NewItemButton onClick={() => onAdd(text)}>New one</NewItemButton>
    </NewItemFormContainer>
  )
}
