import MainHeaderArrow from '../../Atoms/MainHeaderArrow/MainHeaderArrow';
import MainHeaderOptions from '../../Atoms/MainHeaderOptions/MainHeaderOptions';
import MainHeaderSearch from '../../Atoms/MainHeaderSearch/MainHeaderSearch';
import './mainHeader.scss';

function MainHeader() {
  return (
    <div className="main-header-wrapper">
      <MainHeaderArrow />
      <MainHeaderSearch />
      <MainHeaderOptions />
    </div>
  );
}

export default MainHeader;
