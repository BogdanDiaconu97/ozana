import { html, css, LitElement } from 'lit-element';
import { containerStyle } from '../config/theme';
import { PageClass } from '../helpers/page-class';
import { setEmail } from '../redux/user/actions';
import { selectEmail } from '../redux/user/selectors';

export class LoginPage extends PageClass {
  constructor() {
    super();
  }

  render() {
    return html`<form @submit=${this._submit}>
      <input />
      <button></button>
    </form>`;
  }

  _submit(e) {
    e.preventDefault();
    const mail = this.shadowRoot.querySelector('input').value;
    this.dispatch(setEmail(mail));
  }

  stateChanged(state) {
    this.email = selectEmail(state);
    console.log(this.email);
  }
}

window.customElements.define('login-page', LoginPage);
