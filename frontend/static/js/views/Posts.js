import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Posts');
  }
  async getHtml() {
    return `  <h1>POSTS</h1>
<p>
You are viewing the posts!</p>`;
  }
}
