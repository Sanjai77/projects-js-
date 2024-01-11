/*
'Chennai': population = 4646732
           literacyRate = 90.20
           language = 'Tamil'
'Bengaluru':population = 8443675
            literacyRate = 88.71
            language = 'Kannada'
'Mumbai':population = 12442373
        literacyRate = 89.73
        language = 'Marathi'
'Delhi': population = 16787941
         literacyRate = 86.20
         language = 'Hindi'
The Indian city of Bengaluru has a population of 8443675. Language spoken is Kannada and literacy rate is 88.71%.
*/
const button = document.querySelector('button')

//event listener
button.addEventListener('click',displayStats)
let resultdiv =document.createElement('div')
    resultdiv.id='result'
    document.getElementById('wrapper').appendChild(resultdiv)
function displayStats(){
    
    const input = document.getElementById("input")
    const city = input.options[input.selectedIndex].value
    let population = 0, literacyRate = 0, language =''
    switch(city){
        case 'bengaluru':
            population = 8443675
            literacyRate = 88.71
            language = 'Kannada'
            break
        case 'chennai':
            population = 4646732
            literacyRate = 90.20
            language = 'Tamil'
            break
        case 'mumbai':
            population = 12442373
            literacyRate = 89.73
            language = 'Marathi'
            break
        case 'delhi':
            population = 16787941
            literacyRate = 86.20
            language = 'Hindi'
            break

    }
    let text = `The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}%.`
    console.log(text)
    let resultdiv =document.createElement('div')
    resultdiv.id='result'
    document.getElementById('wrapper').appendChild(resultdiv)
    document.getElementById('result').innerHTML= text
}
