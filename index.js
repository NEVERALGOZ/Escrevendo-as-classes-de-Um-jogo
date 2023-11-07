class heroi {
  constructor(nome, idade, tipo, ataque) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.ataque = ataque;
  }

  mensagem() {
    console.log(`O ${this.tipo} atacou usando ${this.ataque}`);
  }
  
}

let guerreiro = new heroi("Bernar", 25, "Guerreiro", "Espada");
let mago = new heroi("Vectr", 478, "Mago" , "magia"  )
let monge = new heroi("Shuralama", 78, "Monge" , "artes marciais")
let ninja = new heroi("Iso" , 22, "Ninja", "shuriken")

console.log(mago);
mago.mensagem();


console.log(guerreiro);
guerreiro.mensagem();

console.log(monge);
monge.mensagem();

console.log(ninja);
ninja.mensagem();