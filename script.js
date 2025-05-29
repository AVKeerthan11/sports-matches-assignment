const matchesList = document.getElementById('matches-list');

fetch('https://www.thesportsdb.com/api/v1/json/3/eventsnextleague.php?id=4328')
  .then(res => res.json())
  .then(data => {
    let matches = data.events;

    // Use fallback data if API gives null
    if (!matches || matches.length === 0) {
      matches = [
        {
          strEvent: 'Real Madrid vs Barcelona',
          dateEvent: '2025-06-01',
          strTime: '20:00:00'
        },
        {
          strEvent: 'Manchester City vs Liverpool',
          dateEvent: '2025-06-03',
          strTime: '18:30:00'
        }
      ];
    }

    matchesList.innerHTML = '';
    matches.forEach(match => {
      const item = document.createElement('div');
      item.classList.add('match');
      item.innerHTML = `
        <h3>${match.strEvent}</h3>
        <p><strong>Date:</strong> ${match.dateEvent}</p>
        <p><strong>Time:</strong> ${match.strTime}</p>
      `;
      matchesList.appendChild(item);
    });
  })
  .catch(error => {
    console.error(error);
    matchesList.innerHTML = 'Failed to fetch matches.';
  });
