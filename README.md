# 할 일 앱 만들기

## 리액트 프로젝트 세팅

- npm으로 설치> yarn add 대신에 npm i
- `npx create-react-app ./`
- `yarn create react-app ./`
- `yarn add normalize.css`
- `yarn add sass`
- `yarn add classnames react-icons`

## ESLint, prettier 설정

- ./.prettierrc.json

```json
{
  "singleQuote": false,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80,
  "arrowParens": "avoid",
  "endOfLine": "auto"
}
```

- ESLint 설정
- `yarn add eslint --dev` 또는
- `npx eslint --init`
- `yarn eslint --init`

- ESLint와 Prettier 연결하여 ESLint 설정
- `npm install eslint-config-prettier --save-dev` 또는
- `yarn add eslint-config-prettier --save-dev`

- ./.eslintrc.js 내용 수정 prettier추가

```js
extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier"
],
```

```js
rules: {
  "react/react-in-jsx-scope": "off",
  "react/prop-types": "off",
  "no-unused-vars": "off",
},
```

### 용어 정리

- <> 꺽쇠, 프라그먼트
- () 소괄호
- {} 중괄호
- [] 대괄호

- ; 세미콜론
- : 콜론
- @ 엣 마크 at mark
- & 앰퍼샌드
- `` 백틱
- \ 백슬래시
