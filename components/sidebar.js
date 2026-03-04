export function renderSidebar(target) {
  const sections = ['Overview', 'Customers', 'Billing', 'Reports', 'Settings'];

  target.innerHTML = `
    <div class="brand">
      <span class="brand-dot"></span>
      Orbit SaaS
    </div>
    <nav class="nav-list" aria-label="Primary">
      ${sections
        .map(
          (item, index) =>
            `<button class="nav-item ${index === 0 ? 'active' : ''}" type="button">${item}</button>`
        )
        .join('')}
    </nav>
  `;
}
