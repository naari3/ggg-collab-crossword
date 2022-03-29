import {
  CrosswordGrid,
  CrosswordProvider,
  CrosswordProviderImperative,
  DirectionClues,
} from "@naari3/react-crossword-ja-otomad";
import styled from "styled-components";
import { data } from "./data";

const CrosswordWrapper = styled.div.attrs((/* props */) => ({
  className: "otomad-crossword",
}))`
  width: 100%;
  display: flex;
  height: 85vh;

  @media (max-width: ${(props) => props.theme.columnBreakpoint}) {
    flex-direction: column;
  }
`;

const GridWrapper = styled.div.attrs((/* props */) => ({
  className: "otomad-grid",
}))`
  display: flex;
  flex: 2;
`;

const CluesWrapper = styled.div.attrs((/* props */) => ({
  className: "otomad-clues",
}))`
  margin: 0 1em;
  flex: 2;
  overflow-y: scroll;

  @media (max-width: ${(props) => props.theme.columnBreakpoint}) {
    margin: 0;
    margin-top: 1em;
  }

  .direction {
    margin-bottom: 2em;

    .header {
      margin-top: 0;
      margin-bottom: 0.5em;
    }

    .clue {
      word-break: break-all;
    }

    div {
      margin-top: 0.5em;
    }
  }
`;

function OtomadCrossword() {
  // const myRef = createRef<CrosswordProviderImperative>();

  // useEffect(() => {
  //   setTimeout(() => {
  //     myRef.current?.fillAllAnswers();
  //   }, 100);
  // }, []);

  return (
    <CrosswordProvider data={data}>
      <CrosswordWrapper>
        <GridWrapper>
          <CrosswordGrid />
        </GridWrapper>
        <CluesWrapper>
          <DirectionClues direction="across" label="ヨコのカギ" />
          <DirectionClues direction="down" label="タテのカギ" />
        </CluesWrapper>
      </CrosswordWrapper>
    </CrosswordProvider>
  );
}

export default OtomadCrossword;
