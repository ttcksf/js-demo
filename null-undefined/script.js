// nullは値がない
console.log(null == undefined);
console.log(null === undefined);

// 定義されていない（値を持つかもしれない）
let test;
// リセットするなら0や空文字よりnullが良いとされることが多い
test = null;
console.log(test);
