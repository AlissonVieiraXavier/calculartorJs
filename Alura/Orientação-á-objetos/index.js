
class Cliente {
    nome;
    cpf;

}
class ContaCorrente {
    agencia;
    saldo;
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233344;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 11629283844;

const ContaCorrentRicardo = new ContaCorrente();
ContaCorrentRicardo.agencia = 0010;
ContaCorrentRicardo.saldo = 0;

const ContaCorrentAlice = new ContaCorrente();
ContaCorrentAlice.agencia = 0010;
ContaCorrentAlice.saldo = 0;

console.log(cliente1);
console.log(cliente2);
