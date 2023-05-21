import { writable } from 'svelte/store';

export const currentUser = writable({
	name: 'cyberyeetus',
	email: 'cyberyeetus@gmail.com',
	userID: '6468ec339d23f8e8ae7ca59c',
    password: 'superbadpassword1234234q2'
});

// export const experience_array = writable([])

// export const currentUser = writable(
//     {
//         name: null,
//         email: null,
//         userID: null,
//         password: null
//     }
// );
