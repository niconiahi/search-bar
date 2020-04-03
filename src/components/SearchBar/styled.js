import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .search-icon {
    fill: white;

    cursor: pointer;
  }

  .input {
    background-color: transparent;
    border: none;

    padding-bottom: 5px;

    width: 100%;

    line-height: 25px;
    font-size: 16px;

    color: white;

    cursor: pointer;
  }

  .input:focus {
    outline: none;
  }

  .input-wrapper {
    display: flex;
    align-items: center;

    border-bottom-style: solid;
    border-bottom-color: white;
  }

  .delete-icon {
    fill: white;
  }
`;
