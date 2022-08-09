---
date: '2022-02-05'
title: 'JS Essentials'
categories: ['JavaScript', 'FastCampus']
summary: '패스트캠퍼스 JS 강의 중, JS-시작하기 부분을 정리'
thumbnail: './images/thumbnail-javascript.png'
---

# ECMAScript 및 프로젝트 초기화

```
ES(ECMAScript)
=> JS의 표준화된 명칭
```

# 데이터 타입 확인

- JS에 세미콜론 안 붙여도 큰 문제 X
  -> 가끔 문제 발생 가능성 있지만,  
  parcel bundler가 자동적으로 붙여줌

## undefined vs null

- undefined: 의도적으로 정의 x
- null : 의도적으로 정의 o

## 다른 .js 파일에서 함수 가져오기

- getType.js에 function getType() 정의
- 함수 왼쪽에 export default 붙이기
- 그리고 main.js에  
  import getType from './getType'  
  -> .js 생략 가능!

```js
// getType.js

export default function (data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}

// main.js (typeof vs getType())

import getType from './getType'
console.log(typeof undefined) // undefined
console.log(typeof null) // Object
console.log(typeof {}) // 객체데이터 : Object
console.log(typeof []) // 배열데이터 : Object

console.log(getType(123)) // Number
console.log(getType(false)) // Boolean
console.log(getType(null)) // Null
console.log(getType([])) // Array -> 위의 typeof와 다름
console.log(getType({})) // Object
```

> **[주의]** './getType' 가 아니라 그냥 'getType' 하면 node_modules에서 찾게됨..

<br>

# 산술, 할당 연산자 (arithmetic & assignment operator)

```js
let a = 1
a = 2
// 재할당 가능

const c = 3
// 재할당 불가능
```

<br>

# 비교, 논리 연산자 (comparison & logical operator)

```js
// === : 일치 연산자

const a = 1
const b = 1
console.log(a === b) // true

const c = 2
const d = '2'
console.log(c === d) // false

// ! : 부정연산자
const e = 1 === 1
console.log(!e) // false
```

<br>

# 삼항 연산자 (ternary operator)

```js
const d = 1 < 2
console.log(d ? '참' : '거짓') // 참
```

# 조건문 If Else, Switch

```js
const num = 0
switch (num) {
  case 0:
    console.log('num is 0')
    break

  case 2:
    console.log('num is 2')
    break

  default:
    console.log('default')
  //break 없어도 됨
}
```

<br>

# 반복문(For Statement)

**for (시작조건; 종료조건; 변화조건) { }**

```js
const ulEl = document.querySelector('ul')
console.log(ulEl)

for (let i = 0; i < 10; i += 1) {
  const li = document.createElement('li')
  li.textContent = `list-${i + 1}` // list-1, list-2, list-3 이라 출력됨
  if ((i + 1) % 2 === 0) {
    li.addEventListener('click', function () {
      console.log(li.textContent)
    })
  }

  ulEl.appendChild(li)
```

# textContent

- li.textContent = 'xxx' -> 내용지정
- console.log(li.textContent) -> 내용 가져오기  
   => 2가지 기능 존재!

<br>

# 변수 유효범위(Variable Scope)

**var, let, const**

- let, const: 블록 레벨
- var: 함수 레벨  
  -> 메모리 누수 발생 가능

```js

function scope() {
  if (true) {
    const a = 123
  }
  console.log(a)
}
scope() -> Uncaught Reference Error

function scope() {
  console.log(a)
  if (true) {
    let a = 123
  }
}
scope() -> undefined

function scope() {
  if (true) {
    var a = 123
  }
  console.log(a)
}
scope() -> 123

=> 의도하지 않은 범위에서 변수가 사용됨
=> 그만큼 메모리 차지
=> 메모리 누수로 이어짐
```

# 형 변환(Type Conversion)

- == : 동등 연산자
  -> 기본적으로 형 변환이 일어남 : 권장 x

```js
const ex1 = 1
const ex2 = '1'

console.log(ex1 === ex2) // false
console.log(ex1 == ex2) // true
```

- Truthy(참 같은 값)

  - true, {}, [], 1, 2, 'false', -12, '3.14', ...

- Falsy(거짓 같은 값)
  - false, '', null, undefined, 0, -0, NaN(Not a Number)

```js
if ('false') {
  // true여서 함수 실행됨

  console.log(1 + undefined) // 숫자 데이터긴 한데 숫자는 아님 -> NaN
}
```
