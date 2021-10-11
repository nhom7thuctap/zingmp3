import './Main.scss';
import MainHeader from '../../Molecules/MainHeader/MainHeader';
import MainContentSlider from '../../Molecules/MainContent/MainContentSlider/MainContentSlider';
import MainContentSuggestion from '../../Molecules/MainContent/MainContentSuggestion/MainContentSuggestion';
import MainContentXone from '../../Molecules/MainContent/MainContentXone/MainContentXone';

function Main() {
  return (
    <div className="main">
      <MainHeader />
      <MainContentSlider />
      <MainContentSuggestion />
      <MainContentXone />
    </div>
  );
}

export default Main;
