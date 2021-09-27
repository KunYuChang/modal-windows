'use strict';

/*
  STEP1 : 要做一個點擊按鈕後出現文字視窗的功能
  - HTML要有按鈕、文字窗、關閉鈕

  STEP2 : 文字預設不顯示
  - class -> hidden

  STEP3 : 點了要顯示
  - 監聽三顆class一樣的按鈕 -> for loop addEventListener
  - 顯示出來 -> remove class (hidden)

  STEP4 : 按x關閉視窗 
  - x按鈕 addEventListener
  - 隱藏功能 按模糊區也會關閉 -> addEventListener
  - 兩個關閉的功能可以寫在一起，讓監聽器DRY

  STEP5: 按esc也要關閉視窗
  - e.key
  - 使用classList.contains判斷是否存在.hidden，沒有就加上去!
  */

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// 鍵盤事件屬於 Global Events
document.addEventListener('keydown', e => {
  // 透過console.log可以看到事件當中會指出鍵盤key的名稱 (現今官方不建議使用keyCode)
  console.log(e);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
