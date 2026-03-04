const rows = [
  { customer: 'Acme Inc.', plan: 'Scale', amount: '$1,200', status: 'success' },
  { customer: 'Nova Labs', plan: 'Starter', amount: '$290', status: 'pending' },
  { customer: 'Peak Commerce', plan: 'Enterprise', amount: '$3,900', status: 'success' },
  { customer: 'Velvet Studio', plan: 'Growth', amount: '$790', status: 'failed' },
  { customer: 'Northstar AI', plan: 'Scale', amount: '$1,200', status: 'success' }
];

export function renderTable(target) {
  target.innerHTML = `
    <table class="activity-table">
      <thead>
        <tr>
          <th>Customer</th>
          <th>Plan</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        ${rows
          .map(
            ({ customer, plan, amount, status }) => `
            <tr>
              <td>${customer}</td>
              <td>${plan}</td>
              <td>${amount}</td>
              <td><span class="badge ${status}">${status}</span></td>
            </tr>
          `
          )
          .join('')}
      </tbody>
    </table>
  `;
}
