import { atom, useRecoilState } from "recoil";

const testState = atom({
  key: "testState",
  default: "Hello, Recoil!",
});

export default function TestComponent() {
  const [value, setValue] = useRecoilState(testState);

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue("Updated Value!")}>
        Update Value
      </button>
    </div>
  );
}
