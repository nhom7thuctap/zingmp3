import './mainExplore.scss';
import MainContentSlider from '../../../Molecules/MainContent/MainContentSlider/MainContentSlider';
import MainContentSuggestion from '../../../Molecules/MainContent/MainContentSuggestion/MainContentSuggestion';
import MainContentMusicNew from '../../../Molecules/MainContent/MainContentMusicNew/MainContentMusicNew';
import MainContentXone from '../../../Molecules/MainContent/MainContentXone/MainContentXone';
import MainContentRadio from '../../../Molecules/MainContent/MainContentRadio/MainContentRadio';
import MainContentChart from '../../../Molecules/MainContent/MainContentChart/MainContentChart';
import MainContentFollow from '../../../Molecules/MainContent/MainContentFollow/MainContentFollow';
import MainContentTop100 from '../../../Molecules/MainContent/MainContentTop100/MainContentTop100';
import MainContentEvent from '../../../Molecules/MainContent/MainContentEven/MainContentEvent';
import MainContentRelease from '../../../Molecules/MainContent/MainContentRelease/MainContentRelease';
import MainContentZingChoice from '../../../Molecules/MainContent/MainContentZingChoice/MainContentZingChoice';
import MainFooter from '../../../Molecules/MainFooter/MainFooter';

function MainExplore() {
  return (
    <>
      <MainContentSlider />
      <MainContentSuggestion />
      <MainContentXone />
      <MainContentRadio />
      <MainContentMusicNew />
      <MainContentChart />
      <MainContentFollow />
      <MainContentTop100 />
      <MainContentEvent />
      <MainContentRelease />
      <MainContentZingChoice />
      <MainFooter />
    </>
  );
}

export default MainExplore;
