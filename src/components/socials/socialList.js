import React from "react";
import styled from "styled-components";
import { socialData } from "./socialData";
import { Social } from "./index";

export const SocialList = () => (
  <ListWrapper>
    {socialData
      ? socialData.map((social) => {
          return (
            <SocialCont key={social.id}>
              <Social name={social.name} key={social.id} color={social.color} />
            </SocialCont>
          );
        })
      : null}
  </ListWrapper>
);

const ListWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const SocialCont = styled.View`
  width: 64px;
`;
