document.addEventListener('DOMContentLoaded', () => {
    
    const categories = [
        { img_src: "./imagess/images1.jpg", title: "Grocery" },
        { img_src: "./imagess/images22.jpg", title: "Mobiles" },
        { img_src: "./imagess/images3.jpg", title: "Fashion" },
        { img_src: "./imagess/images44.jpg", title: "Electronics" },
        { img_src: "./imagess/images23.jpg", title: "Home & Furniture" },
        { img_src: "./imagess/images66.jpg", title: "Travel" },
        { img_src: "./imagess/images77.jpg", title: "Toy" },
        { img_src: "./imagess/images888.jpg", title: "Beauty" },
        { img_src: "./imagess/images9.jpg", title: "Two Wheelers" },
    ];

    const categoryContainer = document.getElementById("categorys");

    categories.forEach(element => {
        const image = document.createElement('img');
        image.src = element.img_src;
        const title = document.createElement("p");
        title.innerHTML = element.title;
        const box = document.createElement('div');
        box.append(image, title);
        categoryContainer.append(box);
    });

    
    const dataInput = document.getElementById("input_data");
    const searchForm = document.getElementById("search_form");
    const searchPop = document.querySelector(".search_pop");

    
    let recentArray = ["Mobile", "phone"];
    
    
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();

        recentArray.unshift(dataInput.value);
        renderRecent();
    });

    
    function renderRecent() {
        let recent_Search_html = '';
        recentArray.forEach(e1 => {
            recent_Search_html += `
                <div class="search_list">
                    <i class="fa-solid fa-clock-rotate-left"></i>
                    <p>${e1}</p>
                </div>
            `;
        });
        
        searchPop.innerHTML = recent_Search_html;
    }

    renderRecent();
});



const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;

function changeSlide(){
    for (let i =0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}

changeSlide();

prev_btn.addEventListener('click', (e)=>{
    if(n > 0){
        n--;

    }else{
        n = imgs.length - 1;
    }
    changeSlide();
})

next_btn.addEventListener('click', (e)=>{
    if(n > 0){
        n--;

    }else{
        n = imgs.length - 1;
    }
    changeSlide();
})