type Age = number;
//  1. Alias 타입 생성하는 방법
type Player = {
  name: string;
  // 2. 선택적 타입을 선언하는 방법
  age?: Age;
};
const yun: Player = {
  name: "yun",
};
const jin: Player = {
  name: "jin",
  age: 12,
};

// 3. argument 타입 지정하는 방법
// 4. return 타입 지정하는 방법
function playerMaker(name: string): Player {
  return {
    // name = name,
    name,
  };
}

// 5. 화살표 함수로 작성하는 방법
const playerMaker2 = (name: string): Player => ({ name });

const oh = playerMaker("oh");
oh.age = 12;

// 6. readonly로 생성
const names: readonly string[] = ["1", "2"];
// readonly이기때문에 코드 사용 불가
// name.push("3");

// 7. 각자 다른 데이터타입으로 선언
const player: readonly [string, number, boolean] = ["yun", 1, true];
// player[0] = "jin";

// 8. 기타 타입
const a: undefined = undefined;
const b: null = null;

// 9. any : 타입스크립트의 제한사항을 제외하고 싶을 때 사용
const c: any = true;
const d: any[] = [1, 2, 3];
c + d;

// 10. unknown
let e: unknown;
if (typeof e === "number") {
  let result = e + 1;
}
if (typeof e === "string") {
  let result = e.toUpperCase();
}

// 11. void : 아무것도 return하지 않을 때 사용
function hello() {
  console.log("x");
}
const g = hello();
// hello()에는 아래 속성이 없기 때문에 사용 불가능
// g.toUpperCase();

// 12. never : 함수에서 예외가 발생한다해도 절대 return하지 않는 타입
function hello2(): never {
  throw new Error("xxx");
}
function hello3(name: string | number) {
  if (typeof name === "string") {
    name;
  } else if (typeof name === "number") {
    name;
  } else {
    name;
  }
}
