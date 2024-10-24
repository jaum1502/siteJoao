function createRandomText() {
    const frases = ['Rembrandt é viado', 'RPG é coisa de baitola', 'Guilherme é gay (viado)'];
    const randomIndex = Math.floor(Math.random() * frases.length);
    return frases[randomIndex];
}

        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }


        function getRandomOpacity() {
            return Math.random().toFixed(2);
        }

        function generateRandomTextElement() {
            const textElement = document.createElement('div');
            textElement.classList.add('text-overlay');
            textElement.innerText = createRandomText();

            textElement.style.top = Math.random() * 100 + 'vh';
            textElement.style.left = Math.random() * 100 + 'vw';
            textElement.style.color = getRandomColor();
            textElement.style.opacity = getRandomOpacity();
            textElement.style.position = 'absolute';
            textElement.style.zIndex = 1;
            textElement.style.fontSize = '20px';
            textElement.style.pointerEvents = 'none';

            document.body.appendChild(textElement);

            setTimeout(() => {
                textElement.remove();
            }, 500);
        }

        function startInfiniteTextGeneration() {
            setInterval(generateRandomTextElement, 2);
        }

        startInfiniteTextGeneration();

        function changeImage() {
            var image = document.getElementById('image');
            var button = document.getElementById('relatorioBtn');

            image.src = '2_atv_detectada.jpg';
            button.style.display = 'none';

            var newButton = document.createElement("button");
            newButton.classList.add('novoBotao');
            newButton.innerHTML = 'ACEITAR MISSÃO';

            newButton.onclick = function () {
                image.src = '3_atv_detectada.jpg';
                newButton.style.display = 'none';
            };

            document.querySelector('.container').appendChild(newButton);
        }