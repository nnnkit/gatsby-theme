import React from "react";
import { css } from "@emotion/core";
import colors from "../tokens/colors";

export default ({ children }) => (
  <button
    css={css`
      padding: 32px;
      background-color: ${colors.primary};
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: white;
      }
    `}
  >
    {children}
  </button>
);
