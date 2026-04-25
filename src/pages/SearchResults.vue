<template>
  <main class="relative mx-auto flex min-h-[2060px] w-[1280px] flex-col bg-[#F8F9FA] pt-16 text-[#191C22]">
    <section class="h-[90.59px] w-[1280px] border-b border-[rgba(194,198,213,0.3)] bg-white px-6 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      <div class="flex h-[57.59px] w-[1232px] items-center gap-4">
        <div class="flex h-[57.59px] min-w-[280px] flex-1 items-center rounded-[12px] border border-[rgba(194,198,213,0.5)] bg-[#ECEDF6] px-4 py-3">
          <img :src="destinationIcon" alt="" class="h-5 w-4 shrink-0 object-contain" />
          <div class="ml-3">
            <p class="text-xs font-medium leading-3 text-[#424753]">Destination</p>
            <p class="text-sm font-semibold leading-5 tracking-[0.14px] text-[#191C22]">{{ destinationLabel }}</p>
          </div>
        </div>
        <div class="flex h-[57.59px] w-[207.62px] items-center rounded-[12px] border border-[rgba(194,198,213,0.5)] bg-[#ECEDF6] px-4 py-3">
          <img :src="dateIcon" alt="" class="h-5 w-[18px] shrink-0 object-contain" />
          <div class="ml-3">
            <p class="text-xs font-medium leading-3 text-[#424753]">Dates</p>
            <p class="whitespace-nowrap text-sm font-semibold leading-5 tracking-[0.14px] text-[#191C22]">{{ dateLabel }}</p>
          </div>
        </div>
        <div class="flex h-[57.59px] w-[173.19px] items-center rounded-[12px] border border-[rgba(194,198,213,0.5)] bg-[#ECEDF6] px-4 py-3">
          <img :src="travelerIcon" alt="" class="h-4 w-4 shrink-0 object-contain" />
          <div class="ml-3">
            <p class="text-xs font-medium leading-3 text-[#424753]">Travelers</p>
            <p class="whitespace-nowrap text-sm font-semibold leading-5 tracking-[0.14px] text-[#191C22]">{{ store.travelers }}</p>
          </div>
        </div>
        <button class="h-12 w-[177.34px] rounded-[12px] bg-[#005CBD] px-8 text-base leading-6 text-white shadow-[0_10px_15px_-3px_rgba(0,92,189,0.2),0_4px_6px_-4px_rgba(0,92,189,0.2)]">
          Update Search
        </button>
      </div>
    </section>

    <section class="flex h-[1680px] w-[1280px] gap-6 px-6 py-8">
      <aside class="flex h-[1616px] w-64 shrink-0 flex-col gap-8">
        <div class="h-[1065.48px] w-64 rounded-[12px] border border-[rgba(194,198,213,0.2)] bg-white px-4 pb-8 pt-[15.5px] shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
          <div class="mb-[15px] flex h-7 items-center gap-2">
            <img :src="filterIcon" alt="" class="h-3 w-[18px] object-contain" />
            <h2 class="text-lg font-normal leading-7">Filters</h2>
          </div>

          <FilterGroup title="Price Range">
            <div class="mb-4 flex items-center justify-between text-xs font-medium leading-[17px] text-[#424753]">
              <span>$0</span>
              <span>$1000+</span>
            </div>
            <div class="h-1.5 rounded-lg bg-[#E1E2EB]"></div>
          </FilterGroup>

          <FilterGroup title="Property Type" :items="['Hotels', 'Resorts', 'Apartments', 'Villas']" />
          <FilterGroup title="Star Rating" :items="['★★★★★', '★★★★☆']" gold />
          <FilterGroup title="Facilities" :items="['Free Wi-Fi', 'Swimming Pool', 'Fitness Center', 'Spa', 'Parking', 'Pet Friendly']" />
          <FilterGroup title="Review Score" :items="['Superb 9+', 'Very Good 8+', 'Good 7+']" />
          <FilterGroup title="Neighborhood" :items="['Patong', 'Karon', 'Kata', 'Kamala']" />
          <FilterGroup title="Bed Type" :items="['Single', 'Double', 'King']" class="mb-0" />
        </div>

        <div class="relative h-40 w-64 overflow-hidden rounded-[12px] bg-[#95D2DE] shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
          <img
            :src="mapPreview"
            alt=""
            class="absolute inset-0 h-full w-full cursor-pointer object-cover"
            @click="goToRoomDetail(1)"
          />
          <div class="absolute inset-0 bg-[#005CBD]/20 backdrop-blur-[1px]"></div>
          <button class="absolute left-1/2 top-1/2 flex h-10 w-[148.48px] -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-2 rounded-full bg-white px-4 text-base leading-6 text-[#005CBD] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]">
            <MapIcon class="h-[13.5px] w-[13.5px]" />
            View on Map
          </button>
        </div>
      </aside>

      <section class="block h-[1616px] w-[952px]">
        <div class="mb-4 flex h-10 items-center justify-between">
          <h1 class="text-xl font-normal leading-7">245 properties in Bali</h1>
          <div class="flex h-10 items-center gap-2">
            <span class="text-xs font-medium leading-[17px] text-[#424753]">Sort by:</span>
            <button class="flex h-10 w-[170.95px] items-center justify-between px-3 text-base leading-6 text-[#005CBD]">
              Recommended
              <ChevronDownIcon class="h-6 w-6 text-[#6B7280]" />
            </button>
          </div>
        </div>

        <section class="h-[640px] w-[952px] rounded-[16px] border border-[rgba(0,92,189,0.2)] bg-gradient-to-br from-[#005CBD] to-[#004591] p-1 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]">
          <div class="h-[630px] overflow-hidden rounded-[14px] bg-white">
          <div class="flex h-[52px] items-center justify-between bg-[rgba(182,27,74,0.1)] px-6 py-3">
            <div class="flex items-center gap-3 text-lg leading-7 text-[#B61B4A]">
              <img :src="fireIcon" alt="" class="h-[19px] w-4" />
              <span>Flash Deals for You</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-medium leading-[17px] text-[#424753]">Ends in:</span>
              <span class="rounded-md bg-[#B61B4A] px-3 py-1 font-mono text-sm font-bold leading-5 tracking-[0.08em] text-white">08 : 45 : 12</span>
            </div>
          </div>

          <article
            v-for="deal in flashDeals"
            :key="deal.name"
            class="grid h-[192.67px] cursor-pointer grid-cols-[256px_1fr] border-t border-[rgba(194,198,213,0.1)] transition hover:bg-[#F8F9FA]"
            role="button"
            tabindex="0"
            @click="goToRoomDetail(deal.id)"
            @keydown.enter="goToRoomDetail(deal.id)"
            @keydown.space.prevent="goToRoomDetail(deal.id)"
          >
            <div class="relative overflow-hidden">
              <img :src="deal.image" :alt="deal.name" class="h-full w-full object-cover" />
              <span class="absolute left-3 top-3 rounded-lg bg-[#B61B4A] px-3 py-1 text-xs font-black leading-4 text-white shadow-sm">{{ deal.discount }}</span>
            </div>
            <div class="flex items-center justify-between px-5">
              <div>
                <h2 class="flex items-center gap-2 text-lg font-normal leading-7">{{ deal.name }} <span class="text-[10px] leading-none text-[#EAB308]">★★★★★</span></h2>
                <p class="mt-1 flex items-center text-xs leading-4 text-[#424753]">
                  <MapPinIcon class="mr-1 h-3 w-3" />
                  {{ deal.location }}
                </p>
              </div>
              <div class="flex w-[126px] flex-col items-end text-right">
                <p class="text-[10px] leading-[10px] text-[#424753] line-through">${{ deal.original }}</p>
                <p class="text-2xl font-semibold leading-8 text-[#B61B4A]">${{ deal.price }} <span class="text-[10px] font-normal text-[#424753]">/night</span></p>
                <button class="mt-1 h-7 rounded-lg bg-[#B61B4A] px-4 text-xs font-bold leading-4 text-white shadow-sm" @click.stop="goToRoomDetail(deal.id)">Claim</button>
              </div>
            </div>
          </article>
          </div>
        </section>

        <HotelResultCard
          v-for="hotel in hotels"
          :key="hotel.name"
          :hotel="hotel"
          :on-open-room="goToRoomDetail"
          class="mt-4"
        />

        <div class="mt-4 flex h-[88px] justify-center gap-2 pb-12">
          <PaginationButton><ChevronLeftIcon class="h-3 w-3" /></PaginationButton>
          <PaginationButton active>1</PaginationButton>
          <PaginationButton>2</PaginationButton>
          <PaginationButton>3</PaginationButton>
          <span class="flex h-10 w-10 items-center justify-center text-base text-[#191C22]">...</span>
          <PaginationButton>12</PaginationButton>
          <PaginationButton><ChevronRightIcon class="h-3 w-3" /></PaginationButton>
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    return () => h('section', { class: ['mb-[15px] pt-2', attrs.class] }, [
      h('h3', { class: 'mb-3 text-sm font-semibold leading-5 tracking-[0.14px] text-[#191C22]' }, props.title),
      slots.default?.(),
      ...props.items.map(item => h('label', { class: 'mb-2 flex h-5 items-center gap-3 text-sm font-normal leading-5 text-[#191C22]' }, [
        h('span', { class: 'h-5 w-5 shrink-0 rounded border border-[#C2C6D5] bg-white' }),
        h('span', { class: props.gold ? 'text-[#EAB308]' : '' }, item)
      ]))
    ])
  }
}

const PaginationButton = {
  props: { active: Boolean },
  setup(props, { slots }) {
    return () => h('button', {
      class: [
        'flex h-10 w-10 items-center justify-center rounded-lg border text-base leading-6',
        props.active ? 'border-[#005CBD] bg-[#005CBD] text-white' : 'border-[#CBD2DF] bg-white text-[#191C22]'
      ]
    }, slots.default?.())
  }
}

const amenityIcons = {
  'Free Wi-Fi': '',
  Pool: '',
  Breakfast: '',
  'Private Beach': '',
  Spa: '',
  'Airport Shuttle': '',
  Gym: ''
}

const HotelResultCard = {
  props: { hotel: Object, onOpenRoom: Function },
  setup(props, { attrs }) {
    return () => h('article', { class: ['grid h-64 w-[952px] grid-cols-[320px_1fr] overflow-hidden rounded-[12px] border border-[rgba(194,198,213,0.2)] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)]', attrs.class] }, [
      h('div', {
        class: 'relative h-[254px] cursor-pointer overflow-hidden',
        role: 'button',
        tabindex: 0,
        onClick: () => props.onOpenRoom?.(props.hotel.id),
        onKeydown: event => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            props.onOpenRoom?.(props.hotel.id)
          }
        }
      }, [
        h('img', { src: props.hotel.image, alt: props.hotel.name, class: 'h-full w-full object-cover' }),
        props.hotel.badge && h('span', { class: 'absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold leading-[17px] text-[#005CBD] shadow-sm' }, props.hotel.badge)
      ]),
      h('div', { class: 'flex h-[254px] flex-col justify-between px-6 py-6' }, [
        h('div', [
          h('div', { class: 'flex items-start justify-between' }, [
            h('div', [
              h('h2', { class: 'flex items-center gap-2 text-xl font-normal leading-7' }, [
                props.hotel.name,
                h('span', { class: 'text-[11px] leading-none text-[#EAB308]' }, '★★★★★')
              ]),
              h('p', { class: 'mt-1 flex items-center text-sm leading-5 text-[#424753]' }, [
                h(MapPinIcon, { class: 'mr-1 h-3.5 w-3.5' }),
                props.hotel.location
              ])
            ]),
            h('div', { class: 'rounded-lg bg-[rgba(0,92,189,0.1)] px-3 py-1.5 text-right' }, [
              h('p', { class: 'text-sm font-bold leading-5 text-[#005CBD]' }, props.hotel.rating),
              h('p', { class: 'text-[10px] leading-[15px] text-[#424753]' }, props.hotel.reviews)
            ])
          ]),
          h('div', { class: 'mt-4 flex flex-wrap gap-2' }, props.hotel.amenities.map(amenity => h('span', { class: 'rounded bg-[#ECEDF6] px-2 py-1 text-[11px] leading-4 text-[#191C22]' }, `${amenityIcons[amenity]}${amenity}`)))
        ]),
        h('div', { class: 'flex items-end justify-between' }, [
          h('p', { class: 'text-xs leading-4 text-[#424753]' }, props.hotel.note),
          h('div', { class: 'text-right' }, [
            props.hotel.original && h('p', { class: 'text-xs leading-3 text-[#424753] line-through' }, `$${props.hotel.original}`),
            h('p', { class: 'text-2xl font-semibold leading-8 text-[#B61B4A]' }, [
              `$${props.hotel.price}`,
              h('span', { class: 'text-xs font-medium text-[#424753]' }, ' /night')
            ]),
            h('button', {
              class: 'mt-2 h-10 w-[126.39px] rounded-lg bg-[#B61B4A] px-6 text-base font-normal leading-6 text-white',
              onClick: () => props.onOpenRoom?.(props.hotel.id)
            }, 'Book Now')
          ])
        ])
      ])
    ])
  }
}
</script>
