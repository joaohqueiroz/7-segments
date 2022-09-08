- A lógica para renderizar os segmentos se baseia em criar um objeto que servisse como um dicionário para definir quais
  segmentos deveriam ser "acesos" e quais deveriam permanecer apagados, usando para isto um array de booleanos para cada chave/digito.
- O input foi tratado para aceitar no máximo 3 caracteres, valor digitado pelo usuário só é aceito se o parseInt() desse valor
  retornar algo diferente de NaN, evitando assim erros por inserção de letras.
- O valor digitado pelo usuário é particionado num array usando split() afim de separar os digitos e é buscado o array correspondente
  a cada digito no objeto "digits", dessa forma é feito um forEach() que "acende" os segmentos onde o array é true.
  Está lógica é replicada ao receber um código de erro.
- Para obtenção do número na API foi criada uma classe Number contendo um método static getNumber().
- O botão de Nova Partida recarrega a página provocando uma nova requisição.
