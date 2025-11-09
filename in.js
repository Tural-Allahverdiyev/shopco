const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdown = document.querySelector(".dropdown");

dropdownBtn.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("active");
  }
});

const promoBar = document.querySelector(".promo-bar");
const promoClose = document.querySelector(".promo-close");

if (promoClose) {
  promoClose.addEventListener("click", () => {
    promoBar.style.display = "none";
  });
}

function countUp(el, target) {
  let count = 0;
  const step = Math.ceil(target / 100);
  const timer = setInterval(() => {
    count += step;
    if (count >= target) {
      count = target;
      clearInterval(timer);
    }
    el.textContent = count.toLocaleString() + "+";
  }, 20);
}

const num1 = document.querySelector(".number-one");
const num2 = document.querySelector(".number-two");
const num3 = document.querySelector(".number-three");

window.addEventListener("load", () => {
  countUp(num1, 200);
  countUp(num2, 2000);
  countUp(num3, 30000);
});

const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");

if (searchBtn && searchInput) {
  searchBtn.addEventListener("click", () => {
    const isActive = searchInput.classList.toggle("active");

    if (isActive) {
      searchInput.style.display = "block";
      searchInput.focus();
      searchBtn.style.display = "none";
    } else {
      searchInput.style.display = "none";
      searchBtn.style.display = "block";
    }
  });

  searchInput.addEventListener("blur", () => {
    searchInput.classList.remove("active");
    searchInput.style.display = "none";
    searchBtn.style.display = "block";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".view-all");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const section = button.closest(".container_B");
      const extraCards = section.querySelectorAll(".extra");

      extraCards.forEach((card) => {
        card.classList.toggle("hidden");
      });

      button.textContent =
        button.textContent === "View All" ? "Hide" : "View All";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const cards = document.querySelectorAll(".sliderCard");
  let index = 0;

  function showCard(i) {
    cards.forEach((card, idx) => {
      card.classList.toggle("active", idx === i);
    });
  }

  next.addEventListener("click", () => {
    index = (index + 1) % cards.length;
    showCard(index);
  });

  prev.addEventListener("click", () => {
    index = (index - 1 + cards.length) % cards.length;
    showCard(index);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const subscribeBtn = document.getElementById("subscribe-btn");
});
