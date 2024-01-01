// APIは外部にあるデータをプログラムを使ってバックグラウンドに取得、更新するサービス(非同期処理)
// 画面を作っていなくても処理が行われる（RPA,自動化）
// console.log(fetch("fetch('https://jsonplaceholder.typicode.com/todos/')"));

// いきなりデータ単体ではなく最初にレスポンスオブジェクトが返ってくる
fetch('https://jsonplaceholder.typicode.com/todos/')
  .then((res) => {
    // console.log(res);
    return res.json();
  })
  .then((data) => console.log(data));
// ステータス：通信の成功、失敗
// ヘッダー：通信内容や認証情報
// ボディ：データ本体（直接は見れない）

// データを更新、追加するときはヘッダー情報、ボディとメソッドを指定する
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data));
// オブジェクトはそのまま送れないのでJSONにして送る
// ヘッダーにはJSON形式で送信する旨を記載
// https://jsonplaceholder.typicode.com/のような基本となるURLをエンドポイント
// エンドポイントに指定するキーワードpostsやtodosなどをクエリ
// これら一連の流れやキーワードの総称をHTTP通信と表現したりする
