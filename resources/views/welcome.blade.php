@extends('layouts.app')

@section('content')
    
    <div class="fixed bg-cover w-full h-full overflow-hidden" style="background-image: url('https://source.unsplash.com/2560x1345/?sea')">
        
    </div>

    <div class="absolute container left-0 right-0 ">
        <div id="clock_wrap" class="flex flex-col items-center py-32 text-white font-extrabold text-4xl">

            <div class="flex items-center ">
                <span class="Hours text-10xl Hours ">04</span>
                <span class="text-10xl">:</span>
                <span class="Minutes text-10xl  ">04</span>
                <div class="flex flex-col ml-10">
                    <span class="AMPM text-5xl">PM</span>
                    <span class="Seconds text-5xl ">16</span>
                </div>
            </div>

            <h2><span class="years"></span>년 <span class="month"></span>월 <span class="days"></span>일 <span class="dayWeeks"></span></h2>

        </div>
    </div>

    <div class="fixed right-0 bottom-0 text-white mb-2 mr-10">
        <div class="flex items-center">
            
            <x-WeatherShow />
            
            <button class="rounded-full w-8 h-8  hover:border hover:bg-gray-800 hover:bg-opacity-25 hover:shadow-md text-lg"><i class="fas fa-crosshairs" ></i></button>
        </div>
    </div>


    


@endsection

@section('script')
    <script type="text/javascript" src="{{asset('js/clock.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/weather.js')}}"></script>
@endsection
