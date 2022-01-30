import { LitElement, html } from 'lit-element';

export class OzanaApp extends LitElement {
  render() {
    return html`Hello world!`;
  }
}

window.customElements.define('ozana-app', OzanaApp);
