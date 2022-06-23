import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  creatIncompliteList(inputText);
};

//未完了リストから指定の要素を削除する関数
const deletFromIncompliteList = (target) => {
  document.getElementById("incomplite-list").removeChild(target);
};

//未完了リストに追加する関数
const creatIncompliteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //li生成
  const li = document.createElement("li");
  li.innerText = text;

  //完了button生成
  const compliteButton = document.createElement("button");
  compliteButton.innerText = "完了";
  compliteButton.addEventListener("click", () => {
    //押された完了ボタンの親タグを未完了から削除
    deletFromIncompliteList(compliteButton.parentNode);

    //押された完了ボタンの親タグを完了リストに追加
    const addTarget = compliteButton.parentNode;

    //todo内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグ生成
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      //押された戻すボタンの親タグの削除
      const deleteTarget = backbutton.parentNode;
      document.getElementById("complite-list").removeChild(deleteTarget);
      //テキストを取得
      const text = backbutton.parentNode.firstElementChild.innerText;
      creatIncompliteList(text);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backbutton);

    //完了リストに追加
    document.getElementById("complite-list").appendChild(addTarget);
  });

  //削除button生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを未完了から削除
    deletFromIncompliteList(deleteButton.parentNode);
  });

  //divタグの子要素
  div.appendChild(li);
  div.appendChild(compliteButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplite-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
