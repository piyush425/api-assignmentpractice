 async function getData(url) {
    try {
    
    let res = await fetch(url)
        let data = await res.json()
        
        return data
    }
    catch (e) {
        console.log(e);
    }
}
function appendata(products,parent) {
    products.meals.forEach(({strMeal,strMealThumb,strCategory,strInstructions}) => {
         
        let div = document.createElement('div')
        let div_int = document.createElement('div')
        div_int.innerHTML=strInstructions
        
        let p = document.createElement('h1')
        let category = document.createElement('h4')
        category.innerHTML=`category:${strCategory}`
        
        let img = document.createElement('img')
        
        img.src = strMealThumb
        
        p.innerHTML = strMeal

        div.append(img, p)
        
        parent.append(div,category,div_int);
         
     });
        
        
    
}
export { getData, appendata };


