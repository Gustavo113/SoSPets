function goTo(screen) {
      document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
      document.getElementById(screen).classList.add("active");
      document.querySelectorAll("footer div").forEach(f => f.classList.remove("active"));
      const activeTab = document.querySelector(`footer div[onclick="goTo('${screen}')"]`);

      if(activeTab) activeTab.classList.add("active");
    }

    function logout() {
      if(confirm("Deseja realmente sair do aplicativo?")) goTo("login");
    }

    function enviarMsg() {
      const input = document.getElementById("msgInput");
      const chat = document.getElementById("chatBox");
      const texto = input.value.trim();
      if(texto) {
        const msgUser = document.createElement("div");
        msgUser.className = "msg user";
        msgUser.textContent = texto;
        chat.appendChild(msgUser);
        input.value = "";
        setTimeout(() => {
          const msgBot = document.createElement("div");
          msgBot.className = "msg bot";
          msgBot.textContent = "Entendido! Em breve entraremos em contato 🐾";
          chat.appendChild(msgBot);
          chat.scrollTop = chat.scrollHeight;
        }, 800);
      }
      chat.scrollTop = chat.scrollHeight;
    }

    function atualizarRelogio() {
      const agora = new Date();
      const horas = agora.getHours().toString().padStart(2, '0');
      const minutos = agora.getMinutes().toString().padStart(2, '0');
     document.getElementById("relogio").textContent = `${horas}:${minutos}`;

    }
    setInterval(atualizarRelogio, 1000);
    atualizarRelogio();