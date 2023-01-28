# String Arithmetic

### Laba.Solvd Nodejs Course

### Week 1 Homework

## About

---

### Assignment

Realise long arithmetic on strings without usage bigint and libraries for arithmetic
It should work as string functions
(you can avoid negative numbers, all numbers will be positive and integer)

    String.plus(string) => string
    String.minus(string) => string
    String.divide(string) => string
    String.multiple(string) => string

## Getting Started

---

### Prerequisites

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
   ```sh
   git clone
   ```
2. Go to the project folder

   ```sh
   cd laba.solvd-week1
   ```

3. Install NPM packages
   ```sh
   npm install
   ```

## Usage

---

Homework has 2 solutions and local tests for both of them. To test them all:

```sh
npm t
```

---

#### `prototype.ts` :

- `String.plus(string) => string`
- `String.minus(string) => string`
- `String.divide(string) => string`
- `String.multiple(string) => string`

How to import:

```sh
import "<rootDir>/src/prototype";
```

Test:

```sh
npm run test--prototype
```

---

#### `functions.ts` :

- `plus(string, string) => string`
- `minus(string, string) => string`
- `divide(string, string) => string`
- `multiple(string, string) => string`

How to import:

```sh
import { plus, minus, divide, multiple } from "<rootDir>/src/functions"
```

Test:

```sh
npm run test--functions
```
