
import styles from './mainpage.module.css';
import { faBagShopping, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import smallIcon from '../images/smalliconimg-1.jpg'
import iconOne from '../images/iconOne.jpg';
import iconTwo from '../images/iconTwo.jpg';
import iconThree from '../images/iconThree.jpg';
import iconFour from '../images/iconFour.jpg';
import guy from '../images/Guy.jpg'
import ladyWhite from '../images/ladyWhite.jpg'
import ladyGrey from '../images/ladyGrey.jpg'
import ladyPurple from '../images/ladyPurple.jpg'
import blackLady from '../images/blackLady.jpg'
import smallIconOne from '../images/smallIconFour.jpg';
import smallIconTwo from '../images/smallIconThree.jpg';
import smallIconThree from '../images/smallIconTwo.jpg';
import smallIconFour from '../images/smallIconOne.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../Layout/Footer'
import Header from '../Layout/header'
export default function Mainpage({ cartItems, handleAddToCart, totalCartCount }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const offset = 1;
    const limit = 8;
     useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`)
                const data = await response.json();
                setProducts(data);
            }
            catch (err) {
                setError(err);
            }

        }
        fetchData();

    }, [offset, limit])

    return (
        <div className={styles.mainContainer}>
            <Header cartCount={totalCartCount} />

            <div className={styles.middleContainer}>
                <div className={styles.contentContainer}>
                    <div className={styles.textContent}>
                        <h1>shop VINTAGE</h1>
                        <h1>shop SUSTAINABLE</h1>
                        <p className={styles.middleParagraph}>While vintage clothing offers a unique experience on its own, shopping vintage means that apparel can be loved again, making it better for the environment</p>
                        <button className={styles.shopNow}>Shop Now <FontAwesomeIcon icon={faArrowRight} /></button>
                        <div className={styles.rectangles}>
                            <div className={styles.rectangle}>
                                <img src={smallIcon} className={styles.smallIcon}></img>
                                <div className={styles.rectangleText}>
                                    <p>I love my dress!</p>
                                    <p className={styles.catherine}>Catherine</p>
                                </div>
                            </div>
                            <div className={styles.rectangleTwo}>
                                <img src={iconOne} className={styles.smallIcon}></img>
                                <img src={iconTwo} className={styles.smallIcon}></img>
                                <img src={iconThree} className={styles.smallIcon}></img>
                                <img src={iconFour} className={styles.smallIcon}></img>
                                <div className={styles.arrow}><FontAwesomeIcon icon={faArrowRight} /></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={guy} className={styles.guyImg}></img>
                        <img src={ladyWhite} className={styles.ladyWhiteImg}></img>
                        <img src={ladyGrey} className={styles.ladyGreyImg}></img>
                        <img src={ladyPurple} className={styles.ladyPurple}></img>
                    </div>

                </div>
            </div>
            <div className="wave-container">
                <svg
                    viewBox="0 0 1000 200"
                    preserveAspectRatio="none"
                    className="wave-svg"
                >
                    <path
                        d="M0,20 C500,200 500,200 1500,100 L1440,240 C800,400 500,300 0,256 Z"
                        fill="#4f517d"
                    />
                </svg>
            </div>
            <div className={styles.clothesSection}>
                <div className={styles.clothesNav}>
                    <h2 className={styles.newArrivals}>New Arrivals</h2>
                    <div className={styles.clotheButtons}>
                        <button className={styles.clothing}>Clothing</button>
                        <button className={styles.accessories}>Accessories</button>
                        <button className={styles.viewAll}>View All</button>
                    </div>
                </div>
                <div className={styles.line}>
                </div>
                <div className={styles.cards}>

                    {products
                        .filter(
                            (product) => product.images.find((image) => !image.includes('placehold.co'))
                        )
                        .map((product) => (
                            <div key={product.id} className={styles.card}>
                                <img src={product.images.find((image) => !image.includes('placehold.co')) ||
                                    'https://via.placeholder.com/600x400.png?text=No+Image+Available'} className={styles.productsImages} />
                                <h3 className={styles.productTitle}>{product.title}</h3>
                                <div className={styles.addCartSection}>
                                    <p className={styles.productPrice}>${product.price}</p>
                                    <button className={styles.cartShoppingButton} onClick={() => handleAddToCart(product)}><span>+</span><FontAwesomeIcon icon={faBagShopping} className={styles.cartShopping} /></button>
                                </div>
                            </div>

                        ))}
                </div>
            </div>
            <div className={styles.lastContainer}>
                <div className={styles.firstSection}>
                    <div className={styles.lastImageContainer}>
                        <img src={blackLady} />
                    </div>
                    <div className={styles.lastTextContainer}>
                        <div className={styles.textContainer}>
                            <h2 className={styles.noma}>Noma xxxxx</h2>
                            <h2 className={styles.vintageClothing}>Vintage Clothing</h2>
                            <h2 className={styles.collectorEnthusiast}>Collector & Enthusiast</h2>
                            <p className={styles.lorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dui faucibus, porttitor dui a, tempor sapien. Vivamus dapibus metus eu odio elementum luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dui faucibus, porttitor dui a, tempor sapien. Vivamus dapibus metus eu odio elementum luctus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dui faucibus, porttitor dui a, tempor sapien. Vivamus dapibus metus eu odio elementum luctus.</p>

                        </div>
                        <button className={styles.learnMoreLast}>Learn More <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </div>
                <div className={styles.secondSection}>
                    <h1 className={styles.testimonials}>Testimonials</h1>
                    <div className={styles.testimonialsCards}>
                        <div className={styles.testimonialsCardOne}>
                            <div className={styles.iconSection}>
                                <img src={smallIconOne} />
                                <span>Taryn</span>

                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt tincidunt lorem, id porttitor risus maximus nec.</p>
                        </div>
                        <div className={styles.testimonialsCardTwo}>
                            <div className={styles.iconSection}>
                                <img src={smallIconTwo} />
                                <span>Taryn</span>

                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt tincidunt lorem, id porttitor risus maximus nec.</p>
                        </div>
                        <div className={styles.testimonialsCardThree}>
                            <div className={styles.iconSection}>
                                <img src={smallIconThree} />
                                <span>Taryn</span>

                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt tincidunt lorem, id porttitor risus maximus nec.</p>
                        </div>
                        <div className={styles.testimonialsCardFour}>
                            <div className={styles.iconSection}>
                                <img src={smallIconFour} />
                                <span>Taryn</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt tincidunt lorem, id porttitor risus maximus nec.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
//Make an asset folder and put images there aka in a folder
//filter it in the use effects
//footer and header should be in a different component