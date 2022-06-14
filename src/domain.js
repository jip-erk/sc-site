import { writable } from 'svelte/store';
const initial = {
    domain: '',
    img: '',
    count: 0
};
export let myStore = writable(initial);