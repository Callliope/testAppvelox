import React from 'react';
import './electCard.css';

export default function Electrcard() {
  return (<div>
    <a id='titlecardblock'>Электронная карта</a>
    <div className='cardblock'>
        <div className='childBlock'>
            <div className='textasideimg'>
            <a className='titlechildblock'>Информация о пациенте
            </a>
            <ul>
                <li>Ваши личные данные</li>
                <li>Рекомендации врачей</li>
                <li>История болезней</li>
            </ul>
            </div>
        </div>
        <div className='childBlock'>
        <div className='textasideimg'>
            <a className='titlechildblock'>Результаты анализов
            </a>
           <p>Вы можете узнать здесь результаты своих анализов</p>
           </div>
        </div>
        <div className='childBlock'>
        <div className='textasideimg'>
            <a className='titlechildblock'>Добавить  информацию
            </a>
            <p>Добавляйте в свою электронную медицинскую карту новые данные</p>
            </div>
        </div>
        <div className='childBlock'>
        <div className='textasideimg'>
            <a className='titlechildblock'>История приемов
            </a>
            <p>Вся информация о полученных услугах за все время хранится здесь</p>
            </div>
        </div>
    </div>
    </div>
  )
}
