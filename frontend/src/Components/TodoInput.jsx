import React, { useState } from "react";
import { AddButton, InputField, StyledForm } from "../Styles/styles";
export const TodoInput = ({ handleSubmit, error }) => {
  const [input, setInput] = useState("");
  return (
    <div>
      <StyledForm
        onSubmit={(e) => {
          handleSubmit(e, input);
          setInput("");
        }}
      >
        {error && (
          <p
            style={{
              color: "red",
              fontSize: "11px",
              margin: 0,
              marginLeft: 10,
              position: "absolute",
              bottom: 45,
              left: -5,
            }}
          >
            Please Enter something
          </p>
        )}
        <InputField
          type="text"
          name="todo"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Enter your todo..."
        />
        <AddButton>Add Todo</AddButton>
      </StyledForm>
    </div>
  );
};
