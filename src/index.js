import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  if (!inputText) {
    return;
  }

  document.getElementById("add-text").value = "";

  // リスト生成
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.innerText = inputText;

  // 完了機能
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // まず未完了エリアから削除
    removeFromIncompleteList(completeButton.parentNode.parentNode);
    // 次に完了エリアに追加
    const addTarget = completeButton.parentNode.parentNode;
    const text = addTarget.firstElementChild.firstElementChild.innerText;

    addTarget.textContent = null;
    const div = document.createElement("div");
    div.className = "list-row";
    const p = document.createElement("p");
    p.innerText = inputText;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    div.appendChild(p);
    div.appendChild(backButton);
    addTarget.appendChild(div);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除機能
  const removeButton = document.createElement("button");
  removeButton.innerText = "削除";
  removeButton.addEventListener("click", () => {
    removeFromIncompleteList(removeButton.parentNode.parentNode);
  });

  const removeFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  };

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(removeButton);
  li.appendChild(div);

  document.getElementById("incomplete-list").appendChild(li);
  // const completeButton = document
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
