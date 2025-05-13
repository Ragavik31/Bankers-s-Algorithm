function generateTables() {
  const p = parseInt(document.getElementById('processes').value);
  const r = parseInt(document.getElementById('resources').value);
  const container = document.getElementById('matrices');
  container.innerHTML = '';

  const types = ['Allocation', 'Max', 'Available'];
  types.forEach(type => {
    let html = `<h3>${type} Matrix</h3><table>`;
    for (let i = 0; i < (type === 'Available' ? 1 : p); i++) {
      html += '<tr>';
      for (let j = 0; j < r; j++) {
        html += `<td><input type="number" id="${type}_${i}_${j}" value="0" min="0"></td>`;
      }
      html += '</tr>';
    }
    html += '</table>';
    container.innerHTML += html;
  });
}

function runBankers() {
  const p = parseInt(document.getElementById('processes').value);
  const r = parseInt(document.getElementById('resources').value);

  const alloc = Array.from({ length: p }, (_, i) =>
    Array.from({ length: r }, (_, j) =>
      parseInt(document.getElementById(`Allocation_${i}_${j}`).value))
  );

  const max = Array.from({ length: p }, (_, i) =>
    Array.from({ length: r }, (_, j) =>
      parseInt(document.getElementById(`Max_${i}_${j}`).value))
  );

  const avail = Array.from({ length: r }, (_, j) =>
    parseInt(document.getElementById(`Available_0_${j}`).value));

  const need = max.map((row, i) => row.map((val, j) => val - alloc[i][j]));

  // Display Need Matrix
  let output = `<h3>Need Matrix</h3><table>`;
  for (let i = 0; i < p; i++) {
    output += '<tr>';
    for (let j = 0; j < r; j++) {
      output += `<td>${need[i][j]}</td>`;
    }
    output += '</tr>';
  }
  output += '</table>';

  const finish = Array(p).fill(false);
  const safeSeq = [];
  const work = [...avail];

  let found;
  do {
    found = false;
    for (let i = 0; i < p; i++) {
      if (!finish[i] && need[i].every((n, j) => n <= work[j])) {
        for (let j = 0; j < r; j++) {
          work[j] += alloc[i][j];
        }
        finish[i] = true;
        safeSeq.push(`P${i}`);
        found = true;
      }
    }
  } while (found);

  if (finish.every(f => f)) {
    output += `<p>✅ System is in a <strong>SAFE</strong> state.</p>`;
    output += `<p>Safe Sequence: <strong>${safeSeq.join(' → ')}</strong></p>`;
  } else {
    output += `<p>❌ System is <strong>NOT SAFE</strong>! No safe sequence exists.</p>`;
  }

  document.getElementById('result').innerHTML = output;
}
