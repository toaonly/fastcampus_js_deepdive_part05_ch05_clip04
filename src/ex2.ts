const { getKeys, getValueByKey, transformUppercaseKey } = window.fcCh05

const user = {
  name: '홍길동',
  age: 20,
  gender: 'M',
  job: 'college student',
  car: ['Car_01', 'Car_02'],
}

console.log(getKeys(user))

console.log(getValueByKey(user, 'name'))
console.log(getValueByKey(user, 'age'))
console.log(getValueByKey(user, 'gender'))
console.log(getValueByKey(user, 'job'))
console.log(getValueByKey(user, 'car'))

console.log(transformUppercaseKey(user).AGE)
console.log(transformUppercaseKey(user).CAR)
console.log(transformUppercaseKey(user).GENDER)
console.log(transformUppercaseKey(user).JOB)
console.log(transformUppercaseKey(user).NAME)
