import React from "react";

export const TodoAdd = () => {
  return (
    <form>
      <input
        type="text"
        className="input-add"
        name="description"
        value="Aprender Php"
        placeholder="Que debes hacer"
      />
      <button className="btn-add" type="submit">
        {" "}
        Agregar{" "}
      </button>
    </form>
  );
};