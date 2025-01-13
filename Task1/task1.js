document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.getElementById("scroll-container");
  const cards = scrollContainer.children;

  function updateMiddleCard() {
    const scrollTop = scrollContainer.scrollTop;
    const cardHeight = cards[0].offsetHeight + 32; // card height + space-y-8
    const middleIndex = Math.floor(
      (scrollTop + scrollContainer.clientHeight / 2) / cardHeight
    );
    for (let i = 0; i < cards.length; i++) {
      if (i === middleIndex) {
        cards[i].classList.add("middle");
      } else {
        cards[i].classList.remove("middle");
      }
    }
  }

  scrollContainer.addEventListener("scroll", updateMiddleCard);

  updateMiddleCard();
});
