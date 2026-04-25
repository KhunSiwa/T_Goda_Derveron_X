// Mock JSON data for hotels
export default [
  {
    id: 1,
    name: 'Grand Aurora Hotel',
    city: 'Paris',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80&auto=format&fit=crop'
    ],
    location: { city: 'Paris', country: 'France' },
    rating: 4.6,
    price: 320,
    discountedPrice: 256,
    description: 'Elegant hotel in the heart of the city with stunning views and superb service.',
    amenities: ['WiFi', 'Pool', 'Parking', 'Spa'],
    rooms: [
      { type: 'Standard', price: 256, benefits: ['Free cancellation'] },
      { type: 'Deluxe', price: 320, benefits: ['Breakfast included', 'Free cancellation'] }
    ],
    reviews: [
      { id: 1, user: 'Alice', rating: 5, comment: 'Wonderful stay!' },
      { id: 2, user: 'Mark', rating: 4, comment: 'Very comfortable.' }
    ]
  },
  {
    id: 2,
    name: 'Seaside Resort',
    city: 'Barcelona',
    image: 'https://images.unsplash.com/photo-1501117716987-c8e5b10b7f7d?w=1200&q=80&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1501117716987-c8e5b10b7f7d?w=1200&q=80&auto=format&fit=crop'
    ],
    location: { city: 'Barcelona', country: 'Spain' },
    rating: 4.2,
    price: 220,
    discountedPrice: 176,
    description: 'Oceanfront resort with pools and direct beach access.',
    amenities: ['WiFi', 'Pool', 'Beach'],
    rooms: [
      { type: 'Sea View', price: 176, benefits: ['Free cancellation'] }
    ],
    reviews: [
      { id: 3, user: 'Sophia', rating: 4, comment: 'Great location.' }
    ]
  },
  {
    id: 3,
    name: 'City Central Inn',
    city: 'London',
    image: 'https://images.unsplash.com/photo-1533779183501-8f3b8a04a0b3?w=1200&q=80&auto=format&fit=crop',
    images: [],
    location: { city: 'London', country: 'UK' },
    rating: 3.9,
    price: 180,
    discountedPrice: 150,
    description: 'Comfortable and affordable hotel located near public transport.',
    amenities: ['WiFi', 'Parking'],
    rooms: [
      { type: 'Standard', price: 150, benefits: ['No prepayment'] }
    ],
    reviews: [
      { id: 4, user: 'Liam', rating: 4, comment: 'Good value.' }
    ]
  }
]
