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