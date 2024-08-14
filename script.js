const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
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
        userDisplay.innerHTML = `😀 Logado como: ${loggedInUser.name}`;
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
          fetch('http://cdrn1.com/get.php?username=bxX5WN&password=1dr533&type=m3u_plus&output=ts')
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
