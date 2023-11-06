const form = document.querySelector(".form");
const exportBtn = document.querySelector(".exportBtn");
const editSaveBtn = document.querySelector(".editSaveBtn");
const tbody = document.querySelector(".tbody");

const APP = {
  // 入力データを一時保存する
  data: [],
  init() {
    APP.addListeners();
  },
  addListeners() {
    // フォームから送信された時にsaveDataを呼び出す
    form.addEventListener("submit", APP.saveData);

    // エクスポートをクリックしたらexportDataを呼び出す
    exportBtn.addEventListener("click", APP.exportData);

    // セルをダブルクリックしたらeditCellを呼び出す
    tbody.addEventListener("dblclick", APP.editCell);
  },

  // フォームからすべてのデータを取得してテーブルに新しい行を追加する
  saveData(e) {
    e.preventDefault();
    const formData = new FormData(form);
    //データを保存するためにcacheDataを呼び出す
    APP.cacheData(formData);
    //テーブルに行を構築するためにbuildRowを呼び出す
    APP.buildRow(formData);
    //フォームをクリアする
    form.reset();
    //最初の入力欄にフォーカスを戻す
    document.querySelector("#name").focus();
  },
  // 空の配列dataにデータを保存する関数
  cacheData(formData) {
    // フォームのデータはオブジェクトになっている
    // console.dir(formData);
    // 空の配列dataにフォームのデータを配列化して入れる
    APP.data.push(Array.from(formData.values()));
    // console.log(APP.data);
    // console.table(APP.data);
  },
  // テーブルに行を構築する関数
  buildRow(formData) {
    // 行の作成
    const tr = document.createElement("tr");
    tr.innerHTML = "";
    // 行数
    // console.log(document.querySelectorAll("tbody tr").length);
    // 1行ずつ増えていくのでdata-rowの値はtrの行数を入れることにする
    tr.setAttribute("data-row", document.querySelectorAll("tbody tr").length);

    // セルの作成
    let col = 0;
    //entries()はデータをキーと値のペアで返してくれるメソッド
    for (let entry of formData.entries()) {
      // entryはキーと値のペアで配列になっていて、列番号を0からカウントしてdata-colの値にする
      // console.log(entry);
      // console.log(col);
      tr.innerHTML += `<td data-col="${col}" data-name="${entry[0]}">${entry[1]}</td>`;
      col++;
    }
    tbody.append(tr);
    //data references for later editing
  },
  // すべてのデータを CSV ファイルに変換してダウンロードできるようにする関数
  exportData() {
    //配列dataの最初にヘッダーを追加（pushは最後に追加するメソッド）
    APP.data.unshift(["名前", "住所", "年齢", "電話番号"]);
    //配列のままではcsvに使えないので文字列に変換
    let str = "";
    APP.data.forEach((row) => {
      // joinで列を引数の記号で繋げて、concatでjoinの結果の最後に引数の記号を足す（改行する）
      str += row
        .map((col) => JSON.stringify(col))
        .join(",")
        .concat("\n");
    });

    //ファイル名を決める
    let fileName = `テスト${Date.now()}.csv`;
    // 第一引数にデータ、第二引数に名前、第三引数にデータ種類でファイル生成
    // データは一度文字列になっているので配列にしておく
    let file = new File([str], fileName, { type: "text/csv" });

    // const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
    // const file = new Blob([bom, [str]], { type: "text/csv" });

    //aタグを作ってダウンロードする
    let a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
    // エクセル、スプレッドシート、エディタで見れる
  },
  // テーブルセルのいずれかをダブルクリックしたときにそのセルのデータを編集できるようにする関数
  editCell(e) {
    // クリックしたtdタグを探して取得
    let cell = e.target.closest("td");
    // console.log(cell);
    // セルが見つかったら
    if (cell) {
      // 行番号を取得(属性値は文字列なので数字に変換)
      let row = +cell.parentElement.getAttribute("data-row");
      // 列番号を取得(属性値は文字列なので数字に変換)
      let col = +cell.getAttribute("data-col");
      //tdタグが編集できるようにする
      cell.contentEditable = true;
      cell.focus();
      // console.log(row, col);
      // console.log(typeof row, typeof col);
      editSaveBtn.addEventListener("click", () => {
        // 配列dataの中身を更新する
        APP.data[row][col] = cell.textContent;
        console.table(APP.data);
      });
    }
  },
};

document.addEventListener("DOMContentLoaded", APP.init);
