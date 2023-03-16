<template>
    <div>
        <h1>Hello</h1>
    </div>
        <!-- <h1>Hello</h1> -->
        <!-- <div>
            <ContentDoc/>
        </div> -->
        <!-- <div>
            Counter: {{ counter }}
            <button @click="counter++">
            +
            </button>
            <button @click="counter--">
            -
            </button>
        </div>
        <Counter/> -->
    <!-- <Alert/>
    <Profile/>
    <IconsBell/> -->



    <!-- <div class="flex flex-col py-10">
        <div>
            <h2 class="text-2xl font-bold text-center">Nuxt Movies App</h2>
        </div>
        <div class="flex justify-center items-center h-32">
            <input class="px-2 py-1 border border-gray-800 rounded-md min-w-64"
            v-model="searchTerm"
            type="text"
            placeholder="Search...">
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xs:grid-cols-5 self-centered gap-x-10 gap-y-10 mb-10">
            <div v-for="movie in data?.results" :key="movie.id">
                <MovieCard :movie="movie"></MovieCard>
            </div>
        </div>
        <div v-if="data?.results.length" class="flex justify-center">
            <button v-if="!disabledPrevious" class="px-4 py-2 text-m border rounded-lg" @click="page--">Previous</button>
            <div class="px-4 py-2 text-m border rounded-lg">{{ page }}</div>
            <button v-if="!disabledNext" class="px-4 py-2 text-m border rounded-lg" @click="page++">Next</button>
        </div>
    </div> -->
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/myStore';
const store = useCounterStore()

const response = await $fetch('/api/hello')
console.log(response);



// const counter = useCounter()


// const {  $sayHello } = useNuxtApp()

// $sayHello('Some')

// import { ApiResponse } from '~~/types/ApiResponse';
// const searchTerm = ref('')
// const page = ref(1)
// const disabledPrevious = computed(() => { return page.value === 1 })
// const disabledNext= computed(() => { return page.value + 1 === data.value?.total_pages })

// const url = computed(() => { return `api/movies/search?query=${ searchTerm.value }&page=${ page.value }` })

// const { data } = await useFetch<ApiResponse>(url)
</script>