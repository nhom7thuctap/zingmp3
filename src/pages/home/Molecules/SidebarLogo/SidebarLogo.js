import './sidebarLogo.scss';
import { Link } from 'react-router-dom';
function SidebarLogo() {
  return (
    <Link to="/" className="logo">
      <img src="/images/logo-dark.svg" alt="ZingMP3" />
    </Link>
  );
}

export default SidebarLogo;
