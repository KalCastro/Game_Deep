<h1>Documentação do Diagrama de Classes para Jogo Unity: Deep</h1>

<body>
  
<p>Este é um README que fornece uma visão geral do diagrama de classes para um jogo Unity de corrida com obstáculos. O diagrama de classes descreve a estrutura e as relações entre as principais entidades do jogo, como o jogador, o nível e os obstáculos. O jogo é uma corrida com obstaculos, há 3 niveis e 3 vidas para o jogador. A cada nível ficará mais fácil de passar pelos obstaculos, e caso o jogador encoste em um será retirado uma vida do jogador. O mapa é o mesmo para cada nível, o que muda é a velocidade dos obstáculos em cada nível.</p>

<h2>Diagrama de Classes</h2>

<img src="link-para-a-imagem-do-diagrama" alt="Diagrama de Classes">

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
</body>




https://assetstore.unity.com/packages/3d/vegetation/environment-pack-free-forest-sample-168396
https://assetstore.unity.com/packages/3d/characters/humanoids/character-pack-free-animal-people-sample-204568
https://assetstore.unity.com/packages/3d/environments/roof-top-safe-house-195991
https://assetstore.unity.com/packages/3d/environments/free-open-building-112907
https://assetstore.unity.com/packages/templates/packs/obstacle-course-pack-178169
