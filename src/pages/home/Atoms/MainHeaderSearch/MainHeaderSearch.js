import './mainHeaderSearch.scss';

function MainHeaderSearch() {
  return (
    <div className="search-wrapper">
      <i className="fas fa-search"></i>
      <input placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."></input>
    </div>
  );
}

export default MainHeaderSearch;
