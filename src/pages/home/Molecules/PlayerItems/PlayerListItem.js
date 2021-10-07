import PlayerItem from '../../Atoms/PlayerItem/PlayerItem';

const listSongItem = [
  {
    name: 'Khuê Mộc Lang',
    isPlay: false,
    thumbnail: '/images/yeu-la-cuoi.jpg',
    singers: 'Hà Anh Tuấn',
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
      <PlayerItem createSong />
    </>
  );
}

export default PlayerListItem;
