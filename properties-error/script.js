const students = [
  {
    id: '0001',
    name: '田中大貴',
    age: 21,
    sports: ['soccer', 'tennis'],
  },
  {
    id: '0002',
    name: '谷純平',
    age: 22,
    sports: ['tennis'],
  },
  {
    id: '0003',
    name: '植野雅紀',
    age: 20,
    // プロパティがないとエラーになる
    // sports: ['soccer'],
    // 自分で操作できるデータなら空の配列で入れておく
    // sports: [],
  },
];

students.forEach((student) => {
  // const tennisPlayer = student.sports.includes('tennis');
  // 自分で操作できないデータならオプショナルチェーンにする
  const tennisPlayer = student.sports?.includes('tennis');
  console.log(`${student.name}:${tennisPlayer}`);
});
