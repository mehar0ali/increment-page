const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.innerHTML = 0;


    const updateCounter = () => {
        const counterTarget = +counter.getAttribute('data-target'); //  + use to convert string into numbers

        const counterStart = Number(counter.innerHTML); //  Number use to convert string into numbers

        const incr = counterTarget / 100;

        if(counterStart < counterTarget){
            counter.innerHTML = `${Math.round(counterStart + incr)}`
            setTimeout(updateCounter, 10)
        }else{
            counter.innerHTML = counterTarget;
        }


    }


    updateCounter();

})



