import { writable } from 'svelte/store';

export const currentUser = writable({
	name: 'cyberyeet',
	email: 'cyberyeet@gmail.com',
	userID: '6468ec339d23f8e8ae7ca59c',
    password: 'superbadpassword1234234q2'
});

// export const currentUser = writable(
//     {
//         name: null,
//         email: null,
//         userID: null,
//         password: null
//     }
// );
