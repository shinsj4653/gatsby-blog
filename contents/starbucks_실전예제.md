---
date: '2022-02-10'
title: 'Starbucks-실전'
categories: ['HTML', 'CSS', 'JavaScript', 'FastCampus']
summary: '패스트캠퍼스 Starbucks 클론코딩를 하면서 배운 개념정리'
thumbnail: './images/thumbnail-starbucks.png'
---

# 시작하기

## favicon

- **"favicon.ico"** 이름 그대로 **"루트"** 경로에다가 두면 자동적으로 찾아서 사이트의 아이콘으로 설정함

- 만약, 더 해상도 좋은 **png파일**을 아이콘으로 설정하고 싶으면?

```html
html파일에 <link rel="icon" href="./favicon.png" />
```

## SEO(검색 엔진 최적화, Search Engine Optimization)

- 구글이나 네이버 등에 자신의 웹 사이트/페이지를 노출할 수 있도록 정보를 최적화하는 작업

- 다른 브라우저(카카오톡 등..)들이 가져갈 정보들을 묶어놓은 태그  
  => meta 태그

> 브라우저들이 빠르게 정보 접근 가능하게 하기 위해, meta태그는 위에 배치하는게 효과적!

## Google Material Icons

```html
<html>
  <head>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
  </head>
  <body>
    <span class="material-icons">search</span>
  </body>
</html>
```

- 글자 취급받음
- 기본 size -> 24px;

# Header & 드롭다운 메뉴

## 부모요소 안에 있는 자식요소의 수평(또는 수직) 정렬

- 자식요소

```css
.item {
  width: 100px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
}
```

- 부모요소

```css
.container {
  position: relative;
}
```

> 부모는 position: relative; 그리고 자식 요소에 width값(수직 정렬은 height값)이 지정되어 있어야함!

## 메인 메뉴

- 헤더의 메인 메뉴-> 각 칸 hover하면 밑에 뜨는 부분(.contents\_\_menu, .contents\_\_texture)  
  => 이 2개를 담은 .item\_\_contents

```css
.item__contents {
  width: 100%;
  position: fixed;
  left: 0;
}
```

- 이 부분은 **viewport** 를 기준으로 배치  
  -> width: 100%해서 화면의 **viewport 좌우 끝까지 늘어남**
- top, bottom 속성을 사용하지 않아 수직 위치 값이 없으면, 요소의 원래 위치를 그대로 사용함
- 만약, position: absolute 했으면 위치상 부모 요소를 기준으로 하므로, 화면의 뷰포트 좌우 끝까지 늘어나기 불가능!

## .inner

```css
.inner {
  width: 1100px;
  margin: 0 auto;
  position: relative;
}
```

- 가운데 정렬을 해주는 블럭 역할
- 화면 축소해도 가운데 정렬 유지시켜줌

## BEM(Block Element Modifier)

- HTML 클래스 속성의 작명법

### 요소\_\_일부분

- Underscore(Lodash) 기호로 요소의 **일부분(하위부분)**을 표시

```html
<div class="container">
  <div class="container__name"></div>
  <div class="item">
    <div class="item__name"></div>
  </div>
</div>
```

### 요소\-\-상태

- Hyphen(Dash) 기호로 요소의 **상태**를 표시

```html
<div class="btn btn--primary"></div>
<div class="btn btn--success"></div>
<div class="btn btn--error"></div>
```

## position: absolute & position: fixed

- 가로길이가 최소한으로 줄여드려는 성질을 가지고 있음!

# 순차적 애니메이션

- 브라우저 띄었을때 바로 보이는 커피사진들 애니메이션되는 영역(section.visual)

## a 태그

- 링크 버튼이긴하지만, 아직 링크가 안 걸린 상태이면?

```html
<a href="javascript:void(0)" class="btn btn--brown">자세히 보기</a>
```

## 일치 선택자

```html
<img class="cup1 image"></img>
```

- cup1및 image 클래스 둘 다 지님  
  -> css에선 **일치선택자** 사용가능

```css
.cup1.image {
}
```

## position: absolute;

- 그 요소의 부모요소에 이미 position: absolute;있으면?  
  -> position: relative으로 안 바꿔도 됨

# 요소 슬라이드

## 공지사항

### align-items

- 기본값: stretch
- 부모가 display: flex;고, 요소 자체가 높이값 별도로 없으면 세로길이가 최대한으로 늘어나려고 함  
  => 부모의 높이값에 맞춰지려고 함

```css
// 부모
.notice .notice__line .inner__left {
  display: flex;
}

// 안의 요소
.notice .notice__line .inner_left .swiper-container;
```

## calc()

- 가로 방향으로 slide되는 영역

```css
.notice .promotion .swiper-container {
}
```

- 각 공지사항 페이지들(5개) -> 자동적으로 움직이도록!
- 각 페이지 width -> 819px;
- 가운데 선명하게, 양옆은 희미하게 보이도록해야함, 그리고 각 페이지 사이 여백: 10px;
- css의 **calc() 함수 활용**하면??

```css
.notice .promotion .swiper-container {
  width: calc(819px * 3 + 20px);
  /* width: calc(100% - 50px) */
}
```

> 위의 주석처럼, 단위 달라도 계산가능!

## 요소 가운데 배치

```css
.notice .promotion .swiper-container {
  position: absolute;
  left: 50%;
  margin-left: -1238px;
}
```

- -1238px : .swiper-container의 width의 절반
- left: 50%으로 오른쪽방향으로 민다음, 요소의 길이의 반만큼 다시 가져옴

# 유튜브 영상배경

## Youtube iframe API

### Youtube 영상비율잡기

```css
.youtube .youtube__area {
  width: 1920px;
}
.youtube .youtube__area::before {
  contents: '';
  width: 100%;
  height: 0;
  padding-top: 56.25%; /* 16:9 */
  display: block;
}
```

- .youtube\_\_area가 부모의 width를 기준으로 padding-top의 비율만큼 높이가 잡힘

- ::before -> 원래 inline요소이므로, 높이값 가지기 위해 **display: block;** 필요!

### 참조문서

[youtube iframe api](https://developers.google.com/youtube/iframe_api_reference?hl=ko)

```js
// youtube.js

let tag = document.createElement('script')

tag.src = 'https://www.youtube.com/iframe_api'
let firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동재생 유무
      loop: true, // 반복재생 유무
      playList: 'An6LvWQuj_8', // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function (event) {
        event.target.mute() // 음소거
      },
    },
  })
}
```

- html 안에 **#player인 요소**를 찾아서 그 부분에서 영상이 재생됨
- 유튜브 영상 ID -> 영상링크의 **v= 뒤의 부분** (밑의 예시에선 An6LvWQuj_8)

```
https://www.youtube.com/watch?v=An6LvWQuj_8
```

## 유튜브 영상 주변에 둥둥 떠다니는 요소 애니메이션

### gsap(js 애니메이션 라이브러리)

```js
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // 반복횟수 : -1 -> 무한반복
    yoyo: true, // 위에서 아래 움직이는거 처리되면, 다시 아래에서 위로 움직이는걸 구현
    ease: Power1.easeInOut, // 부드러운 애니메이션
    delay: random(0, delay), // 1초 기다렸다가 실행
  })
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', 0.5, 15)
floatingObject('.floating3', 1.5, 20)
```

- 부드러운 애니메이션  
  => [gsap easing](https://greensock.com/docs/v2/Easing)
- 위아래 부드럽게 왔다갔다  
  -> **Type: easeInOut** 참고!  
  -> ease 요소 가지고 오면됨

# 3D 애니메이션

## PICK YOUR FAVORITE 창

```css
.pick-your-favorite {
  background-attachment: fixed;
  background-size: cover;
}
```

- background-attachment가 fixed여서 viewport를 기준으로 배치됨
- cover -> **viewport의 더 넓은 범위**에 맞춰서 사이즈가 정해짐

## RESERVE STORE 창

- hover하면 180도 회전되는 부분

```css
.reserve-store .medal .front {
  tranform: rotateY(0deg);
}
.reserve-store .medal .back {
  transform: rotateY(-180deg);
}
```

- 요소의 기본상태(.front) : 0deg로 설정안해두면 구형브라우저에서는 문제 생길 수 있음

```css
.reserve-store .medal {
  perspective: 600px;
}
```

- 원근거리 줌으로써, 자연스럽게 회전하는 것처럼 보이게됨

# 스크롤 위치 계산 애니메이션

- 화면아래로 스크롤 하면서 요소들이 가운데로 모아지는 효과  
  => ScrollMagic cdn

[ScrollMagic JS라이브러리 링크](https://cdnjs.com/libraries/ScrollMagic)

```js
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // viewport : 맨위가 0, 가장 아래가 1
    //-> 0.8 부분 왔을때 trigger됨
  })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
})
```

- .show 클래스가 생기기전 기본상태일땐, 화면에 안 보이도록 세팅해야함!

```css
.back-to-position {
  opacity: 0;
  transition: 1s;
}
.back-to-position.to-right {
  /* 왼쪽에서 오른쪽으로 나타나는 애니메이션 */
  transform: translateX(-150px);
}
.back-to-position.to-left {
  /* 오른쪽에서 왼쪽으로 나타나는 애니메이션 */
  transform: translateX(150px);
}
.show .back-to-position {
  opacity: 1;
  transform: translateX(0);
}
```

- 스크롤 내리면서 요소에 .seciton에 .show가 생기면, 자동적으로 그 후손요소들 중, .back-to-position 가지고 있는 애들이 trigger됨

```html
<div class="more back-to-position to-left">
  <a href="javascript=void(0)" class="btn">자세히 보기</a>
</div>
```

- 스크롤하면 요소들 가운데로 오는 transition 효과랑 btn의 hover했을때 배경색 바뀌는 transition 효과가 충돌하는걸 방지하려면?  
  => a태그를 div로 감싸고 class를 따로 부여하면 됨

# Footer

- copyright 특수문자  
   [HTML Entities](https://dev.w3.org/html5/html-author/charref)  
  => html 특수문자 코드 사이트

```html
&copy; <span class="this-year"></span>
```

## img 요소

- display: block;한 상태이고, margin: 0 auto면, width없어도 가운데 정렬 가능!!!

## 페이지 상단으로 이동

- gsap cdn의 ScollToPlugin을 활용  
   => 버튼 클릭하면 맨 위로 이동시켜주는 기능  
  [gsap cdn](https://cdnjs.com/libraries/gsap)

- gsap 애니메이션들 여러개로 나눈 이유?  
  => 한꺼번에 모아두면 무거워지고, 로딩시간 길어짐..  
  => 따로따로 분류해둠

```js
gsap.to('#to-top', 0.2, {
  x: 100,
})
```

- 선택자를 그대로 써서 구현 가능
- 만약, 많이 쓰이는 요소의 선택자면, **변수에 한번 할당**하여 그 변수를 계속 사용하는게 효율적!

```js
const toTopEl = document.querySelector('#to-top')
gsap.to(toTopEl, 0.2, {
  x: 100,
})
```

# 로그인 페이지 개발

```html
signin 폴더안의 index.html
<script defer src="../js/main.js"></script>
```

- signin폴더 밖으로 한번 나가야하므로, ./를 ../로 바꿔야함

## common.js

- 기존의 main.js -> **루트경로의 index.html** 요소만 가져왔으므로, signin폴더안의 index.html 에서 main.js 불러오면, 몇개의 요소들은 못 찾을수도 있음..  
  => 래퍼런스 에러 발생가능!  
  => 두 index.html에서 공통적으로 쓰이는 기능을 따로 모으기!

> 루트 경로의 index.html에서 main.js불러오기 전에, common.js 먼저 불러오기!

## form 태그

```html
<form>
  <input type="text" placeholder="아이디를 입력하세요." />
  <input type="password" placeholder="비밀번호를 입력하세요." />
  <input type="submit" value="로그인" />
  <p>
    * 비밀번호를 타 사이트와 같이 사용할 경우 도용 위험이 있으니, <br />
    정기적으로 비밀번호를 변경하세요!
  </p>
</form>
```

- form : 사용자의 정보를 어딘가로 전송
- input type="submit" value="로그인"  
  => 로그인이라고 적힌 **제출버튼**이 만들어짐

## 일정비율로 길이세팅

```html
<div class="actions">
  <a href="javascript:void(0)">회원가입</a>
  <a href="javascript:void(0)">아이디 찾기</a>
  <a href="javascript:void(0)">비밀번호 찾기</a>
</div>
```

```css
.signin__card .actions a {
  flex-grow: 1;
  flex-basis: 0;
}
```

- 가로길이가 **1:1:1 비율**로 세팅됨

## strong 태그

- 텍스트 강조(인라인 요소)
