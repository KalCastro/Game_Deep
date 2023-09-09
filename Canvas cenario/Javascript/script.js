const canvasM = document.getElementById("CanvasM");
        const ctxM = canvasM.getContext("2d");

        let cloudX1 = -100; // Posição inicial da primeira nuvem
        let cloudX2 = -200; // Posição inicial da segunda nuvem
        let cloudX3 = -150; // Posição inicial da terceira nuvem

        function drawClouds() {

        // Limpa o quadro da manhã
        ctxM.clearRect(0, 0, canvasM.width, canvasM.height);


        // Manhã
        ctxM.fillStyle = "#87CEEB"; // Céu azul claro
        ctxM.fillRect(0, 0, canvasM.width, canvasM.height);

        // Sol
        ctxM.fillStyle = "#FFD700"; // Cor do sol
        ctxM.beginPath();
        ctxM.arc(55, 60, 50, 0, Math.PI * 2);
        ctxM.closePath();
        ctxM.fill();

        // Move e desenha a primeira nuvem
        cloudX1 += 1; // Mova a nuvem para a direita
        if (cloudX1 > canvasM.width) {
            cloudX1 = -100; // Reset da posição quando atinge o final
        }
        drawCloud(cloudX1, 150);

        // Move e desenha a segunda nuvem
        cloudX2 += 1; // Mova a nuvem para a direita
        if (cloudX2 > canvasM.width) {
            cloudX2 = -200; // Reset da posição quando atinge o final
        }
        drawCloud(cloudX2, 200);

        // Move e desenha a terceira nuvem
        cloudX3 += 1; // Mova a nuvem para a direita
        if (cloudX3 > canvasM.width) {
            cloudX3 = -150; // Reset da posição quando atinge o final
        }
        drawCloud(cloudX3, 100);

        // Colina final
        ctxM.fillStyle = "#165705"; 
        ctxM.beginPath();
        ctxM.moveTo(0, 700);
        ctxM.lineTo(40, 250);
        ctxM.lineTo(250, 600);
        ctxM.closePath();
        ctxM.fill();

        ctxM.fillStyle = "#0a2e01"; 
        ctxM.beginPath(); // colina5
        ctxM.moveTo(-100, 700);
        ctxM.lineTo(40, 250);
        ctxM.lineTo(50, 600);
        ctxM.closePath();
        ctxM.fill();

        ctxM.fillStyle = "#034d17";
        ctxM.beginPath();  // Colina4
        ctxM.moveTo(50, 500);
        ctxM.lineTo(250, 350);
        ctxM.lineTo(400, 500);
        ctxM.closePath();
        ctxM.fill();

        ctxM.fillStyle = "#034f10"; //colina3
        ctxM.beginPath();
        ctxM.moveTo(0, 500);
        ctxM.lineTo(150, 300);
        ctxM.lineTo(300, 500);
        ctxM.closePath();
        ctxM.fill();

        ctxM.fillStyle = "#056e17";
        ctxM.beginPath();  // Colina2
        ctxM.moveTo(100, 500);
        ctxM.lineTo(250, 350);
        ctxM.lineTo(400, 500);
        ctxM.closePath();
        ctxM.fill();

        ctxM.fillStyle = "#048519"; 
        ctxM.beginPath(); // Colina1
        ctxM.moveTo(0, 700);
        ctxM.lineTo(150, 300);
        ctxM.lineTo(300, 500);
        ctxM.closePath();
        ctxM.fill();

        }

        // Função para desenhar uma nuvem
        function drawCloud(x, y) {
            ctxM.fillStyle = "#fff"; // Cor das nuvens
            ctxM.beginPath();
            ctxM.arc(x, y, 30, 0, Math.PI * 2);
            ctxM.arc(x + 40, y, 40, 0, Math.PI * 2);
            ctxM.arc(x + 80, y, 30, 0, Math.PI * 2);
            ctxM.closePath();
            ctxM.fill();
        }
        
        drawClouds()

        //função para redesenhar as nuvens a cada 16ms
        setInterval(drawClouds, 16);

        // Tarde
        const canvasT = document.getElementById("CanvasT");
        const ctxT = canvasT.getContext("2d");

        //Ceu Tarde
        ctxT.fillStyle = "#FFA500"; // Céu alaranja
        ctxT.fillRect(0, 0, canvasT.width, canvasT.height);

        // Sol tarde
        ctxT.fillStyle = "#FFD700"; // Cor do sol
        ctxT.beginPath();
        ctxT.arc(canvasT.width / 2, canvasT.height / 2, 50, 0, Math.PI * 2);
        ctxT.closePath();
        ctxT.fill();

        // Pássaros
        ctxT.strokeStyle = "#000"; // Cor dos pássaros
        for (let i = 0; i < 5; i++) {
        const x = (canvasT.width / 3) + Math.random() * (canvasT.width / 3);
        const y = Math.random() * canvasT.height / 2;
        ctxT.beginPath();
        ctxT.moveTo(x, y);
        ctxT.quadraticCurveTo(x + 10, y - -20, x + 15, y);
        ctxT.stroke();
        }

        // Monte de Areia Arredondado traz 2
        ctxT.fillStyle = "#cc8c37"; // Cor
        ctxT.beginPath();
        ctxT.arc(50, canvasT.height, 150, 100, Math.PI, true);
        ctxT.closePath();
        ctxT.fill();

        // Monte de Areia Arredondado traz 1
        ctxT.fillStyle = "#c7985a"; // Cor
        ctxT.beginPath();
        ctxT.arc(250, canvasT.height, 200, 100, Math.PI, true);
        ctxT.closePath();
        ctxT.fill();

        // Monte de Areia 2
        ctxT.fillStyle = "#d68a06"; // Cor dos monte de areia
        ctxT.beginPath();
        ctxT.moveTo(100, canvasT.height); // Comece no canto inferior esquerdo
        ctxT.lineTo(200, canvasT.height / 2); // Vértice do primeiro monte
        ctxT.lineTo(300, canvasT.height); // Canto inferior direito
        ctxT.closePath();
        ctxT.fill();

        // Monte de Areia 1
        ctxT.fillStyle = "#8c5a04"; // Cor dos monte de areia
        ctxT.beginPath();
        ctxT.moveTo(200, canvasT.height); // Comece no canto inferior esquerdo
        ctxT.lineTo(200, canvasT.height / 2); // Vértice do primeiro monte
        ctxT.lineTo(300, canvasT.height); // Canto inferior direito
        ctxT.closePath();
        ctxT.fill();

        // Monte de Areia Arredondado 1
        ctxT.fillStyle = "#D2B48C"; // Cor
        ctxT.beginPath();
        ctxT.arc(50, canvasT.height, 100, 100, Math.PI, true);
        ctxT.closePath();
        ctxT.fill();

        // Monte de Areia Arredondado 2
        ctxT.fillStyle = "#D2B48C"; // Cor
        ctxT.beginPath();
        ctxT.arc(150, canvasT.height, 70, 100, Math.PI, true);
        ctxT.closePath();
        ctxT.fill();

        // Monte de Areia Arredondado 3
        ctxT.fillStyle = "#D2B48C"; // Cor
        ctxT.beginPath();
        ctxT.arc(250, canvasT.height, 90, 100, Math.PI, true);
        ctxT.closePath();
        ctxT.fill();

        const canvasN = document.getElementById("CanvasN");
        const ctxN = canvasN.getContext("2d");

        // Função para desenhar as estrelas
        function drawStars() {
        ctxN.clearRect(0, 0, canvasN.width, canvasN.height); // Limpa o canvas
        ctxN.fillStyle = "#000"; // Céu noturno
        ctxN.fillRect(0, 0, canvasN.width, canvasN.height);

        ctxN.fillStyle = "#fff"; // Cor das estrelas
        for (let i = 0; i < 100; i++) {
            const x = Math.random() * canvasN.width;
            const y = Math.random() * canvasN.height;
            ctxN.fillRect(x, y, 2, 2);
        }

        // Lua
        ctxN.fillStyle = "#cae7fc"; // Cor da Lua
        ctxN.beginPath();
        ctxN.arc(canvasN.width / 2, canvasN.height / 3, 60, 0, Math.PI * 2);
        ctxN.closePath();
        ctxN.fill()

        // Montanhas
        ctxN.fillStyle = "#4c4f4c"; // Cor das ultimas montanhas
        ctxN.beginPath();
        ctxN.moveTo(550, 600);
        ctxN.lineTo(250, 100);
        ctxN.lineTo(100, 350);
        ctxN.closePath();
        ctxN.fill();

        ctxN.fillStyle = "#8f8e8c"; // Cor das montanhas 5
        ctxN.beginPath();
        ctxN.moveTo(600, 700);
        ctxN.lineTo(250, 100);
        ctxN.lineTo(200, 600);
        ctxN.closePath();
        ctxN.fill();

        ctxN.fillStyle = "#787675"; // Cor das montanhas 4
        ctxN.beginPath();
        ctxN.moveTo(50, 500);
        ctxN.lineTo(150, 200);
        ctxN.lineTo(350, 500);
        ctxN.closePath();
        ctxN.fill();

        ctxN.fillStyle = "#30302c"; // Cor das montanhas 3
        ctxN.beginPath();
        ctxN.moveTo(50, 400);
        ctxN.lineTo(150, 200);
        ctxN.lineTo(250, 600);
        ctxN.closePath();
        ctxN.fill();

        ctxN.fillStyle = "#333634"; // Cor das montanhas 2
        ctxN.beginPath();
        ctxN.moveTo(-150, 800);
        ctxN.lineTo(50, 300);
        ctxN.lineTo(200, 500);
        ctxN.closePath();
        ctxN.fill();

        ctxN.fillStyle = "#656665"; // Cor das montanhas 1
        ctxN.beginPath();
        ctxN.moveTo(200,500);
        ctxN.lineTo(50, 300);
        ctxN.lineTo(200, 600);
        ctxN.closePath();
        ctxN.fill();

        }

        drawStars();

        setInterval(drawStars, 3000); //  3 segundos
