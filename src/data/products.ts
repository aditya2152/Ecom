import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Noise-Cancelling Headphones',
    description: 'Premium wireless headphones with active noise cancellation and 30-hour battery life.',
    price: 299.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Electronics',
    stock: 25,
    rating: 4.8,
    reviews: 1247,
    featured: true,
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specifications: {
      'Battery Life': '30 hours',
      'Connectivity': 'Bluetooth 5.0',
      'Weight': '250g',
      'Warranty': '2 years'
    }
  },
  {
    id: '2',
    name: 'Professional Camera Lens',
    description: '85mm f/1.4 prime lens perfect for portrait photography with stunning bokeh.',
    price: 1299.99,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Photography',
    stock: 12,
    rating: 4.9,
    reviews: 834,
    featured: true,
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specifications: {
      'Focal Length': '85mm',
      'Aperture': 'f/1.4',
      'Mount': 'Canon EF',
      'Weight': '950g'
    }
  },
  {
    id: '3',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracking with GPS, heart rate monitoring, and 7-day battery life.',
    price: 449.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Wearables',
    stock: 40,
    rating: 4.6,
    reviews: 2156,
    featured: true,
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specifications: {
      'Battery Life': '7 days',
      'Water Resistance': '50m',
      'Display': 'AMOLED',
      'Connectivity': 'Bluetooth, WiFi, GPS'
    }
  },
  {
    id: '4',
    name: 'Ergonomic Office Chair',
    description: 'Professional ergonomic chair with lumbar support and adjustable height for maximum comfort.',
    price: 599.99,
    image: 'https://images.pexels.com/photos/586960/pexels-photo-586960.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Furniture',
    stock: 18,
    rating: 4.7,
    reviews: 943,
    featured: false,
    images: [
      'https://images.pexels.com/photos/586960/pexels-photo-586960.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specifications: {
      'Material': 'Mesh and Fabric',
      'Weight Capacity': '150kg',
      'Adjustability': 'Height, Tilt, Arms',
      'Warranty': '5 years'
    }
  },
  {
    id: '5',
    name: 'Premium Coffee Maker',
    description: 'Automatic espresso machine with built-in grinder and milk frother for café-quality coffee.',
    price: 899.99,
    image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Appliances',
    stock: 8,
    rating: 4.5,
    reviews: 567,
    featured: false,
    images: [
      'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specifications: {
      'Capacity': '1.8L Water Tank',
      'Pressure': '15 bar',
      'Features': 'Built-in grinder, Milk frother',
      'Power': '1450W'
    }
  },
  {
    id: '6',
    name: 'Minimalist Desk Lamp',
    description: 'LED desk lamp with adjustable brightness and color temperature, perfect for any workspace.',
    price: 89.99,
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Lighting',
    stock: 35,
    rating: 4.4,
    reviews: 1289,
    featured: false,
    images: [
      'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specifications: {
      'Light Source': 'LED',
      'Power': '12W',
      'Adjustability': 'Brightness and Color Temperature',
      'Control': 'Touch Control'
    }
  }
];

export const categories = [
  'All Products',
  'Electronics',
  'Photography',
  'Wearables',
  'Furniture',
  'Appliances',
  'Lighting'
];