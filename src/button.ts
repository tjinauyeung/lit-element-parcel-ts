import { html, LitElement, customElement, TemplateResult } from "lit-element";

@customElement("my-button")
export class MyButton extends LitElement {
  render(): TemplateResult {
    return html`
      <button @click=${e => this.dispatchEvent(new CustomEvent('button-click'))}>add item</button>
    `;
  }
}
