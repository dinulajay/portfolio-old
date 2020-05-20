$("h3").hover( (event) => {
   
    console.log(event)
    $(event.target.nextElementSibling).toggleClass("on-hover")
    
});
