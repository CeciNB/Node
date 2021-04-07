// asynchronous code why?
// to avoid blocking
// because JS is single threaded

// asynchronous code when?
// Request
// Database
// user input
// Files
function myPromise() {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve('My new promise')
            }, 4000)
        } catch {
            reject('O NO')
        }
    })
}
async function asyncWrap() {
    await myPromise()
}
asyncWrap()
