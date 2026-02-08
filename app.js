// ========== ДАННЫЕ ИГРЫ ==========
const cases = [
  { 
    id: 1, 
    name: "Обычный", 
    price: 100, 
    emoji: "📦",
    color: "#bb86fc",
    skins: [
      { name: "AK-47 | Красный", rarity: "common", sellPrice: 50 },
      { name: "M4A4 | Синий", rarity: "common", sellPrice: 50 },
      { name: "AWP | Серый", rarity: "common", sellPrice: 50 },
      { name: "Glock-18 | Белый", rarity: "common", sellPrice: 50 },
      { name: "USP-S | Чёрный", rarity: "common", sellPrice: 50 },
      { name: "Desert Eagle | Зелёный", rarity: "common", sellPrice: 50 },
      { name: "P250 | Оранжевый", rarity: "common", sellPrice: 50 },
      { name: "Five-SeveN | Фиолетовый", rarity: "common", sellPrice: 50 },
      { name: "Tec-9 | Жёлтый", rarity: "common", sellPrice: 50 },
      { name: "CZ75-Auto | Коричневый", rarity: "common", sellPrice: 50 }
    ]
  },
  { 
    id: 2, 
    name: "Редкий", 
    price: 200, 
    emoji: "🎁",
    color: "#03dac6",
    skins: [
      { name: "AK-47 | Дракон", rarity: "rare", sellPrice: 100 },
      { name: "M4A4 | Тигр", rarity: "rare", sellPrice: 100 },
      { name: "AWP | Орёл", rarity: "rare", sellPrice: 100 },
      { name: "Glock-18 | Змея", rarity: "rare", sellPrice: 100 },
      { name: "USP-S | Волк", rarity: "rare", sellPrice: 100 },
      { name: "Desert Eagle | Лев", rarity: "rare", sellPrice: 100 },
      { name: "P250 | Пантера", rarity: "rare", sellPrice: 100 },
      { name: "Five-SeveN | Ястреб", rarity: "rare", sellPrice: 100 },
      { name: "Tec-9 | Сова", rarity: "rare", sellPrice: 100 },
      { name: "CZ75-Auto | Лиса", rarity: "rare", sellPrice: 100 }
    ]
  },
  { 
    id: 3, 
    name: "Эпический", 
    price: 400, 
    emoji: "💎",
    color: "#cf6679",
    skins: [
      { name: "AK-47 | Демон", rarity: "epic", sellPrice: 200 },
      { name: "M4A4 | Ангел", rarity: "epic", sellPrice: 200 },
      { name: "AWP | Драконий глаз", rarity: "epic", sellPrice: 200 },
      { name: "Glock-18 | Неон", rarity: "epic", sellPrice: 200 },
      { name: "USP-S | Кибер", rarity: "epic", sellPrice: 200 },
      { name: "Desert Eagle | Золото", rarity: "epic", sellPrice: 200 },
      { name: "P250 | Голография", rarity: "epic", sellPrice: 200 },
      { name: "Five-SeveN | Матрица", rarity: "epic", sellPrice: 200 },
      { name: "Tec-9 | Космос", rarity: "epic", sellPrice: 200 },
      { name: "CZ75-Auto | Огонь", rarity: "epic", sellPrice: 200 }
    ]
  },
  { 
    id: 4, 
    name: "Легендарный", 
    price: 600, 
    emoji: "👑",
    color: "#ff9800",
    skins: [
      { name: "AK-47 | Бог войны", rarity: "legendary", sellPrice: 300 },
      { name: "M4A4 | Король", rarity: "legendary", sellPrice: 300 },
      { name: "AWP | Император", rarity: "legendary", sellPrice: 300 },
      { name: "Glock-18 | Мастер", rarity: "legendary", sellPrice: 300 },
      { name: "USP-S | Легенда", rarity: "legendary", sellPrice: 300 },
      { name: "Desert Eagle | Фараон", rarity: "legendary", sellPrice: 300 },
      { name: "P250 | Драконий рыцарь", rarity: "legendary", sellPrice: 300 },
      { name: "Five-SeveN | Самурай", rarity: "legendary", sellPrice: 300 },
      { name: "Tec-9 | Ниндзя", rarity: "legendary", sellPrice: 300 },
      { name: "CZ75-Auto | Император", rarity: "legendary", sellPrice: 300 }
    ]
  },
  { 
    id: 5, 
    name: "Мифический", 
    price: 1000, 
    emoji: "✨",
    color: "#9c27b0",
    skins: [
      { name: "AK-47 | Бог", rarity: "mythical", sellPrice: 500 },
      { name: "M4A4 | Титан", rarity: "mythical", sellPrice: 500 },
      { name: "AWP | Вселенная", rarity: "mythical", sellPrice: 500 },
      { name: "Glock-18 | Бесконечность", rarity: "mythical", sellPrice: 500 },
      { name: "USP-S | Создатель", rarity: "mythical", sellPrice: 500 },
      { name: "Desert Eagle | Миф", rarity: "mythical", sellPrice: 500 },
      { name: "P250 | Легенда мира", rarity: "mythical", sellPrice: 500 },
      { name: "Five-SeveN | Богиня", rarity: "mythical", sellPrice: 500 },
      { name: "Tec-9 | Демиург", rarity: "mythical", sellPrice: 500 },
      { name: "CZ75-Auto | Создатель", rarity: "mythical", sellPrice: 500 }
    ]
  }
];

// ========== ПРОМОКОДЫ ==========
const promos = {
  "WELCOME": 500,
  "GAMER": 1000,
  "DARKCASE": 2000
  // Добавляй сюда новые промокоды!
  // "НОВЫЙ2026": 5000,
};

// ========== ПЕРЕМЕННЫЕ ==========
let userData = null;

// ========== ИНИЦИАЛИЗАЦИЯ ==========
function initializeGame() {
  const savedData = localStorage.getItem("darkcase_user_data");
  
  if (savedData) {
    userData = JSON.parse(savedData);
  } else {
    userData = {
      coins: 1000,
      openedCases: 0,
      inventory: [],
      usedPromos: []
    };
    saveUserData();
  }
}

function saveUserData() {
  localStorage.setItem("darkcase_user_data", JSON.stringify(userData));
}

// ========== ОТКРЫТИЕ КЕЙСА ==========
function openCase(caseId) {
  const selectedCase = cases.find(c => c.id === caseId);
  if (!selectedCase) return;

  if (userData.coins < selectedCase.price) {
    alert("❌ Недостаточно монет для открытия кейса!");
    return;
  }

  userData.coins -= selectedCase.price;
  userData.openedCases++;

  const randomIndex = Math.floor(Math.random() * selectedCase.skins.length);
  const randomSkin = selectedCase.skins[randomIndex];
  userData.inventory.push(randomSkin);

  const resultDiv = document.getElementById("loot-result");
  if (resultDiv) {
    resultDiv.innerHTML = `
      <div style="text-align: center;">
        <p style="font-size: 1.2em; margin-bottom: 10px;">🎉 Вы открыли кейс "${selectedCase.name}"!</p>
        <p style="font-size: 1.8em; font-weight: bold; color: ${selectedCase.color}; margin: 10px 0;">
          ${randomSkin.name}
        </p>
        <p style="color: #888; font-size: 0.9em;">Редкость: ${getRarityName(randomSkin.rarity)}</p>
        <p style="color: gold; font-weight: bold; margin-top: 10px;">Можно продать за ${randomSkin.sellPrice} монет</p>
      </div>
    `;
    resultDiv.classList.add("show");
    setTimeout(() => resultDiv.classList.remove("show"), 3000);
  }

  const coinsDisplay = document.getElementById("coins-count");
  if (coinsDisplay) coinsDisplay.textContent = userData.coins;
  
  saveUserData();
}

function getRarityName(rarity) {
  const names = {
    "common": "Обычный",
    "rare": "Редкий",
    "epic": "Эпический",
    "legendary": "Легендарный",
    "mythical": "Мифический"
  };
  return names[rarity] || rarity;
}

// ========== РЕНДЕР ИНВЕНТАРЯ ==========
function renderInventory() {
  const container = document.getElementById("skins-list");
  if (!container) return;

  if (userData.inventory.length === 0) {
    container.innerHTML = `
      <div class="empty-inventory">
        📦 Инвентарь пуст.<br>
        Открой кейсы, чтобы получить скины!
      </div>
    `;
    return;
  }

  container.innerHTML = "";
  userData.inventory.forEach((skin, index) => {
    const skinCard = document.createElement("div");
    skinCard.className = "skin-item";
    skinCard.innerHTML = `
      <p>${skin.name}</p>
      <p style="font-size: 0.85em; color: #888; margin-bottom: 10px;">
        Редкость: ${getRarityName(skin.rarity)}
      </p>
      <p style="color: gold; font-weight: bold; margin-bottom: 10px;">
        💰 ${skin.sellPrice}
      </p>
      <button class="sell-btn" onclick="sellSkin(${index})">Продать</button>
    `;
    container.appendChild(skinCard);
  });
}

// ========== ПРОДАЖА СКИНА ==========
function sellSkin(index) {
  if (index < 0 || index >= userData.inventory.length) return;

  const skin = userData.inventory[index];
  const sellPrice = skin.sellPrice;

  userData.inventory.splice(index, 1);
  userData.coins += sellPrice;
  saveUserData();

  renderInventory();
  
  const coinsDisplay = document.getElementById("coins-count") || document.getElementById("coins-display");
  if (coinsDisplay) coinsDisplay.textContent = userData.coins;

  const skinsCount = document.getElementById("skins-count");
  if (skinsCount) skinsCount.textContent = userData.inventory.length;

  alert(`✅ Скин "${skin.name}" продан за ${sellPrice} монет!`);
}

// ========== АКТИВАЦИЯ ПРОМОКОДА ==========
function activatePromo() {
  const promoInput = document.getElementById("promo-input");
  const promoStatus = document.getElementById("promo-status");
  
  if (!promoInput || !promoStatus) return;

  const code = promoInput.value.trim().toUpperCase();

  if (!code) {
    promoStatus.textContent = "⚠️ Введите промокод";
    promoStatus.className = "promo-status error";
    setTimeout(() => {
      promoStatus.textContent = "";
      promoStatus.className = "promo-status";
    }, 3000);
    return;
  }

  if (promos[code] && !userData.usedPromos.includes(code)) {
    const reward = promos[code];
    userData.coins += reward;
    userData.usedPromos.push(code);
    saveUserData();

    promoStatus.textContent = `✅ Получено ${reward} монет!`;
    promoStatus.className = "promo-status success";
    
    const coinsDisplay = document.getElementById("coins-display");
    if (coinsDisplay) coinsDisplay.textContent = userData.coins;
    
    promoInput.value = "";
  } else if (userData.usedPromos.includes(code)) {
    promoStatus.textContent = "❌ Промокод уже использован";
    promoStatus.className = "promo-status error";
  } else {
    promoStatus.textContent = "❌ Неверный промокод";
    promoStatus.className = "promo-status error";
  }

  setTimeout(() => {
    promoStatus.textContent = "";
    promoStatus.className = "promo-status";
  }, 3000);
}