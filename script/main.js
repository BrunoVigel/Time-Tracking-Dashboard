setDay()


// fetch quando clicar em daily
async function setDay() {
    const dadosResponse = await fetch('./data.json')
    const dadosJSON = await dadosResponse.json()


    // Work Card
    document.querySelector('#work-card .title').innerText = `${dadosJSON[0].title}`
    document.querySelector('#work-card .current-hours').innerText = `${dadosJSON[0].timeframes.daily.current}hrs`
    document.querySelector('#work-card .previous-hours').innerText = `Yesterday - ${dadosJSON[0].timeframes.daily.previous}hrs`

    // Play Card
    document.querySelector('#play-card .title').innerText = `${dadosJSON[1].title}`
    document.querySelector('#play-card .current-hours').innerText = `${dadosJSON[1].timeframes.daily.current}hrs`
    document.querySelector('#play-card .previous-hours').innerText = `Yesterday - ${dadosJSON[1].timeframes.daily.previous}hrs`

    // Study Card
    document.querySelector('#study-card .title').innerText = `${dadosJSON[2].title}`
    document.querySelector('#study-card .current-hours').innerText = `${dadosJSON[2].timeframes.daily.current}hrs`
    document.querySelector('#study-card .previous-hours').innerText = `Yesterday - ${dadosJSON[2].timeframes.daily.previous}hrs`

    // Exercise Card
    document.querySelector('#exercise-card .title').innerText = `${dadosJSON[03].title}`
    document.querySelector('#exercise-card .current-hours').innerText = `${dadosJSON[3].timeframes.daily.current}hrs`
    document.querySelector('#exercise-card .previous-hours').innerText = `Yesterday - ${dadosJSON[3].timeframes.daily.previous}hrs`

 

    // Social Card
    document.querySelector('#social-card .title').innerText = `${dadosJSON[04].title}`
    document.querySelector('#social-card .current-hours').innerText = `${dadosJSON[4].timeframes.daily.current}hrs`
    document.querySelector('#social-card .previous-hours').innerText = `Yesterday - ${dadosJSON[4].timeframes.daily.previous}hrs`

     // Self care Card
     document.querySelector('#self-care-card .title').innerText = `${dadosJSON[5].title}`
     document.querySelector('#self-care-card .current-hours').innerText = `${dadosJSON[5].timeframes.daily.current}hrs`
     document.querySelector('#self-care-card .previous-hours').innerText = `Yesterday - ${dadosJSON[5].timeframes.daily.previous}hrs`
}

const btnDay = document.querySelector('[data-time="day"]')
btnDay.addEventListener('click', setDay)


// fetch pra quando clicar em weekly
async function setWeek() {
    const dadosResponse = await fetch('./data.json')
    const dadosJSON = await dadosResponse.json()


    // Work Card
    document.querySelector('#work-card .current-hours').innerText = `${dadosJSON[0].timeframes.weekly.current}hrs`
    document.querySelector('#work-card .previous-hours').innerText = `Last Week - ${dadosJSON[0].timeframes.weekly.previous}hrs`

    // Play Card
    document.querySelector('#play-card .current-hours').innerText = `${dadosJSON[1].timeframes.weekly.current}hrs`
    document.querySelector('#play-card .previous-hours').innerText = `Last Week - ${dadosJSON[1].timeframes.weekly.previous}hrs`

    // Study Card
    document.querySelector('#study-card .current-hours').innerText = `${dadosJSON[2].timeframes.weekly.current}hrs`
    document.querySelector('#study-card .previous-hours').innerText = `Last Week - ${dadosJSON[2].timeframes.weekly.previous}hrs`


    // Exercise Card
    document.querySelector('#exercise-card .current-hours').innerText = `${dadosJSON[3].timeframes.weekly.current}hrs`
    document.querySelector('#exercise-card .previous-hours').innerText = `Last Week - ${dadosJSON[3].timeframes.weekly.previous}hrs`

    // Social Card
    document.querySelector('#social-card .current-hours').innerText = `${dadosJSON[4].timeframes.weekly.current}hrs`
    document.querySelector('#social-card .previous-hours').innerText = `Last Week - ${dadosJSON[4].timeframes.weekly.previous}hrs`

     // Self care Card
     document.querySelector('#self-care-card .current-hours').innerText = `${dadosJSON[5].timeframes.weekly.current}hrs`
     document.querySelector('#self-care-card .previous-hours').innerText = `Last Week - ${dadosJSON[5].timeframes.weekly.previous}hrs`
}

const btnWeek = document.querySelector('[data-time="week"]')
btnWeek.addEventListener('click', setWeek)


// fetch pra quando clicar em monthly
async function setMonth() {
    const dadosResponse = await fetch('./data.json')
    const dadosJSON = await dadosResponse.json()


    // Work Card
    document.querySelector('#work-card .current-hours').innerText = `${dadosJSON[0].timeframes.monthly.current}hrs`
    document.querySelector('#work-card .previous-hours').innerText = `Last Month - ${dadosJSON[0].timeframes.monthly.previous}hrs`

    // Play Card
    document.querySelector('#play-card .current-hours').innerText = `${dadosJSON[1].timeframes.monthly.current}hrs`
    document.querySelector('#play-card .previous-hours').innerText = `Last Month - ${dadosJSON[1].timeframes.monthly.previous}hrs`

    // Study Card
    document.querySelector('#study-card .current-hours').innerText = `${dadosJSON[2].timeframes.monthly.current}hrs`
    document.querySelector('#study-card .previous-hours').innerText = `Last Month - ${dadosJSON[2].timeframes.monthly.previous}hrs`

    // Exercise Card
    document.querySelector('#exercise-card .current-hours').innerText = `${dadosJSON[3].timeframes.monthly.current}hrs`
    document.querySelector('#exercise-card .previous-hours').innerText = `Last Month - ${dadosJSON[3].timeframes.monthly.previous}hrs`

    // Social Card
    const socialCurrent = document.querySelector('#social-card .current-hours').innerText = `${dadosJSON[4].timeframes.monthly.current}hrs`
    const socialPrevious = document.querySelector('#social-card .previous-hours').innerText = `Last Month - ${dadosJSON[4].timeframes.monthly.previous}hrs`

     // Self care Card
    document.querySelector('#self-care-card .current-hours').innerText = `${dadosJSON[5].timeframes.monthly.current}hrs`
    document.querySelector('#self-care-card .previous-hours').innerText = `Last Month - ${dadosJSON[5].timeframes.monthly.previous}hrs`


}

const btnMonth = document.querySelector('[data-time="month"]')
btnMonth.addEventListener('click', setMonth)