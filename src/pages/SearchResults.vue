<template>
  <main class="min-h-screen bg-[#F8F9FA] pt-16 text-[#191C22]">
    <section class="border-b border-[#E2E8F0] bg-white py-0 shadow-sm 2xl:py-7">
      <div class="mx-auto grid max-w-[1960px] grid-cols-1 gap-12 px-0 2xl:grid-cols-[1fr_326px_274px_282px] 2xl:gap-6 2xl:px-10">
        <div class="flex h-[108px] items-center rounded-l-[28px] border border-[#D6DAE8] bg-white px-3 2xl:h-[92px] 2xl:rounded-[16px] 2xl:bg-[#F1F3FA] 2xl:px-7">
          <img :src="destinationIcon" alt="" class="h-14 w-14 shrink-0 object-contain 2xl:h-8 2xl:w-8" />
          <div class="ml-3 2xl:ml-5">
            <p class="text-[40px] leading-10 text-[#4B5563] 2xl:text-xl 2xl:leading-6">Destination</p>
            <p class="text-[48px] font-bold leading-[1.05] 2xl:text-2xl 2xl:leading-7">{{ destinationLabel }}</p>
          </div>
        </div>
        <div class="flex h-[108px] items-center rounded-l-[28px] border border-[#D6DAE8] bg-white px-3 2xl:h-[92px] 2xl:rounded-[16px] 2xl:bg-[#F1F3FA] 2xl:px-7">
          <img :src="dateIcon" alt="" class="h-14 w-14 shrink-0 object-contain 2xl:h-8 2xl:w-8" />
          <div class="ml-3 2xl:ml-5">
            <p class="text-[40px] leading-10 text-[#4B5563] 2xl:text-xl 2xl:leading-6">Dates</p>
            <p class="text-[48px] font-bold leading-[1.05] 2xl:text-2xl 2xl:leading-7">{{ dateLabel }}</p>
          </div>
        </div>
        <div class="flex h-[108px] items-center rounded-l-[28px] border border-[#D6DAE8] bg-white px-3 2xl:h-[92px] 2xl:rounded-[16px] 2xl:bg-[#F1F3FA] 2xl:px-7">
          <img :src="travelerIcon" alt="" class="h-14 w-14 shrink-0 object-contain 2xl:h-8 2xl:w-8" />
          <div class="ml-3 2xl:ml-5">
            <p class="text-[40px] leading-10 text-[#4B5563] 2xl:text-xl 2xl:leading-6">Travelers</p>
            <p class="text-[48px] font-bold leading-[1.05] 2xl:text-2xl 2xl:leading-7">{{ store.travelers }}</p>
          </div>
        </div>
        <button class="hidden h-[78px] self-center rounded-[16px] bg-[#2B61C2] text-3xl font-medium text-white shadow-[0_16px_28px_rgba(43,97,194,0.24)] 2xl:block">
          Update Search
        </button>
      </div>
    </section>

    <section class="mx-auto grid max-w-[1960px] grid-cols-1 gap-9 px-0 py-48 2xl:grid-cols-[410px_1fr] 2xl:px-10 2xl:py-14">
      <aside>
        <div class="rounded-none bg-transparent px-0 py-8 shadow-none 2xl:rounded-[14px] 2xl:bg-white 2xl:px-7 2xl:shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
          <div class="mb-8 flex items-center gap-3">
            <img :src="filterIcon" alt="" class="h-14 w-14 object-contain 2xl:h-8 2xl:w-8" />
            <h2 class="text-3xl font-medium">Filters</h2>
          </div>

          <FilterGroup title="Price Range">
            <div class="mb-6 flex items-center justify-between text-2xl text-[#4B5563]">
              <span>$0</span>
              <span>$1000+</span>
            </div>
            <div class="h-2 rounded-full bg-[#DFE3ED]"></div>
          </FilterGroup>

          <FilterGroup title="Property Type" :items="['Hotels', 'Resorts', 'Apartments', 'Villas']" />
          <FilterGroup title="Star Rating" :items="['★★★★★', '★★★★☆']" gold />
          <FilterGroup title="Facilities" :items="['Free Wi-Fi', 'Swimming Pool', 'Fitness Center', 'Spa', 'Parking', 'Pet Friendly']" />
          <FilterGroup title="Review Score" :items="['Superb 9+', 'Very Good 8+', 'Good 7+']" />
          <FilterGroup title="Neighborhood" :items="['Patong', 'Karon', 'Kata', 'Kamala']" />
          <FilterGroup title="Bed Type" :items="['Single', 'Double', 'King']" class="mb-0" />
        </div>

        <div class="relative mt-12 h-[250px] overflow-hidden rounded-[14px] bg-[#95D2DE] shadow-[0_10px_24px_rgba(15,23,42,0.10)]">
          <img :src="mapPreview" alt="" class="absolute inset-0 h-full w-full object-cover" />
          <button class="absolute left-1/2 top-1/2 flex h-16 -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-full bg-white px-7 text-2xl font-medium text-[#005CBD] shadow-[0_10px_24px_rgba(15,23,42,0.16)]">
            <MapIcon class="h-7 w-7" />
            View on Map
          </button>
        </div>
      </aside>

      <section class="hidden 2xl:block">
        <div class="mb-8 flex items-center justify-between">
          <h1 class="text-[34px] leading-10">245 properties in Bali</h1>
          <div class="flex items-center gap-8 text-2xl">
            <span class="text-[#4B5563]">Sort by:</span>
            <button class="flex items-center gap-4 text-[28px] text-[#2B61C2]">
              Recommended
              <ChevronDownIcon class="h-7 w-7 text-[#64748B]" />
            </button>
          </div>
        </div>

        <section class="overflow-hidden rounded-[26px] border-[7px] border-[#005CBD] bg-white shadow-[0_18px_35px_rgba(15,23,42,0.08)]">
          <div class="flex h-[82px] items-center justify-between bg-[#F8E9EF] px-9">
            <div class="flex items-center gap-4 text-3xl text-[#B61B4A]">
              <img :src="fireIcon" alt="" class="h-8 w-8" />
              <span>Flash Deals for You</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-xl font-semibold text-[#4B5563]">Ends in:</span>
              <span class="rounded-[8px] bg-[#B61B4A] px-5 py-3 text-xl font-bold tracking-[0.18em] text-white">08 : 45 : 12</span>
            </div>
          </div>

          <article
            v-for="deal in flashDeals"
            :key="deal.name"
            class="grid min-h-[306px] cursor-pointer grid-cols-[410px_1fr_260px] border-t border-[#F1F1F3] transition hover:bg-[#F8F9FA]"
            role="button"
            tabindex="0"
            @click="goToRoomDetail(deal.id)"
            @keydown.enter="goToRoomDetail(deal.id)"
            @keydown.space.prevent="goToRoomDetail(deal.id)"
          >
            <div class="relative overflow-hidden">
              <img :src="deal.image" :alt="deal.name" class="h-full w-full object-cover" />
              <span class="absolute left-7 top-5 rounded-[10px] bg-[#B61B4A] px-5 py-2 text-xl font-bold text-white">{{ deal.discount }}</span>
            </div>
            <div class="flex flex-col justify-center px-8">
              <h2 class="text-3xl leading-10">{{ deal.name }} <span class="text-[22px] text-[#E2B12F]">★★★★★</span></h2>
              <p class="mt-2 flex items-center text-xl text-[#4B5563]">
                <MapPinIcon class="mr-2 h-5 w-5" />
                {{ deal.location }}
              </p>
            </div>
            <div class="flex flex-col items-end justify-center px-8 text-right">
              <p class="text-lg text-[#4B5563] line-through">${{ deal.original }}</p>
              <p class="text-[42px] font-bold leading-[1.05] text-[#B61B4A]">${{ deal.price }}</p>
              <p class="mb-5 text-xl text-[#4B5563]">/night</p>
              <button class="h-12 rounded-[10px] bg-[#B61B4A] px-8 text-xl font-bold text-white" @click.stop="goToRoomDetail(deal.id)">Claim</button>
            </div>
          </article>
        </section>

        <HotelResultCard v-for="hotel in hotels" :key="hotel.name" :hotel="hotel" class="mt-9" />

        <div class="mt-8 flex justify-center gap-3">
          <PaginationButton><ChevronLeftIcon class="h-7 w-7" /></PaginationButton>
          <PaginationButton active>1</PaginationButton>
          <PaginationButton>2</PaginationButton>
          <PaginationButton>3</PaginationButton>
          <span class="flex h-16 w-16 items-center justify-center text-2xl text-[#4B5563]">...</span>
          <PaginationButton>12</PaginationButton>
          <PaginationButton><ChevronRightIcon class="h-7 w-7" /></PaginationButton>
        </div>
      </section>
    </section>
  </main>
</template>

<script setup>
import { computed, h } from 'vue'
import { useRouter } from 'vue-router'
import store from '../store'
import mapPreview from '../assets/SearchResults/View on maps.jpeg'
import destinationIcon from '../assets/SearchResults/Destination.png'
import dateIcon from '../assets/SearchResults/date.png'
import travelerIcon from '../assets/SearchResults/traveler.png'
import filterIcon from '../assets/SearchResults/filter.png'
import fireIcon from '../assets/SearchResults/fire.png'
import resultList1 from '../assets/SearchResults/result-list-1.png'
import resultList2 from '../assets/SearchResults/result-list-2.png'
import resultList3 from '../assets/SearchResults/result-list-3.png'
import resultList4 from '../assets/SearchResults/result-list-4.png'
import resultList5 from '../assets/SearchResults/result-list-5.png'
import resultList6 from '../assets/SearchResults/result-list-6.png'

const router = useRouter()
const destinationLabel = computed(() => store.searchQuery || 'Bali, Indonesia')
const dateLabel = computed(() => `${store.dateRange.from || 'Oct 12'} - ${store.dateRange.to || 'Oct 19, 2024'}`)

function goToRoomDetail(id) {
  router.push({ name: 'RoomDetail', params: { id } })
}

const flashDeals = [
  {
    id: 1,
    name: 'Mandala Sky Luxury Villas',
    location: 'Uluwatu, Bali • Cliff-top view',
    discount: '60% OFF',
    original: '1,200',
    price: '480',
    image: resultList1
  },
  {
    id: 2,
    name: 'Emerald Jungle Retreat',
    location: 'Ubud, Bali • Private Sanctuary',
    discount: '45% OFF',
    original: '450',
    price: '247',
    image: resultList2
  },
  {
    id: 3,
    name: 'Seminyak Shores Club',
    location: 'Seminyak, Bali • Beachfront Bliss',
    discount: '35% OFF',
    original: '680',
    price: '442',
    image: resultList3
  }
]

const hotels = [
  {
    name: 'The Azure Serenity Resort',
    location: 'Ubud, Bali • 2.5 km from center',
    rating: '8.9 Excellent',
    reviews: '1,240 reviews',
    original: '320',
    price: '284',
    note: 'Only 2 rooms left at this price!',
    image: resultList4,
    badge: 'Top Choice',
    amenities: ['Free Wi-Fi', 'Pool', 'Breakfast']
  },
  {
    name: 'Lumina Beach Villas',
    location: 'Seminyak, Bali • Beachfront',
    rating: '9.2 Exceptional',
    reviews: '856 reviews',
    price: '415',
    note: 'Free cancellation before Oct 10',
    image: resultList5,
    amenities: ['Private Beach', 'Spa']
  },
  {
    name: 'The Palms Sanctuary',
    location: 'Nusa Dua, Bali • 0.8 km from beach',
    rating: '8.4 Great',
    reviews: '2,102 reviews',
    price: '189',
    note: 'Breakfast + Dinner deal available',
    image: resultList6,
    amenities: ['Airport Shuttle', 'Gym']
  }
]

const iconBase = {
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': 2.4,
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}

function icon(paths) {
  return {
    setup(_, { attrs }) {
      return () => h('svg', { ...attrs, viewBox: '0 0 24 24', ...iconBase }, paths.map(path => h(path[0], path[1])))
    }
  }
}

const MapPinIcon = icon([
  ['path', { d: 'M12 21s7-5.1 7-11a7 7 0 0 0-14 0c0 5.9 7 11 7 11Z' }],
  ['circle', { cx: '12', cy: '10', r: '2.4' }]
])
const CalendarIcon = icon([
  ['rect', { x: '4', y: '5', width: '16', height: '16', rx: '2' }],
  ['path', { d: 'M8 3v4M16 3v4M4 10h16M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01' }]
])
const UserIcon = icon([
  ['path', { d: 'M20 21a8 8 0 0 0-16 0' }],
  ['circle', { cx: '12', cy: '8', r: '4' }]
])
const FilterIcon = icon([
  ['path', { d: 'M4 6h16M7 12h10M10 18h4' }]
])
const MapIcon = icon([
  ['path', { d: 'm9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z' }],
  ['path', { d: 'M9 3v15M15 6v15' }]
])
const FlameIcon = icon([
  ['path', { d: 'M8.5 14.5a3.5 3.5 0 1 0 7 0c0-2.5-2-3.5-2-6.5-2.5 1.5-5 3.5-5 6.5Z' }],
  ['path', { d: 'M12 22a8 8 0 0 0 6.7-12.4C17.3 7.3 15 6.7 15 3c-4 2-8 5.4-8 11a5 5 0 0 0 5 5' }]
])
const ChevronDownIcon = icon([['path', { d: 'm6 9 6 6 6-6' }]])
const ChevronLeftIcon = icon([['path', { d: 'm15 18-6-6 6-6' }]])
const ChevronRightIcon = icon([['path', { d: 'm9 18 6-6-6-6' }]])

const FilterGroup = {
  props: {
    title: String,
    items: { type: Array, default: () => [] },
    gold: Boolean
  },
  setup(props, { slots, attrs }) {
    return () => h('section', { class: ['mb-9', attrs.class] }, [
      h('h3', { class: 'mb-5 text-[48px] font-bold leading-tight 2xl:text-2xl' }, props.title),
      slots.default?.(),
      ...props.items.map(item => h('label', { class: 'mb-7 flex items-center gap-10 text-[48px] leading-tight text-[#191C22] 2xl:mb-3 2xl:gap-5 2xl:text-2xl 2xl:text-[#424753]' }, [
        h('span', { class: 'h-16 w-16 shrink-0 border-4 border-[#E2E8F0] bg-white 2xl:h-8 2xl:w-8 2xl:rounded-[6px] 2xl:border-2 2xl:border-[#CBD2DF]' }),
        h('span', { class: props.gold ? 'text-[#E2B12F]' : '' }, item)
      ]))
    ])
  }
}

const PaginationButton = {
  props: { active: Boolean },
  setup(props, { slots }) {
    return () => h('button', {
      class: [
        'flex h-16 w-16 items-center justify-center rounded-[12px] border text-2xl',
        props.active ? 'border-[#005CBD] bg-[#005CBD] text-white' : 'border-[#CBD2DF] bg-white text-[#191C22]'
      ]
    }, slots.default?.())
  }
}

const amenityIcons = {
  'Free Wi-Fi': '⌁',
  Pool: '♨',
  Breakfast: '♜',
  'Private Beach': '⚲',
  Spa: '♧',
  'Airport Shuttle': '▰',
  Gym: '⌁'
}

const HotelResultCard = {
  props: { hotel: Object },
  setup(props, { attrs }) {
    return () => h('article', { class: ['grid min-h-[410px] grid-cols-[510px_1fr_244px] overflow-hidden rounded-[18px] bg-white shadow-[0_14px_30px_rgba(15,23,42,0.08)]', attrs.class] }, [
      h('div', { class: 'relative overflow-hidden' }, [
        h('img', { src: props.hotel.image, alt: props.hotel.name, class: 'h-full w-full object-cover' }),
        props.hotel.badge && h('span', { class: 'absolute left-6 top-7 rounded-full bg-white/95 px-5 py-2 text-xl font-bold text-[#005CBD]' }, `✹ ${props.hotel.badge}`)
      ]),
      h('div', { class: 'flex flex-col px-9 py-11' }, [
        h('h2', { class: 'text-3xl leading-10' }, [
          props.hotel.name,
          h('span', { class: 'ml-3 text-[22px] text-[#E2B12F]' }, '★★★★★')
        ]),
        h('p', { class: 'mt-1 flex items-center text-2xl text-[#4B5563]' }, [
          h(MapPinIcon, { class: 'mr-2 h-6 w-6' }),
          props.hotel.location
        ]),
        h('div', { class: 'mt-7 flex flex-wrap gap-3' }, props.hotel.amenities.map(amenity => h('span', { class: 'rounded-[6px] bg-[#EFEFF7] px-4 py-2 text-xl text-[#424753]' }, `${amenityIcons[amenity] || ''} ${amenity}`))),
        h('p', { class: 'mt-auto text-xl text-[#4B5563]' }, props.hotel.note)
      ]),
      h('div', { class: 'flex flex-col items-end px-9 py-10 text-right' }, [
        h('div', { class: 'rounded-[10px] bg-[#E5F0FB] px-5 py-3 text-center' }, [
          h('p', { class: 'text-2xl font-bold leading-7 text-[#005CBD]' }, props.hotel.rating),
          h('p', { class: 'text-base text-[#4B5563]' }, props.hotel.reviews)
        ]),
        h('div', { class: 'mt-auto' }, [
          props.hotel.original && h('p', { class: 'text-lg text-[#4B5563] line-through' }, `$${props.hotel.original}`),
          h('p', { class: 'text-[42px] font-bold leading-[1.05] text-[#B61B4A]' }, [
            `$${props.hotel.price}`,
            h('span', { class: 'text-xl font-medium text-[#4B5563]' }, ' /night')
          ]),
          h('button', { class: 'mt-5 h-16 rounded-[10px] bg-[#B61B4A] px-10 text-3xl font-medium text-white' }, 'Book Now')
        ])
      ])
    ])
  }
}
</script>
