console.log("script executed");

window.onload = function() {
    // these are run after the DOM elements are loaded
    // async taken into account
    load_header_data("http://127.0.0.1:7000/fen");
    load_pantry_data("http://127.0.0.1:7000/pantry");

    //load_menu_items("http://127.0.0.1:7000/menu");
    load_ingredients("http://127.0.0.1:7000/ingredients");
}

async function load_header_data(url) {
    try {        
        const resp = await fetch(url);
        const header_text = await resp.text();
        document.getElementById("page-header").textContent = header_text;
    } catch(err){
        console.error("error occurred when getting header text");
        console.error(err);
    }   
}

async function load_pantry_data(url) {
    try {        
        const resp = await fetch(url);
        const pantry_list = await resp.json();

        var ul = document.getElementById("pantry-items");

        pantry_list.forEach(item => {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(item["id"] + " - " + item["name"]));
            ul.appendChild(li);
        });   
    } catch(err){
        console.error("error occurred when getting header text");
        console.error(err);
    }   
}

//{
//async function load_menu_items(url) {
    //try {
     //   document.getElementById("menu-items").textContent = "waiting for server to respond with menu items";
      //  const resp = await fetch(url);
      //  const menu_data = await resp.json();
       // document.getElementById("menu-items").textContent = menu_data;
    //} catch(err){
       // console.error("error occurred when getting menu data");
       // console.error(err);
    //}   
//}


async function load_ingredients(url) {
    try {
        const resp = await fetch(url);
        const ingredients_data = await resp.json();
        document.getElementById("ingredients").textContent = ingredients_data;
    } catch(err){
        console.error("error occurred when getting ingredients data");
        console.error(err);
    }   
}