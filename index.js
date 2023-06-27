import Slider from "./js/slider.js";

const data = [
    {
        index:'01',
        title: 'Nowe Wyzwania',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, provident, voluptate dolor cum eaque, doloribus non quas eum iure mollitia eligendi est animi quis repellendus iste recusandae accusamus totam ipsum.',
        img: 'img/slide1.png',
    },
    {
        index:'02',
        title: 'Nowe Umięjętości',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, provident, voluptate dolor cum eaque, doloribus non quas eum iure mollitia eligendi est animi quis repellendus iste recusandae accusamus totam ipsum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, provident, voluptate dolor cum eaque, doloribus non quas eum iure mollitia eligendi est animi quis repellendus iste recusandae accusamus totam ipsum.',
        img: 'img/slide2.png',
    },
    {
        index:'03',
        title: 'Nowe Plany',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, provident, voluptate dolor cum eaque, doloribus non quas eum iure mollitia eligendi est animi quis repellendus iste recusandae accusamus totam ipsum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, provident, voluptate dolor cum eaque, doloribus non quas eum iure mollitia eligendi est animi quis repellendus iste recusandae accusamus totam ipsum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, provident, voluptate dolor cum eaque, doloribus non quas eum iure mollitia eligendi est animi quis repellendus iste recusandae accusamus totam ipsum.',
        img: 'img/slide3.png',
    },
];

const slider = new Slider(data,'.banner__describe-id','.banner__describe-title','.banner__describe-decription','.banner__img','.banner__dots-container span');
slider.start();