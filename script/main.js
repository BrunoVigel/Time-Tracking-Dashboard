setDay()


// fetch quando clicar em daily
async function setDay() {
    const dadosResponse = await fetch('./data.json')
    const dadosJSON = await dadosResponse.json()


    // Work Card
    const workCurrent = document.querySelector('#work-card .current-hours');
    const workPrevious = document.querySelector('#work-card .previous-hours');

    workCurrent.innerText = `${dadosJSON[0].timeframes.daily.current}hrs`
    workPrevious.innerText = `Yesterday - ${dadosJSON[0].timeframes.daily.previous}hrs`

    // Play Card
    const playCurrent = document.querySelector('#play-card .current-hours');
    const playPrevious = document.querySelector('#play-card .previous-hours')

    playCurrent.innerText = `${dadosJSON[1].timeframes.daily.current}hrs`
    playPrevious.innerText = `Yesterday - ${dadosJSON[1].timeframes.daily.previous}hrs`

    // Study Card
    const studyCurrent = document.querySelector('#study-card .current-hours');
    const studyPrevious = document.querySelector('#study-card .previous-hours')

    studyCurrent.innerText = `${dadosJSON[2].timeframes.daily.current}hrs`
    studyPrevious.innerText = `Yesterday - ${dadosJSON[2].timeframes.daily.previous}hrs`

    // Exercise Card
    const exerciseCurrent = document.querySelector('#exercise-card .current-hours');
    const exercisePrevious = document.querySelector('#exercise-card .previous-hours')

    exerciseCurrent.innerText = `${dadosJSON[3].timeframes.daily.current}hrs`
    exercisePrevious.innerText = `Yesterday - ${dadosJSON[3].timeframes.daily.previous}hrs`

    // Social Card
    const socialCurrent = document.querySelector('#social-card .current-hours');
    const socialPrevious = document.querySelector('#social-card .previous-hours')

    socialCurrent.innerText = `${dadosJSON[4].timeframes.daily.current}hrs`
    socialPrevious.innerText = `Yesterday - ${dadosJSON[4].timeframes.daily.previous}hrs`

     // Self care Card
     const selfCareCurrent = document.querySelector('#self-care-card .current-hours');
     const selfCarePrevious = document.querySelector('#self-care-card .previous-hours')

     selfCareCurrent.innerText = `${dadosJSON[5].timeframes.daily.current}hrs`
     selfCarePrevious.innerText = `Yesterday - ${dadosJSON[5].timeframes.daily.previous}hrs`
}

const btnDay = document.querySelector('[data-time="day"]')
btnDay.addEventListener('click', setDay)


// fetch pra quando clicar em weekly
async function setWeek() {
    const dadosResponse = await fetch('./data.json')
    const dadosJSON = await dadosResponse.json()


    // Work Card
    const workCurrent = document.querySelector('#work-card .current-hours');
    const workPrevious = document.querySelector('#work-card .previous-hours')

    workCurrent.innerText = `${dadosJSON[0].timeframes.weekly.current}hrs`
    workPrevious.innerText = `Last Week - ${dadosJSON[0].timeframes.weekly.previous}hrs`

    // Play Card
    const playCurrent = document.querySelector('#play-card .current-hours');
    const playPrevious = document.querySelector('#play-card .previous-hours')

    playCurrent.innerText = `${dadosJSON[1].timeframes.weekly.current}hrs`
    playPrevious.innerText = `Last Week - ${dadosJSON[1].timeframes.weekly.previous}hrs`

    // Study Card
    const studyCurrent = document.querySelector('#study-card .current-hours');
    const studyPrevious = document.querySelector('#study-card .previous-hours')

    studyCurrent.innerText = `${dadosJSON[2].timeframes.weekly.current}hrs`
    studyPrevious.innerText = `Last Week - ${dadosJSON[2].timeframes.weekly.previous}hrs`

    // Exercise Card
    const exerciseCurrent = document.querySelector('#exercise-card .current-hours');
    const exercisePrevious = document.querySelector('#exercise-card .previous-hours')

    exerciseCurrent.innerText = `${dadosJSON[3].timeframes.weekly.current}hrs`
    exercisePrevious.innerText = `Last Week - ${dadosJSON[3].timeframes.weekly.previous}hrs`

    // Social Card
    const socialCurrent = document.querySelector('#social-card .current-hours');
    const socialPrevious = document.querySelector('#social-card .previous-hours')

    socialCurrent.innerText = `${dadosJSON[4].timeframes.weekly.current}hrs`
    socialPrevious.innerText = `Last Week - ${dadosJSON[4].timeframes.weekly.previous}hrs`

     // Self care Card
     const selfCareCurrent = document.querySelector('#self-care-card .current-hours');
     const selfCarePrevious = document.querySelector('#self-care-card .previous-hours')

     selfCareCurrent.innerText = `${dadosJSON[5].timeframes.weekly.current}hrs`
     selfCarePrevious.innerText = `Last Week - ${dadosJSON[5].timeframes.weekly.previous}hrs`
}

const btnWeek = document.querySelector('[data-time="week"]')
btnWeek.addEventListener('click', setWeek)


// fetch pra quando clicar em monthly
async function setMonth() {
    const dadosResponse = await fetch('./data.json')
    const dadosJSON = await dadosResponse.json()


    // Work Card
    const workCurrent = document.querySelector('#work-card .current-hours');
    const workPrevious = document.querySelector('#work-card .previous-hours')

    workCurrent.innerText = `${dadosJSON[0].timeframes.monthly.current}hrs`
    workPrevious.innerText = `Last Month - ${dadosJSON[0].timeframes.monthly.previous}hrs`

    // Play Card
    const playCurrent = document.querySelector('#play-card .current-hours');
    const playPrevious = document.querySelector('#play-card .previous-hours')

    playCurrent.innerText = `${dadosJSON[1].timeframes.monthly.current}hrs`
    playPrevious.innerText = `Last Month - ${dadosJSON[1].timeframes.monthly.previous}hrs`

    // Study Card
    const studyCurrent = document.querySelector('#study-card .current-hours');
    const studyPrevious = document.querySelector('#study-card .previous-hours')

    studyCurrent.innerText = `${dadosJSON[2].timeframes.monthly.current}hrs`
    studyPrevious.innerText = `Last Month - ${dadosJSON[2].timeframes.monthly.previous}hrs`

    // Exercise Card
    const exerciseCurrent = document.querySelector('#exercise-card .current-hours');
    const exercisePrevious = document.querySelector('#exercise-card .previous-hours')

    exerciseCurrent.innerText = `${dadosJSON[3].timeframes.monthly.current}hrs`
    exercisePrevious.innerText = `Last Month - ${dadosJSON[3].timeframes.monthly.previous}hrs`

    // Social Card
    const socialCurrent = document.querySelector('#social-card .current-hours');
    const socialPrevious = document.querySelector('#social-card .previous-hours')

    socialCurrent.innerText = `${dadosJSON[4].timeframes.monthly.current}hrs`
    socialPrevious.innerText = `Last Month - ${dadosJSON[4].timeframes.monthly.previous}hrs`

     // Self care Card
     const selfCareCurrent = document.querySelector('#self-care-card .current-hours');
     const selfCarePrevious = document.querySelector('#self-care-card .previous-hours')

     selfCareCurrent.innerText = `${dadosJSON[5].timeframes.monthly.current}hrs`
     selfCarePrevious.innerText = `Last Month - ${dadosJSON[5].timeframes.monthly.previous}hrs`
}

const btnMonth = document.querySelector('[data-time="month"]')
btnMonth.addEventListener('click', setMonth)