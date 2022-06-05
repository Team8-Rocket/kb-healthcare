## KB 헬스케어

## 📜 프로젝트 개요
차트가 포함된 회원 건강 관리 App

## 🔗 프로젝트 배포

### 🔗 [배포 사이트](https://main--kb-healthcare8.netlify.app)

## ⚙ 기술 스택
  <img src="https://img.shields.io/badge/TypeScript-v4.4.2-blue"/>
  <img src="https://img.shields.io/badge/React-v18.1.0-blue"/>
  <img src="https://img.shields.io/badge/Redux/toolkit-v1.8.1-blue"/>
  <img src="https://img.shields.io/badge/React Router Dom-v6.3.0-blue"/>

```
그 외 추가 라이브러리
  - "dayjs": "^1.11.2"
  - "victory": "^36.4.0"

```

## 🎄 프로젝트 트리

```
src
 ┣ assets       // json, svg 파일
 ┣ components   // 공통으로 사용하는 컴포넌트
 ┣ hooks        // Custom Hooks
 ┣ routes       // 페이지
 ┣ util         // JSON 처리 관련
 ┣ styles       // 전역 style
 ┣ types        // 필요한 type 정의
```

## 📍 Getting Started / 어떻게 시작하나요?

1. Repository 클론
```sh
$ git clone https://github.com/Team8-Rocket/kb-healthcare.git
```

2. Dependencies 설치
```sh
$ yarn install
```

3. Run 실행
```sh
$ yarn start
```

## 🖼 실행 이미지
![kb움짤](https://user-images.githubusercontent.com/79175916/172031073-bcc705c1-1b71-4e0f-a329-54fc69c247ec.gif)


## 🔧구현 방법 🦖🦕🐳🐬🐊🐷
### 1. 유저
> TotalChart, CircleChart Component
  - JSON 데이터를 변환해서 필요한 데이터를 이용해 차트와 유저의 정보를 구현했습니다.
  - 첫 렌더링 시, 애니메이션 효과를 적용해서 동적인 그래프 효과를 주었습니다.

### 2. 차트
> Chart Component
  - props를 이용하여 그래프에 필요한 data를 전달받아 그래프를 그릴 수 있게 하였습니다.

> JSON 처리
  - 필요한 데이터를 그리기 위해 함수를 이용하여 JSON을 필요한 data로 변환하였습니다.


### 3. 카드 컴포넌트 
> Card Component
  - UserManagement에 Card 컴포넌트를 만들고 Props로 가공한 JSON의 데이터를 받았습니다.
  - 카드안에 공통적으로 들어가는 태그를 Tag 컴포넌트로 만들어서 재사용 가능하도록 했습니다.

> Tag Component
  - 문자열을 Props로 받아서 Tag 내용을 가변적으로 처리할 수 있도록 하였습니다.
  - CSS처리로 태그 중 첫 번째 태그에만 하이라이트 색상을 주도록 하였습니다.

> 유틸 - utils/healthDataUtils 
  - 데이터를 가공하는 함수들을 모아놓은 파일입니다.
  - get() 함수들은 필요한 데이터만 추출하여 가져오는 함수로 구성했습니다.
  - transformData() 함수는 배열 데이터를 객체로 미리 변환하는 함수로, 데이터 탐색 시 매번 배열 전체 탐색을 하지 않아도 되도록 하였습니다.
  - hasLetterStand() 함수는 글자의 받침에 따라 조사(은/는)을 자동으로 붙여줄 수 있도록 구현했습니다.
  - splitCardContent() 함수는 원본 데이터의 한 문장이 길어지는 경우가 있어 가독성을 위해 문장을 마침표 단위로 split() 하여 리스트를 반환하였습니다.

> SCSS
  - SCSS @each와 SCSS 배열을 사용하여 cardContainer::nth-child()로 cardContainer의 자식인 h2, h3 제목 태그에 에 지정된 color를 각각 부여해주었습니다. 



## 🔥 어려웠던 점


## 💎 현재 이슈

