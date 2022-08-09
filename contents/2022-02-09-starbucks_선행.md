---
date: '2022-02-09'
title: 'Starbucks-JS 선행'
categories: ['JavaScript', 'FastCampus']
summary: '패스트캠퍼스 Starbucks 클론코딩 강의에서, 선행으로 알아야 하는 JS 개념정리'
thumbnail: './images/thumbnail-starbucks.png'
---

# 보간법

```js
let myName = 'HEROPY!'
let hello = `Hello ${myName}`

console.log(hello) //Hello HEROPY!
```

- ${ } 중괄호 안에 **변수**를 넣어 **문자열로 변환**시키는 역할
- 보간법 사용하려면 문자열을 **Backtick( ` ) 기호**안에 작성해야함

# 함수

- 기명(이름이 있는) 함수
- 함수 선언!

```js
function hello() {
  console.log('Hello~')
}
```

- 익명(이름이 없는) 함수
- 함수 표현!

```js
const world = function () {
  console.log('World~')
}
```

- 함수 호출

```js
hello() // 기명함수 호출: Hello~
world() // 익명함수 호출: World~
```

# DOM API

- JS로 HTML를 제어하는 여러 명령어들

# querySelector()

```js
querySelector('.box')
```

만약, '.box' 요소들이 여러개 있다면? **가장 먼저 찾아지는 요소**를 가져옴

# Object(객체)형 데이터

- { } 형식의 데이터

# .addEventListener()

```js
boxEl.addEventListener('click', function () {
  // 익명의 function() -> 핸들러
  console.log('Hello~')
})
```
