import NavIcon from '../NavIcon'

import '../../styles/Sidebar.scss'

import icon from '../../assets/icon.png'
import icon2 from '../../assets/icon1.png'
import icon3 from '../../assets/icon2.png'
import icon4 from '../../assets/icon3.png'

function Sidebar() {
  const iconList = [icon, icon2, icon3, icon4]
  return (
    <aside className="sidebar">
      <NavIcon iconList={iconList} />
      <div className="copyright">Copyright SportSee 2025</div>
    </aside>
  )
}

export default Sidebar
