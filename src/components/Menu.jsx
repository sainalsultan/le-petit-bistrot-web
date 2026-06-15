import LeafIcon from './LeafIcon';
import { MENU_DATA } from '../constants/restaurant';

function MenuItem({ name, desc, price, vegetarian }) {
  return (
    <div className="menu-item">
      <div>
        <strong>{name}</strong>
        <p>{desc}</p>
        {vegetarian && <span className="diet-tag">V</span>}
      </div>
      <span className="price">{price}</span>
    </div>
  );
}

function MenuCategory({ icon, title, items, isLeaf }) {
  return (
    <div className="menu-category">
      <div className="menu-category-header">
        <span className="menu-cat-icon">
          {isLeaf ? <LeafIcon size={24} /> : icon}
        </span>
        <h3>{title}</h3>
      </div>
      <div className="menu-items">
        {items.map((item) => (
          <MenuItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}

export default function Menu({ onReserve }) {
  const { starters, mains, desserts, setMenus } = MENU_DATA;

  return (
    <section className="section section-dark" id="menu">
      <div className="container">
        <div className="section-label center">Our Menu</div>
        <h2 className="center">Menu Highlights</h2>
        <p className="section-sub center">
          A taste of what's waiting for you. Our full menu is available in the restaurant.
        </p>

        <div className="menu-grid">
          <MenuCategory icon={null} title="Starters" items={starters} isLeaf />
          <MenuCategory icon="🐟" title="Mains" items={mains} />
          <MenuCategory icon="🍮" title="Desserts" items={desserts} />

          {/* Set Menus */}
          <div className="menu-category menu-set">
            <div className="menu-category-header">
              <span className="menu-cat-icon">✨</span>
              <h3>Set Menus</h3>
            </div>
            <div className="set-menu-cards">
              <div className="set-card">
                <strong>Lunch Menu</strong>
                <div className="set-options">
                  {setMenus.lunch.courses.map(({ label, price }) => (
                    <div key={label}><span>{label}</span><span className="price">{price}</span></div>
                  ))}
                </div>
                <p>{setMenus.lunch.note}</p>
              </div>
              <div className="set-card set-card-featured">
                <div className="set-card-tag">Popular</div>
                <strong>Dinner Tasting Menu</strong>
                <div className="set-options">
                  {setMenus.dinner.courses.map(({ label, price }) => (
                    <div key={label}><span>{label}</span><span className="price">{price}</span></div>
                  ))}
                </div>
                <p>{setMenus.dinner.note}</p>
              </div>
            </div>
            <p className="menu-diet-note">
              <span className="diet-tag">V</span> Vegetarian &nbsp;·&nbsp;
              Gluten-free available on request — just ask your server
            </p>
          </div>
        </div>

        <div className="menu-cta">
          <button className="btn-primary" onClick={onReserve}>Reserve Your Table</button>
        </div>
      </div>
    </section>
  );
}
