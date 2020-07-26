<div align="center">
  <h1>React Native Modern Template</h1>
  
    
  <p>A starter React Native project with many development utilities</p>
  
</div>

<hr />

[![Build Status](https://travis-ci.org/stoica94/react-native-modern-template.svg?branch=master)](https://travis-ci.org/stoica94/react-native-modern-template)
<a href="https://github.com/react-native-community/react-native-template-typescript#readme">
<img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
</a>
<a href="https://github.com/react-native-community/react-native-template-typescript/graphs/commit-activity">
<img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
</a>
<a href="https://github.com/react-native-community/react-native-template-typescript/blob/master/LICENSE">
<img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
</a>

## :star: Features

- [typescript](https://www.typescriptlang.org)
- pre-commit hooks for static checking with [Husky](https://github.com/typicode/husky)
- [@testing-library/react-native](https://www.native-testing-library.com) setup
- Travis CI

## :wrench: Setup

- Use this template
- Replace every occurence of `templateApp` with the name of your app
- Follow normal react native instructions

## :zap: Usage

### Commit Hooks

When you commit changes to your project, husky will run:

- typescript checks
- eslint
- prettier formatting

If any of them fail, the commit will not be made. If you want to bypass the checks, add `--no-verify` as a parameter to `git commit`.

## :rocket: CI/CD

To setup Travis, simply go to the [Travis Website](https://travis-ci.org) and setup your repo to support Travis. That is it 😃  

After you commit to master, or when a PR is opened, Travis will validate the build. This includes:
- typescript checks
- eslint
- prettier formatting
- javascript build using `metro`

## :bug: Testing

This template includes [@testing-library/react-native](https://www.native-testing-library.com), with already made jest setup.
[Here](https://kentcdodds.com/blog/why-i-never-use-shallow-rendering) you can find the motivation for using this library instead of shallow rendering from enzyme.

The template includes two small tests but read [the Docs](https://www.native-testing-library.com/docs/intro) to fully understand how to use.

## Inspiration

A big thank you 🙏 to Kent C. Dodds. This repo is takes many good practices from his examples. To learn more about testing and good development tools, go to [testingjavascript.com](https://testingjavascript.com/) (you won't regret purchasing
it).

This template is based on [RN Typescript Template](https://github.com/react-native-community/react-native-template-typescript)

## :bookmark: License

This project is [MIT](LICENSE) licensed.
