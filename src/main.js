const ionIcon = document.querySelector("ion-icon");
let state = {
  button: 0,
};

const shareUI = () => {
  state.button = 1;
  return `
        <aside class="footer-share fadeEffect" id="shareElement">
            <h2>Share</h2>
            <div class="footer-share-icons">
                <a href="#" class="facebook" aria-label="Facebook"></a>
                <a href="#" class="twitter" aria-label="Twitter"></a>
                <a href="#" class="pinterest" aria-label="Pinterest"></a>
            </div>
            <span class="triangle-down"></span>
        </aside>
         `;
};

btnShare.addEventListener("click", (e) => {
  if (state.button == 0) {
    ionIcon.style.filter = "var(--secondaryFilter)";
    btnShare.style.backgroundColor = "var(--desaturated-dark-blue)";
    card.insertAdjacentHTML("afterbegin", shareUI());
  } else {
    btnShare.style.backgroundColor = "var(--light-grayish-blue)";
    ionIcon.style.filter = "var(--primaryFilter)";
    shareElement.remove();
    state.button = 0;
  }
});
