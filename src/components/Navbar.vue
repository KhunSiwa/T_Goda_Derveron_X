<template>
  <nav class="fixed top-0 left-0 right-0 bg-white/80 border-b border-gray-200 shadow-sm backdrop-blur-md z-40 h-16">
    <div class="max-w-[1280px] mx-auto h-full px-6 flex items-center justify-between">
      <div class="flex items-center gap-8">
        <div class="text-indigo-600 font-extrabold text-2xl">T-Goda</div>
        <nav class="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600" aria-label="Primary">
          <a class="text-indigo-600 pb-1 border-b-2 border-indigo-600">Hotels</a>
          <a class="hover:text-indigo-600">Flights</a>
          <a class="hover:text-indigo-600">Deals</a>
          <a class="hover:text-indigo-600">More</a>
        </nav>
      </div>

      <div class="flex items-center gap-4">
        <button class="hidden sm:inline px-4 py-2 rounded-md text-slate-700 border border-slate-200 hover:bg-slate-50">Sign in</button>
        <button class="px-4 py-2 rounded-md bg-[#005CBD] text-white font-semibold">Create account</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
// Presentational navbar using Tailwind utilities
</script>
