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