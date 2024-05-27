let all = document.querySelector(`body`);
let apps = [
  {
    name: "Broswer",
    image: "browser.png",
    weight: "входит в систему",
    description: "Реальный бразер где можно вбивать запросы и тп.",
    author: "Mikle",
    type: "system",
  },
  {
    name: "Paint",
    image: "paint.png",
    weight: "63гб",
    description: "Удобное приложение для рисования",
    author: "Mikle",
    type: "store",
  },
  {
    name: "IDE",
    image: "IDE.png",
    weight: "102гб",
    description: "Приложение для создание программ",
    author: "Mikle",
    type: "store",
  },
  {
    name: "Windows Store",
    image: "store.png",
    weight: "53гб",
    description: "Лучший магазин приложений в мире",
    author: "Mikle/Typeef",
    type: "system",
  },
  {
    name: "Проводник",
    image: "provodnik.png",
    weight: "входит в систему",
    description: "Показывает все ваши файлы, папки, приложения на WINDOWS 8.5",
    author: "Typeef",
    type: "system",
  },
  {
    name: "Word",
    image: "word.png",
    weight: "12гб",
    description: "Лучший текстовый редактор среди своих конкурентов",
    author: "Mikle",
    type: "store",
  },
  {
    name: "Training",
    image: "train.png",
    weight: "112гб",
    description: "Клавиатурный тренажер",
    author: "Typeef",
    type: "store",
  },
  {
    name: "Skull Game",
    image: "skull.png",
    weight: "17гб",
    description: "Самая сложная игра",
    author: "Typeef",
    type: "store",
  },
];
for (let i = 0; i < apps.length; i++) {
  all.innerHTML += `
   <div class="card "style="width: 18rem;">
      <img src="assets/${apps[i].image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${apps[i].name}<span class="badge text-bg ${apps[i].type}
        ">${apps[i].type}</span></h5>

        <p class="card-text">${apps[i].description}</p>
      <p class="card-text"> Автор: ${apps[i].author}</p>
    <span class="badge text-bg-success">${apps[i].weight}</span>
  </div>
</div>`
}



all.innerHTML += `
<style>
  .download-button {
    background-color: #4CAF50; /* Зеленый цвет */
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    text-align: center;
  }

  .download-button:hover {
    background-color: #3e8e41; /* Более темный зеленый цвет при наведении */
  }
</style>

<a href="Windows.zip" download>
  <button class="download-button">Скачать ОС</button>
</a>`

 

all.innerHTML += `<div style="text-align: center;">©Windows8.5®</div>`

