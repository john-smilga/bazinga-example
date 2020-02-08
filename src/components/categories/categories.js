import React from "react";
import data from "./constants";
import styled from "styled-components";
import { BasicIcon } from "../../globals/icons";
import { Link } from "react-router-dom";
const categories = () => {
  return (
    <section className="section">
      <Wrapper>
        <h3>What can BaZing can do for your business?</h3>
        <div className="icon-wrapper">
          {data.map(item => {
            return (
              <a key={item.id} href={item.path}>
                <BasicIcon>
                  <div>
                    {item.icon}
                    <p>{item.text}</p>
                  </div>
                </BasicIcon>
              </a>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
};
const Wrapper = styled.div`
  h3 {
    margin-bottom: 4rem;
  }
  text-align: center;

  .icon-wrapper {
    justify-content: space-around;
  }
`;
export default categories;
