// 入力エリア機能実装
const onClickAdd = () => {
  const getText = document.getElementById("add-text").value; //テキストボックスの値を取得
  document.getElementById("add-text").value = "";  //登録ボタン押されたら、テキストボックスを初期化

  // divを生成
  const div = document.createElement("div");

  //クラス名を付与
  div.className = "list-row";

  //liタグを生成
  const li = document.createElement("li");
  //liタグに要素を格納する
  li.innerText = getText;

  // divタグの子要素にliタグを設定
  div.appendChild(li);

  //Todo一覧に追加
  document.getElementById("index-todo").appendChild(div);
}

// add-buttonというidに対して、clickイベントを追加する
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());