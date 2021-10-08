import PlayerItem from '../../Atoms/PlayerItem/PlayerItem';

const song = {
  name: 'Đừng làm anh đau',
  isPlay: true,
  thumbnail:
    'https://images.unsplash.com/photo-1633448696576-cf44a431a269?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
  singer: 'Thương Võ',
};

function currentSong() {
  return <PlayerItem song={song} />;
}
export default currentSong;
