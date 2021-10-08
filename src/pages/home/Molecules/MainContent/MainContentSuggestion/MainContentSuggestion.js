import './mainContentSuggestion.scss';
import ListSuggestion from './ListSuggestion';

function MainContentSuggestion() {
  return (
    <div className="main-suggestion-wrapper">
      <h3>Nhạc Hay Nghe Ngay</h3>
      <div className="main-suggestion">
        <ListSuggestion />
      </div>
    </div>
  );
}

export default MainContentSuggestion;
