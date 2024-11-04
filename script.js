// Данные тарифов
const tariffs = {
    "Семейные тарифы": [
        { name: "Семейный Минимум", price: 10, minutes: 100, internet: "2GB", sms: 50 },
        { name: "Семейный Премиум", price: 25, minutes: 500, internet: "20GB", sms: 200 }
    ],
    "Бизнес тарифы": [
        { name: "Бизнес Базовый", price: 30, minutes: 1000, internet: "50GB", sms: 500 }
    ]
};

// Данные услуг
const services = {
    "Интернет-услуги": [
        { name: "Ночной Интернет", description: "Безлимитный интернет ночью." },
        { name: "Мобильный интернет+", description: "Дополнительные 5GB к основному пакету." }
    ],
    "Международные звонки": [
        { name: "Звонки в СНГ", description: "Скидка на звонки в страны СНГ." }
    ]
};

// Функция для отображения тарифов
function displayTariffs() {
    const tariffsContainer = document.getElementById("tariffs");
    for (const line in tariffs) {
        const lineHeader = document.createElement("h2");
        lineHeader.textContent = line;
        tariffsContainer.appendChild(lineHeader);

        tariffs[line].forEach(tariff => {
            const tariffDiv = document.createElement("div");
            tariffDiv.classList.add("tariff");
            tariffDiv.innerHTML = `
                <strong>${tariff.name}</strong><br>
                Цена: ${tariff.price} $<br>
                Минуты: ${tariff.minutes}, Интернет: ${tariff.internet}, SMS: ${tariff.sms}
            `;
            tariffsContainer.appendChild(tariffDiv);
        });
    }
}

// Функция для отображения услуг
function displayServices() {
    const servicesContainer = document.getElementById("services");
    for (const category in services) {
        const categoryHeader = document.createElement("h2");
        categoryHeader.textContent = category;
        servicesContainer.appendChild(categoryHeader);

        services[category].forEach(service => {
            const serviceDiv = document.createElement("div");
            serviceDiv.classList.add("service");
            serviceDiv.innerHTML = `
                <strong>${service.name}</strong><br>
                Описание: ${service.description}
            `;
            servicesContainer.appendChild(serviceDiv);
        });
    }
}

// Вызов функций на соответствующих страницах
if (document.getElementById("tariffs")) {
    displayTariffs();
}
if (document.getElementById("services")) {
    displayServices();
}
