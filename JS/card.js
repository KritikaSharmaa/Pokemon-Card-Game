///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Player1 = document.querySelector("#player1");
const Player2 = document.querySelector("#player2");
let Player1_BetNum;
let Player2_BetNum;
let selected_prop;
const checkRepeat = [];
let r_num;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

for (let i = 0; i < 15; i++) {
  const card_container = document.querySelector(".card_container");

  const card = document.createElement("div");
  card.classList.add("card");

  const front = document.createElement("div");
  front.classList.add("front");

  r_num = calc();
  //back.innerText = Pokemon_Data[`p${r_num}`].name;

  const back = document.createElement("div");
  back.classList.add("back");

  const back_header = document.createElement("div");
  back_header.classList.add("back_header");

  const pokiname = document.createElement("div");
  pokiname.classList.add("pokiname");
  pokiname.innerText = Pokemon_Data[`p${r_num}`].name;

  const sticker = document.createElement("img");
  sticker.classList.add("sticker");
  sticker.src = "./images/star.jpg";

  back_header.append(pokiname);
  back_header.append(sticker);

  const img = document.createElement("img");
  img.classList.add("poki_img");
  img.src = Pokemon_Data[`p${r_num}`].image;

  const prop = document.createElement("div");
  prop.classList.add("prop");

  const sp0 = document.createElement("div");
  sp0.classList.add("sp_rnum");
  sp0.innerText = r_num;
  const sp1 = document.createElement("div");
  sp1.innerText = `Hit Point : ` + Pokemon_Data[`p${r_num}`].HitPoint;
  const sp2 = document.createElement("div");
  sp2.innerText = `Attack : ` + Pokemon_Data[`p${r_num}`].Attack;
  const sp3 = document.createElement("div");
  sp3.innerText = `Defense: ` + Pokemon_Data[`p${r_num}`].Defense;
  const sp4 = document.createElement("div");
  sp4.innerText = `Speed : ` + Pokemon_Data[`p${r_num}`].Speed;

  prop.append(sp0);
  prop.append(sp1);
  prop.append(sp2);
  prop.append(sp3);
  prop.append(sp4);

  back.append(back_header);
  back.append(img);
  back.append(prop);

  card.append(front);
  card.append(back);
  card_container.append(card);

  card.addEventListener("click", (e) => {
    if (
      !e.currentTarget.classList.contains("flipcard") &&
      selected_prop != undefined
    ) {
      e.currentTarget.classList.add("flipcard");
      // e.currentTarget.classList.toggle("flipcard");-->if you want it back to front on second click
      //console.log(e.currentTarget);
      FlipThePlayer(e.currentTarget);
    }
  });
}

const FlipThePlayer = (temp1) => {
  if (Player1.classList.contains("active_player")) {
    Player1.classList.remove("active_player");
    Player2.classList.add("active_player");
    Player1_BetNum = Number(temp1.lastChild.lastChild.firstChild.innerText);
  } else {
    Player1.classList.add("active_player");
    Player2.classList.remove("active_player");
    Characteristics.innerText = " Characteristics";
    Player2_BetNum = Number(temp1.lastChild.lastChild.firstChild.innerText);
    HandleAChanceWin(Player1_BetNum, Player2_BetNum);
    selected_prop = undefined;
  }
};
function calc() {
  let r = Math.ceil(Math.random() * 19);
  if (checkRepeat.includes(r) == false) {
    checkRepeat.push(r);
    return r;
  } else if (checkRepeat.includes(r) == true) {
    return calc();
  }
}

//temp1.childNodes[1].childNodes[2].childNodes[0].innerText;
