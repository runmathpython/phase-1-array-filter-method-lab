const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
    const newDrivers = []
    for(const driver of drivers){
        if(driver.toLowerCase() === name.toLowerCase()){
            newDrivers.push(driver)
        }
    }
    return newDrivers
}

function fuzzyMatch(drivers, str) {
    const newDrivers = []
    const strLength = str.length
    for(const driver of drivers){
        if(driver.length >= strLength){
            if (driver.slice(0, strLength) === str){
                newDrivers.push(driver)
            }
        }
    }
    return newDrivers
}

const driversArray = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
  
/*
  function filter(collection, cb){
    const newCollection = []
    for (const driver of collection) {
        if(cb(driver.name)){
            newCollection.push(driver)
        }
    }
    return newCollection
}

const matchName = filter(driversArray, function(name){
    return name === 'Bobby'
})
*/

function matchName(driversArray, name){
    const newCollection = []
    for (const driver of driversArray) {
        if(driver.name === name){
            newCollection.push(driver)
        }
    }
    return newCollection
}
