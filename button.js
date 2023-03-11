const moreBtn = document.getElementById("more-btn");
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