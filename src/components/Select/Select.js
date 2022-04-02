import React from 'react'

const Select = ({option = [], onSelect}) => {

    const handleSelect = (e) => {
        onSelect(e.target.value)
    }

    return (
        <select onChange={handleSelect}>
            {option.map((el) =><option value={el.value}>{el.text}</option>)}
        </select>
    )
}

export default Select