import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('');
  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(inputValue);
    const inputValueClean= inputValue.trim();
    if (inputValueClean.length <= 1) return;
    // setCategories(categories => [inputValue, ...categories])
    onNewCategory(inputValueClean);
    setInputValue('');
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange} ></input>
    </form>

  )
}