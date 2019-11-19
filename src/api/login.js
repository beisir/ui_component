import request from './request'

export function loginByUsername(username, password) {
	const data = {
		username,
		password
	}
	return request({
		url: '/user/login',
		method: 'POST',
		data
	})	
}

export function logout() {
	return request({
		url: '/user/logout',
		method: 'GET'
	})
}

export function getUserInfo() {
	return request({
		url: '/user/info',
		method: 'POST'
	})
}
