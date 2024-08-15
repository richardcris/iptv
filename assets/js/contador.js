function getRandomOnlineUsers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function animateCounter(element, start, end, duration) {
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);

        element.textContent = current;

        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            element.classList.remove('animate');
        }
    }

    element.classList.add('animate');
    window.requestAnimationFrame(step);
}

function updateOnlineUsers() {
    const onlineUsersElement = document.getElementById('online-users');
    const currentUsers = parseInt(onlineUsersElement.textContent, 10);
    const newUsers = getRandomOnlineUsers(350, 3000);

    animateCounter(onlineUsersElement, currentUsers, newUsers, 5000); // Duração de 1 segundo
}

// Inicializa o contador com um número entre 5 e 10
document.getElementById('online-users').textContent = getRandomOnlineUsers(350, 3000);

// Atualiza o número de usuários online a cada 10 segundos
setInterval(updateOnlineUsers, 50000);




const emojis = ["😊", "😎", "🚀", "🔥", "🎉"]; // Lista de emojis
let emojiIndex = 0; // Índice inicial

function changeEmoji() {
// Atualiza o conteúdo do div emoji
document.getElementById("emoji").textContent = emojis[emojiIndex];

// Incrementa o índice do emoji
emojiIndex = (emojiIndex + 1) % emojis.length;
}

// Muda o emoji a cada 2 segundos (2000 milissegundos)
setInterval(changeEmoji, 2000);