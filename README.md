<p align="center">
   <img src="https://github.com/GuilhermeAmado/letmeask/blob/master/src/assets/images/logo.svg" alt="letmeask" width="400"/>
</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/guilhermeamado/letmeask?color=835AFD">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/guilhermeamado/letmeask?color=835AFD">
  
  <a href="https://github.com/guilhermeamado/letmeask/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/guilhermeamado/letmeask?color=835AFD">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/lorenatoscano/letmeask?color=835AFD">
</p>


## Sobre
Projeto desenvolvido durante a Next Level Week Together da [Rocketseat](https://rocketseat.com.br/).
O login é feito com o Firebase Auth, usando conta do Google.
Os usuários podem criar salas enviar e excluir perguntas.
O criador da sala pode administrar perguntas, marcando-as em highlight ou como respondidas, além de poder excluir perguntas.
Para acessar uma sala com vista de administrador, basta adicionar '/admin/' antes de '/rooms/'. Exemplo: ```http://localhost:3000/admin/rooms/-Md92soeoDpFTKoOKzVC ```

### Acesse o projeto no ar:
https://letmeask-cab2d.web.app/

## Tecnologias utilizadas

- [ReactJS](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [Sass](https://sass-lang.com/)
- [Firebase auth](https://firebase.google.com/?hl=pt)
- [Firebase realtime database](https://firebase.google.com/?hl=pt)


## Como rodar

Execute os comandos no seu terminal:

```bash
# Clone o repositório
$ git clone https://github.com/guilhermeamado/letmeask.git

# Entre no repositório
$ cd letmeask

# Instale as dependências
$ yarn install

# Execute a aplicação
$ yarn start
```

Acesse http://localhost:3000/


## Milha Extra

As seguintes funcionalidades não abordadas durante o curso foram implementadas "por conta":
- Notificação em forma de toast (pode ser vista quando se tenta entrar em uma sala que não existe)
- Possibilidade de tirar highlight de uma pergunta (para o caso de uma pergunta ter sido highlighted por engano por ex.)
