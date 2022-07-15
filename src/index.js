// 入力エリア機能実装
const onClickAdd = () => {
  const getText = document.getElementById("add-text").value; //テキストボックスの値を取得
  document.getElementById("add-text").value = "";  //登録ボタン押されたら、テキストボックスを初期化

  createTodoIndexList(getText);
}
//Todo一覧から、指定の要素を削除
const deleteItemFromTodoList = (target) => {
  document.getElementById("index-todo").removeChild(target);
}

//Todo一覧リストに追加する関数
const createTodoIndexList = (text) => {
  // divを生成
  const div = document.createElement("div");

  //クラス名を付与
  div.className = "list-row";

  //liタグを生成
  const li = document.createElement("li");
  //liタグに要素を格納する
  li.innerText = text;

  //ボタン(完了)を生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押下されたら、一覧から削除
    deleteItemFromTodoList(completeButton.parentNode);

    //完了ボタンを押すと完了済エリアにTodoが移動し、Todo一覧からは削除される。
    //完了済エリアにDOMを生成する
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;  //Todo内容テキストを取得

    //div以下を初期化
    addTarget.textContent = null;
    console.log(addTarget);

    //liタグを生成
    const li = document.createElement("li");
    //liタグに要素を格納する
    li.innerText = text;

    //buttonの追加
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押下されたら、完了済から削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-todo").removeChild(deleteTarget);

      //テキストの取得
      const returnTarget = backButton.parentNode;
      const text = returnTarget.firstElementChild.innerText;

      //TodoListに追加（戻す）
      createTodoIndexList(text);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    console.log(addTarget);

    //完了リストに追加
    document.getElementById("complete-todo").appendChild(addTarget);
  });

  //削除ボタンを生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親親タグ(div)をTodoリストから削除
    deleteItemFromTodoList(deleteButton.parentNode);
  });
  // divタグの子要素にliタグを設定
  div.appendChild(li);
  // divタグの下にbuttonを配置
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //Todo一覧に追加
  document.getElementById("index-todo").appendChild(div);
}

// add-buttonというidに対して、clickイベントを追加する
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
