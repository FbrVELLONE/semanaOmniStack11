# Anotaçoes

## Back-end

##### Sobre rotagem
* Rota: "/algumacoisa" da pagina
* Recurso: o que vem apos ? depois da rota

##### Sobre metodos do HTTP
* GET: Buscar/Listar uma informaçao ndo back end
* POST criar uma informaçao no backend
* PUT: Alterar uma info no backend
* DELETE: deletar uma info no backend

##### Tipos de parametros:
* Query: Parametros nomeados enviados na rota apos o simbolo de '?'(Filtros, paginaçao)
* Route params: Parametros utilizados para identificar recursos
* Request Body: Corpo da requisiçao utilizado para criar ou alterar os recursos

##### Bancos de dados:
* SQL e NoSQL

##### Tipos de chamadas de parametros
* Driver: SELECT * FROM users
* Query Builder: table('user').select('*').where()



### Modelo relacional banco:

#### Entidades:
    * ONG
    * incident

#### Funcionalidades:
    * Login de ONG
    * Logount de ONG
    * Cadastro de ONG
    * Cadastrar novos casos
    * Deletar casos
    * Listar casos epecificos de uma ONG
    * Listar todos os casos
    * Entrar em contato com a ONG (wpp e email)


## Front-end

- Componentes em React sao funçoes que retornam HTML, com funcionalidades javascript ou css (tanto faz)

- JSX = JavaScript XML juntos!

- Propriedas tem a mesma sintaxe que atributos para o HTML, porém elas sao passadas para componentes do HTML

* Toda vez que conseguirmos isolar pedaços de codigo, ou mesmo se repetir muitas vezes, é melhor o isolarmos em um novo componente (novo arquivo .js) para facilitar a manutençao
Todos as propriedades de uma tag HTML sao passados para o JS como atributos da funçao em js, e podem ser acessados atravez de {} dentro do html. props.children -> recupera par default os elementos dentro da balisa

- Estado sao informaçoes que serao mantidas pelo componente, e ele precisa tratar ela tambem ou qualquer coisa assim. Entao, como o exemplo em aula, ao mudar uma variavel, ela nao alteraria seu valor exibido em tela, entao precisa-se implementar como estado. Fazer de acordo com o modelo "[variavel, funcaoDeAtt] = useState" 

- Imutabilidade: Por conceitos de performance, nunca podemos incrementar a variavel do de estado diretamente, precisamos precisar sobrepor esse valor apenas

* Em React, nao podem existir coisas em baixo uma da outra sem existir nada envolta! Ex: criar uma tag botao a baixo de um h1, devem estar envoltos por uma div... 

## Mobile
- No mobile com reactnative nao tem tags com semanticas, qualquer container vai utilisar View e texto Text;

- Para estilizar funciona diferente que o HTML, nao tem-se id para as coisas; tem que se passar o objeto que vai lhe modificar;
- Display flex por padrao;
- Tudo seguem camelCase em style
- Tudo que nao é numero precisa de aspas ao redor
- Nao existe herança de estilos no mobile
- Entao cada um teria que ter sua estilizaçao individual


## Funcionalidades Avançadas

#### Back-End
- Geralmente as validaçoes ficam para rotas que vao fazer alteraçoes (Post, delete..)
- TDD (Test-driven Development)
- Test unitario: busca testar algo que tem uma funçao especifica, isolada, sem acessar outras apis ou coisas;
- Test de integraçao: testa uma funcionalidade como um todo

#### Deploy
1. BackEnd:
- (Node)Heroku: melhor para pequenos tests e tudo mais, para api simples
- (Node)DigitalOcean: Boa para se for aplicaçoes realmente comerciais porem pequenas
- (Node) Se forem app muito grandes: AWS, googlecloud plataform, microsft azure

2. FrontEnd:
- app pequenas - netlify:

#### Estudos futuros:
- Padroes de codigo: ESLint, Prettier
- Autenticaçao JWT
- Styled Components


## Pacotes utilizados:
* express
* nodemon -D
* knex
* sqlite3
* npx knex init *
* npx knex migrate:make create_NOMEDESEJADO *
* npx knex migrate:latest *
* cors
* npx create-react-app *
* react-icons
* react-router-dom
* @react-navigation/native
* @react-navigation/stack
* -g expo-cli
* axios
* intl (utilizado dado que para o android nao ha o metodo para fazer a conversao)
* celebrate
* cross-env
* jest -D
* supertest -D
* expo:
	init PASTA(mobile)
	react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
	expo-constants
	expo-mail-composer


