import OtomadCrossword from "./OtomadCrossword";

function App() {
  return (
    <div>
      <h3>？合作　参加者クロスワード</h3>
      <ul>
        <li>色が付いている言葉は合作の参加者です</li>
        <li>同じ言葉が複数回答えになる場合があります</li>
      </ul>
      <OtomadCrossword />
    </div>
  );
}

export default App;
