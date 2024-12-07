import './style.css';
import { BreakingbadApp } from './breakingbad/breakingbad-app.js';

document.querySelector('#app').innerHTML = `
  <div class="container">
    <img src="/public/logo.png" alt="Breaking Bad Logo" class="logo">
    <h1 id="app-title">Breaking Bad API</h1>
    <div class="card">
      <div id="breakingbad-content"></div>
    </div>
  </div>
`;

const element = document.querySelector('#breakingbad-content');
BreakingbadApp(element);
