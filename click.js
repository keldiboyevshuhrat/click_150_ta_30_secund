

let secund = document.querySelector("#secund");

let achko = document.querySelector("#achko");

let tugma = document.querySelector("#tugma");

let tugma_1 = document.querySelector("#tugma_1");

// console.log(tugma);

let body = document.querySelector("body")

let secund1 = secund.textContent









tugma.addEventListener("click", () => {
    let achko1 = achko.textContent






    function name1(params) {
        achko1++
        achko.textContent = achko1
        // console.log(achko1);
    } name1()


    let a1 = secund.textContent
    let b1 = achko.textContent


    function name(params) {
        if (b1 >= 150) {
            body.style.background = 'blue'
            clearInterval(achko_function_clear)
            console.log("true");
        } else {
            clearInterval(achko_function_clear)
            console.log("yoq");
            body.style.background = 'red'
        }


    }




})



tugma_1.addEventListener("click", () => {

    let achko_function_clear = setInterval(() => {
        secund1++

        secund.textContent = secund1
        // console.log("aasasasasasasasasasas");
    }, 1000)

    setTimeout(() => {

        clearInterval(achko_function_clear)
        if (achko.textContent >= 150) {
            console.log("dddd");
            body.style.background = "blue"

        } else {
            body.style.background = "red"
        }

    }, 30000)




})





