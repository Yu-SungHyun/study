# React

### 알아야 할 기본 문법

1. JSX : JS와 HTML 을 같이 사용할 수 있게 해줌
2. props : properties 를 줄인말로 어떤 값을 다른 컴포넌트에 전달할 때 사용한다.
3. useState : 각 컴포넌트에서 상태를 관리하고 공유하기 위해서 사용한다.
4. useRef : Hook 함수이며 이를 사용하여 사용하려는 DOM 값을 가져와서 컨트롤 할 수 있다.
5. useEffect : 컴포넌트가 마운트, 언마운트, 업데이트 됐을 때, 처리할 수 있도록 해준다.
6. useMemo : memory 의 줄임말로 변경이 없는 데이터는 저장하여 리렌더링 되지 않게 한다. 이를 통해 성능 향상(값)
7. useCallback : useMemo는 값이라면 useCallback은 함수를 재사용할 때 사용한다.
8. useReducer : action, state 사용하여 메시지를 전송하고 상태를 변경할 수 있다.
9. contextAPI : 컴포넌트 별로 상태나 함수 등을 전달하는 게 아니라 범위 내라면 언제든 꺼내서 쓸 수 있도록 해주는 API 이다.
10. async : 비동기 요청
11. await : 응답 대기  
#
<br>
<br>

# 리덕스
* 리덕스(Redux)란 리액트에서 사용하는 상태 관리 라이브러리이다. 없어도 Context API와 useReducer 를 사용해도 되지만 비동기 작업이나 앱이 크다면 활용성이 아주 크다. 

### 알아야 할 키워드
1. 액션(Action) : 객체이며 type의 값을 통해 해야할 액션을 지정하며 객체 안에 사용할 데이터를 자유롭게 넣을 수 있다.
      
      ```javascript
      {
        type: "ADD_TODO",
        data: {
          id: 0,
          text: "오늘 도비 뚝배기 만지는 날"
        }
      }
      ```
2. 액션 생성함수 : 액션에 넣을 데이터를 매개변수로 받고 액션 객체를 생성하는 함수이다. 아래는 Todo에 넣을 데이터 값을 받고 액션 객체를 만들어주는 예시이다. 
    ```javascript
    export function addTodo(data) {
      return {
        type: "ADD_TODO",
        data
      };
    }
    ```
3. 리듀서(Reducer) : 리듀서는 두 개의 매개변수, 상태와 엑션 객체를 받고 이를 처리하는 함수이다. 
      ```javascript
      function todos(state, action){
        switch(action.type){
          case 'ADD_TODO" :  
            return action.data;
        }
        ...
      }
      ```
4. 스토어(Store) : 리덕스에서는 한 애플리케이션당 하나의 스토어를 만들게 된다. 

5. 디스패치(dispatch) : 디스패치는 스토어에 내장된 함수이다. 디스패치는 액션을 발생시킨다. 

---
<br/>
<br/>

### 개발에 도움이 되는 라이브러리 및 설치법

#### React 설치

  `$ npx create-react-app {설치 폴더 명}`

#### js + css 라이브러리

   `$ yarn add styled-components`

#### React 제공 icon

`$ yarn add react-icons`

#### API 호출을 위한 axios 라이브러리

`$ yarn add axios`

#### 리액트 라우터

`$ yarn add react-router-dom`

---
<br/>
<br/>

## 개발 도구

#### 1. Prettier

- 자동으로 코드에 필요한 값들을 넣어주는 도구이다. , 또는 들여쓰기 등등 무심코 지나갈 수 있는 것들을 추가해준다.
  가장 상위의 디렉터리에 '.prettierrc' 파일을 추가해준다.
  ```
    .prettierrc{
    "trailingComma": "es5",
    "tabWidth": 4,
    "semi": true,
    "singleQuote": true
    }
  ```  

* trailingComma 의 값은 'none', 'es5', 'all' 이 있으며, 'es5'는 객체, 배열을 사용할 때 쉼표를 붙여준다. 'all'이면 함수를 사용할 때에도 쉼표를 붙여준다.
* semi 는 자동으로 ';' 을 붙여준다.
* tabWidth : 들여쓰기 크기 설정
* singleQuote : 문자열을 입력할 때 " or ' 로 쓸지 결정해준다. " 를 쓰고 싶다면 false 값을 입력하면 된다 .

위의 설정을 끝내면 VSCode 에디터에서 'Prettier - Code formatter' 를 설치한다.
그리고 **window(ctrl + , ), mac(⌘ + ,)** 를 클릭한 뒤,
**'Format On Save'** 를 검색하고 체크해주면 된다.

마지막으로 'Ctrl + ,' 를 다시 들어간 뒤 "Default formatter" 검색해준다. 그리고 아래 쯤에 있는
"settings.json에서 편집"을 클릭하면 settings.json으로 들어가진다.
가운데에 아래 값을 넣어주면 끝난다.

`"editor.defaultFormatter": "esbenp.prettier-vscode"`

#### 2. ESLint

- 자바스크립트의 문법을 확인해주는 도구이다. VSCode 에디터에서 추가로 설치해주면 된다. 그러면 터미널에서나 확인이 가능하던 에러를 에디터 코드 상에서 확인이 가능하다.
