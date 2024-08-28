const search=document.querySelector('#search');
const search_btn=document.querySelector('#search-btn');
const img_container=document.querySelector('.img-container');

search_btn.addEventListener('click',async() => {
const search_value=search.value;
console.log(search_value,"search_value");
 if(search_value=='')
    {
        alert("please enter a search value");
        return ;
    }
    else{
        const key=`ve6treO7NBgFzribVTdCtMDsRyZ_ANcr1W1nYdTFl6c`;
        const url=`https://api.unsplash.com/search/photos?page=1&query=${search_value} &client_id=${key}`;
        let data=await fetch(url); /*code ko rukwane ke liye await use kiya or jis function mai await use  kernege 
                                     usko hume (async) kerna padega to humne uper async laga diya*/
       
        data=await data.json();
       
       console.log(data,"data");
        displayimages(data);
    }
})
function displayimages(data)
{   img_container.innerHTML=null;
    data.results.forEach(element => {
        console.log(element.urls.regular,"element.urls.regular")
        const img=document.createElement('img');//dynamically create an a img tag to tak the results which server provided to us  
        img.src=element.urls.regular
        img_container.appendChild(img);

    
    });
}