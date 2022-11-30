import "./Menu.css";
import { slide as Menu } from 'react-burger-menu';

//Felicia

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Startsida
      </a>
      <a className="menu-item" href="/smaltande-glaciarer">
        Smältande Glaciärer
      </a>
      <a className="menu-item" href="/stigande-havsnivaer">
        Stigande Havsnivåer
      </a>
      <a className="menu-item" href="/co2-utslapp">
        Co2-Utsläpp
      </a>
      <a className="menu-item" href="/global-uppvarming">
        Global Uppvärmning
      </a>
      <a className="menu-item" href="/tips">
        Vad kan jag göra?
      </a>
      <a className="menu-item" href="/fragor">
        Vad kan jag om klimatförändringarna?
      </a>
    </Menu>
  );
};
