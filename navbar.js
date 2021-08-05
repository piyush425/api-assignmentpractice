function navbar() {
    
    return `

    <div id="navbar">
        <h3><a href="/">Home</a></h3>
        <div class="options">
           
               
            
            <h3><a href="./recipeodDay.html">Recipe of the Day</a></h3>
            <h3><a href="./latest.html">Show Latest receipe</a></h3>
            <h3><a href="">Register</a></h3>

        </div>
    
    </div>
    <div class="mid" id="mid">
    <input type="text" id="searchbar" placeholder="search">
                <button id="btnbar" >search receipe</button>
                
    </div>
    <div id="movie"></div>
    
    <div id="data"></div>
    <div id="data1"></div>
    <div id="data2"></div>

    `
}
export default navbar