const welcomeContainer = document.querySelector(".welcome-container");
const chatContainer = document.querySelector(".chat-container");
const askButton = document.querySelector(".ask-button");
const closeButton = document.querySelector(".close-button");

// 초기 상태 설정
welcomeContainer.classList.add("active");
chatContainer.classList.add("hidden");

askButton.addEventListener("click", () => {
  welcomeContainer.classList.remove("active");
  welcomeContainer.classList.add("hidden");

  chatContainer.classList.remove("hidden");
  chatContainer.classList.add("active");
});

closeButton.addEventListener("click", () => {
  welcomeContainer.classList.remove("hidden");
  welcomeContainer.classList.add("active");

  chatContainer.classList.remove("active");
  chatContainer.classList.add("hidden");
});
