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

  //ボタン(完了)を生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了しました")
    //完了ボタンを押すと完了済エリアにTodoが移動し、Todo一覧からは削除される。
    //完了済エリアにDOMを生成する
    deleteItemFromTodoList(completeButton.parentNode);
  });

  //削除ボタンを生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親親タグ(div)をTodoリストから削除
    deleteItemFromTodoList(deleteButton.parentNode);
    // const deleteTarget = deleteButton.parentNode;
    // document.getElementById("index-todo").removeChild(deleteTarget);
  });
  // divタグの子要素にliタグを設定
  div.appendChild(li);
  // divタグの下にbuttonを配置
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //Todo一覧に追加
  document.getElementById("index-todo").appendChild(div);
}

//Todo一覧から、指定の要素を削除
const deleteItemFromTodoList = (target) => {
  document.getElementById("index-todo").removeChild(target);
}

// add-buttonというidに対して、clickイベントを追加する
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
