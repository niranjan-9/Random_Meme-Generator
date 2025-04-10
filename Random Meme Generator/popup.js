document.addEventListener('DOMContentLoaded', function () {
  const generateButton = document.getElementById('generateButton');
  const memeContainer = document.getElementById('memeContainer');

  generateButton.addEventListener('click', function () {
    fetch('https://meme-api.com/gimme')
      .then(response => response.json())
      .then(data => {
        memeContainer.innerHTML = `<img src="${data.url}" alt="Random Meme">`;
      })
      .catch(error => {
        console.error('Error fetching meme:', error);
      });
  });
});
