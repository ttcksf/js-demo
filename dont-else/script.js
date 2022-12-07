function canDrink(person) {
  if (person?.age != null) {
    if (person.age < 18) {
      console.log("Nope");
    } else if (person.age < 21) {
      console.log("Not");
    } else {
      console.log("Yes");
    }
  } else {
    console.log("Not Person");
  }
}

function canDrinkBetter(person) {
  //大枠のelseを簡易にできる
  if (person?.age == null) return console.log("Not Person");
  //これでも良い
  // if(person?.age == null){
  //   console.log("Not Person");
  //   return
  // }

  // if (person.age < 18) {
  //   console.log("Nope");
  // } else if (person.age < 21) {
  //   console.log("Not");
  // } else {
  //   console.log("Yes");
  // }

  //returnは1個にするのが良いという考え方はある場合は、switchもしくはswitchのような作り方はアリ
  if (person.age < 18) {
    console.log("Nope");
    return;
  }
  if (person.age < 21) {
    console.log("US");
    return;
  }

  console.log("Yes");
}

const p = {
  age: null,
};
canDrinkBetter(p);
canDrink(p);
