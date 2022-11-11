import { useState } from "react";
import "./App.css";

function App() {
  let suraimu = document.getElementsByClassName("sulaim-position");
  let selectArea = document.getElementsByClassName("selectArea");
  let suraimuImg = document.getElementsByClassName("sulaim-img");
  let attckImg = document.getElementsByClassName("atack-effect");
  let escapeMessage = document.getElementsByClassName("escape-messageArea");
  let deleteMessage = document.getElementsByClassName("delete-messageArea");

  const [suraimuHp, setSuraimuHp] = useState(100);
  const [yusyaHp, setYusyaHp] = useState(100);
  const [yusyaMp, setYusyaMp] = useState(100);

  const deleteText = (e) => {
    e.target.parentNode.style.display = "none";
    selectArea[0].style.display = "flex";
  };

  const suraimuDelete = () => {
    suraimu[0].style.display = "none";
    selectArea[0].style.display = "none";
    deleteMessage[0].style.display = "block";
  };

  const atack = () => {
    setSuraimuHp(suraimuHp - 5);
    suraimuImg[0].classList.add("attck");
    attckImg[0].classList.add("attck");
    setTimeout(() => {
      suraimuImg[0].classList.remove("attck");
      attckImg[0].classList.remove("attck");
      suraimuAtack();
    }, 1100);
    if (suraimuHp <= 0) {
      suraimuDelete();
      return;
    }
  };

  const suraimuAtack = () => {
    setYusyaHp(yusyaHp - 5);
    suraimuImg[0].classList.add("damage");
    setTimeout(() => {
      suraimuImg[0].classList.remove("damage");
    }, 1100);
  };

  const heal = () => {
    if (yusyaHp === 100) {
      return;
    }
    setYusyaHp(yusyaHp + 5);
  };

  const spell = () => {
    if (yusyaMp === 0) {
      return;
    }
    setYusyaMp(yusyaMp - 5);
    setSuraimuHp(suraimuHp - 10);
    if (suraimuHp <= 0) {
      suraimuDelete();
      return;
    }
  };

  const escape = () => {
    if (suraimuHp <= 0) {
      return;
    }
    suraimuDelete();
  };

  return (
    <>
      <div className="dorakue">
        <div className="sulaim-position">
          <img className="sulaim-img" src="/public/slime.png" alt="" />
          <img className="atack-effect" src="/public/atack.png" alt="" />
        </div>

        <div className="selectArea">
          <div className="selectTxt">
            <p className="select" onClick={atack}>
              こうげき
            </p>
            <p className="select" onClick={spell}>
              じゅもん
            </p>
            <p className="select" onClick={heal}>
              かいふく
            </p>
            <p className="select" onClick={escape}>
              にげる
            </p>
          </div>
          <p className="selectArea__txt"></p>
        </div>
        <div className="stats">
          <p className="name">勇者</p>
          <p className="hp">HP:{yusyaHp}</p>
          <p className="hp">MP:{yusyaMp}</p>
        </div>
        <div className="dorakue-messageArea">
          <p className="dorakue-message" onClick={deleteText}>
            野生のスライムが現れた。
          </p>
        </div>
        <div className="escape-messageArea">
          <p className="escape-message">うまく逃げれた.....。</p>
        </div>
        <div className="delete-messageArea">
          <p className="delete-message">スライムを倒した！！</p>
        </div>
      </div>
    </>
  );
}

export default App;
