import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  border-bottom: 1px solid #e9e9e9;
  background-color: #fff;
  box-shadow: 0 3px 8px rgb(0 0 0 / 25%);
  padding: 40px;
  padding-top: 25px;
  margin: auto;
  text-align: left;
  margin-top: 100px;
  h1 {
    font-weight: 400;
    margin: 0 0 20px 0;
    color: teal;
    font-size: 40px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  position: relative;
`;

export const InputField = styled.input`
  width: 400px;
  padding: 10px 15px;
  font-size: 18px;
  margin: 0px 5px;
  border: 1px solid lightgray;
  outline: none;
`;

export const AddButton = styled.button`
  background-color: #36d9b6;
  width: 100px;
  border: none;
  color: white;
  font-size: 20px;
  border-radius: 2px;
  position: relative;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #33aaa5;
  }
`;

export const TodoItemContainer = styled.div`
  display: flex;
  text-align: left;
  cursor: pointer;
  margin-top: 10px;
  justify-content: space-between;
  & > div {
    border-right: 1px solid lightgray;
    width: 427px;
    font-size: 18px;
    padding-left: 10px;
    margin-top: 0;
  }

  & > button {
    height: 50px;
    width: 80px;
    padding: 5px;
    margin: 5px;
    border: 2px solid red;
    font-weight: bold;
    color: red;
    background-color: white;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    position: relative;
    top: 8px;
  }
  button:hover {
    background-color: red;
    color: white;
  }
  div > p {
    margin-bottom: 0;

    color: ${(props) => (props.status ? "gray" : "black")};
    text-decoration: ${(props) => (props.status ? "line-through" : "none")};
  }
`;
