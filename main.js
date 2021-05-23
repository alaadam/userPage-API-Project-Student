const api = new APIManager()
const render = new Renderer()
let countUsersInLS = 0

$('#LoadData').click(function() {
  api.getDataFromAPI()
  });

$('#displayData').click(function() {
    render.renderPageData(api)
  });

$('#saveDataToLS').click(function() {
   localStorage.setItem('user', JSON.stringify(api)) 
   countUsersInLS++  
});
/*************************** */

$('#loadDataFromLS').click(function(){
  let data = JSON.parse(localStorage.user || "[]")
  render.renderPageData(data)
});