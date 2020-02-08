import styled from "styled-components";

export const BasicIcon = styled.div`
  height: 140px;
  width: 140px;
  background: var(--cl-primary);
  border-radius: 50%;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: var(--trans);
  .icon {
    font-size: 4rem;
    color: var(--cl-white);
  }
  p {
    color: white;
    text-transform: capitalize;
    margin-bottom: 0;
  }
  &:hover {
    background: var(--cl-hover);
  }
`;
