import { injectGlobal } from "emotion";

injectGlobal`

  @font-face {
    font-family: Raleway;
    src: url("assets/fonts/Raleway/raleway-regular.subset-webfont.woff2") format('woff2');
    font-weight: 400;
  }

  body {
    // font-family: 'rawline', sans-serif;
    font-family: 'Raleway';
    font-variant-numeric: lining-nums;
    font-feature-settings: "lnum" on;
    letter-spacing: 1px;
    line-height: 1.5;
    margin: 0;
    height: 100%;
    font-size: 14px;
    font-weight: 300;
  }

  * {
    margin: 0;
    padding: 0;
    display: 'flex';
    flex-direction: 'column';
  }

  h1, h2, h3, h4, b {
    font-weight: 400;
  }

  a {
    color: inherit;
    text-decoration: none;
    padding-bottom: 1px;
  }

  q {
    display: block;
    font-size: 12px;
    color: rgba(113, 129, 141, 1);
    text-decoration: none;
    padding-left: 12px;
    border-left: 2px solid rgba(113, 129, 141, 0.2);
  }

  q::before, q::after {
    content: none;
  }

  .root {
    max-width: 960px;
    margin: 80px auto;
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 1024px) {
    .root {
      max-width: none;
      margin: 50px;
    }
  }
`;
