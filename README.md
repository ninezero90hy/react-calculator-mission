# Mission to make a calculator with React

[![Netlify Status](https://api.netlify.com/api/v1/badges/56ab91af-0963-4e1f-ba56-cf0699a1bd1b/deploy-status)](https://app.netlify.com/sites/leafy-sable-757250/deploys)

![image](https://user-images.githubusercontent.com/41019113/175235647-83e19cb4-d736-45f7-acf6-c8a3e9775399.png)

# Requirements
- [ ] The initial value of the calculation result is 0
- [ ] Addition is possible for two numbers
- [ ] subtraction is possible for two numbers
- [ ] multiplication is possible for two numbers
- [ ] Division of two numbers is possible
- [ ] Press the AC button to reset to 0
- [ ] When expressing calculation results, the decimal point is rounded down if it exceeds 5 decimal places.
- [ ] You can only enter up to 9 digits at a time.
- [ ] Comma processing when showing calculation results

# Test requirements
Everything in the requirements must pass the test


# How to run the test
![image](https://user-images.githubusercontent.com/41019113/175460808-97c253b6-f97a-4db0-9914-86ff31c4fbbb.png)

Excute test script in package.json

![image](https://user-images.githubusercontent.com/41019113/175460919-e79418b7-4db3-4b16-bd6b-bb68c75d00f7.png)

Select component testing

![image](https://user-images.githubusercontent.com/41019113/175460997-1b01a9a6-1fa7-4abb-90c1-a8a177f2d8cf.png)

In Chrome, select start component testing. Choosing a different browser is optional

![image](https://user-images.githubusercontent.com/41019113/175461094-bfe50118-c8a1-4e2a-ab87-f76f65acc623.png)

And then select the test you wrote and run it

![image](https://user-images.githubusercontent.com/41019113/175473040-87efd558-9c56-4333-9345-d64a46202bff.png)

`Example`

# PR request
Fork the repository and edit it in your repository

# ⚠
1. Consider whether a component has only one ‘role’ and ‘responsibility’, or whether a function does only one thing
2. Commits also try to keep `SRP`
3. `Must` write test code. However, the E2E test does not work currently due to a problem with the current version, so write it as a MOCK test.
4. `Prettier` is set, so enable it and write the code.

# reference
- What is SRP? - https://brownbears.tistory.com/562
- @cypress/react https://github.com/cypress-io/cypress/tree/master/npm/react#readme
- Cypress guide https://docs.cypress.io/guides/overview/why-cypress
