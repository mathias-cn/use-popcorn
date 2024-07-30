# usePopcorn | React + TS + Tailwind
Study project from Part 2 of [The Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course/)

The project was to create a movie-related page where you could search movies, select them to view details, add it to your list with a rating value you choose and afterwards you can update the rating or delete the movie from your list. 

Since i like to give myself some challenges, i did most of the project on my own, the only part i watched how to do was the StarRating component and i copied the project starter files, which was basically an App.js that had the base layout which i converted to app.tsx and tailwind 

It was a challenging project since i just learned useEffect hook  had to use it for the data fetching, but it was a cool and fun project to learn.

What i've did and used:
* Reusable components (StarRating, Button, ErrorMessage, Loader, MovieAttr, MovieListElement)
* [Tailwind Variants](https://www.tailwind-variants.org/) for the Button component, so i can change the styling of the button based on a single prop passed in the component
* useEffect + [Axios](https://axios-http.com/docs/intro) for data fetching
* [OMDb API](https://www.omdbapi.com/) for the movies data

* Live-Demo: [Click-Here!](https://use-popcorn-mocha-nine.vercel.app/)

# [pt-BR] usePopcorn | React + TS + Tailwind
Projeto de estudo da Parte 2 do [The Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course/)

O objetivo do projeto era criar um site sobre filmes, onde você poderia pesquisar, selecioná-los para ver detalhes, adicioná-los à sua lista com uma classificação que você escolher e, se quiser, atualizar a classificação ou excluir o filme da sua lista.

Como gosto de me desafiar, fiz a maior parte do projeto sozinho. A única parte que assisti as aulas foi do componente StarRating e copiei os arquivos iniciais do projeto, que basicamente consistiam em um App.js com o layout base que converti para app.tsx e Tailwind.

Foi um projeto desafiador, pois eu tinha acabado de aprender o hook useEffect e tive que usá-lo para consumir dados de uma API, mas foi um projeto legal e divertido para aprender.

O que fiz e utilizei:
* Componentes reutilizáveis (StarRating, Button, ErrorMessage, Loader, MovieAttr, MovieListElement)
* [Tailwind Variants](https://www.tailwind-variants.org/) para o componente Button, permitindo mudar o estilo do botão com base em uma única prop passada no componente
* useEffect + [Axios](https://axios-http.com/docs/intro) para busca de dados
* [OMDb API](https://www.omdbapi.com/) para obter os dados dos filmes

* Live-Demo: [Clique-aqui!](https://use-popcorn-mocha-nine.vercel.app/)