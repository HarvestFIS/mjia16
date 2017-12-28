import fetch from './promise.js'

export const login = (pp, userId) => fetch(`api/user/${userId}`, {
	ppp: pp
}, 'get')

export const findLoan = () => fetch('/applyInformation/findLoanIntentionDynamicInfoListForZjf.do')