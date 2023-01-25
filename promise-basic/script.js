// setTimeout(function () {
//   console.log("ok");
// }, 1000);

// setTimeout:一定時間経ったらコールバック関数を実行する関数、第一引数がコールバック関数

// new Promise(function (resolve) {
//   setTimeout(function () {
//     console.log("test1");
//     resolve();
//   }, 1000);
// }).then(function () {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       console.log("test2");
//       resolve();
//     }, 1000);
//   });
// });

// const timer = function (time, text) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       console.log("test");
//       resolve();
//     }, time);
//   });
// };
// ↓に書き換え
// const timer = (time, text) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("test");
//       resolve();
//     }, time);
//   });
// timer(500, "test");
// 実行部分を↓に書き換え
// const func = async function () {
//   await timer(500, "test");
// };
// func();

// const timerB = (time) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`end: ${time}`);
//     }, time);
//   });
// timerB(500).then((val) => {
//   console.log(val);
// });

// fetch(location.href)
//   .then((res) => {
//     if (!res.ok) {
//       return "";
//     }
//     return res.text();
//   })
//   .then((text) => {
//     console.log(text.replace(/>/g, ">¥n"));
//   });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve();
//   }, 1000);
// }).then(
//   function () {
//     console.log("解決");
//   },
//   function () {
//     console.log("拒否");
//   }
// );

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     reject();
//   }, 1000);
// })
//   .then(function () {
//     console.log("解決");
//   })
//   .then(function () {
//     console.log("拒否");
//   })
//   .catch(function () {
//     console.log("キャッチ");
//   });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     reject();
//   }, 1000);
// })
//   .then(
//     function () {
//       console.log("解決１");
//     },
//     function () {
//       console.log("拒否１");
//       reject();
//     }
//   )
//   .then(
//     function () {
//       console.log("解決２");
//     },
//     function () {
//       console.log("拒否２");
//       reject();
//     }
//   )
//   .catch(function () {
//     console.log("キャッチ");
//   });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("エラー");
//   }, 1000);
// }).then(
//   function (arg) {
//     console.log("解決", arg);
//   },
//   function (arg) {
//     console.log("拒否", arg);
//   }
// );

// const timer = (time, type) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (type === "resolve") {
//         resolve(`${time} 解決`);
//       }
//       if (type === "reject") {
//         reject(`${time} 拒否`);
//       }
//     }, time);
//   });
// };
// (async function () {
//   try {
//     const res1 = await timer(500, "resolve");
//     console.log(res1);
//     const res2 = await timer(500, "resolve");
//     console.log(res2);
//     const res3 = await timer(500, "reject");
//     console.log(res3);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("終了");
//   }
// })();

// const timer = (time, type) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (type === "resolve") {
//         resolve(`${time} 解決`);
//       }
//       if (type === "reject") {
//         reject(`${time} 拒否`);
//       }
//     }, time);
//   });
// };
// const array = [
//   timer(500, "resolve"),
//   timer(600, "resolve"),
//   timer(700, "reject"),
//   timer(800, "resolve"),
// ];
// Promise.all(array).then(
//   function (res) {
//     console.log(res);
//   },
//   function (res) {
//     console.log(res);
//   }
// );

const timer = (time, type) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (type === "resolve") {
        resolve(`${time} 解決`);
      }
      if (type === "reject") {
        reject(`${time} 拒否`);
      }
    }, time);
  });
};

// Promise.all([
//   500,
//   timer(600, "resolve"),
//   timer(700, "resolve"),
//   timer(800, "reject"),
// ]).then(
//   (val) => {
//     console.log("ok", val);
//   },
//   (val) => {
//     console.log("ng", val);
//   }
// );
// Promise.allSettled([
//   500,
//   timer(600, "reject"),
//   timer(700, "resolve"),
//   timer(800, "resolve"),
// ]).then(
//   (val) => {
//     console.log("ok", val);
//   },
//   (val) => {
//     console.log("ng", val);
//   }
// );
// Promise.any([
//   500,
//   timer(600, "reject"),
//   timer(700, "resolve"),
//   timer(800, "resolve"),
// ]).then(
//   (val) => {
//     console.log("ok", val);
//   },
//   (val) => {
//     console.log("ng", val);
//   }
// );
// Promise.any([
//   timer(500, "reject"),
//   timer(600, "reject"),
//   timer(700, "reject"),
//   timer(800, "reject"),
// ]).then(
//   (val) => {
//     console.log("ok", val);
//   },
//   (val) => {
//     console.log("ng", val);
//   }
// );
// Promise.race([
//   timer(500, "reject"),
//   timer(600, "resolve"),
//   timer(700, "reject"),
//   timer(800, "reject"),
// ]).then(
//   (val) => {
//     console.log("ok", val);
//   },
//   (val) => {
//     console.log("ng", val);
//   }
// );

// Promise.all([
//   Promise.resolve(100),
//   Promise.resolve(200),
//   Promise.reject(300),
// ]).then(
//   (val) => {
//     console.log("ok", val);
//   },
//   (val) => {
//     console.log("ng", val);
//   }
// );

// Promise.allSettled([
//   Promise.resolve(100),
//   Promise.resolve(200),
//   Promise.reject(300),
// ]).then((value) => {
//   console.log(value);
// });

const thenable = {
  then: (func1, func2) => {
    setTimeout(() => {
      func1("ok");
    }, 500);
  },
};
Promise.resolve(thenable).then((res) => {
  console.log(res);
});
