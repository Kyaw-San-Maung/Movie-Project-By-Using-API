/*const user = false;
const userError = false;

function watchTuto() {
    return new Promise((reject, resolve) => {
            if (user) {
                    resolve({
                        name: "user left",
                        message: ':('
                    })
                } else if (userError) {
                    resolve({
                        name: 'User watching cat meme',
                        message: 'web-development < cat'
                    })
                } else {
                    reject('Thumbs up and subscribe')
                }
    })

}

watchTuto().then((message) => {
    console.log("success : " + message);
}).catch((error) => {
    console.log(error.name + " " + error.message);
}) */

/*const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Vid 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Vid 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Vid 3 Recorded')
})

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages)
}).catch*/

/*const cities = [
    {
        name: "Yangon",
        population: 2000000,
        region: "Asia",
        isCapital: false
    },

    {
        name: "Mandalay",
        population: 1000000,
        region: "Asia",
        isCapital: false
    }
]

const citiesJson = JSON.stringify(cities);

localStorage.setItem("test", citiesJson);

const citiesFromLocalStorage = localStorage.getItem("test");

console.log("Cities From Local Storage :" + citiesFromLocalStorage);

const citiesObj = JSON.parse(citiesFromLocalStorage);

console.log(citiesObj[0].name); */

/*const login = () => { 
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Login process is finished...");
   },3000)
})
}

const fetchData = () => {
    const fetchDataPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Fetching data process is finished...");
        },5000)
    })

    return fetchDataPromise;
}

login()
    .then((logindata) => {
    console.log(logindata);
    return fetchData();
    }).then((fetchingData) => {
        console.log(fetchingData);
    })
    .catch((error) => {
        console.log("Erro happan", error);
})
*/
