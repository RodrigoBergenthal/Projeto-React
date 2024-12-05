 # Projeto de Aplicação de Lista de Repositórios GitHub

Este é um projeto simples de uma aplicação web que permite aos usuários buscar e listar repositórios públicos do GitHub de acordo com o nome de usuário fornecido. O aplicativo foi construído usando React, e as principais funcionalidades incluem:

## Funcionalidades Principais

1. **Busca de Usuário**: Os usuários podem inserir um nome de usuário no campo de entrada e o aplicativo buscará repositórios públicos desse usuário.
2. **Listagem de Repositórios**: Após a busca, os repositórios são listados com seus nomes, linguagens e links para visualização no GitHub.
3. **Loading State**: Um indicador de carregamento é exibido enquanto os dados do usuário estão sendo buscados.
4. **Erros de Busca**: Mensagens de erro são exibidas se o nome de usuário fornecido não corresponder a um perfil válido no GitHub.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Fetch API**: Para realizar chamadas HTTP à API do GitHub.
- **CSS Modules**: Para gerenciar estilos locais em componentes React.

## Estrutura do Projeto

```
my-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── App.jsx
│   │   ├── Perfil.jsx
│   │   ├── Formulario.jsx
│   │   └── ReposList.jsx
│   ├── styles/
│   │   ├── app.css
│   │   ├── perfil.module.css
│   │   └── reposlist.module.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── package.json
├── README.md
└── .gitignore
```

## Como Executar o Projeto

1. **Clonar o Repositório**:
   ```sh
   git clone https://github.com/seu-usuario/nome-do-repo.git
   cd nome-do-repo
   ```

2. **Instalar Dependências**:
   ```sh
   npm install
   ```

3. **Executar o Projeto**:
   ```sh
   npm start
   ```

O aplicativo estará disponível no seu navegador em `http://localhost:3000`.

## Considerações Finais

Este projeto é um exemplo básico de como buscar e listar dados de uma API externa usando React. Ele pode ser expandido com funcionalidades adicionais, como a manipulação de erros mais robusta, validação do input do usuário, e melhorias no design da interface de usuário.

## Contribuições

Contribuições são bem-vindas! Por favor, abra uma issue para discussões sobre melhorias, correções de bugs ou novos recursos.
