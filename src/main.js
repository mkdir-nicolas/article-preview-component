let state = {
  button: 0,
};

const shareUI = () => {
  state.button = 1;
  return `
        <aside class="footer-share fadeEffect" id="shareElement">
            <h2>Share</h2>
            <div class="footer-share-icons">
                <a href="#" class="facebook"></a>
                <a href="#" class="twitter"></a>
                <a href="#" class="pinterest"></a>
            </div>
            <span class="triangle-down"></span>
        </aside>
         `;
};
const filterStyle = [
  `brightness(0) saturate(100%) invert(100%) sepia(67%) saturate(266%) hue-rotate(84deg) brightness(109%) contrast(101%)`,
  `brightness(0) saturate(100%) invert(52%) sepia(16%) saturate(514%) hue-rotate(173deg) brightness(92%) contrast(90%)`,
];

const ionIcon = document.querySelector("ion-icon");
btnShare.addEventListener("click", (e) => {
  if (state.button == 0) {
    ionIcon.style.filter = filterStyle[0];
    btnShare.style.backgroundColor = "var(--desaturated-dark-blue)";
    card.insertAdjacentHTML("afterbegin", shareUI());
  } else {
    btnShare.style.backgroundColor = "var(--light-grayish-blue)";
    ionIcon.style.filter = filterStyle[1];

    shareElement.remove();
    state.button = 0;
  }
});
