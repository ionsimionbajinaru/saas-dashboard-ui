import { renderSidebar } from '../components/sidebar.js';
import { renderCards } from '../components/cards.js';
import { renderTable } from '../components/table.js';

function renderNavbar(target) {
  const date = new Date().toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  target.innerHTML = `
    <div>
      <h1>Dashboard</h1>
      <div class="nav-meta">Welcome back, product team</div>
    </div>
    <div class="nav-meta">Updated ${date}</div>
  `;
}

function initDashboard() {
  renderSidebar(document.getElementById('sidebar'));
  renderNavbar(document.getElementById('navbar'));
  renderCards(document.getElementById('statsCards'));
  renderTable(document.getElementById('activityTable'));
}

initDashboard();
