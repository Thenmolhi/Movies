document.addEventListener('DOMContentLoaded', function() {
    const list = document.querySelector('#movie-list ul');
    const forms = document.forms;
  
    // to delete a movie
  
    list.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete')) {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
      }
    });
      //add movie
const addform = forms['add-movie'];
addform.addEventListener('submit', (e) => {
  e.preventDefault();

  //create elements
  const value = addform.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  const movieName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  //add text elements
  movieName.textContent = value;
  deleteBtn.textContent = 'delete';

  //add classes
  movieName.classList.add('name');
  deleteBtn.classList.add('delete');

  //append to dom
  li.appendChild(movieName);
  li.appendChild(deleteBtn);
  document.querySelector('#movie-list ul').appendChild(li);
});
})