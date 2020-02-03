import MacBook from "../assets/mac.svg" 
import Shoes from "../assets/shoes.jpg" 
import Dettol from "../assets/dettol.jpeg" 
import Moong from "../assets/moong.jpeg" 

const data = [
    {
      key: '1',
      name: 'Shoes',
      image: Shoes,
      category: 'Fashion',
      price: '20$',
    },
    {
      key: '2',
      name: 'Moong dal',
      image: Moong,
      category: 'Grocery',
      price: '1$',
    },
    {
      key: '3',
      name: 'Dettol',
      image: Dettol,
      category: 'Health and Personal Care',
      price: '50$',
    },
    {
      key: '4',
      name: 'MacBook Pro',
      image: MacBook,
      category: 'Electronics',
      price: '2000$',
    },
  ];

export default data;