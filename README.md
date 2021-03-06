# 리액트로 계산기 만들어보기 미션

[![Netlify Status](https://api.netlify.com/api/v1/badges/56ab91af-0963-4e1f-ba56-cf0699a1bd1b/deploy-status)](https://app.netlify.com/sites/leafy-sable-757250/deploys)

![image](https://user-images.githubusercontent.com/41019113/175235647-83e19cb4-d736-45f7-acf6-c8a3e9775399.png)

# 요구사항
- [ ] 계산 결과의 초기값은 0 이다
- [ ] 2개의 숫자에 대해 덧셈이 가능
- [ ] 2개의 숫자에 대해 뺄셈이 가능
- [ ] 2개의 숫자에 대해 곱셈이 가능
- [ ] 2개의 숫자에 대해 나눗셈이 가능
- [ ] AC 버튼을 누르면 0으로 초기화 한다
- [ ] 계산 결과를 표현할 때 소수점 5자리를 초과하면 소수점 버림한다
- [ ] 숫자는 한번에 9자리까지만 입력할 수 있다
- [ ] 계산 결과를 보여줄 때 콤마 처리한다

# 테스트 요구사항
요구사항에 있는 것은 모두 테스트를 통과해야 한다


# 테스트 실행 방법
![image](https://user-images.githubusercontent.com/41019113/175460808-97c253b6-f97a-4db0-9914-86ff31c4fbbb.png)

패키지 제이슨의 test 스크립트를 실행한다

![image](https://user-images.githubusercontent.com/41019113/175460919-e79418b7-4db3-4b16-bd6b-bb68c75d00f7.png)

Component Testing을 선택한다

![image](https://user-images.githubusercontent.com/41019113/175460997-1b01a9a6-1fa7-4abb-90c1-a8a177f2d8cf.png)

Start Component Testing in Chrome을 선택한다 ( 브라우저 선택은 선택사항 )

![image](https://user-images.githubusercontent.com/41019113/175461094-bfe50118-c8a1-4e2a-ab87-f76f65acc623.png)

작성한 테스트를 선택해서 실행한다

![image](https://user-images.githubusercontent.com/41019113/175473040-87efd558-9c56-4333-9345-d64a46202bff.png)

`예시`

# PR 요청
해당 프로젝트를 포크 후 본인 저장소에서 수정한다

# ⚠
1. 컴포넌트가 한가지 `역활`과 `책임`만을 가지고 있는지, 함수가 한가지 일만 하는지 생각해본다 
2. 커밋도 `SRP`를 지키도록 노력한다
3. `반드시` 테스트 코드를 작성한다. 단 E2E 테스트는 현재 버젼 문제로 인해 현재는 작동되지 않으므로 MOCK 테스트로 작성하도록 한다
4. `Prettier` 설정이 되어 있으므로 활성화해서 코드를 작성하도록 한다

# 참고
- SRP란? - https://brownbears.tistory.com/562
- @cypress/react https://github.com/cypress-io/cypress/tree/master/npm/react#readme
- cypress 가이드 https://docs.cypress.io/guides/overview/why-cypress
