let smUrl = './images/sm-img.jpg';
let midUrl = './images/mid-img.jpg';
let lgUrl = './images/lg-img.jpg';
let options = {
  // ヘッダーのみを取得するメソッド
  method: 'HEAD',
};

// 画像を取得してURLに変換してページに表示するときにサイズも取得して確認できるようにしておきたい（ユーザーがダウンロードする前に確認することが必要）

// ①ファイルサイズの確認
fetch(midUrl, options)
  .then((res) => {
    console.log(res);

    // 通信エラーなどcatchへ渡す
    if (!res.ok) throw res.statusText;

    //ヘッダーオブジェクトからサイズを取得
    console.log(res.headers.get('content-length'));
    return res.blob();
  })
  .then((blob) => {
    //そのままURLに変換してページに挿入したりする
    console.log(blob);
  })
  .catch((err) => {
    console.log(err.message);
  });

// ②実際の使い方（①の応用）
// 複数の非同期処理をまとめてやる
// 画像ごとのサイズをまとめるためのオブジェクト
let files = {};
Promise.all([
  fetch(smUrl, options),
  fetch(midUrl, options),
  fetch(lgUrl, options),
])
  .then(([s, m, l]) => {
    // レスポンスオブジェクト
    // console.log(s);

    console.log('sm:', s.headers.get('content-length'));
    console.log('mid:', m.headers.get('content-length'));
    console.log('lg:', l.headers.get('content-length'));

    // 新しいURLに変換する
    // console.log(new URL(s.url));
    // ホスト名は環境で変わるのでパスだけ取得することが多い
    // console.log(new URL(s.url).pathname);

    files[new URL(s.url).pathname] = s.headers.get('content-length');
    files[new URL(m.url).pathname] = m.headers.get('content-length');
    files[new URL(l.url).pathname] = l.headers.get('content-length');

    console.log({ files });
  })
  .catch((err) => {
    console.warn(err.message);
  });
