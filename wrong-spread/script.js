const obj = {
  id: '0001',
  name: 'aaa',
  age: 20,
};
const copyObj = { ...obj };
// コピーした後に変更しても反映されない（守られる）
obj.id = '0002';
console.log(obj);
console.log(copyObj);

const objs = {
  1: {
    name: 'aaa',
    age: 20,
  },
  2: {
    name: 'bbb',
    age: 19,
  },
  3: {
    name: 'ccc',
    age: 21,
  },
};

// const copyObjs = { ...objs };
const copyObjs = JSON.parse(JSON.stringify(objs));
// 文字列にしてオブジェクトではないものにして、再度オブジェクトに変換すると別物になるため変更が反映されない（入れ子の子供も守られる）
// console.log(JSON.stringify(objs));
// コピーした後に変更すると反映される（入れ子の子供は守られない）
objs[1].name = 'ddd';

console.log(objs);
console.log(copyObjs);
