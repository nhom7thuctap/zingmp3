import './mainExplore.scss';
import MainContentSlider from '../../../Molecules/MainContent/MainContentSlider/MainContentSlider';
import MainContentSuggestion from '../../../Molecules/MainContent/MainContentSuggestion/MainContentSuggestion';
import MainContentXone from '../../../Molecules/MainContent/MainContentXone/MainContentXone';
import MainContentRadio from '../../../Molecules/MainContent/MainContentRadio/MainContentRadio';
import MainContentChart from '../../../Molecules/MainContent/MainContentChart/MainContentChart';

function MainExplore() {
  return (
    <>
      <MainContentSlider />
      <MainContentSuggestion />
      <MainContentXone />
      <MainContentRadio />
      <MainContentChart />
    </>
  );
}

export default MainExplore;
