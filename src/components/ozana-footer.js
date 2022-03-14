import { html, css, LitElement } from 'lit-element';
import { containerStyle } from '../config/theme';

export class OzanaFooter extends LitElement {
  static get styles() {
    return [
      containerStyle,
      css`
        p {
          margin: 0;
          font-weight: bold;
          padding: 12px 0;
        }
        .credits {
          font-size: 22px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .rights {
          font-size: 18px;
          color: #fff;
        }
      `,
    ];
  }

  render() {
    return html`
      <footer class="container">
        <p class="credits">&copy;Bogdan Diaconu, 2022</p>
        <p class="rights">All rights reserved.</p>
      </footer>
    `;
  }
}

window.customElements.define('ozana-footer', OzanaFooter);
