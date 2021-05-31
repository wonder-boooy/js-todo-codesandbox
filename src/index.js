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

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => alert("完了"));
  const removeButton = document.createElement("button");
  removeButton.innerText = "削除";
  removeButton.addEventListener("click", () => alert("削除"));

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(removeButton);
  li.appendChild(div);

  document.getElementById("imcomplete-list").appendChild(li);
  // const completeButton = document
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
