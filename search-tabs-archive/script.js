const videos = {
  data: [
    {
      name: 'JavaScriptの動画1',
      category: 'js',
      image: './images/js1.png',
    },
    {
      name: 'JavaScriptの動画2',
      category: 'js',
      image: './images/js2.png',
    },
    {
      name: 'JavaScriptの動画3',
      category: 'js',
      image: './images/js3.png',
    },
    {
      name: 'Node.jsの動画1',
      category: 'node',
      image: './images/node1.png',
    },
    {
      name: 'Node.jsの動画2',
      category: 'node',
      image: './images/node2.png',
    },
    {
      name: 'Reactの動画1',
      category: 'react',
      image: './images/react1.png',
    },
    {
      name: 'Reactの動画2',
      category: 'react',
      image: './images/react2.png',
    },
    {
      name: 'Reactの動画3',
      category: 'react',
      image: './images/react3.png',
    },
    {
      name: 'ReactQueryの動画1',
      category: 'tanstack',
      image: './images/tanstack1.png',
    },
    {
      name: 'ReactQueryの動画2',
      category: 'tanstack',
      image: './images/tanstack2.png',
    },
  ],
};

for (let i of videos.data) {
  let card = document.createElement('div');
  card.classList.add('card', `${i.category}`, 'hidden');
  let image = document.createElement('img');
  image.setAttribute('src', `${i.image}`);
  card.appendChild(image);
  document.querySelector('.videos').appendChild(card);

  let sentence = document.createElement('div');
  sentence.classList.add('sentence');
  let name = document.createElement('p');
  name.classList.add('name');
  name.innerHTML = i.name;
  let category = document.createElement('p');
  category.classList.add('category');
  category.innerHTML = i.category;
  sentence.appendChild(name);
  sentence.appendChild(category);
  card.appendChild(sentence);
}

// タブをクリックした時の表示の切り替え
function filterFn(val) {
  const tabList = document.querySelectorAll('.tab');
  tabList.forEach((tab) => {
    // console.dir(tab);
    if (val == tab.textContent) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  const cardList = document.querySelectorAll('.card');
  cardList.forEach((card) => {
    // allというカテゴリー名は作っていない
    if (card.classList.contains(val) || val == 'all') {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// 検索時の処理
const searchBtn = document.querySelector('.searchBtn');
const input = document.querySelector('.input');
searchBtn.addEventListener('click', () => {
  let word = input.value;
  // console.log(word);
  const cardList = document.querySelectorAll('.card');
  cardList.forEach((card, index) => {
    // console.log(card, index);
    let wordU = word.toUpperCase();
    let wordL = word.toLowerCase();
    function capitalizeFn(word) {
      let first = word.substring(0, 1).toUpperCase();
      let other = word.substring(1).toLowerCase();
      return first + other;
    }
    let wordC = capitalizeFn(word);
    if (
      card.innerHTML.includes(word) ||
      card.innerHTML.includes(wordU) ||
      card.innerHTML.includes(wordL) ||
      card.innerHTML.includes(wordC)
    ) {
      cardList[index].classList.remove('hidden');
    } else {
      cardList[index].classList.add('hidden');
    }
  });
});

// リロード時の表示
window.onload = () => {
  filterFn('all');
};
