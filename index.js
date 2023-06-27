import Slider from "./js/slider.js";

const data = [
    {
        index:'01',
        title: 'Nowe Wyzwania',
        quote: '1233',
        img: 'img/slide1.png',
    },
    {
        index:'02',
        title: 'Nowe Umięjętości',
        quote: 'ACBSSWEFW',
        img: 'img/slide2.png',
    },
    {
        index:'03',
        title: 'Nowe Plany',
        quote: '1233',
        img: 'img/slide3.png',
    },
];

const slider = new Slider(data,'.banner__describe-id','.banner__describe-title','.banner__describe-decription','.banner__img','.banner__dots-container span');
slider.start();