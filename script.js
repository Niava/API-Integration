const main = document.getElementById('root');

// Replace ./data.json with your JSON feed
fetch('https://ghibliapi.herokuapp.com/films')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    // Work with JSON data here
    console.log(data);
    updateDOM(data);
  })
  .catch((err) => {
    // Do something for an error here
  });

// Update DOM
function updateDOM(data) {
  // Clear main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';
  data.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('movie');
    element.innerHTML = `<div class="container"><strong><h4>${item.title}</h4></strong><p>${item.description}</p></div>`;
    element.innerHTML += `<p>testing</p>`;
    main.appendChild(element);
  });

}