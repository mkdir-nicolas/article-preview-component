const ionIcon = document.querySelector("ion-icon");
const dataAreaShare = document.querySelector('[data-type="share"]');
const state = {
  button: 0,
};

const shareUI = () => {
  state.button = 1;
  return `
        <aside class="footer-share fadeEffect" data-type="share" id="shareElement">
            <h2>Share</h2>
            <div class="footer-share-icons" data-type="share">
                <a href="#"  class="facebook" aria-label="Facebook"></a>
                <a href="#" class="twitter" aria-label="Twitter"></a>
                <a href="#" class="pinterest" aria-label="Pinterest"></a>
            </div>
            <span class="triangle-down" data-type="share"></span>
        </aside>
         `;
};

const addShare = function () {
  btnShare.style.backgroundColor = "var(--desaturated-dark-blue)";
  ionIcon.style.filter = "var(--secondaryFilter)";
  card.insertAdjacentHTML("afterbegin", shareUI());
  state.button = 1;
};

const removeShare = function () {
  if (state.button == 0) return;
  btnShare.style.backgroundColor = "var(--light-grayish-blue)";
  ionIcon.style.filter = "var(--primaryFilter)";
  shareElement.remove();
  state.button = 0;
};

const render = function () {
  state.button == 0 ? addShare() : removeShare();
};

const isSameElement = (a, b) => {
  return a == b;
};

btnShare.addEventListener("click", (e) => render());

document.addEventListener("click", (e) => {
  const dataSetTarget = dataAreaShare.dataset.type;
  let dataSet = e.explicitOriginalTarget.dataset.type;
  if (!isSameElement(dataSet, dataSetTarget)) removeShare();
});
