/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

function afficheImage() {
  document.querySelector('#truc').removeAttribute('hidden');
}


// prints "hi" in the browser's dev tools console
document.querySelector('button').addEventListener('click', afficheImage);
