import './Main.scss';
import MainHeader from '../../Molecules/MainHeader/MainHeader';
import MainContentSlider from '../../Molecules/MainContent/MainContentSlider/MainContentSlider';
import MainContentSuggestion from '../../Molecules/MainContent/MainContentSuggestion/MainContentSuggestion';
import MainContentXone from '../../Molecules/MainContent/MainContentXone/MainContentXone';
import MainContentRadio from '../../Molecules/MainContent/MainContentRadio/MainContentRadio';
import MainContentChart from '../../Molecules/MainContent/MainContentChart/MainContentChart';

function Main() {
  return (
    <div className="main">
      <MainHeader />
      <MainContentSlider />
      <MainContentSuggestion />
      <MainContentXone />
      <MainContentRadio />
      <MainContentChart />
    </div>
  );
}

export default Main;
