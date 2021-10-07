import './Main.scss';
import MainHeader from '../../Molecules/MainHeader/MainHeader';
import SliderList from './SliderList';
import MainContentSuggestion from '../../Molecules/MainContent/MainContentSuggestion/MainContentSuggestion';
import MainContentXone from '../../Molecules/MainContent/MainContentXone/MainContentXone';

function Main() {
  return (
    <div className="main">
      <MainHeader />
      <SliderList />
      <MainContentSuggestion />
      <MainContentXone />
    </div>
  );
}

export default Main;
