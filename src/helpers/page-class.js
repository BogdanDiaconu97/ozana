import { LitElement } from 'lit-element';
import { connect } from 'pwa-helpers';
import store from '../redux/store';
import { translations } from '../config/translations';
export class PageClass extends connect(store)(LitElement) {
  static get properties() {
    return {
      name: { type: String },
      active: { type: Boolean, reflect: true },
    };
  }
  msg(key) {
    return translations[key];
  }

  get store() {
    return store;
  }

  get _state() {
    return store.getState();
  }

  dispatch(action) {
    store.dispatch(action);
  }

  stateChanged(state) {
    const active = state.page === this.name;

    if (active && !this.active) {
      this.active = true;
      this.activated(state);
    }

    if (!active && this.active) {
      this.active = false;
      this.deactivated(state);
    }

    if (this.active) this._stateChanged(state);
  }

  activated(_state) {}

  deactivated(_state) {}

  _stateChanged(_state) {}
}
