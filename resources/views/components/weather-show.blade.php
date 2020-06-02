<div x-data="{ isOpen : false }">

    <button 
    @mouseover="isOpen=true"
    class="rounded-md px-2 py-1 hover:border hover:bg-gray-800 hover:bg-opacity-25 hover:shadow-md ">20.0'c 서울
    </button>

    <div 
        x-show="isOpen" 
        class="absolute mx-auto container border border-orange-900 bg-orange-300 text-white"
        style="width:500px; height:350px; left:-400px; bottom:50px"
    >
        asfsafd
    </div>

</div>