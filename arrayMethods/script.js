// asia Country

const data =new XMLHttpRequest();
data.open('GET','https://restcountries.com/v3.1/all');
data.send();
data.onload=function (){
    const countryData=JSON.parse(this.response);
    const asia=countryData.filter((element)=>{
        if(element.region==='Asia'){
            return element.name;
        }
    })
    asia.forEach((element)=>{
console.log(element.name.common);
});
 }


// Population

 const data1 =new XMLHttpRequest();
data1.open('GET','https://restcountries.com/v3.1/all');
data1.send();
data1.onload=function (){
    const data=JSON.parse(this.response);

    //console.log(data)
   const population = 200000
   const dataNew  = data.filter( value1 => value1.population < population )   
console.log(dataNew)
}

//Pname, capital, flag, using forEach function

const data2 =new XMLHttpRequest();
data2.open('GET','https://restcountries.com/v3.1/all');
data2.send();
data2.onload=function (){
    const data=JSON.parse(this.response);

    data.forEach((value)=>{
      console.log(value.name,value.flag,value.capital)
    }
  )
}


//Total Population

const data3 =new XMLHttpRequest();
data3.open('GET','https://restcountries.com/v3.1/all');
data3.send();
data3.onload=function (){
    const data=JSON.parse(this.response);

    const population = data.reduce((acc,value)=>{
      return acc+value.population
    },0)
    console.log("totalNoOfPopulation",population)
}


 // US dollars as currency.

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  const data = JSON.parse(this.response);
  console.log(data);
  const dollar_using_countries = data.filter((element) => {
    for (const key in element.currencies) {
      console.log("key: ", key);
      for (const item in element.currencies[key]) {
        console.log("item: ", item);
        return element.currencies[key][item] == "United States dollar";
      }
    }
  });
      dollar_using_countries.forEach((element) => {
    console.log(element.name.common);

  });
};








// const tot_pop = JSON.parse(this.response);
//     const population = tot_pop.reduce((acc,value)=>{
//         return acc+value.population;

//     },0);
//     console.log(population);
// }

