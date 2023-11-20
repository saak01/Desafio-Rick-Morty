# Projeto Rick and Morty SPA

## Introdução
O projeto Rick and Morty SPA é uma Single Page Application desenvolvida utilizando a API Rick & Morty para o consumo de dados. A aplicação segue o modelo de dashboard, apresentando listagens e detalhes dos personagens da série.

### [Acesse a Demo](https://central-rick-morr.web.app/login) 

## FeedBack
Gentilmente, peço que compartilhe seus feedbacks ou sugestões, enviando um e-mail para joaovictorcosta.dev@gmail.com. Sua opinião contribuirá para meu aprimoramento como desenvolvedor!


## Adicionais
### [Ui Figma](https://www.figma.com/file/h7Z8Qs8eB8SLF3dAJgG5MI/Rick-%26-Morty-Project?type=design&node-id=1%3A2&mode=design&t=KcvMCkYgTfIHx7Gi-1) 

## Autenticação
Desenvolvi uma tela de login, uma página de perfil e um menu que exibe o nome do usuário logado, além de oferecer a opção de fazer logout. Embora a implementação de uma API real não seja obrigatória, utilizei mocks para simular o processo de autenticação.

As informações de usuário e senha estão prontamente disponíveis no formulário, facilitando o acesso. Além disso, incluí validadores de input para assegurar a integridade dos dados fornecidos.

## Credenciais de Acesso
- **Email:** ricksanchez@rick.com
- **Senha:** 123

## Layout
O layout da aplicação foi pensado para proporcionar uma experiência intuitiva e agradável ao usuário. Utilizei o Angular como framework principal, combinado com o Bootstrap para a estilização, garantindo um design responsivo e moderno.

## Funcionalidades

### Listagem e Detalhes
A aplicação possui uma página de listagem que exibe os personagens da série. Ao clicar em um dos itens da listagem, o usuário é direcionado para a página de detalhes, onde pode obter informações mais específicas sobre o personagem escolhido.

### Paginação
Implementei uma funcionalidade de paginação por meio de scroll infinito, proporcionando uma navegação mais fácil e eficiente pelos diversos personagens disponíveis.

### Barra de Busca
A barra de busca é uma funcionalidade global na aplicação, sendo exibida apenas nas páginas de listagem. Essa barra permite ao usuário filtrar a listagem ativa, proporcionando uma forma rápida de encontrar personagens específicos. A busca funciona de maneira consistente em todas as listagens implementadas.

### Filtro Persistente
Ao trocar de uma listagem para outra, o filtro da barra de busca permanece ativo. Isso significa que a nova listagem já será carregada filtrada com base no termo de busca, proporcionando uma transição suave entre diferentes seções da aplicação.

### Loadings Skeleton para Cards
Os loadings skeleton foram criados para melhorar a experiência do usuário durante o carregamento dos cards. Eles proporcionam uma representação visual dos elementos que estão sendo carregados, mantendo o layout organizado e fornecendo feedback visual ao usuário.

### Funcionalidade Extra: Favoritar Personagens
Implementei uma funcionalidade extra que permite aos usuários favoritar personagens. Os personagens favoritados são exibidos em uma lista separada, proporcionando aos usuários uma maneira conveniente de acompanhar e revisitar seus personagens preferidos.

## Como Executar o Projeto

### Pré-requisitos
Certifique-se de ter o Angular CLI instalado em sua máquina. Caso ainda não tenha, você pode instalá-lo globalmente usando o seguinte comando:

```bash
npm install -g @angular/cli
```

### Clone o Repositório
```bash
git clone https://github.com/seu-usuario/Pokedex-Angular.git
```

### Atualize as Dependências
No diretório raiz do projeto, execute o seguinte comando para obter todas as dependências necessárias:

```bash
npm install
```

### Execute o Projeto
Com as dependências atualizadas, você pode executar o aplicativo usando o seguinte comando:

```bash
ng serve
```

O aplicativo será compilado e estará disponível em http://localhost:4200/.

## Recursos Adicionais

- Se desejar aprender mais sobre o desenvolvimento de aplicativos Angular, recomendamos a [documentação oficial do Angular](https://angular.io/tutorial) e o [guia de início rápido do Angular](https://angular.io/guide/quickstart).
  
- Para obter ajuda adicional sobre desenvolvimento Angular, você pode visitar a [documentação online](https://angular.io/docs), que oferece tutoriais, amostras e uma referência completa da API.
