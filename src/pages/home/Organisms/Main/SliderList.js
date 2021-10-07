import MainContentSlider from '../../Molecules/MainContent/MainContentSlider/MainContentSlider';

const listImg = [
  {
    item: 'https://images.unsplash.com/photo-1633538497312-930a41f435e9?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
  },
  {
    item: 'https://images.unsplash.com/photo-1633536584762-1864401e82d8?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
  },
  {
    item: 'https://images.unsplash.com/photo-1633509271813-370af82d4bac?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
  },
];
function SliderList() {
  return (
    <div>
      <MainContentSlider listImg={listImg} />
    </div>
  );
}

export default SliderList;
