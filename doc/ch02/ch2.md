# 2 자바스크립트 개발 도구

- Git
- Node
- Gulp
- Babel
- ESLint

## 2.1 ES6 사용하기

## 2.2 ES6 기능

### 2.2.1 깃 설치

### 2.2.2 터미널

### 2.2.3 프로젝트 루트

### 2.2.4 깃과 버전 컨트롤

### 2.2.5 npm 패키지 관리

```sh
$ node -v
v6.11.1

$ npm -v
3.10.10
```

### 2.2.6 빌드 도구: 걸프와 그런트

```sh
$ yarn add -D gulp
```

`package.json`
```json
  "scripts": {
    "gulp": "gulp"
  },
```

### 2.2.7 프로젝트 구조

## 2.3 트랜스컴파일러

```sh
$ yarn add -D babel-preset-es2015
```

`.babelrc`
```json
{
  "presets": ["es2015"]
}
```

### 2.3.1 바벨을 걸프와 함께 사용하기

```sh
$ yarn add -D gulp-babel
```

`gulpfile.js`
```js
const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', function() {
  return gulp.src('./src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});
```

```sh
$ yarn gulp
```

```sh
$ node dist/ch02/test.js
```

## 2.4 린트
```sh
$ yarn add -D eslint gulp-eslint
```

```sh
$ yarn add -D eslint-config-airbnb-base eslint-plugin-import
```

`.elintrc`
```json
{
  "extends": "airbnb-base"
}
```

## 2.5 요약
