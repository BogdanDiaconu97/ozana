import { LitElement, html, css } from 'lit-element';
import { containerStyle } from '../config/theme';
import { logo } from '../assets/logo';
export class OzanaHeader extends LitElement {
  static get properties() {
    return {
      isUserLoggedIn: { type: Boolean },
      _isVisible: { type: Boolean },
    };
  }

  static get styles() {
    return [
      containerStyle,
      css`
        .logo {
          display: flex;
          justify-content: center;
        }
        nav {
          margin-top: -16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 16px;
        }
        .menu {
          padding: 12px;
          font-size: 28px;
          text-decoration: underline;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        li {
          padding: 12px;
          text-align: center;
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: 22px;
        }
        a {
          text-decoration: none;
          color: black;
        }
        .menu:hover,
        li:hover {
          cursor: pointer;
          background: #707070;
          border-radius: 16px;
          color: #fff;
          font-weight: bold;
        }
      `,
    ];
  }

  render() {
    return html`
      <header class="container">
        <div class="logo">${logo}</div>
        <nav>
          <span class="menu" @click=${this._toggleMenu}>Menu</span>
          <ul ?display-none=${!this._isVisible}>
            <a href="/"><li>Home</li></a>
            <a href="/leagues"><li>Leagues</li></a>
            <a href="/profile"><li>Profile</li></a>
            <a href="/history"><li>History</li></a>
            <a href="/logout"><li>Log Out</li></a>
          </ul>
        </nav>
      </header>
    `;
  }

  constructor() {
    super();

    /** @type {boolean} */
    this.isUserLoggedIn = false;

    /** @type {boolean} */
    this._isVisible = false;
  }

  _toggleMenu() {
    this._isVisible = !this._isVisible;
  }
}

window.customElements.define('ozana-header', OzanaHeader);
