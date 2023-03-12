const moreBtn = document.getElementById("more-btn1");
const moreContent= document.querySelector('.card-text')

moreBtn.addEventListener("click", () => {
  const isClosed = moreContent.classList.contains('card-text-close')

  if(isClosed) {
    moreContent.className = 'card-text'
    moreBtn.innerHTML = "접기";
  }else {
    moreContent.className = 'card-text card-text-close'
    moreBtn.innerHTML = "더보기";
  }
});

const moreBtn1 = document.getElementById("more-btn2");
const moreContent1= document.querySelector('.card-text1')

moreBtn1.addEventListener("click", () => {
  const isClosed = moreContent1.classList.contains('card-text-close1')

  if(isClosed) {
    moreContent1.className = 'card-text1'
    moreBtn1.innerHTML = "접기";
  }else {
    moreContent1.className = 'card-text1 card-text-close1'
    moreBtn1.innerHTML = "더보기";
  }
});

const moreBtn2 = document.getElementById("more-btn3");
const moreContent2= document.querySelector('.card-text2')

moreBtn2.addEventListener("click", () => {
  const isClosed = moreContent2.classList.contains('card-text-close2')

  if(isClosed) {
    moreContent2.className = 'card-text2'
    moreBtn2.innerHTML = "접기";
  }else {
    moreContent2.className = 'card-text2 card-text-close2'
    moreBtn2.innerHTML = "더보기";
  }
});