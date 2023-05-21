import { writable } from 'svelte/store';

// var user = {
//     name: "cyberyeet",
//     email: "cyberyeet@gmail.com",
//     userID: "6468ec339d23f8e8ae7ca59c",
// };

export const currentUser = writable(null);
