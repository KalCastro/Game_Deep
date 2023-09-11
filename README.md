<h1>Documentação dos Diagramas do Jogo Unity: Deep</h1>

<body>
  
<p>Este é um README que fornece uma visão geral dos diagramas para um jogo Unity de corrida com obstáculos. O diagrama de classes descreve a estrutura e as relações entre as principais entidades do jogo, como o jogador, o nível e os obstáculos. O jogo é uma corrida com obstaculos, há 3 niveis e 3 vidas para o jogador. A cada nível ficará mais fácil de passar pelos obstaculos, e caso o jogador encoste em um será retirado uma vida do jogador. O mapa é o mesmo para cada nível, o que muda é a velocidade dos obstáculos em cada nível. E o diagrama de casos de uso descreve as ações que serão realizadas pelo jogador durante sua presença no jogo.</p>

<h2>Diagrama de Classes</h2>

<img src="Diagramas/Diagrama de Classe Unity.drawio.svg" height="500px" width="600px">

<h3>Classe <code>Jogo</code></h3>
<p>A classe <code>Jogo</code> é responsável por gerenciar o estado global do jogo e controlar o progresso. Ela possui os seguintes atributos e métodos:</p>
<ul>
    <li><code>nivel</code>: Representa o nível atual do jogo.</li>
    <li><code>vidas</code>: Mantém o número de vidas disponíveis para o jogador, e controla a contagem de vidas do jogador.</li>
</ul>
<p>Métodos:</p>
<ul>
    <li><code>começarNivel()</code>: Inicia um novo nível do jogo.</li>
    <li><code>terminarNivel()</code>: Encerra o nível atual.</li>
    <li><code>jogarNovamente()</code>: Reinicia o jogo.</li>
    <li><code>perderVida()</code>: Reduz o número de vidas quando o jogador perde uma vida, que é quando o jogador encosta em algum obstáculo.</li>
</ul>

<h3>Classe <code>Jogador</code></h3>
<p>A classe <code>Jogador</code> representa o personagem controlado pelo jogador. Ela inclui:</p>
<ul>
    <li><code>vidas</code>: Mantém o número de vidas do jogador.</li>
    <li><code>posicao</code>: Armazena a posição do jogador no espaço 3D.</li>
    <li><code>pular</code>: Indica se o jogador está no estado de salto.</li>
    <li><code>movimentar</code>: Indica se o jogador está se movendo.</li>
    <li><code>posicaoInicial</code>: Registra a posição inicial do jogador.</li>
    <li><code>jogador</code>: identifica o jogador no jogo, como seu tamanho e colisões.</li>
</ul>
<p>Métodos:</p>
<ul>
    <li><code>movimentar(direction: Vector3)</code>: Permite o movimento do jogador.</li>
    <li><code>Respawn()</code>: Reposiciona o jogador na posição inicial.</li>
    <li><code>pular()</code>: Controla o salto do jogador.</li>
    <li><code>perderVida()</code>: Reduz o número de vidas quando o jogador colide com um obstáculo.</li>
</ul>

<h3>Classe <code>Nivel</code></h3>
<p>A classe <code>Nivel</code> contém informações específicas de cada nível do jogo. Ela inclui:</p>
<ul>
    <li><code>velocidadeObstaculo</code>: Define a velocidade dos obstáculos no nível..</li>
    <li><code>nivelAtual</code>: identifica o nível atual.</li>
    <li><code>obstaculos</code>: Uma lista de obstáculos presentes no nível.</li>
</ul>
<p>Métodos:</p>
<ul>
    <li><code>atualizarObstaculoVelocidade</code>: Atualiza a velocidade dos obstáculos com base no nível.</li>
    <li><code>gerarObstaculos()</code>: Gera obstáculos no nível.</li>
    <li><code>aumentarNivel()</code>: Avança para o próximo nível.</li>
</ul>

<h3>Classe <code>Obstaculos</code></h3>
<p>A classe <code>Obstaculos</code> representa obstáculos no jogo. Ela inclui:</p>
<ul>
    <li><code>posicao</code>: Armazena a posição do jogador no espaço 3D.</li>
    <li><code>estatico</code>: Indica que os obstáculos são estáticos.</li>
    <li><code>obstaculoQuadrado</code>: Define que obstáculo é quadrado.</li>
    <li><code>obstaculoRetangulo</code>: Define que obstáculo é retangulo.</li>
    <li><code>obstaculoEsferico</code>: Define que obstáculo é esferico.</li>
</ul>
<p>Métodos:</p>
<ul>
    <li><code>movimentar</code>: Controla o movimento do obstáculo.</li>
    <li><code>checarColisao(jogador:Jogador)</code>:  Verifica colisões com o jogador.</li>
</ul>

<br><br>
<h2>Diagrama de Casos de uso</h2>
<img src="Diagramas/Diagrama Casos de Uso.drawio.svg" height="500px" width="600px">
<p><strong>Nome do caso de uso: </strong>Jogo Deep;<br>
   <strong>Caso de uso geral: </strong>Passar por obstáculos;<br>
   <strong>Ator principal: </strong>Jogador;<br>
   <strong>Resumo: </strong>O jogador tem como objetivo passar por obstáculos sem encostar em nenhum;<br>
   <strong>Pré-condições: </strong>O jogador tem que passar pelos obstáculos sem perder todas suas vidas;<br>
   <strong>Pré-condições: </strong>O jogador passa de nível;<br>
   <strong>Ações do ator: </strong>Ações do jogo.<br>
</p>

<h2> Ações</h2>
<ol>
  <li>O jogador inicia o jogo;</li>
  <li>O jogo identifica o nível a ser jogado pelo jogador;</li>
  <li>Se o jogador encostar em um obstáculo, perde uma vida;</li>
  <li>Passando pelos obstáculos, o jogador continua jogando até avançar para o próximo nível;</li>
  <li>Se o jogador perder todas as vidas, tem a opção de jogar novamente;</li>
  <li>Concluindo todos os níveis, o jogador tem a opção de jogar novamente.</li>
</ol>
<h3> Restrições</h3>
<ol>
  <li>Para perder o jogo, o jogador deve esgotar suas três vidas.</li>
</ol>

<h2>Ordem</h2>
<h3>Ações do Jogador: </h3>
<p>1,3,4</p>
<h3>Ações do Jogo: </h3>
<p>2,5,6</p>
</body>



