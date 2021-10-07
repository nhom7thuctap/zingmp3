import './mainHeader.scss';
import MainHeaderArrow from '../../Atoms/MainHeaderArrow/MainHeaderArrow';
import MainHeaderSearch from '../../Atoms/MainHeaderSearch/MainHeaderSearch';
import MainHeaderOptions from '../../Atoms/MainHeaderOptions/MainHeaderOptions';

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
