// Placeholder client script; fetch and render resume if desired
fetch('./resume.json')
  .then(r => r.json())
  .then(data => {
    // You can integrate a client-side render here if needed.
    console.log('Resume loaded', data.basics?.name);
  })
  .catch(err => console.error('Failed to load resume.json', err));
