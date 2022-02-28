
const countBtnNav = document.querySelector('#count-btn-nav');
const showPage = document.querySelector('.show-page');

const loadPage = () =>{
    showPage.textContent='';
    document.body.style.backgroundColor = '#ffffff';
    const div = document.createElement('div');
    div.classList.add('container');
    div.classList.add('text-center');
    div.classList.add('mx-auto');
    div.classList.add('flex');
    div.classList.add('justify-center');
    div.classList.add('items-center');
    div.classList.add('h-screen');
    div.innerHTML= `
    <div class="p-2 shadow-lg shadow-orange-300 text-white w-96 border rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500">
        <h1 class="text-2xl">Count Number</h1>
        <span class="count text-4xl">0</span>
        <hr>
        <div>
        <button id="down" class="hover:bg-red-600 hover:text-white bg-red-200 text-black border rounded-lg p-2 m-2 ring  focus:ring-offset-2 focus:ring-offset-orange-500">
            <i class="fas fa-arrow-down"></i>
            Down
        </button>
        <button id="reset" class="hover:bg-gray-600 hover:text-white bg-gray-200 text-black border rounded-lg p-2 m-2 ring  focus:ring-offset-2 focus:ring-offset-orange-500">
            <i class="fas fa-spinner"></i>
            Reset
        </button>
        <button id="up" class="hover:bg-green-600 hover:text-white bg-green-200 text-black border rounded-lg p-2 m-2 ring  focus:ring-offset-2 focus:ring-offset-orange-500">
            <i class="fas fa-arrow-up"></i>
            Up
        </button>
        </div>
    </div>
    `;
    showPage2.appendChild(div);
    const count = document.querySelector('.count');
    const up = document.querySelector('#up');
    const down = document.querySelector('#down');
    const resetCount = document.querySelector('#reset');

    up.addEventListener('click', function(){
        count.innerText++;
        setColor();
    });
    down.addEventListener('click', function(){
        count.innerText--;
        setColor();
    });
    resetCount.addEventListener('click', function(){
        count.innerText=0;
        setColor();
    });
    
    function setColor(){
        if(count.innerText>0){
            count.style.color='lightGreen';
        }else if(count.innerText<0){
            count.style.color='red';
        }else{
            count.style.color='white';
        }
    };
    
}

