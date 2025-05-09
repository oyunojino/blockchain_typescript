type Add = (a: number, b: number) => number;

function add1(a: number, b: number) {
  return a + b;
}
// # 화살표 함수
const add2 = (a: number, b: number) => a + b;
// # Alias 타입 생성
// 1. 리턴타입 = number
const add3: Add = (a, b) => a + b;
// 2. 리턴타입 = void
// const add4: Add = (a, b) => {
//   a + b;
// };

// # overloading
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config: string | Config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
};

type Add2 = {
  (a: number, b: number): number;
  (a: number, b: number, c?: number): number;
};

const add4: Add2 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

// # 다형성
