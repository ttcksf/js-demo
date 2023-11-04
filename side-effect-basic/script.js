// 純粋な関数(引数が同じであれば、常に同じ結果を返す。)
const calPrice = (price, tax) => {
  return Math.floor(price * (1 + tax / 100));
};
console.log(calPrice(100, 10));

// 副作用がある関数(APIからのデータ取得やローカルストレージからのデータ取得)
const todayFn = () => {
  return new Date();
};

const data = [
  {
    id: "0001",
    item: "aaa",
    price: 100,
  },
];

// const addItem = () => {
//   data.push({
//     id: "0002",
//     item: "bbb",
//     price: 200,
//   });
//   console.log(data);
//   return data;
// };
// const addItem = () => {
//   const newData = [...data, { id: "0002", item: "bbb", price: 200 }];
//   console.log(newData);
//   return newData;
// };
// 同じデータに別の処理するかもしれないため直接追加せずに、元のデータをコピーして実行することで配列dataの中身を保持できる
addItem();
console.log(data);

// エラーの原因は以下のようなものでプログラムが停止することが多い
// ・コードの不具合
// ・入力データの不正
// ・外部環境の変化

// 副作用の例としては以下のようなものがありプログラムは動作することが多い。
// ・データの変更
// ・処理の再実行
// エラーハンドリングだけではない処理が必要になる可能性があるのがWebサービス開発
// ReactのuseEffectは副作用が起きがちな処理で副作用が起きるタイミングをコントロールするフック
// API からデータを取得するタイミングはリロード時のみにしている
// useEffect(() => {
//   const response = fetch("https://api.example.com/data").then((res) =>
//     setData(response.json())
//   );
// }, []);
