---
date: '2022-02-10'
title: 'Overwatch-CSS 개념'
categories: ['CSS', 'FastCampus']
summary: '패스트캠퍼스 Overwatch 캐릭터 선택창 클론코딩 강의를 들으면서 배운 CSS 개념정리'
thumbnail: './images/thumbnail-overwatch.jpg'
---

# max-width

- max-width가 700px  
  => 화면길이가 700 이상으로 늘어나면 그 이상 변하지 않는다!

# 자동정렬

1. 요소가 div요소
1. 가로 길이가 지정된 상태

```css
.container .heroes {
  margin: 0 auto;
}
```

가로 기준으로 자동정렬됨

# color

```css
border: 3px solid #fff;
```

-> color는 # 뒤에 같은게 6개가 반복되면 3개로 단축 가능

# transition

- 속성지정 후 시간지정 -> 속성이랑 시간은 **띄어쓰기**로 구분
- 지정해야하는 속성과 시간이 여러개면? ',' **쉼표**로 구분

```css
.container .heroes .hero {
  transition: transform 0.1s, background-color 0.6s;
}
```

# skewX()

- 단위: deg
- 각도가 '+'면 왼쪽으로 기울어짐, '-'면 오른쪽으로 기울어짐

# translateX()

- 수치가 '+'면 오른쪽으로, '-'면 왼쪽으로 움직여짐
- translateY() 는 '+'면 밑으로, '-'면 위로 움직여짐
