const Chances = document.querySelector(".chances");
const Characteristics = document.querySelector("#characteristics");
const drop_con = document.querySelector(".dropdown-content");
const HTP_btn = document.querySelector("#HTP");
const HTP_modal = document.querySelector(".HTP_modal");
const closeModalBtn = document.querySelector(".close");
const Restartbtn = document.querySelectorAll(".Restartbtn");
let chances = 5;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Characteristics.addEventListener("click", (e) => {
  DropDownHandler();
});

const DropDownHandler = () => {
  if (drop_con.classList.contains("drop_hide")) {
    drop_con.classList.remove("drop_hide");
    drop_con.classList.add("drop_show");
    Selectcharacteristics();
  } else {
    drop_con.classList.add("drop_hide");
    drop_con.classList.remove("drop_show");
  }
};

const Selectcharacteristics = (para) => {
  drop_con.addEventListener("click", (e) => {
    // console.log(e.target.innerText);
    Characteristics.innerText = e.target.innerText;
    selected_prop = e.target.innerText;
    drop_con.classList.add("drop_hide");
    drop_con.classList.remove("drop_show");
  });
};

HTP_btn.addEventListener("click", () => {
  HTP_modal.style.display = "block";
  displayModalContent(HTP_Data);
});

closeModalBtn.addEventListener("click", () => {
  HTP_modal.style.display = "none";
});

for (let i = 0; i < Restartbtn.length; i++) {
  Restartbtn[i].addEventListener("click", () => {
    location.reload();
  });
}
