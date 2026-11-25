function addTraining() {
    const menu = document.getElementById("menu").value;
    const count = document.getElementById("count").value;
    const date = document.getElementById("date").value;

    if (menu === "" || count === "" || date === "" || Number(count) < 1) {
        alert("正しく入力してください");
        return;
    }

    const list = document.getElementById("trainingList");
    const item = document.createElement("li");

    item.textContent = menu + " / " + count + "回 / " + date;

    list.appendChild(item);

    document.getElementById("menu").value = "";
    document.getElementById("count").value = "";
    document.getElementById("date").value = "";
}