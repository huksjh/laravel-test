<?php

namespace App\View\Components;

use Illuminate\View\Component;

class WeatherShow extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        $weather = [];
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {

        $this->weather = $this->getWeatherInfo();

        return view('components.weather-show', [
            'weather' => $this->weather,
        ]);
    }

    public function getWeatherInfo()
    {
        $ch = curl_init();
        $url = 'http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa'; /*URL*/
        $queryParams = '?' . urlencode('serviceKey') . '=' . config('services.openweather.key'); /*Service Key*/
        $queryParams .= '&' . urlencode('numOfRows') . '=' . urlencode('10'); /**/
        $queryParams .= '&' . urlencode('pageNo') . '=' . urlencode('1'); /**/
        $queryParams .= '&' . urlencode('regId') . '=11B00000'; /**/
        $queryParams .= '&' . urlencode('dataType') . '=' . urlencode('JSON'); /**/
        $queryParams .= '&' . urlencode('tmFc') . '=202006010600'; /**/

        curl_setopt($ch, CURLOPT_URL, $url . $queryParams);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
        $response = curl_exec($ch);
        curl_close($ch);

        return $response;
    }

}