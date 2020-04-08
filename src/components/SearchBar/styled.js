import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 30px;
  min-height: 30px;

  cursor: pointer;

  .search-icon {
    fill: white;
  }

  .input {
    background-color: transparent;
    border: none;

    padding: 0 0 5px 0;

    width: 100%;

    line-height: 25px;
    font-size: 16px;

    color: white;

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
