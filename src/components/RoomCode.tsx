import copyImg from '../assets/images/copy.svg';
import '../styles/roomcode.scss';

type RoomCodeProps = {
  code: string;
};

const RoomCode = (props: RoomCodeProps) => {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }
  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copiar código da sala" />
      </div>
      <span>
        <strong>Sala #</strong>
        {props.code}
      </span>
    </button>
  );
};

export default RoomCode;
