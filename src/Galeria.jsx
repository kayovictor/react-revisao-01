import React from "react";
import img from './imagem/img.jpg'
import './galeria.css'
export default function Galeria() {
    return (
        <div className='todo'>
            <section>
                <h1>
                    Galeria de imagems
                </h1>
                <p>Aqui você encontra as imagens mais diversas.</p>
            </section>
            <div className='container'>
                <div className='conteudo'>
                    <img src={img} alt="alto-mar" width='300' />
                    <h1 className='text'>
                        Heading
                    </h1>
                    <p className='text'>
                        This is a media card. You can use this section to describe the content.
                    </p>
                    <a className='text link' href="#">VER</a>
                </div>
                <div className='conteudo'>
                    <img src={img} alt="alto-mar" width='300' />
                    <h1 className='text'>
                        Heading
                    </h1>
                    <p className='text'>
                        This is a media card. You can use this section to describe the content.
                    </p>
                    <a className='text link' href="#">VER</a>
                </div>
                <div className='conteudo'>
                    <img src={img} alt="alto-mar" width='300' />
                    <h1 className='text'>
                        Heading
                    </h1>
                    <p className='text'>
                        This is a media card. You can use this section to describe the content.
                    </p>
                    <a className='text link' href="#">VER</a>
                </div>
            </div>
        </div>
    )
}