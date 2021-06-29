const win1 = document.querySelector(".win1");
const win2 = document.querySelector(".win2");
let Result_modal = document.querySelector(".Result_modal");
let winner = document.querySelector(".result_display");
let res;
let cwin1 = 0;
let cwin2 = 0;
var K1;
var K2;
function HandleAChanceWin(i1, i2) {
  K1 = Pokemon_Data[`p${i1}`][selected_prop];
  K2 = Pokemon_Data[`p${i2}`][selected_prop];
  if (chances <= 1 && cwin1 != cwin2) {
    ResultBoxModal();
  } else if (Math.abs(cwin1 - cwin2) > chances) {
    console.log("yo");
    ResultBoxModal();
  }
  if (K1 > K2) {
    ++cwin1;
    win1.innerText = cwin1;
    console.log("1=>" + cwin1 + " " + cwin2);
  } else if (K1 < K2) {
    ++cwin2;
    win2.innerText = cwin2;
    console.log("2=>" + cwin1 + " " + cwin2);
  }
  console.log(chances);
  chances--;
  if (chances == -1) {
    Chances.innerText = "Extra";
  } else Chances.innerText = chances;
}
const ResultBoxModal = () => {
  if (cwin1 > cwin2) {
    winner.innerText = "Player1";
  } else winner.innerText = "Player2";

  if (Result_modal.classList.contains("showRes")) {
    Result_modal.classList.remove("showRes");
    Result_modal.classList.add("hideRes");
  } else {
    Result_modal.classList.add("showRes");
    Result_modal.classList.remove("hideRes");
  }
};
