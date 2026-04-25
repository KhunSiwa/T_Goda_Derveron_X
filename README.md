# T-Goda Travel Booking

T-Goda เป็นเว็บจองที่พักและดีลท่องเที่ยวที่สร้างด้วย Vue 3, Vite, Vue Router และ Tailwind CSS โดยออกแบบให้ผู้ใช้เริ่มจากหน้าแรก ค้นหาปลายทาง ดูรายการที่พัก/ดีล และเข้าไปดูรายละเอียดห้องพักก่อนจอง

## Tech Stack

- Vue 3 Composition API
- Vue Router
- Vite
- Tailwind CSS
- Mock data จาก `src/data/mockHotels.js`
- Reactive store แบบง่ายที่ `src/store/index.js`

## วิธีรันโปรเจกต์

```bash
npm install
npm run dev
```

เปิดเว็บที่:

```text
http://127.0.0.1:5173/
```

Build production:

```bash
npm run build
```

## โครงสร้างหลักของโปรเจกต์

```text
src/
  App.vue
  main.js
  index.css

  router/
    index.js

  store/
    index.js

  pages/
    Home.vue
    SearchResults.vue
    RoomDetail.vue

  components/
    Navbar.vue
    Footer.vue
    SearchBar.vue
    FilterSidebar.vue
    HotelCard.vue
    Gallery.vue

  assets/
    homepage/
    SearchResults/
    RoomDetail/
    styles.css

  data/
    mockHotels.js
```

## Page Flow

หน้า `Home.vue` เป็นจุดเริ่มต้นของเว็บ มี hero search, feature cards, trending destinations, promotion banner และ newsletter section ผู้ใช้สามารถกดปุ่ม Search หรือคลิก destination card เพื่อไปหน้า Search Results ได้

หน้า `SearchResults.vue` แสดง search summary bar, filter sidebar, flash deals, hotel cards และ pagination รูปใน flash deals, รูป map และรูป hotel card สามารถคลิกเพื่อไปหน้า `RoomDetail.vue` ได้

หน้า `RoomDetail.vue` เป็นหน้ารายละเอียดที่พัก เรียงเนื้อหาตามลำดับการนำเสนอ ได้แก่ breadcrumb/header, gallery, overview, amenities, rating/map, room selection และ guest reviews

## Routing

```js
/
/search
/hotel/:id
```

- `/` แสดงหน้า Home
- `/search` แสดงหน้า Search Results
- `/hotel/:id` แสดงหน้า Room Detail

โลโก้ `T-Goda` ใน Navbar เป็นลิงก์กลับหน้า Home จากทุกหน้า

## การออกแบบ UI

ดีไซน์ของไซต์ใช้แนวทาง modern travel booking interface เน้นความสะอาด อ่านง่าย และให้ภาพสถานที่เป็นตัวนำสายตา โทนหลักใช้สีน้ำเงินสำหรับ action หลักและ navigation ส่วนสีแดงชมพูใช้สำหรับ deal, price และ promotion เพื่อให้ผู้ใช้เห็นจุดสำคัญเร็ว

หน้า Home ใช้ hero ขนาดใหญ่เพื่อสร้างความรู้สึกน่าเที่ยว ตามด้วย destination cards ที่มีรูปเมืองเด่นและราคาเริ่มต้น ส่วน promotion banner ใช้สี accent และรูปทะเลเพื่อดึงความสนใจ

หน้า Search Results จัด layout แบบ booking platform คือ search summary อยู่ด้านบน filter อยู่ซ้าย และรายการที่พักอยู่ขวา Flash Deals ถูกออกแบบให้เป็น section พิเศษ มีกรอบสีน้ำเงินและรูปแบ่งเป็น 3 แถวเพื่อเน้นดีลเด่น

หน้า Room Detail ใช้ลำดับเนื้อหาแบบ decision flow ผู้ใช้เห็นชื่อที่พักและรูปก่อน จากนั้นอ่าน overview, ดู amenity, ตรวจคะแนนรีวิว, เลือกห้อง และอ่าน guest reviews ก่อนตัดสินใจ

## การจัดการ Assets

รูปภาพถูกแยกตามหน้าที่ใช้งาน:

- `src/assets/homepage/` สำหรับหน้า Home
- `src/assets/SearchResults/` สำหรับหน้า Search Results
- `src/assets/RoomDetail/` สำหรับหน้า Room Detail

การแยก assets แบบนี้ช่วยให้ดูแลไฟล์ง่ายขึ้น และลดปัญหารูปกระจัดกระจายอยู่ใน root ของ `assets`

## Components สำคัญ

- `Navbar.vue` แถบนำทางหลัก ใช้ทุกหน้า และโลโก้คลิกกลับ Home ได้
- `Footer.vue` footer กลางของไซต์
- `SearchBar.vue` component สำหรับ search UI
- `FilterSidebar.vue` filter sidebar รุ่นพื้นฐาน
- `HotelCard.vue` card โรงแรมรุ่น reusable
- `Gallery.vue` gallery component รุ่นพื้นฐาน

บางหน้า เช่น `SearchResults.vue` และ `RoomDetail.vue` มี local components ภายในไฟล์ เพื่อจัด layout ที่เฉพาะเจาะจงตามดีไซน์

## Presentation Script

สวัสดีครับ วันนี้ผมจะนำเสนอเว็บไซต์ T-Goda ซึ่งเป็นเว็บจองที่พักและดีลท่องเที่ยวที่สร้างด้วย Vue 3, Vite และ Tailwind CSS

แนวคิดหลักของเว็บนี้คือทำให้ผู้ใช้สามารถเริ่มค้นหาทริปได้จากหน้าแรก ดูปลายทางยอดนิยม เลือกดีลที่น่าสนใจ และเข้าไปดูรายละเอียดห้องพักได้อย่างต่อเนื่อง

หน้าแรกหรือ Home Page จะเริ่มด้วย hero search ที่ให้ผู้ใช้กรอกปลายทางและวันที่เดินทาง จากนั้นมี feature cards เพื่อบอกจุดเด่นของบริการ เช่น Best Price Guarantee, Global Support และ Flexible Booking ต่อด้วย Trending Destinations ที่คลิกแล้วไปหน้า Search Results ได้

ในหน้า Search Results ผมออกแบบให้คล้ายเว็บ booking จริง ด้านบนเป็น search summary bar แสดงปลายทาง วันที่ และจำนวนผู้เดินทาง ด้านซ้ายเป็น filter sidebar ส่วนด้านขวาเป็นรายการที่พัก มี Flash Deals เป็น section พิเศษ โดยรูปภาพแต่ละแถวสามารถคลิกเข้าไปดูรายละเอียดห้องพักได้

หน้า Room Detail เป็นหน้าที่ช่วยให้ผู้ใช้ตัดสินใจก่อนจอง เริ่มจาก breadcrumb และข้อมูลโรงแรม ต่อด้วย gallery รูปขนาดใหญ่ จากนั้นมี overview, amenities, คะแนนรีวิว, แผนที่, ตารางเลือกห้อง และ guest reviews

ในด้านโครงสร้าง โปรเจกต์แบ่งเป็น pages, components, store, router และ assets โดย assets ถูกแยกเป็นโฟลเดอร์ตามหน้า เช่น homepage, SearchResults และ RoomDetail เพื่อให้จัดการรูปภาพง่ายและเป็นระบบ

จุดเด่นของโปรเจกต์นี้คือ flow ของผู้ใช้เชื่อมกันครบ ตั้งแต่ Home ไป Search Results และจาก Search Results ไป Room Detail รวมถึงโลโก้ T-Goda ที่คลิกกลับหน้าแรกได้ทุกหน้า

สรุปแล้ว T-Goda เป็น prototype เว็บจองที่พักที่เน้น UI สวย ใช้งานเป็นลำดับ และมีโครงสร้างโค้ดที่แยกหน้าชัดเจน สามารถต่อยอดเป็นระบบ booking จริงได้ในอนาคตครับ
