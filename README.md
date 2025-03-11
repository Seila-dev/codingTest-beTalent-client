# Frontend - Coding Test BeTalent

Esse repositório contém o frontend de um sistema de gerenciamento de funcionários e cargos. Ele foi desenvolvido utilizando **React**, **Styled Components** e **Vite**. A aplicação se comunica com o backend para exibir informações sobre funcionários, como nome, cargo, foto, telefone e data de admissão.

## Tecnologias Utilizadas

- **React** - Biblioteca para a construção de interfaces de usuário.
- **React Router DOM** - Biblioteca para navegação entre páginas.
- **Styled Components** - Biblioteca para estilização de componentes React.
- **Axios** - Biblioteca para fazer requisições HTTP.
- **Vite** - Ferramenta para bundling e desenvolvimento rápido.
- **TypeScript** - Superset de JavaScript que adiciona tipagem estática ao código.

## Pré-requisitos

Antes de rodar o projeto, você precisa ter o seguinte instalado em sua máquina:

- **Node.js** (preferencialmente a versão LTS)
- **npm** ou **yarn**

## Instalação

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/Seila-dev/codingTest-beTalent-client.git
   cd codingTest-beTalent-client

2. **Instale as dependências**:
    ```bash
    npm install
## Como Rodar o Projeto
Após a instalação das dependências, você pode rodar o projeto localmente.

1. **Inicie o servidor de desenvolvimento**
  ```bash
  npm run dev
  ```

Isso vai iniciar o servidor de desenvolvimento na porta 5173. Agora você pode acessar o frontend do seu projeto através de http://localhost:5173.

## Como Funciona

1. **Requisição para o Backend**: O frontend faz uma requisição GET para a API no backend para obter os dados dos funcionários. O useEffect é utilizado para buscar esses dados assim que o componente é carregado.

2. **Exibição dos Funcionários**: Após obter os dados, os funcionários são armazenados no estado employeesGroup e exibidos em uma tabela. Há um campo de busca no qual o usuário pode digitar o nome de um funcionário para filtrá-lo.

3. **Estilização**: A aplicação é estilizada utilizando styled-components. Os componentes são estilizados de forma isolada e reutilizável.

## Contribuindo

Se você deseja contribuir para este repositório, siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma branch para a sua feature (git checkout -b minha-feature).
3. Faça commit das suas alterações (git commit -am 'Adicionando nova feature').
4. Envie para o repositório remoto (git push origin minha-feature).
5. Abra um pull request.