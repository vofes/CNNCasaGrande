import React from "react";
import { Quote } from "../RulesStyle";

export const Chapter12 = () => {
    return(
<div STYLE="text-align: center">
    <br/>
    <span STYLE="font-family: 'courier new'"><span STYLE="font-size: 12px"><b><span STYLE="color: rgb(153, 50, 204)">12.1.</span></b> Пример обозначения прикрытия мафий/банд, при редактировании объявлений о собеседованиях к ним:<br/>
    <b><span STYLE="color: rgb(184, 49, 47)">Якудза</span></b> - Суши-бар "Якудза".<br/>
    <b><span STYLE="color: rgb(44, 130, 201)">Русская мафия</span></b> - ЧОП "Русский медведь".<br/>
    <b><span STYLE="color: rgb(147, 101, 184)">LaCosaNostra</span></b> - Гольф-клуб "ЛКН".<br/>
    <b><span STYLE="color: rgb(176, 52, 7)">Warlock </span></b>- Мото-клуб "Молли".<br/>
    <b><span STYLE="color: rgb(65, 168, 95)">Groove </span></b>- БК "Грув".<br/>
    <b><span STYLE="color: rgb(250, 197, 28)">Vagos </span></b>- ФК "Вагос".<br/>
    <b><span STYLE="color: rgb(84, 172, 210)">Aztec </span></b>- ФК "Ацтек".<br/>
    <b><span STYLE="color: rgb(153, 50, 204)">Ballas</span> </b>- БК "Баллас".<br/>
    <b><span STYLE="color: rgb(61, 142, 185)">Rifa </span></b>- ФК "Рифа".<br/>
    <b><span STYLE="color: rgb(163, 143, 132)">Ночные волки</span></b> - Тату-салон "Ночные волки".<br/>
    <b><span STYLE="color: rgb(153, 50, 204)">12.2.</span></b> Если в объявлении указан GPS на базу банды/мафии - добавляем в конце <span STYLE="color: rgb(247, 138, 114)">"Мы в навигаторе..."</span>.<br/>




    <Quote class="bbCodeBlock bbCodeBlock--expandable bbCodeBlock--quote">
        
        <div class="bbCodeBlock-content">
            
            <div class="bbCodeBlock-expandContent ">
                <b><span STYLE="color: rgb(25, 255, 25)">Верно:</span></b> "Проходит собеседование в Гольф-клуб "ЛКН". Мы в навигаторе 8-8".<br/>
    <b><span STYLE="color: rgb(25, 255, 25)">Верно:</span></b> "Проходит собеседование в БК "Рифа". Мы в навигаторе 8-2".<br/>
    <b><span STYLE="color: rgb(255, 0, 0)">Не верно:</span></b> "Проходит набор в БК "Баллас". ГПС 8-2".
            </div>
        </div>
    </Quote><b><span STYLE="color: rgb(153, 50, 204)">12.3.</span></b> Если в объявлении указан ранг, на который происходит прием - добавляем <span STYLE="color: rgb(247, 138, 114)">"..на * майку"</span>.<br/>




    <Quote class="bbCodeBlock bbCodeBlock--expandable bbCodeBlock--quote">
        
        <div class="bbCodeBlock-content">
            
            <div class="bbCodeBlock-expandContent ">
                <b><span STYLE="color: rgb(25, 255, 25)">Верно:</span></b> "Проходит собеседование в ФК "Ацтек" на 7 майку. Мы в навигаторе 8-4".<br/>
    <b><span STYLE="color: rgb(25, 255, 25)">Верно:</span></b> "Проходит собеседование в ЧОП "Русский медведь" на 4 майку. Ждем у особняка".<br/>
    <b><span STYLE="color: rgb(255, 0, 0)">Не верно:</span></b> "Идет набор в Мото-клуб "Молли" на 4 ранг. Ждем у клуба".
            </div>
        </div>
    </Quote>

</span></span></div>
    );
};