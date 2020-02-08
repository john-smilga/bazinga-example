import React from "react";
import styled from "styled-components";
import { BasicIcon } from "../../globals/icons";
import { FaCheck } from "react-icons/fa";
const contacts = () => {
  return (
    <section className="section">
      <Wrapper>
        <div className="icon-wrapper">
          <BasicIcon>
            <div>
              <FaCheck className="icon" />
            </div>
          </BasicIcon>
        </div>
        <h1>thank you</h1>
        <h4>A BaZing Represententative will contact you</h4>
      </Wrapper>
    </section>
  );
};
const Wrapper = styled.div`
  text-align: center;
  p {
    font-weight: bold;
  }
`;

export default contacts;
