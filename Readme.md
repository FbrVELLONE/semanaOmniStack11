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

-Componentes em React sao funçoes que retornam HTML, com funcionalidades javascript ou css (tanto faz)

-JSX = JavaScript XML juntos!

-Propriedas tem a mesma sintaxe que atributos para o HTML, porém elas sao passadas para componentes do HTML

*Toda vez que conseguirmos isolar pedaços de codigo, ou mesmo se repetir muitas vezes, é melhor o isolarmos em um novo componente (novo arquivo .js) para facilitar a manutençao
Todos as propriedades de uma tag HTML sao passados para o JS como atributos da funçao em js, e podem ser acessados atravez de {} dentro do html. props.children -> recupera par default os elementos dentro da balisa

-Estado sao informaçoes que serao mantidas pelo componente, e ele precisa tratar ela tambem ou qualquer coisa assim. Entao, como o exemplo em aula, ao mudar uma variavel, ela nao alteraria seu valor exibido em tela, entao precisa-se implementar como estado. Fazer de acordo com o modelo "[variavel, funcaoDeAtt] = useState" 

-Imutabilidade: Por conceitos de performance, nunca podemos incrementar a variavel do de estado diretamente, precisamos precisar sobrepor esse valor apenas

*Em React, nao podem existir coisas em baixo uma da outra sem existir nada envolta! Ex: criar uma tag botao a baixo de um h1, devem estar envoltos por uma div... 

## Mobile
-No mobile com reactnative nao tem tags com semanticas, qualquer container vai utilisar View e texto Text;

-Para estilizar funciona diferente que o HTML, nao tem-se id para as coisas; tem que se passar o objeto que vai lhe modificar;
-Display flex por padrao;
-Tudo seguem camelCase em style
-Tudo que nao é numero precisa de aspas ao redor
-Nao existe herança de estilos no mobile
-Entao cada um teria que ter sua estilizaçao individual

