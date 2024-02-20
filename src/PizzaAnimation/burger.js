import React from 'react'

export default function burger({click , onClick}) {
  return (
    <button onClick={onClick}>
      <img
        src={
          !click
            ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEX///8AAADV1dVWVlaenp5eXl6Ojo6qqqrz8/PY2Nijo6PIyMiVlZXj4+Pp6embm5tsbGwaGho2NjZnZ2ceHh4jIyOAgIDPz888PDx6enpNkGGAAAABh0lEQVR4nO3daW4CMQwG0CmFwrBvZbn/RUuLVKk/yozkkRzCeyfwJyAJUuw0DQAAAAAAAAAAAADwx3ozeS/TZLMeIuDHW8k+4gEP2Rk6bKMB59kJOk1jAWfH7ACdPmehhIvs+ntYhBIus8vvYRlKWPZCehdbTqfZ5fcQW2pW2eX3sAolbCbZ9XeaxAI26+wAncIHtzY7QYc2GvC26Z922Sn+tTvFtvvfjO2oTO0w+QAAAAAAAAAAgNcymo/LNB8Nkm+xz7699sA+dsn7R+ntCMFmhGe4rH8OJiz5K3p3iQUcZdffQ2y5GWeX38M4lLD+fov6P8P6f4dPsJbuYwGbc3aATtH9sPjOp/CZ5naquWSHeGCIc2lT/38LAAAAAAAAAADgtdQ+g3Z2LXiO8HWAjKXfoQ3Pgi5/KHt0nnf5M9kPtX+E0bn6pd8Q/ha7JVx/v0X9b5SU37oWfWfmCd4KOgY3/dIbLAdoR9hmJ+gQfrOr9MVmgHfXXuDtPAAAAAAAAAAAAACoyRdvvChbuiAxGgAAAABJRU5ErkJggg=="
            : "https://cdn.icon-icons.com/icons2/1898/PNG/512/close_121016.png"
        }
        alt=""
        className="w-6 md:hidden fixed right-1"
      />
    </button>
  );
}
