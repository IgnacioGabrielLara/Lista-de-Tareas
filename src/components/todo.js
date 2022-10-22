import { useState } from "react";

export default function Todo({ item, onUpdate, onDelete }) {
  const [isEdit, setIdEdit] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(item.title);
    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleChange(e) {
      const value = e.target.value;
      setNewValue(value);
    }

    function handleClick() {
      onUpdate(item.id, newValue);
      setIdEdit(false);
    }

    return (
      <form className="todoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          onChange={handleChange}
          value={newValue}
        ></input>
        <button className="button" onClick={handleClick}>
          Cargar
        </button>
      </form>
    );
  }

  function Elemento() {
    return (
      <div className="elementoInfo">
        <span className="todoTitle">{item.title}</span>
        <div className="botones">
          <button onClick={() => setIdEdit(true)}>Editar</button>
          <button onClick={() => onDelete(item.id)}>Eliminar</button>
        </div>
      </div>
    );
  }

  return <div className="todo">{isEdit ? <FormEdit /> : <Elemento />}</div>;
}
