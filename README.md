# Documentação do Projeto: Jogo da Cobra

## Descrição:
Este projeto consiste na implementação do clássico jogo da Cobra (ou "Snake") usando HTML, CSS e JavaScript. O objetivo é criar uma versão interativa do jogo em que o jogador controla uma cobra que cresce ao comer comida, evitando colidir com seu próprio corpo ou as bordas da área de jogo.

## Estrutura do Projeto:

### Arquivos:
- **index.html**: Este arquivo contém a estrutura básica do documento HTML. Ele define a estrutura da página web, incluindo o título do jogo, o canvas onde o jogo será renderizado e os links para os arquivos CSS e JavaScript.

- **style.css**: Este arquivo contém as regras de estilo CSS para personalizar a aparência do jogo. Ele define a aparência visual dos elementos HTML, como fontes, cores e layouts.

- **script.js**: Este arquivo contém todo o código JavaScript necessário para a lógica do jogo. Ele inclui a definição de variáveis, funções para desenhar elementos no canvas, controle de eventos do teclado e lógica do jogo.

## Como Jogar:

1. Abra o arquivo `index.html` em um navegador da web compatível com HTML5.
2. A cobra será exibida na tela junto com uma peça de comida.
3. Pressione a seta para cima para mover a cobra para cima, a seta para baixo para mover para baixo, a seta para a esquerda para mover para a esquerda e a seta para a direita para mover para a direita.
4. O objetivo do jogo é fazer com que a cobra cresça o máximo possível, comendo comida sem colidir com seu próprio corpo.
6. O jogo termina se a cabeça da cobra colidir com seu próprio corpo.

## Estrutura do Código:

### Variáveis Globais:
   - `tela`: Elemento canvas onde o jogo é desenhado.
   - `context`: Contexto 2D do canvas para desenho.
   - `fundo`: Tamanho do quadrado do fundo do jogo.
   - `cobra`: Array que representa o corpo da cobra.
   - `direction`: Direção atual da cobra (direita por padrão).
   - `comida`: Objeto que representa a posição da comida.

### Funções Principais:
   - `criarBG()`: Desenha o fundo do jogo.
   - `criarCobrinha()`: Desenha a cobra.
   - `colocarComida()`: Desenha a comida.
   - `movimento(event)`: Captura eventos de teclado para controlar o movimento da cobra.
   - `iniciarJogo()`: Função principal que atualiza o estado do jogo e redesenha os elementos.

### Inicialização:
   - Registra um ouvinte de evento para capturar as teclas pressionadas.
   - Chama a função `iniciarJogo()` em intervalos regulares para atualizar o estado do jogo.

## Implementação:
   - O jogo é implementado usando HTML para a estrutura da página, CSS para estilização e JavaScript para a lógica do jogo.
   - O código JavaScript é responsável por controlar o estado do jogo, detectar colisões, atualizar a posição da cobra e da comida e lidar com eventos de teclado.

## Créditos:
Este projeto foi desenvolvido como parte de um exercício prático de programação.

## Considerações Finais:
O projeto do Jogo da Cobra fornece uma implementação básica e funcional do jogo clássico usando tecnologias web padrão. Ele pode ser expandido e personalizado de várias maneiras para criar uma experiência de jogo mais envolvente e desafiadora.
