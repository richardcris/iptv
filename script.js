document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('toggleButton');
    const sidebar = document.querySelector('.sidebar');
    const toggleSwitch = document.querySelector('.toggle-switch');
    const body = document.body;

    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });
    }

    if (toggleSwitch) {
        // Verifica o estado atual do modo escuro
        const darkMode = localStorage.getItem('darkMode') === 'true';

        // Aplica o modo escuro se estiver ativado
        if (darkMode) {
            body.classList.add('dark-mode');
            toggleSwitch.classList.add('active');
        }

        toggleSwitch.addEventListener('click', function() {
            const isDarkMode = body.classList.toggle('dark-mode');
            toggleSwitch.classList.toggle('active', isDarkMode);
            localStorage.setItem('darkMode', isDarkMode);
        });
    }

    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const userDisplay = document.getElementById('userDisplay');
    const logoutButton = document.getElementById('logoutButton');

    // Cadastro de novos usuários
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const users = JSON.parse(localStorage.getItem('users')) || [];

            // Verifica se o usuário já está cadastrado
            if (users.find(user => user.username === username)) {
                alert('Usuário já cadastrado.');
                return;
            }

            users.push({ name, email, username, password });
            localStorage.setItem('users', JSON.stringify(users));

            alert('Cadastro realizado com sucesso!');
            window.location.href = 'login.html';
        });
    }

    // Login de usuários
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const users = JSON.parse(localStorage.getItem('users')) || [];

            // Verifica credenciais
            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                localStorage.setItem('loggedInUser', JSON.stringify(user));
                alert('Login bem-sucedido!');
                window.location.href = 'index.html';
            } else {
                alert('Usuário ou senha inválidos.');
            }
        });
    }

    // Exibir informações do usuário logado
    if (userDisplay) {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

        if (loggedInUser) {
            userDisplay.innerHTML = `😀 Logado como ${loggedInUser.name}`;
            logoutButton.style.display = 'inline';
        } else {
            userDisplay.innerHTML = 'Você não está logado.';
            logoutButton.style.display = 'none';
        }
    }

    // Logout do usuário
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            localStorage.removeItem('loggedInUser');
            window.location.href = 'login.html';
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let index = 0;
    const totalSlides = slides.length;

    function showSlide(n) {
        if (n >= totalSlides) {
            index = 0;
        } else if (n < 0) {
            index = totalSlides - 1;
        } else {
            index = n;
        }
        slider.style.transform = `translateX(-${index * 100}px)`;
    }

    function nextSlide() {
        showSlide(index + 1);
    }

    function prevSlide() {
        showSlide(index - 1);
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Slider automático
    setInterval(nextSlide, 3000); // Muda de slide a cada 3 segundos

    // Inicializa o slider mostrando o primeiro slide
    showSlide(index);
});





document.addEventListener("DOMContentLoaded", function() {
    const names = ["João", "Maria", "Pedro", "Ana", "Carlos", "Laura", "Luiz", "Fernanda", "Richard","Cristina","Hyara","Nicole","Igor","Nathan","Talita","Talita","Ângela","Ângela","Luciana","Daniella","Daniella","Suzana","Raul","Enzo","Levi"];
    const popUpContainer = document.getElementById('popUpContainer');
    const maxNames = names.length;
    let usedNames = [];

    function generateUniqueName() {
        if (usedNames.length >= maxNames) {
            usedNames = []; // Resetar se todos os nomes foram usados
        }
        let randomName;
        do {
            randomName = names[Math.floor(Math.random() * names.length)];
        } while (usedNames.includes(randomName));
        usedNames.push(randomName);
        return randomName;
    }

    function createPopUp(message) {
        const popUp = document.createElement('div');
        popUp.className = 'pop-up';
        popUp.textContent = message;
        popUpContainer.appendChild(popUp);

        // Remove pop-up após a animação
        setTimeout(() => {
            popUp.remove();
        }, 5000);
    }

    function generatePopUps() {
        setInterval(() => {
            const name = generateUniqueName();
            createPopUp(`${name} acabou de assinar um plano!`);
        }, 10000); // Novo pop-up a cada 3 segundos
    }
    
 

    function setupPlanButtons() {
        document.getElementById('basicPlan').addEventListener('click', () => {
            createPopUp(`${generateUniqueName()} acabou de assinar o Plano Básico!`);
        });

        document.getElementById('premiumPlan').addEventListener('click', () => {
            createPopUp(`${generateUniqueName()} acabou de assinar o Plano Premium!`);
            // Pop-up adicional para o plano Premium
            createPopUp(`Muitas pessoas estão assinando o Plano Premium agora!`);
        });

        document.getElementById('elitePlan').addEventListener('click', () => {
            createPopUp(`${generateUniqueName()} acabou de assinar o Plano Elite!`);
        });
    }

    generatePopUps();
    setupPlanButtons();
});


document.getElementById('checkStatusButton').addEventListener('click', function() {
    document.getElementById('progressContainer').style.display = 'block';
    var progressBar = document.getElementById('progress');
    var progressText = document.getElementById('progressText');
    var statusMessage = document.getElementById('statusMessage');
    
    var progress = 0;
    
    // Função para atualizar a barra de progresso
    function updateProgress(value) {
        progress = value;
        progressBar.style.width = progress + '%';
        progressText.textContent = progress + '%';
    }

    // Simulação do progresso
    var interval = setInterval(function() {
        if (progress < 100) {
            progress += 20;  // Incrementa a barra de progresso
            updateProgress(progress);
        } else {
            clearInterval(interval);

            // Teste de conexão com o servidor
            fetch('http://cdrn1.com/get.php?username=JTEcuQ&password=7bHt6w&type=m3u_plus&output=ts')
                .then(response => {
                    if (response.ok) {
                        statusMessage.innerHTML = '<p style="color: green;">Conexão com o servidor está OK!</p>';
                    } else {
                        statusMessage.innerHTML = '<p style="color: red;">Problema ao conectar ao servidor. Tente novamente mais tarde.</p>';
                    }
                })
                .catch(error => {
                    statusMessage.innerHTML = '<p style="color: red;">Erro ao tentar se conectar ao servidor: ' + error.message + '</p>';
                });
        }
    }, 1000); // A cada 1 segundo, a barra de progresso é atualizada
});
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById('toggleButton');
    const sidebar = document.getElementById('sidebar');

    // Verifica se os elementos existem antes de adicionar o listener
    if (toggleButton && sidebar) {
        toggleButton.addEventListener('click', function () {
            sidebar.classList.toggle('open');
        });
    }

    const switchElement = document.querySelector('.sidebar .toggle-switch .switch');

    // Verifica se o elemento existe antes de adicionar o listener
    if (switchElement) {
        switchElement.addEventListener('click', function () {
            this.classList.toggle('active');
            document.body.classList.toggle('dark-mode');
        });
    }

    // Função para configurar os botões dos planos
    function setupPlanButtons() {
        const planButtons = document.querySelectorAll('.plan-card .button');

        planButtons.forEach(button => {
            button.addEventListener('click', function () {
                alert('Plano selecionado: ' + this.getAttribute('data-plan'));
            });
        });
    }

    // Verifica se a função setupPlanButtons deve ser chamada
    if (document.querySelector('.plan-card')) {
        setupPlanButtons();
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById('toggleButton');
    const sidebar = document.querySelector('.sidebar');

    // Verifica se os elementos existem antes de adicionar o listener
    if (toggleButton && sidebar) {
        // Remove a classe 'open' para manter o menu visível
        sidebar.classList.remove('open');

        toggleButton.addEventListener('click', function () {
            sidebar.classList.toggle('open');
        });
    }

    const switchElement = document.querySelector('.sidebar .toggle-switch .switch');

    // Verifica se o elemento existe antes de adicionar o listener
    if (switchElement) {
        switchElement.addEventListener('click', function () {
            this.classList.toggle('active');
            document.body.classList.toggle('dark-mode');
        });
    }

    // Função para configurar os botões dos planos
    function setupPlanButtons() {
        const planButtons = document.querySelectorAll('.plan-card .button');

        planButtons.forEach(button => {
            button.addEventListener('click', function () {
                alert('Plano selecionado: ' + this.getAttribute('data-plan'));
            });
        });
    }

    // Verifica se a função setupPlanButtons deve ser chamada
    if (document.querySelector('.plan-card')) {
        setupPlanButtons();
    }
});


document.addEventListener("DOMContentLoaded", function () {
    // Menu toggle
    const toggleButton = document.getElementById('toggleButton');
    const sidebar = document.querySelector('.sidebar');

    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            sidebar.classList.toggle('active');
        });
    } else {
        console.error('Elemento de toggleButton não encontrado');
    }

    // Plan buttons setup
    function setupPlanButtons() {
        const planButtons = document.querySelectorAll('.plan-card button');
        if (planButtons.length > 0) {
            planButtons.forEach(button => {
                button.addEventListener('click', function () {
                    alert('Você clicou em Assinar!');
                });
            });
        } else {
            console.error('Nenhum botão de plano encontrado');
        }
    }

    // Fetch recent content
    async function fetchRecentContent() {
        try {
            const response = await fetch('http://cdrn1.com/get.php?username=JTEcuQ&password=7bHt6w&type=m3u_plus&output=ts');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.text();
            const items = parseM3U(data);

            const recentItemsContainer = document.getElementById('recent-items');
            if (recentItemsContainer) {
                items.forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'recent-item';
                    div.innerHTML = `
                        <img src="${item.thumbnail}" alt="${item.title}">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    `;
                    recentItemsContainer.appendChild(div);
                });
            } else {
                console.error('Container de itens recentes não encontrado');
            }
        } catch (error) {
            console.error('Error fetching recent content:', error);
        }
    }

    // Parse M3U data
    function parseM3U(data) {
        const lines = data.split('\n');
        const items = [];
        let currentItem = {};

        lines.forEach(line => {
            if (line.startsWith('#EXTINF:')) {
                const info = line.split(',');
                currentItem.title = info[1] || 'Sem Título';
            } else if (line.startsWith('http')) {
                currentItem.url = line;
                currentItem.thumbnail = 'imagem_padrao.jpg'; // Use a URL válida para a imagem
                currentItem.description = 'Descrição padrão'; // Adicione uma descrição se possível

                items.push(currentItem);
                currentItem = {};
            }
        });

        return items;
    }

    setupPlanButtons();
    fetchRecentContent();
});





document.addEventListener("DOMContentLoaded", function() {
    const names = ["João", "Maria", "Pedro", "Ana", "Carlos", "Laura", "Luiz", "Fernanda", "Richard", "Cristina", "Hyara", "Nicole", "Igor", "Nathan", "Talita", "Ângela", "Luciana", "Daniella", "Suzana", "Raul", "Enzo", "Levi"];
    const movies = ["O Poderoso Chefão", "Vingadores: Ultimato", "Titanic", "O Rei Leão", "Star Wars", "Matrix", "Jurassic Park", "Harry Potter", "Senhor dos Anéis", "Homem-Aranha"];
    const popUpContainer = document.getElementById('popUpContainer1');
    const maxNames = names.length;
    let usedNames = [];

    function generateUniqueName() {
        if (usedNames.length >= maxNames) {
            usedNames = []; // Resetar se todos os nomes foram usados
        }
        let randomName;
        do {
            randomName = names[Math.floor(Math.random() * names.length)];
        } while (usedNames.includes(randomName));
        usedNames.push(randomName);
        return randomName;
    }

    function createPopUp(message) {
        const popUp = document.createElement('div');
        popUp.className = 'pop-up';
        popUp.textContent = message;
        popUpContainer.appendChild(popUp);

        // Remove pop-up após a animação
        setTimeout(() => {
            popUp.remove();
        }, 5000);
    }

    function generatePopUps() {
        setInterval(() => {
            const name = generateUniqueName();
            const movie = movies[Math.floor(Math.random() * movies.length)];
            createPopUp(`${name} está assistindo "${movie}"`);
        }, 10000); // Novo pop-up a cada 10 segundos
    }

    // Inicia a geração de popups assim que a página é carregada
    generatePopUps();
});
