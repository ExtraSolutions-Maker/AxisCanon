async function loadPublicStatus() {
  try {
    const res = await fetch('./metrics/public-status.json', { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    const lastUpdated = document.getElementById('status-last-updated');
    const uptime = document.getElementById('status-uptime');
    const latency = document.getElementById('status-latency');
    const totalReq = document.getElementById('status-total-requests');
    const successRate = document.getElementById('status-success-rate');
    const incidents = document.getElementById('status-incidents-list');

    if (lastUpdated) lastUpdated.textContent = data.last_updated_utc || 'unknown';
    if (uptime) uptime.textContent = data.uptime_30d || 'n/a';

    const p50 = data?.latency?.p50_ms;
    const p95 = data?.latency?.p95_ms;
    if (latency) latency.textContent = (p50 && p95) ? `p50 ${p50}ms · p95 ${p95}ms` : 'n/a';

    if (totalReq) totalReq.textContent = data.total_requests_24h || 'n/a';
    if (successRate) successRate.textContent = data.success_rate_24h || 'n/a';

    if (incidents && Array.isArray(data.incidents)) {
      incidents.innerHTML = '';
      for (const item of data.incidents) {
        const li = document.createElement('li');
        li.textContent = item;
        incidents.appendChild(li);
      }
    }
  } catch (err) {
    console.error('Failed to load public status metrics:', err);
    const note = document.getElementById('status-load-note');
    if (note) note.textContent = 'Status metrics temporarily unavailable.';
  }
}

loadPublicStatus();
