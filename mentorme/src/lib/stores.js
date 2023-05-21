import { writable } from 'svelte/store';

// export const currentUser = writable({
// 	name: 'cyberyeetus',
// 	email: 'cyberyeetus@gmail.com',
// 	userID: '6468ec339d23f8e8ae7ca59c',
//     password: 'superbadpassword1234234q2'
// });

export const currentUser = writable(
    {
        name: "",
		email: "",
		userID: "",
		password: ""
    }
);
