'use client';
import { useState, useRef, useEffect } from 'react';
import styles from '../styles/menu.module.css';
import { cloudinaryImages } from '../utils/cloudinaryImages';

const menuCategories = [
  {
    category: 'Pastries',
    items: [
      { name: 'Plain Croissant', description: 'Buttery and flaky French pastry', price: '100.00', image: cloudinaryImages['PlainCroissant.jpg'] },
      { name: 'Almond Croissant', description: 'Croissant filled and topped with almond paste and sliced almonds', price: '130.00', image: cloudinaryImages['AlmondCroissant.jpg'] },
      { name: 'Swiss Bun', description: 'Soft pastry filled with chocolate and custard cream', price: '120.00', image: cloudinaryImages['SwissBun.jpg'] },
      { name: 'Cheese Croissant', description: 'Croissant filled with rich melted cheese', price: '130.00', image: cloudinaryImages['CheeseCroissant.jpg'] },
      { name: 'Turkey & Cheese Croissant', description: 'Croissant filled with turkey slices and melted cheese', price: '130.00', image: cloudinaryImages['TurkeyCheeseCroissant.jpg'] },
    ]
  },
  {
    category: 'Cold Drinks',
    items: [
      { name: 'Espresso Freddo', description: 'Chilled version of espresso, served over ice for a refreshing coffee experience', price: '100.00', image: cloudinaryImages['EspressoFreddo.jpg'] },
      { name: 'Iced Americano', description: 'Bold shot of espresso mixed with cold water and ice', price: '100.00', image: cloudinaryImages['IcedAmericano.jpg']},
      { name: 'Iced Latte', description: 'Cold milk blended with espresso, served over ice for a smooth, chilled latte', price: '120.00', image: cloudinaryImages['IcedLatte.jpg'] },
      { name: 'Iced Spanish Latte', description: 'Sweet and creamy latte with condensed milk and espresso, served cold over ice', price: '140.00', image: cloudinaryImages['IcedSpanishLatte.jpg'] },
      { name: 'Iced Lotus Latte', description: 'Coffee drink made with espresso, lotus, milk and ice', price: '140.00', image: cloudinaryImages['IcedLotusLatte.jpg'] },
      { name: 'Iced Pistachio Latte', description: 'Creamy iced latte with a hint of pistachio flavor', price: '140.00', image: cloudinaryImages['IcedPistachioLatte.jpg'] },
      { name: 'Iced Mocha', description: 'Chilled blend of espresso, milk, and chocolate syrup, served over ice', price: '140.00', image: cloudinaryImages['IcedMocha.jpg'] },
      { name: 'Frappe', description: 'Blended drink, espresso, milk, sugar, whipped cream and ice', price: '140.00', image: cloudinaryImages['Frappe.jpg'] },
      { name: 'Smoothie', description: 'Blended fruit drink', price: '130.00', image: cloudinaryImages['Smoothie.jpg'] },
      { name: 'Iced Tea', description: 'Freshly brewed tea, served cold with ice', price: '120.00', image: cloudinaryImages['IcedTea.jpg'] },
      { name: 'Iced Filter Coffee', description: 'Price varies by selection', price: 'Varies', image: cloudinaryImages['IcedFilterCoffee.jpg'] },
      { name: 'Berry Mix', description: 'Smoothie made from a blend of fresh berries for a tart and sweet flavor', price: '130.00', image: cloudinaryImages['BerryMix.jpg'] },
      { name: 'Iced Matcha', description: 'Cold matcha green tea blended with milk and ice for a refreshing drink', price: '200.00', image: cloudinaryImages['IcedMatcha2.jpg'] },
      { name: 'Hibiscus', description: 'Chilled drink from hibiscus flowers', price: '120.00', image: cloudinaryImages['Hibiscus.jpg'] },
      { name: 'Mojito', description: 'Classic refreshing drink with mint, lime and soda water', price: '140.00', image: cloudinaryImages['Mojito.jpg'] },
    ]
  },
  {
    category: 'Hot Drinks',
    items: [
      { name: 'Espresso', description: 'Small and concentrated shot of strong coffee', price: '100.00', image: cloudinaryImages['Espresso.jpg'] },
      { name: 'Americano', description: 'Shot of espresso diluted with hot water, giving a rich but smooth flavor', price: '100.00', image: cloudinaryImages['Americano.jpg'] },
      { name: 'Macchiato', description: 'Espresso topped with a small amount of foamed milk', price: '85.00', image: cloudinaryImages['Macchiato.jpg'] },
      { name: 'Cortado', description: 'Espresso cut with a small amount of warm milk to reduce acidity', price: '95.00', image: cloudinaryImages['Cortado.jpg'] },
      { name: 'Piccolo', description: 'Strong coffee drink with a small amount of milk', price: '95.00', image: cloudinaryImages['Piccolo.jpg'] },
      { name: 'Flat White', description: 'Smooth and velvety coffee with microfoam milk over espresso', price: '100.00', image: cloudinaryImages['FlatWhite.jpg'] },
      { name: 'Latte', description: 'Coffee drink made from espresso and steamed milk', price: '110.00', image: cloudinaryImages['Latte.jpg'] },
      { name: 'Cappuccino', description: 'Foamy coffee made from equal parts espresso, steamed milk and milk foam', price: '120.00', image: cloudinaryImages['Cappuccino.jpg'] },
      { name: 'Dark/White Mocha', description: 'Chocolate-flavored coffee drink with espresso, steamed milk and chocolate syrup', price: 'Varies', image: cloudinaryImages['DarkWhiteMocha.jpg'] },
      { name: 'Hot Chocolate', description: 'Rich creamy drink made from steamed milk and chocolate', price: '120.00', image: cloudinaryImages['HotChocolate.jpg'] },
      { name: 'Spanish Latte', description: 'Sweetened latte made with condensed milk', price: '140.00', image: cloudinaryImages['SpanishLatte.jpg'] },
      { name: 'Pistachio Latte', description: 'Creamy latte with a hint of pistachio flavor', price: '140.00', image: cloudinaryImages['PistachioLatte.jpg'] },
      { name: 'Lotus Latte', description: 'Latte with distinctive caramel flavor and spice from Lotus cookies', price: '130.00', image: cloudinaryImages['LotusLatte.jpg'] },
      { name: 'Matcha Latte', description: 'Creamy latte made from matcha green tea and steamed milk', price: '190.00', image: cloudinaryImages['MatchaLatte.jpg'] },
      { name: 'Filter Coffee', description: 'Price varies by selection', price: 'Varies', image: cloudinaryImages['FilterCoffee.jpg'] },
      { name: 'Herbal Infusion', description: 'Soothing and aromatic drink made from steeped herbs, served hot', price: '80.00', image: cloudinaryImages['HerbalInfusion.jpg'] },
    ]
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Honey Cake', description: 'Sweet honey-flavored cake', price: '100.00', image: cloudinaryImages['HoneyCake.jpg'] },
      { name: 'Chocolate Cake', description: 'Rich chocolate cake', price: '120.00', image: cloudinaryImages['ChocolateCake.jpg'] },
      { name: 'Tiramisu', description: 'Classic Italian dessert', price: '120.00', image: cloudinaryImages['Tiramisu.jpg'] },
      { name: 'Cookies', description: 'Fresh baked cookies with a chewy and soft texture', price: '110.00', image: cloudinaryImages['Cookies.jpg'] },
      { name: 'Dubai Chocolate', description: 'Premium chocolate dessert', price: '130.00', image: cloudinaryImages['DubaiChocolate.jpg'] },
      { name: 'San Sebastian', description: 'Basque cheesecake', price: '150.00', image: cloudinaryImages['SanSebastian.jpg'] },
    ]
  }
];

export default function MenuSection() {
  const [showAll, setShowAll] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showAll && contentRef.current) {
      contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px';
    }
  }, [showAll]);

  const handleToggle = () => {
    if (showAll) {
      setIsAnimating(true);
      
      if (contentRef.current) {
        contentRef.current.style.maxHeight = '0px';
      }
      
      setShowAll(false);
      
      setTimeout(() => {
        if (sectionRef.current) {
          const headerOffset = -100;
          const elementPosition = sectionRef.current.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        setIsAnimating(false);
      }, 700);
    } else {
      setShowAll(true);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };
  
  const initialItems = [
    ...menuCategories[0].items.slice(0, 3),
    ...menuCategories[1].items.slice(0, 4),
    ...menuCategories[2].items.slice(0, 3),
  ];

  return (
    <section ref={sectionRef} className={styles.menu} id="menu-section">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleGold}>Our</span>{' '}
            <span className={styles.titleBlack}>Menu</span>
          </h2>
          <img src={cloudinaryImages['separator-accent.svg']} alt="separator" className={styles.separator} />
        </div>

        <div className={styles.columns}>
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

        <div 
          ref={contentRef}
          className={`${styles.expandableContent} ${showAll ? styles.expanded : ''}`}
        >
          <div className={styles.fullMenu}>
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
        </div>

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
