const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }
    const sarasa = []

    // Regular
    console.log("Hi")

    // Interpolated
    console.log(`Hi im ${sarasa}`)

    // Styled
    console.log('%c I am a great text',"font-size:50px")

    // warning!
    console.warn("Oh no!!")
    // Error :|
    console.error("Shit!")

    // Info
    console.info("Napoli won last serie A 33 years ago.")

    // Testing
    const p = document.querySelector('p')
    console.assert(p.classList.contains('ouch'),"You chose the wrong element")

    // clearing
    console.clear()

    // Viewing DOM Elements
    console.log('p')
    console.dir('p')

    // Grouping together
    dogs.forEach((dog)=>{
    
    console.group(`${dog.name}`)
    console.log(`This is ${dog.name}`)
    console.log(`${dog.name} is ${dog.age} years old`)
    console.log(`${dog.name} is ${dog.age*7} dog years old`)
    console.groupEnd(`${dog.name}`)
    })


    // counting

    // timing
    console.time('fetching data')
    fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
      console.timeEnd('fetching data')
      console.log(data)
    })

  