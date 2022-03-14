import { LitElement, html } from 'lit-element';
import './components/ozana-header';
import './components/ozana-footer';

export class OzanaApp extends LitElement {
  render() {
    return html`<ozana-header></ozana-header> <ozana-footer></ozana-footer>`;
  }
}

window.customElements.define('ozana-app', OzanaApp);
