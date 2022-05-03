import { LitElement, html } from 'lit-element';
import './components/ozana-header';
import './components/ozana-footer';
import './pages/login-page';

export class OzanaApp extends LitElement {
  render() {
    return html`<ozana-header></ozana-header>
      <login-page></login-page>
      <ozana-footer></ozana-footer>`;
  }
  constructor() {
    super();
  }
}

window.customElements.define('ozana-app', OzanaApp);
