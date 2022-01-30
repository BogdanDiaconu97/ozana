import { LitElement, html } from 'lit-element';
import './components/ozana-header';

export class OzanaApp extends LitElement {
  render() {
    return html`<ozana-header></ozana-header>`;
  }
}

window.customElements.define('ozana-app', OzanaApp);
