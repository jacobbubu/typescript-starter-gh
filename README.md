# --libraryname--

[![Build Status](https://github.com/--username--/--librarynamewithoutscope--/workflows/Build%20and%20Release/badge.svg)](https://github.com/--username--/--librarynamewithoutscope--/actions?query=workflow%3A%22Build+and+Release%22)
[![Coverage Status](https://coveralls.io/repos/github/--username--/--librarynamewithoutscope--/badge.svg)](https://coveralls.io/github/--username--/--librarynamewithoutscope--)
[![npm](https://img.shields.io/npm/v/--libraryname--.svg)](https://www.npmjs.com/package/--libraryname--/)

> A starter project that makes creating a TypeScript module extremely easy.

## Intro.

This tool was modified from [typescript-library-starter](https://github.com/alexjoverm/typescript-library-starter), but I made the following revisions:

  - Use GitHub Actions instead of TravisCI
  - Used to develop Node.JS Module instead of packaging code for browser

## Usage

```bash
git clone https://github.com/jacobbubu/typescript-starter.git YOURFOLDERNAME
cd YOURFOLDERNAME
npm install
```

**Start coding!** `package.json` and entry files are already set up for you, so don't worry about linking to your main file, typings, etc. Just keep those files with the same name.

## Before push

Before pushing the code to GitHub, please make sure that `NPM_TOKEN` is configured in `https://github.com/__your_repo__/settings/secrets`, or you can do this through [`semantic-release-cli`](https://github.com/semantic-release/cli).
