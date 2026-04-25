<template>
  <main class="min-h-screen bg-[#F8F9FA] pt-16 pb-16 text-[#191C22]">
    <section class="mx-auto w-[1280px] px-6 pt-24">
      <div class="text-lg leading-7 text-[#4B5563]">
        <router-link to="/" class="hover:text-[#005CBD]">Home</router-link>
        <span class="mx-2">›</span>
        <router-link :to="{ name: 'SearchResults' }" class="hover:text-[#005CBD]">Greece</router-link>
        <span class="mx-2">›</span>
        <router-link :to="{ name: 'SearchResults' }" class="hover:text-[#005CBD]">Crete Hotels</router-link>
        <span class="mx-2">›</span>
        <span class="font-bold text-[#191C22]">Grand Azure Resort & Spa</span>
      </div>

      <div class="mt-7 flex items-end justify-between">
        <div>
          <div class="flex items-center gap-3">
            <span class="text-[28px] leading-none text-[#F4C430]">★★★★★</span>
            <span class="rounded-[6px] bg-[#2B61C2] px-3 py-1 text-base font-medium text-white">RESORT</span>
          </div>
          <h1 class="mt-5 text-[28px] font-normal leading-9">Grand Azure Resort & Spa, Elounda</h1>
          <p class="mt-3 flex items-center text-lg leading-7 text-[#4B5563]">
            <img :src="destinationIcon" alt="" class="mr-3 h-7 w-7 object-contain" />
            Elounda Bay, Crete, 72053, Greece
            <button class="ml-6 font-bold text-[#005CBD]">Show on map</button>
          </p>
        </div>

        <div class="flex items-center gap-4">
          <button class="flex h-[52px] items-center gap-3 rounded-[10px] border border-[#C2C6D5] bg-white px-6 text-lg text-[#191C22]">
            <img :src="shareIcon" alt="" class="h-6 w-6 object-contain" />
            Share
          </button>
          <button class="flex h-[52px] items-center gap-3 rounded-[10px] border border-[#C2C6D5] bg-white px-6 text-lg text-[#191C22]">
            <img :src="saveIcon" alt="" class="h-6 w-6 object-contain" />
            Save
          </button>
          <button class="h-[58px] rounded-[10px] bg-[#B61B4A] px-9 text-xl font-medium text-white shadow-[0_10px_18px_rgba(182,27,74,0.22)]">Book Now</button>
        </div>
      </div>

      <section class="mt-9 grid h-[500px] grid-cols-[1fr_600px] gap-4">
        <img :src="galleryImages[0]" alt="" class="h-full w-full rounded-[14px] object-cover" />
        <div class="grid grid-cols-2 gap-4">
          <img :src="galleryImages[1]" alt="" class="h-[242px] w-full rounded-[14px] object-cover" />
          <img :src="galleryImages[2]" alt="" class="h-[242px] w-full rounded-[14px] object-cover" />
          <img :src="galleryImages[3]" alt="" class="h-[242px] w-full rounded-[14px] object-cover" />
          <div class="relative h-[242px] overflow-hidden rounded-[14px]">
            <img :src="galleryImages[4]" alt="" class="h-full w-full object-cover" />
            <div class="absolute inset-0 flex items-center justify-center bg-black/35 text-2xl font-medium text-white">+124 photos</div>
          </div>
        </div>
      </section>
    </section>

    <section class="mx-auto mt-16 grid w-[1280px] grid-cols-[1fr_380px] gap-10 px-6">
      <div>
        <h2 class="text-xl font-normal leading-7">Overview</h2>
        <p class="mt-6 max-w-[820px] text-lg leading-8 text-[#4B5563]">
          Experience unparalleled luxury at the Grand Azure Resort & Spa, nestled on the pristine shores of Elounda Bay. This architectural masterpiece blends traditional Cretan charm with ultra-modern design, offering guests breathtaking panoramic views of the Mediterranean. Whether you're seeking a romantic getaway or a rejuvenation retreat, our world-class amenities and personalized service ensure a stay that transcends the ordinary.
        </p>

        <h2 class="mt-16 text-xl font-normal leading-7">Popular Amenities</h2>
        <div class="mt-8 grid max-w-[760px] grid-cols-3 gap-x-20 gap-y-8">
          <AmenityItem v-for="amenity in amenities" :key="amenity.label" :amenity="amenity" />
        </div>
        <button class="mt-10 flex items-center gap-2 text-lg font-bold text-[#005CBD]">
          See all 45 amenities
          <span class="text-2xl leading-none">⌄</span>
        </button>
      </div>

      <aside class="space-y-8">
        <div class="rounded-[16px] bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
          <div class="flex items-start justify-between">
            <div>
              <p class="text-xl">Excellent</p>
              <p class="text-lg text-[#4B5563]">1,248 verified reviews</p>
            </div>
            <div class="flex h-[72px] w-[72px] items-center justify-center rounded-[12px] bg-[#2B61C2] text-3xl font-bold text-white">9.2</div>
          </div>
          <div class="mt-7 space-y-5">
            <RatingBar label="Cleanliness" value="9.5" percent="95%" />
            <RatingBar label="Service" value="9.2" percent="92%" />
            <RatingBar label="Location" value="8.9" percent="89%" />
          </div>
        </div>

        <div class="overflow-hidden rounded-[16px] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
          <img :src="mapImage" alt="" class="h-[194px] w-full object-cover" />
          <div class="p-5">
            <h3 class="text-xl">Near Spinalonga Island</h3>
            <p class="mt-1 text-lg text-[#4B5563]">15 min walk to city center</p>
          </div>
        </div>
      </aside>
    </section>

    <section class="mx-auto mt-20 w-[1280px] px-6">
      <h2 class="text-xl font-normal leading-7">Select Your Room</h2>
      <div class="mt-9 overflow-hidden rounded-[18px] border border-[#E2E8F0] bg-white shadow-[0_4px_12px_rgba(15,23,42,0.05)]">
        <div class="grid h-[70px] grid-cols-[38%_15%_20%_1fr] items-center bg-[#F4F6FC] px-7 text-lg font-bold text-[#424753]">
          <span>Room Type</span>
          <span>Sleeps</span>
          <span>Today's Price</span>
          <span>Options</span>
        </div>
        <RoomRow v-for="(room, index) in roomOptions" :key="room.name" :room="room" :featured="index === 0" />
      </div>
    </section>

    <section class="mx-auto mt-20 w-[1280px] px-6">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-normal leading-7">Guest Reviews</h2>
        <button class="text-lg font-bold text-[#005CBD]">Read all 1,248 reviews</button>
      </div>
      <div class="mt-9 grid grid-cols-3 gap-6">
        <ReviewCard v-for="review in reviews" :key="review.name" :review="review" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { h } from 'vue'
import galleryOne from '../assets/RoomDetail/image-gallery-1.png'
import galleryTwo from '../assets/RoomDetail/image-gallery-2.png'
import galleryThree from '../assets/RoomDetail/image-gallery-3.png'
import galleryFour from '../assets/RoomDetail/image-gallery-4(need overlay).png'
import galleryFive from '../assets/RoomDetail/4people.jpeg'
import destinationIcon from '../assets/RoomDetail/Destination.png'
import shareIcon from '../assets/RoomDetail/share.png'
import saveIcon from '../assets/RoomDetail/save.png'
import mapImage from '../assets/RoomDetail/maps.png'
import poolIcon from '../assets/RoomDetail/pool.png'
import spaIcon from '../assets/RoomDetail/spa.png'
import restaurantIcon from '../assets/RoomDetail/restrarant.png'
import gymIcon from '../assets/RoomDetail/gym.png'
import wifiIcon from '../assets/RoomDetail/wifi.png'
import beachIcon from '../assets/RoomDetail/beach.png'

const galleryImages = [galleryOne, galleryTwo, galleryThree, galleryFour, galleryFive]

const amenities = [
  { label: '3 Outdoor Pools', icon: poolIcon },
  { label: 'Full-service Spa', icon: spaIcon },
  { label: '5 Restaurants', icon: restaurantIcon },
  { label: 'Gym & Fitness', icon: gymIcon },
  { label: 'Free High-speed Wi-Fi', icon: wifiIcon },
  { label: 'Private Beach', icon: beachIcon }
]

const roomOptions = [
  {
    name: 'Presidential Sea Front Suite',
    detail: '85m² • Panoramic Sea View • Infinity Pool Access',
    sleeps: '♙♙♙♙',
    oldPrice: '$1,295',
    price: '$862',
    offer: 'LIMITED TIME OFFER',
    benefits: ['Free Airport Transfer', 'All-Inclusive Premium'],
    urgency: 'Only 1 room left!',
    accent: true
  },
  {
    name: 'Deluxe Garden View Room',
    detail: '32m² • Balcony • Garden View • 1 King Bed',
    sleeps: '♙♙',
    oldPrice: '$345',
    price: '$264',
    benefits: ['Free Cancellation', 'Breakfast Included']
  },
  {
    name: 'Junior Suite with Private Pool',
    detail: '45m² • Private Pool • Sea View • King Bed',
    sleeps: '♙♙☻',
    oldPrice: '$626',
    price: '$445',
    benefits: ['Free Cancellation', 'All-Inclusive'],
    urgency: 'Only 2 rooms left!'
  }
]

const reviews = [
  {
    rating: '★★★★★',
    date: 'May 12, 2024',
    quote: '"An absolute paradise. The views from the Presidential Suite are unmatched. The service was impeccable from start to finish."',
    initials: 'SM',
    name: 'Sophia Martinez',
    country: 'United Kingdom',
    color: 'bg-[#DCE5FF]'
  },
  {
    rating: '★★★★☆',
    date: 'Apr 28, 2024',
    quote: '"Excellent facilities and great breakfast selection. The private beach is beautiful, though the city center is a bit of a walk."',
    initials: 'JW',
    name: 'James Wilson',
    country: 'United States',
    color: 'bg-[#FAD6DC]'
  },
  {
    rating: '★★★★★',
    date: 'Apr 15, 2024',
    quote: '"The spa treatments were heavenly. Truly a five-star experience. We will definitely be coming back next summer."',
    initials: 'AK',
    name: 'Anna Kowalski',
    country: 'Germany',
    color: 'bg-[#F9DDB8]'
  }
]

const AmenityItem = {
  props: { amenity: Object },
  setup(props) {
    return () => h('div', { class: 'flex items-center gap-4 text-lg text-[#191C22]' }, [
      h('img', { src: props.amenity.icon, alt: '', class: 'h-8 w-8 object-contain' }),
      h('span', props.amenity.label)
    ])
  }
}

const RatingBar = {
  props: { label: String, value: String, percent: String },
  setup(props) {
    return () => h('div', [
      h('div', { class: 'mb-2 flex items-center justify-between text-lg' }, [
        h('span', props.label),
        h('span', props.value)
      ]),
      h('div', { class: 'h-2 overflow-hidden rounded-full bg-[#E5E7EF]' }, [
        h('div', { class: 'h-full rounded-full bg-[#2B61C2]', style: { width: props.percent } })
      ])
    ])
  }
}

const RoomRow = {
  props: { room: Object, featured: Boolean },
  setup(props) {
    return () => h('article', {
      class: [
        'grid min-h-[148px] grid-cols-[38%_15%_20%_1fr] items-center border-t border-[#E2E8F0] px-7 py-7',
        props.featured ? 'border-l-4 border-l-[#2B61C2] bg-[#F8FAFF]' : 'bg-white'
      ]
    }, [
      h('div', [
        h('div', { class: 'flex items-center gap-8' }, [
          h('h3', { class: 'max-w-[230px] text-lg leading-6' }, props.room.name),
          props.room.offer && h('span', { class: 'rounded bg-[#B61B4A] px-3 py-1 text-xs font-bold leading-4 text-white' }, props.room.offer)
        ]),
        h('p', { class: 'mt-3 text-lg leading-6 text-[#4B5563]' }, props.room.detail),
        h('button', { class: 'mt-3 text-lg font-bold text-[#005CBD]' }, 'ⓘ Room details')
      ]),
      h('div', { class: 'text-3xl tracking-[0.12em]' }, props.room.sleeps),
      h('div', [
        h('p', { class: 'text-lg text-[#4B5563] line-through' }, props.room.oldPrice),
        h('p', { class: ['text-3xl font-extrabold leading-9', props.room.accent ? 'text-[#B61B4A]' : 'text-[#191C22]'] }, props.room.price),
        h('p', { class: 'text-lg text-[#4B5563]' }, 'Includes taxes & fees')
      ]),
      h('div', { class: 'flex items-center justify-between gap-6' }, [
        h('div', [
          ...props.room.benefits.map(benefit => h('p', { class: 'mb-2 text-lg text-[#43A85B]' }, `✓ ${benefit}`)),
          props.room.urgency && h('p', { class: ['text-lg font-bold', props.room.accent ? 'text-[#A52828]' : 'text-[#B61B4A]'] }, props.room.urgency)
        ]),
        h('button', { class: ['h-[52px] rounded-[10px] px-8 text-xl font-medium text-white', props.room.accent ? 'bg-[#B61B4A]' : 'bg-[#2B61C2]'] }, 'Select')
      ])
    ])
  }
}

const ReviewCard = {
  props: { review: Object },
  setup(props) {
    return () => h('article', { class: 'rounded-[18px] bg-white p-6 shadow-[0_4px_12px_rgba(15,23,42,0.08)]' }, [
      h('div', { class: 'flex items-center justify-between' }, [
        h('span', { class: 'text-2xl text-[#F4C430]' }, props.review.rating),
        h('span', { class: 'text-lg text-[#4B5563]' }, props.review.date)
      ]),
      h('p', { class: 'mt-7 min-h-[96px] text-lg italic leading-8 text-[#191C22]' }, props.review.quote),
      h('div', { class: 'mt-6 flex items-center gap-4' }, [
        h('div', { class: ['flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold', props.review.color] }, props.review.initials),
        h('div', [
          h('p', { class: 'text-lg' }, props.review.name),
          h('p', { class: 'text-sm text-[#4B5563]' }, props.review.country)
        ])
      ])
    ])
  }
}
</script>
