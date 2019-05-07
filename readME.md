## cardValidator()

# Biblioteca JS para validar números de cartão de crédito

**Esta biblioteca se destina à validação de números de cartão de crédito.**
Na versão atual é possível inserir um número de cartão de crédito como string corrida, com caracteres especiais ou dígitos. A biblioteca foi testada nessa versão para cartões MasterCard, Visa e American Express. A validação do número não garante a existência do cartão.

## Como instalar:

```shell

$  npm install creditcard-validator-jj

```

## Como utilizar:

```node

> const cardValidator = require("creditcard-validator-jj");
> console.log(cardValidator.cardValidator('3497 7344 3661 071'));
> // returns "true"
> console.log(cardValidator.cardValidator(54555555554444));
> // returns "false"

```

## roadmap oficial do projeto

#### versão 2.0.0 (sem previsão - aceita-se contribuições)
- correção de eventuais bugs;
- aceitar (com testes) os cartões além de MC, Visa e AE;
- melhorar experiência com rapidez e mensagens de resultados.

#### versão 1.1.0 (released)
- testadas as verificações de cartões JBC e Discover (além de MC, Visa e AE);

#### versão 1.0.0 (released)
- funcionalidades:validação de números de cartão de crédito.
- valida números de cartões de crédito (testada para MasterCard, Visa e American Express). Após receber o número como string (contendo ou não caracteres especiais) ou dígitos, retorna true para válido e false para inválido. 