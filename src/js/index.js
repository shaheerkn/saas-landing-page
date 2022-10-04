const clients = document.querySelectorAll('.clients');

for (let i = 0; i < clients.length; i++) {
  clients[i].addEventListener('click', (e)=> {
    clients.forEach((item) => {
      item.classList.remove('active')
    })
    clients[i].classList.add('active')
  })
}

console.log(clients)