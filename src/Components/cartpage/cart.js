
import styles from '../Mainpage/mainpage.module.css'
import Header from '../Layout/header';
import Footer from '../Layout/Footer'



export default function Cart({cartItems =[], totalCartCount = 0}){
    return(
        <div className={styles.cartContainer}>
             <Header/>
             <h1 className={styles.shoppingCartHeader}>Your shopping cart</h1>
             <div className={styles.cardSection}>
                {cartItems.length == 0 ?(
                    <p className={styles.emptyCart}>Nothing to be found here..</p>
                ) :(
                    <div className={styles.cards}>
                        {cartItems.map((items)=>(
                            <div className={styles.card} key={items.id}>
                                <img 
                                    src={items.images.find(img => !img.includes('placehold.co')) || 'https://via.placeholder.com/150x150.png?text=No+Image'} 
                                    alt={items.title} 
                                    className={styles.productsImages}
                                />
                                <div className={styles.itemDetails}>
                                    <h3 className={styles.productTitle}>{items.title}</h3>
                                    <p className={styles.productPrice}>Price: ${items.price.toFixed(2)}</p>
                                    <p className={styles.itemQuantity}>Quantity: {items.quantity}</p>
                                    <p className={styles.itemSubtotal}>Subtotal: ${(items.price * items.quantity).toFixed(2)}</p>
                                    {/* TODO: Add a button to remove or decrease quantity here */}
                                </div>


                            </div>
                        ))}

                    </div>
                )}
                


             </div>
             <Footer/>
        </div>
       
    )


}