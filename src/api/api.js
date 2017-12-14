import fetch from './createPromise.js'

export const login = (pp,userId) => fetch (`api/user/${userId}`,'get',{
		ppp:pp
	}
)