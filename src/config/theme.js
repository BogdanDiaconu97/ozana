import { css } from 'lit-element';

export const containerStyle = css`
  .container {
    box-sizing: border-box;
    padding: 0 32px;
    margin: 0 auto;
    background-color: #e2e2e2;
  }
  [display-none] {
    display: none !important;
  }

  @media screen and (max-width: 600px) {
    .container {
      padding: 0 16px;
    }
  }
`;

export const componentStyle = css`
  :host() {
    --black: #333333;
    --white: #ededed;
    --lightgrey: #cccccc;
    --grey: #808080;
    --orange: #e86029;
    --red: #d42020;
    --lightblue: #2092d4;
    --blue: #2b25d9;
  }
`;
