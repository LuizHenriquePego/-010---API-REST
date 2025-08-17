# -010---API-REST

Nome: Luiz Henrique Pêgo Santos

Projeto: Galeria de cães

## Descrição e Objetivo do Projeto

Este projeto consiste em uma galeria de imagens de cães aleatórios, consumindo a **The Dog API** ([https://thedogapi.com/](https://thedogapi.com/)).  

O objetivo do projeto é:  
- Exibir imagens aleatórias de cães na página principal (`index.html`).  
- Permitir que o usuário veja detalhes de cada imagem na página de detalhes (`detalhes.html`).  
- Possibilitar que o usuário “favorite” imagens e visualize seus favoritos na página `favoritos.html`.  

O projeto cumpre os requisitos da atividade, utilizando pelo menos **2 métodos de requisição (GET e POST simulado)** e exibindo imagens provenientes da API.

---

## Tecnologias Utilizadas

- **HTML5** – estrutura das páginas  
- **CSS3** – estilização das páginas e galeria responsiva  
- **JavaScript (Vanilla JS)** – requisições à API, manipulação do DOM e LocalStorage  
- **API Pública:** The Dog API  

---

## Requisições Utilizadas

| Página          | Tipo de Requisição | Endpoint / Função                                    |
|-----------------|-----------------|----------------------------------------------------|
| index.html      | GET             | `https://api.thedogapi.com/v1/images/search?limit=10` (listar imagens) |
| detalhes.html   | POST (simulado) | Favoritar imagem → armazenar no `localStorage`     |
| favoritos.html  | GET             | Recuperar imagens favoritas do `localStorage`      |
| favoritos.html  | DELETE (simulado)| Remover imagem favorita do `localStorage`         |

---

## Créditos / Fontes de Referência

- [The Dog API](https://thedogapi.com/) – API pública de imagens de cães  
- Documentação oficial de **fetch API** do JavaScript  
- Exemplos de manipulação de **LocalStorage**  

---
