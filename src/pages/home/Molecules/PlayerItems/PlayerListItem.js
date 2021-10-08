import PlayerItem from '../../Atoms/PlayerItem/PlayerItem';

const listSongItem = [
  {
    name: 'Chưa bao giờ em quên',
    isPlay: false,
    thumbnail:
      'https://images.unsplash.com/photo-1633466000073-fe4628b42c2f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    singer: 'Huong Ly',
  },
  {
    name: 'Mây Hạ',
    isPlay: false,
    thumbnail:
      'https://images.unsplash.com/photo-1633347970492-53852b55d859?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    singer: 'Starry Night',
  },
  {
    name: 'Yêu Mà Chưa Dám nói',
    isPlay: false,
    thumbnail:
      'https://images.unsplash.com/photo-1633351344449-bea11eb58e54?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    singer: 'Thanh Hưng',
  },
];
function createSong(songList = []) {
  const song = songList.map((song, key) => {
    return <PlayerItem key={key} song={song} />;
  });
  return song;
}
function PlayerListItem() {
  return (
    <>
      {createSong(listSongItem)}
      {createSong(listSongItem)}
      {createSong(listSongItem)}
    </>
  );
}

export default PlayerListItem;
