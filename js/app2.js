const hexBtnNav = document.querySelector('#hex-btn-nav');
const showPage2 = document.querySelector('.show-page');

const loadPage2 = () =>{
    showPage2.textContent='';
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
        <h1 class="text-2xl">Random Hex Colour Generator</h1>
        <div class="mt-2 mb-1 ">
        <span class="hex text-4xl border-solid border-2 border-orange-500 px-2">#ffffff</span>
        </div>
        <hr>
        <div>
        
        <button id="new-color" class="inline-flex items-center font-semibold leading-6 text-sm shadow rounded-md transition ease-in-out duration-150 hover:bg-gray-600 hover:text-white bg-gray-200 text-black border rounded-lg p-2 m-2 ring  focus:ring-offset-2 focus:ring-offset-orange-500">
            <!-- <i class="fas fa-spinner"></i> -->
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            New Color ...
        </button>
        </div>
    </div>
    `;
    showPage2.appendChild(div);
    const hexColor = document.querySelector('.hex');
    const newColor = document.querySelector('#new-color');
    
    const generateColor = () => {
        const randomColor = Math.random().toString(16).substring(2 , 8);
        document.body.style.backgroundColor = '#' + randomColor;
        hexColor.innerText = '#' + randomColor;
    }
    
    newColor.addEventListener('click', generateColor);

}


