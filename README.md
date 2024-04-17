# Documentação do Projeto: Snake game

## Visão Geral:
Este projeto consiste na implementação do clássico jogo Snake (ou "cobrinha") utilizando JavaScript para lógica de jogo e manipulação do DOM.

## Funcionalidades:
1. **Movimento da Cobra:**
   - A cobra pode mover-se para cima, baixo, esquerda e direita.
   - O movimento é controlado pelas teclas de seta do teclado.
   
2. **Crescimento da Cobra:**
   - Quando a cobra come uma peça de comida, ela cresce em comprimento.
   
3. **Geração de Comida:**
   - A comida é gerada aleatoriamente dentro da área de jogo.
   
4. **Colisão:**
   - Se a cabeça da cobra colidir com seu próprio corpo ou com as bordas da área de jogo, o jogo termina.

## Implementação:
- **HTML:** O HTML contém um elemento canvas com o id "cobra" para desenhar o jogo.
- **CSS:** Não é necessário para este projeto, pois a estilização é feita através do JavaScript.
- **JavaScript:**
   - Inicializa o canvas e define variáveis e funções necessárias para o jogo.
   - Controla o movimento da cobra e sua interação com a comida e os limites da área de jogo.
   - Desenha a cobra, a comida e o fundo do jogo no canvas.

## Estrutura do Código:
- **Variáveis Globais:**
   - `tela`: Elemento canvas onde o jogo é desenhado.
   - `context`: Contexto 2D do canvas para desenho.
   - `fundo`: Tamanho do quadrado do fundo do jogo.
   - `cobra`: Array que representa o corpo da cobra.
   - `direction`: Direção atual da cobra (direita por padrão).
   - `comida`: Objeto que representa a posição da comida.

- **Funções Principais:**
   - `criarBG()`: Desenha o fundo do jogo.
   - `criarCobrinha()`: Desenha a cobra.
   - `colocarComida()`: Desenha a comida.
   - `movimento(event)`: Captura eventos de teclado para controlar o movimento da cobra.
   - `iniciarJogo()`: Função principal que atualiza o estado do jogo e redesenha os elementos.

- **Inicialização:**
   - Registra um ouvinte de evento para capturar as teclas pressionadas.
   - Chama a função `iniciarJogo()` em intervalos regulares para atualizar o estado do jogo.

## Considerações Finais:
Este projeto fornece uma implementação simples e funcional do jogo Snake usando HTML, CSS e JavaScript. Ele pode ser expandido e aprimorado com mais recursos e melhorias de jogabilidade.
