import MainItem from '../../../Atoms/MainItem/MainItem';

const listMainItem = [
  {
    img: 'https://images.unsplash.com/photo-1633378362952-dea423530a5c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
    title: 'Những Màn Kết Hợp Gây Nghiện',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    img: 'https://images.unsplash.com/photo-1633549071611-91f58a6c5dde?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
    title: 'Những Màn Kết Hợp Gây Nghiện',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    img: 'https://images.unsplash.com/photo-1633505190652-33f1b81d8a05?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
    title: 'Những Màn Kết Hợp Gây Nghiện',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    img: 'https://images.unsplash.com/photo-1633460163609-da524403efff?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    title: 'Những Màn Kết Hợp Gây Nghiện',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    img: 'https://images.unsplash.com/photo-1633550306397-55382904f350?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
    title: 'Những Màn Kết Hợp Gây Nghiện',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

function createSuggestionList(suggestionList = []) {
  const list = suggestionList.map((item, key) => {
    return <MainItem key={key} item={item} />;
  });
  return list;
}

function ListSuggestion() {
  return (
    <div className="list-suggestion">{createSuggestionList(listMainItem)}</div>
  );
}

export default ListSuggestion;
