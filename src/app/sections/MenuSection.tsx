'use client';
import { useState, useRef } from 'react';
import styles from '../styles/menu.module.css';

const menuCategories = [
  {
    category: 'Pastries',
    items: [
      { name: 'Plain Croissant', description: 'Buttery and flaky French pastry', price: '100.00', image: '/PlainCroissant.jpg' },
      { name: 'Almond Croissant', description: 'Croissant filled and topped with almond paste and sliced almonds', price: '130.00', image: '/AlmondCroissant.jpg' },
      { name: 'Swiss Bun', description: 'Soft pastry filled with chocolate and custard cream', price: '120.00', image: '/SwissBun.jpg' },
      { name: 'Cheese Croissant', description: 'Croissant filled with rich melted cheese', price: '130.00', image: '/CheeseCroissant.jpg' },
      { name: 'Turkey & Cheese Croissant', description: 'Croissant filled with turkey slices and melted cheese', price: '130.00', image: '/TurkeyCheeseCroissant.jpg' },
    ]
  },
  {
    category: 'Cold Drinks',
    items: [
      { name: 'Espresso Freddo', description: 'Chilled version of espresso, served over ice for a refreshing coffee experience', price: '100.00', image: '/EspressoFreddo.jpg' },
      { name: 'Iced Americano', description: 'Bold shot of espresso mixed with cold water and ice', price: '100.00', image: '/IcedAmericano.jpg'},
      { name: 'Iced Latte', description: 'Cold milk blended with espresso, served over ice for a smooth, chilled latte', price: '120.00', image: '/IcedLatte.jpg' },
      { name: 'Iced Spanish Latte', description: 'Sweet and creamy latte with condensed milk and espresso, served cold over ice', price: '140.00', image: '/IcedSpanishLatte.jpg' },
      { name: 'Iced Lotus Latte', description: 'Coffee drink made with espresso, lotus, milk and ice', price: '140.00', image: '/IcedLotusLatte.jpg' },
      { name: 'Iced Pistachio Latte', description: 'Creamy iced latte with a hint of pistachio flavor', price: '140.00', image: '/IcedPistachioLatte.jpg' },
      { name: 'Iced Mocha', description: 'Chilled blend of espresso, milk, and chocolate syrup, served over ice', price: '140.00', image: '/IcedMocha.jpg' },
      { name: 'Frappe', description: 'Blended drink, espresso, milk, sugar, whipped cream and ice', price: '140.00', image: '/Frappe.jpg' },
      { name: 'Smoothie', description: 'Blended fruit drink', price: '130.00', image: '/Smoothie.jpg' },
      { name: 'Iced Tea', description: 'Freshly brewed tea, served cold with ice', price: '120.00', image: '/IcedTea.jpg' },
      { name: 'Iced Filter Coffee', description: 'Price varies by selection', price: 'Varies', image: '/IcedFilterCoffee.jpg' },
      { name: 'Berry Mix', description: 'Smoothie made from a blend of fresh berries for a tart and sweet flavor', price: '130.00', image: '/BerryMix.jpg' },
      { name: 'Iced Matcha', description: 'Cold matcha green tea blended with milk and ice for a refreshing drink', price: '200.00', image: '/IcedMatcha2.jpg' },
      { name: 'Hibiscus', description: 'Chilled drink from hibiscus flowers', price: '120.00', image: '/Hibiscus.jpg' },
      { name: 'Mojito', description: 'Classic refreshing drink with mint, lime and soda water', price: '140.00', image: '/Mojito.jpg' },
    ]
  },
  {
    category: 'Hot Drinks',
    items: [
      { name: 'Espresso', description: 'Small and concentrated shot of strong coffee', price: '100.00', image: '/Espresso.jpg' },
      { name: 'Americano', description: 'Shot of espresso diluted with hot water, giving a rich but smooth flavor', price: '100.00', image: '/Americano.jpg' },
      { name: 'Macchiato', description: 'Espresso topped with a small amount of foamed milk', price: '85.00', image: '/Macchiato.jpg' },
      { name: 'Cortado', description: 'Espresso cut with a small amount of warm milk to reduce acidity', price: '95.00', image: '/Cortado.jpg' },
      { name: 'Piccolo', description: 'Strong coffee drink with a small amount of milk', price: '95.00', image: '/Piccolo.jpg' },
      { name: 'Flat White', description: 'Smooth and velvety coffee with microfoam milk over espresso', price: '100.00', image: '/FlatWhite.jpg' },
      { name: 'Latte', description: 'Coffee drink made from espresso and steamed milk', price: '110.00', image: '/Latte.jpg' },
      { name: 'Cappuccino', description: 'Foamy coffee made from equal parts espresso, steamed milk and milk foam', price: '120.00', image: '/Cappuccino.jpg' },
      { name: 'Dark/White Mocha', description: 'Chocolate-flavored coffee drink with espresso, steamed milk and chocolate syrup', price: 'Varies', image: '/DarkWhiteMocha.jpg' },
      { name: 'Hot Chocolate', description: 'Rich creamy drink made from steamed milk and chocolate', price: '120.00', image: '/HotChocolate.jpg' },
      { name: 'Spanish Latte', description: 'Sweetened latte made with condensed milk', price: '140.00', image: '/SpanishLatte.jpg' },
      { name: 'Pistachio Latte', description: 'Creamy latte with a hint of pistachio flavor', price: '140.00', image: '/PistachioLatte.jpg' },
      { name: 'Lotus Latte', description: 'Latte with distinctive caramel flavor and spice from Lotus cookies', price: '130.00', image: '/LotusLatte.jpg' },
      { name: 'Matcha Latte', description: 'Creamy latte made from matcha green tea and steamed milk', price: '190.00', image: '/MatchaLatte.jpg' },
      { name: 'Filter Coffee', description: 'Price varies by selection', price: 'Varies', image: '/FilterCoffee.jpg' },
      { name: 'Herbal Infusion', description: 'Soothing and aromatic drink made from steeped herbs, served hot', price: '80.00', image: '/HerbalInfusion.jpg' },
    ]
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Honey Cake', description: 'Sweet honey-flavored cake', price: '100.00', image: '/HoneyCake.jpg' },
      { name: 'Chocolate Cake', description: 'Rich chocolate cake', price: '120.00', image: '/ChocolateCake.jpg' },
      { name: 'Tiramisu', description: 'Classic Italian dessert', price: '120.00', image: '/Tiramisu.jpg' },
      { name: 'Cookies', description: 'Fresh baked cookies with a chewy and soft texture', price: '110.00', image: '/Cookies.jpg' },
      { name: 'Dubai Chocolate', description: 'Premium chocolate dessert', price: '130.00', image: '/DubaiChocolate.jpg' },
      { name: 'San Sebastian', description: 'Basque cheesecake', price: '150.00', image: '/SanSebastian.jpg' },
    ]
  }
];

export default function MenuSection() {
  const [showAll, setShowAll] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleToggle = () => {
    if (showAll) {
      setIsAnimating(true);
      sectionRef.current?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
      setTimeout(() => {
        setShowAll(false);
        setIsAnimating(false);
      }, 500);
    } else {
      setShowAll(true);
    }
  };
  
  const initialItems = [
    ...menuCategories[0].items.slice(0, 3),
    ...menuCategories[1].items.slice(0, 4),
    ...menuCategories[2].items.slice(0, 3),
  ];

  return (
    <section ref={sectionRef} className={styles.menu}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img src="/badge.svg" alt="badge" className={styles.badge} />
          <h2 className={styles.title}>
            <span className={styles.titleGold}>Our</span>{' '}
            <span className={styles.titleBlack}>Menu</span>
          </h2>
          <img src="/separator-accent.svg" alt="separator" className={styles.separator} />
        </div>

        {!showAll ? (
          <div className={`${styles.columns} ${styles.initial}`}>
            <div className={styles.column}>
              {initialItems.slice(0, 5).map((item, index) => (
                <div key={index} className={styles.item}>
                  <img src={item.image} alt={item.name} className={styles.itemImage} />
                  <div className={styles.itemContent}>
                    <div className={styles.itemHeader}>
                      <span className={styles.itemName}>{item.name}</span>
                      <div className={styles.itemDots}></div>
                      <span className={styles.itemPrice}>{item.price}</span>
                    </div>
                    <p className={styles.itemDescription}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.column}>
              {initialItems.slice(5, 10).map((item, index) => (
                <div key={index} className={styles.item}>
                  <img src={item.image} alt={item.name} className={styles.itemImage} />
                  <div className={styles.itemContent}>
                    <div className={styles.itemHeader}>
                      <span className={styles.itemName}>{item.name}</span>
                      <div className={styles.itemDots}></div>
                      <span className={styles.itemPrice}>{item.price}</span>
                    </div>
                    <p className={styles.itemDescription}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={`${styles.fullMenu} ${!isAnimating ? styles.show : ''}`}>
            {menuCategories.map((category, catIndex) => (
              <div key={catIndex} className={styles.categorySection}>
                <h3 className={styles.categoryTitle}>{category.category}</h3>
                <div className={styles.columns}>
                  <div className={styles.column}>
                    {category.items.slice(0, Math.ceil(category.items.length / 2)).map((item, index) => (
                      <div key={index} className={styles.item}>
                        <img src={item.image} alt={item.name} className={styles.itemImage} />
                        <div className={styles.itemContent}>
                          <div className={styles.itemHeader}>
                            <span className={styles.itemName}>{item.name}</span>
                            <div className={styles.itemDots}></div>
                            <span className={styles.itemPrice}>{item.price}</span>
                          </div>
                          <p className={styles.itemDescription}>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.column}>
                    {category.items.slice(Math.ceil(category.items.length / 2)).map((item, index) => (
                      <div key={index} className={styles.item}>
                        <img src={item.image} alt={item.name} className={styles.itemImage} />
                        <div className={styles.itemContent}>
                          <div className={styles.itemHeader}>
                            <span className={styles.itemName}>{item.name}</span>
                            <div className={styles.itemDots}></div>
                            <span className={styles.itemPrice}>{item.price}</span>
                          </div>
                          <p className={styles.itemDescription}>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={styles.buttonContainer}>
          <button 
            className={`${styles.viewButton} ${isAnimating ? styles.animating : ''}`} 
            onClick={handleToggle}
            disabled={isAnimating}
          >
            {showAll ? 'Show Less' : 'View Full Menu'}
          </button>
        </div>
      </div>
    </section>
  );
}
