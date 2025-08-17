const galeria = document.getElementById("galeria");
const detalhesDiv = document.getElementById("detalhes");
const favoritosDiv = document.getElementById("favoritos");

const apiUrl = "https://api.thedogapi.com/v1/images/search?limit=10";

if (galeria) {
  fetch(apiUrl)
    .then(res => res.json())
    .then(dogs => {
      dogs.forEach(dog => {
        const img = document.createElement("img");
        img.src = dog.url;
        img.alt = "Cão";
        img.addEventListener("click", () => {
          localStorage.setItem("detalheDog", JSON.stringify(dog));
          window.location.href = "detalhes.html";
        });
        galeria.appendChild(img);
      });
    });
}

if (detalhesDiv) {
  const dog = JSON.parse(localStorage.getItem("detalheDog"));
  if (dog) {
    detalhesDiv.innerHTML = `
      <img src="${dog.url}" alt="Cão">
      <p>ID: ${dog.id}</p>
      <button id="favoritar">Favoritar</button>
    `;

    document.getElementById("favoritar").addEventListener("click", () => {
      let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
      favoritos.push(dog);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      alert("Adicionado aos favoritos!");
    });
  }
}

if (favoritosDiv) {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  favoritos.forEach(dog => {
    const div = document.createElement("div");
    div.innerHTML = `
      <img src="${dog.url}" alt="Cão">
      <button data-id="${dog.id}">Remover</button>
    `;
    favoritosDiv.appendChild(div);
  });

  favoritosDiv.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
      let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
      favoritos = favoritos.filter(dog => dog.id !== e.target.dataset.id);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      e.target.parentElement.remove();
    }
  });
}
