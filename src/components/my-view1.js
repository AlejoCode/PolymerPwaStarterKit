/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyView1 extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

      </head>
      <style>
        .feature {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 300px;
        padding: 0 16px;
        box-sizing: border-box;
        }
        .feature > .icon {
          width: 76px;
          height: 76px;
      }
      </style>
      <section>
      <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Features</h2>
        </div>
        <div class="col-12">
          <ul class="list-group-flush">
            <li class="list-group-item"><p class="h6">All the PWA goodness (manifest, service worker).</p></li>
            <li class="list-group-item"><p class="h6">A responsive layout.</p></li>
            <li class="list-group-item"><p class="h6">Application theming.</p></li>
            <li class="list-group-item"><p class="h6">Example of using Redux for state management.</p></li>
            <li class="list-group-item"><p class="h6">Offline UI.</p></li>
            <li class="list-group-item"><p class="h6">Simple routing solution.</p></li>
            <li class="list-group-item"><p class="h6">Fast time-to-interactive and first-paint through the PRPL pattern.</p></li>
            <li class="list-group-item"><p class="h6">Easy deployment to prpl-server or static hosting.</p></li>
            <li class="list-group-item"><p class="h6">Unit and integrating testing starting points.</p></li>
            <li class="list-group-item"><p class="h6">Documentation about other advanced patterns.</p></li>
          </ul> 
        </div>
      </div>
      </div>
      </section>
      <section>
      <div class="container">
      <div class="row">
   
      <div class="col-3 feature">
        <svg class="icon" viewBox="0 0 24 24" style="fill: currentcolor;"><g id="phonelink"><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path></g></svg>
        <p>Seamlessly responsive</p>
      </div>
      <div class="col-3 feature">
        <svg class="icon" viewBox="0 0 24 24" style="fill: currentcolor;"><g id="flash-on"><path d="M7 2v11h3v9l7-12h-4l4-8z"></path></g></svg>
        <p>Lightning fast to load</p>
      </div>
      <div class="col-3 feature">
        <svg class="icon" viewBox="0 0 24 24" style="fill: currentcolor;"><g id="color-lens"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g></svg>
        <p>Flexible &amp; easily customized</p>
      </div>
      <div class="col-3 feature">
        <svg class="icon" viewBox="0 0 24 24" style="fill: currentcolor;"><g id="view-module"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"></path></g></svg>
        <p>Built with Web Components</p>

      </div>
      </div>
      </div>

      </section>
      <section>
        <p class="h3">An end-to-end solution for building high-quality Progressive Web Apps (PWAs).</p>
      </section>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
