import React from "react";
import { Quote, Spoiler } from "../RulesStyle";

export const Chapter7 = () => {
    return(
<div STYLE="text-align: center">
    <br/>
    <span STYLE="font-family: 'courier new'"><span STYLE="font-size: 12px"><b><span STYLE="color: rgb(153, 50, 204)">7.1.</span></b> При редактировании объявления марка транспортного средства должна указываться полностью.<br/>
    <span STYLE="color: rgb(153, 50, 204)"><b>7.2.</b></span> Запрещено публиковать объявления о продаже транспортного средства, не указав его название.<br/>




    <Quote class="bbCodeBlock bbCodeBlock--expandable bbCodeBlock--quote">
        
        <div class="bbCodeBlock-content">
            
            <div class="bbCodeBlock-expandContent ">
                <b><span STYLE="color: rgb(255, 0, 0)">Не верно:</span></b> "Продам а/м. Цена договорная".<br/>
    <span STYLE="color: rgb(25, 255, 25)"><b>Верно:</b></span> "Отказано || Укажите название автомобиля."
            </div>
        </div>
    </Quote><b><span STYLE="color: rgb(153, 50, 204)">7.3.</span></b> Запрещено публиковать объявление с 2-мя и более транспортными средствами.<br/>
    <b><span STYLE="color: rgb(153, 50, 204)">7.4.</span></b> Если в объявлении указан полный тюнинг, то добавляем <span STYLE="color: rgb(247, 138, 114)">[ФT]</span> к названию транспорта.<br/>




    <Quote class="bbCodeBlock bbCodeBlock--expandable bbCodeBlock--quote">
        
        <div class="bbCodeBlock-content">
            
            <div class="bbCodeBlock-expandContent ">
                <b><span STYLE="color: rgb(25, 255, 25)">Верно:</span></b> "Продам а/м марки "Sultan [ФТ]". Цена договорная".<br/>
    <b><span STYLE="color: rgb(25, 255, 25)">Верно:</span></b> "Куплю м/ц марки "NRG-500 [ФТ]. Бюджет свободный".
            </div>
        </div>
    </Quote><b><span STYLE="color: rgb(153, 50, 204)">7.5.</span></b> Если в объявлении указан не полный тюнинг, либо частичный тюнинг, то добавляем <span STYLE="color: rgb(247, 138, 114)">[ЧТ]</span> к названию автомобиля.<br/>




    <Quote class="bbCodeBlock bbCodeBlock--expandable bbCodeBlock--quote">
        
        <div class="bbCodeBlock-content">
            
            <div class="bbCodeBlock-expandContent ">
                <b><span STYLE="color: rgb(25, 255, 25)">Верно:</span></b> "Продам а/м марки "Sultan [ЧТ]". Цена договорная".<br/>
    <b><span STYLE="color: rgb(25, 255, 25)">Верно: </span></b>"Куплю м/ц марки "NRG-500 [ЧТ]. Бюджет свободный".
            </div>
        </div>
    </Quote><b><span STYLE="color: rgb(153, 50, 204)">7.6.</span></b> Если в объявлении указан Twin Turbo, то дополняем объявление фразой <span STYLE="color: rgb(247, 138, 114)">"..с комплектацией Твин-Турбо"</span>.<br/>




    <Quote class="bbCodeBlock bbCodeBlock--expandable bbCodeBlock--quote">
        
        <div class="bbCodeBlock-content">
            
            <div class="bbCodeBlock-expandContent ">
                <b><span STYLE="color: rgb(25, 255, 25)">Верно: </span></b>"Продам а/м марки "Subaru WRX" с комплектацией Твин-Турбо. Цена договорная".<br/>
    <b><span STYLE="color: rgb(25, 255, 25)">Верно:</span></b> "Куплю в/с марки "Mountain" с комплектацией Твин-Турбо. Бюджет свободный".<br/>
    <b><span STYLE="color: rgb(255, 0, 0)">Не верно:</span></b> "Куплю в/т марки "Maverick TT". Бюджет свободный".<br/>
    <b><span STYLE="color: rgb(255, 0, 0)">Не верно:</span></b> "Куплю а/м марки "Bullet" с ТТ. Бюджет свободный".
            </div>
        </div>
    </Quote><b><span STYLE="color: rgb(153, 50, 173)">7.7.</span></b> Детали внешнего тюнинга автомобилей редактируются как <span STYLE="color: rgb(247, 136, 98)">"д/т"</span>.<br/>




    <Quote class="bbCodeBlock bbCodeBlock--expandable bbCodeBlock--quote">
        
        <div class="bbCodeBlock-content">
            
            <div class="bbCodeBlock-expandContent ">
                <b><span STYLE="color: rgb(25, 255, 25)">Верно:</span> </b>"Продам д/т "Мигалка". Цена договорная".<br/>
    <b><span STYLE="color: rgb(255, 0, 0)">Не верно:</span></b> "Продам доску для серфинга на авто. Цена договорная".
            </div>
        </div>
    </Quote><b><span STYLE="color: rgb(153, 50, 173)">7.8.</span></b> Детали технического тюнинга автомобилей редактируется как <span STYLE="color: rgb(247, 136, 98)">"запчасти для автомобиля"</span>.<br/>




    <Quote class="bbCodeBlock bbCodeBlock--expandable bbCodeBlock--quote">
        
        <div class="bbCodeBlock-content">
            
            <div class="bbCodeBlock-expandContent ">
                <b><span STYLE="color: rgb(25, 255, 25)">Верно: </span></b>"Продам запчасть для автомобиля "Турбокомпрессор sport+". Цена: Договорная".<br/>
    <b><span STYLE="color: rgb(255, 0, 0)">Не верно:</span></b> "Продам д/т "Тормоза Sport". Цена: Договорная".
            </div>
        </div>
    </Quote><b><span STYLE="color: rgb(153, 50, 173)">7.9.</span></b> Если в объявлении указано несколько запчастей, то указываем как <span STYLE="color: rgb(247, 136, 98)">"комплект запчастей"</span>.<br/>
    <b><span STYLE="color: rgb(25, 255, 25)">Верно:</span></b> "Продам комплект запчастей для автомобиля Sport+. Цена договорная".<br/>


        
        
            
            
        


        <div class="lbContainer lbContainer--inline" title="" data-xf-init="lightbox" data-lb-single-image="1" data-lb-container-zoom="1" data-lb-trigger=".js-lbImage-_xfUid-11-1667471639" data-lb-id="_xfUid-11-1667471639">
            
                <div class="lbContainer-zoomer js-lbImage-_xfUid-11-1667471639" data-src="https://i.imgur.com/pWb2mMv.png" aria-label="Zoom"></div>
            
        </div>

    <br/>
    <br/>


    <Spoiler title="Названия автомобилей">
        <div class="bbCodeSpoiler-content" STYLE="" tabindex="-1">
            <div class="bbCodeBlock bbCodeBlock--spoiler">
                <div class="bbCodeBlock-content">Аdmiral - Адмирал.<br/>
    Аlpha -Альфа.<br/>
    Bandito - Бандито.<br/>
    Banshee -Банши.<br/>
    BF Injection- БФ Инжекцон.<br/>
    Blade -Блэйд.<br/>
    Blista Compact - Блиста компакт.<br/>
    Buffalo - Буффало.<br/>
    Bullet - Буллет.<br/>
    Сadrona - Кадрона.<br/>
    Сheetah - Читах.<br/>
    Сlover - Кловер.<br/>
    Сlub - Клаб.<br/>
    Сomet - Комет.<br/>
    Elegant - Элегант.<br/>
    Elegy - Элегия.<br/>
    Euros - Еурос.<br/>
    Feltzer - Фельтзер.<br/>
    Flash - Флэш.<br/>
    Hotring Racer\Hotring Racer A\Hotring Racer B - Хотринг.<br/>
    Hotknife - Хотнайф.<br/>
    Huntley - Хантли.<br/>
    Hustler - Хастлер.<br/>
    Infernus - Инфернус.<br/>
    Landstalker - Ландсталкер.<br/>
    Mesa - Меса.<br/>
    Phoenix - Феника.<br/>
    Premier - Премьер.<br/>
    Rancher - Ранчер.<br/>
    Remington - Ремингтон.<br/>
    Romero - Ромеро.<br/>
    Sabre - Сабре.<br/>
    Sandking - Сандкинг.<br/>
    Savanna - Саванна.<br/>
    Stallion - Сталлион.<br/>
    Stratum - Стратум.<br/>
    Sultan - Султан.<br/>
    Super GT - Супер ГТ.<br/>
    Tahoma - Тахома.<br/>
    Tampa - Тампа.<br/>
    Turismo - Туризмо.<br/>
    Uranus - Уранус.<br/>
    Washington - Вашингтон.<br/>
    Windsor - Виндсор.<br/>
    ZR-350 - ЗР-350.<br/>
    Bike - Байк.<br/>
    BMX - БМХ.<br/>
    Mountain Bike - Горный велосипед.<br/>
    Jetmax - Джетмакс.<br/>
    Marquis - Маркиз.<br/>
    Reefer - Рифер.<br/>
    Speeder - Спиидер.<br/>
    Squalo - Скюало.<br/>
    Tropic - Тропик.<br/>
    Cargobob - Каргобоб.<br/>
    Maverick - Маверик.<br/>
    Sparrow - Спарроу.<br/>
    Shamal - Шамал.<br/>
    Stuntplane - Стантплейн.<br/>
    Raindance - Рейнденс.<br/>
    Chevrolet Corvette - Корветт.<br/>
    BMW X5 - БМВ X5.<br/>
    Audi RS6 - Ауди РС6.<br/>
    Mercedes G63AMG - Гелендваген.<br/>
    Mercedes GT63 - Мерседес ГТ63.<br/>
    Chevrolet Cruze - Шевролет Круз.<br/>
    Lexus LX - Лексус ЛХ.</div>
            </div>
        </div>
    </Spoiler></span></span>
</div>

    );
};