const stats = [
  { title: 'Monthly Recurring Revenue', value: '$84,290', trend: '+12.4% vs last month', up: true },
  { title: 'Active Subscriptions', value: '1,942', trend: '+4.1% vs last month', up: true },
  { title: 'Churn Rate', value: '2.3%', trend: '-0.3% vs last month', up: true },
  { title: 'Support Tickets', value: '148', trend: '+9 new today', up: false }
];

export function renderCards(target) {
  target.innerHTML = stats
    .map(
      ({ title, value, trend, up }) => `
      <article class="card">
        <p class="card-title">${title}</p>
        <p class="card-value">${value}</p>
        <p class="card-trend ${up ? 'trend-up' : 'trend-down'}">${trend}</p>
      </article>
    `
    )
    .join('');
}
