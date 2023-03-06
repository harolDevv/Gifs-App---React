import React, { useState } from 'react'

export const AddCategory = ({onNewValue}) => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange  = ({target}) => {
        setInputValue(target.value)
    }
    const onSubmit = (e) => {
      e.preventDefault();
      if (inputValue.trim().length <= 1) return

      setInputValue('')
      onNewValue( inputValue.trim() )
    }
    console.log(inputValue);
  return (
    <form onSubmit={onSubmit}>
        <input 
        type="text" 
        placeholder='Buscar Gifs'
        value={inputValue}
        onChange={(event) => onInputChange(event)}
        />
    </form>
  )
}

