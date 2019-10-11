import { html, LitElement, customElement, property, css } from "lit-element";
import "./button";
import styles from "./styles";

@customElement("my-root")
export class MyRoot extends LitElement {
  @property() todos = [];

  static get styles() {
    return [
      css`
        :host {
          color: blue;
        }
      `,
      styles
    ];
  }

  render() {
    return html`
      <div>
        ${this.todos.map(
          todo =>
            html`
              <div>${todo.todo}</div>
            `
        )}
      </div>
      <my-button @button-click=${this.handleclick.bind(this)}></my-button>
    `;
  }

  handleclick(e) {
    this.todos = [
      ...this.todos,
      {todo: "foo"}
    ]
  }
}
