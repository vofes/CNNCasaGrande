import React from "react";
import { Quote } from "../RulesStyle";

export const Chapter5 = () => {
    return(
<div STYLE="text-align: center">
    <br/>
    <span STYLE="font-family: 'courier new'"><span STYLE="font-size: 12px"><b><span STYLE="color: rgb(153, 50, 204)">5.1.</span></b> Суммы <span STYLE="color: rgb(247, 138, 114)">"7кк"</span> или <span STYLE="color: rgb(247, 138, 114)">"200к"</span> заменяются <span STYLE="color: rgb(247, 138, 114)">на 7.000.000$ </span>и <span STYLE="color: rgb(247, 138, 114)">200.000$</span>.<br/>
    <b><span STYLE="color: rgb(153, 50, 204)">5.2.</span></b> <b><span STYLE="color: rgb(226, 80, 65)">Запрещено </span></b>указывать двойную цену <span STYLE="color: rgb(247, 138, 114)">(Цена 2.000.000$ или 3.000.000$)</span>.<br/>
    <b><span STYLE="color: rgb(153, 50, 204)">5.3.</span></b> Корректные форматы цены:</span><br/>
    <span STYLE="color: rgb(247, 218, 100)"><span STYLE="font-size: 12px">1к - 1.000$</span></span></span><br/>
    <span STYLE="color: rgb(247, 218, 100)"><span STYLE="font-family: 'courier new'"><span STYLE="font-size: 12px">10к - 10.000$<br/>
    100к - 100.000$<br/>
    1кк - 1.000.000$</span></span></span><br/>
    <span STYLE="font-family: 'courier new'"><span STYLE="color: rgb(247, 218, 100)"><span STYLE="font-size: 12px">10кк - 10.000.000$</span></span><br/>
    <span STYLE="font-size: 12px"><b><span STYLE="color: rgb(153, 50, 204)">5.4.</span></b> Большие цифры могут быть заменены на буквенный формат, если стоимость высокая <span STYLE="color: rgb(247, 138, 114)">(млн/млрд$)</span>.</span></span><br/>




    <Quote class="bbCodeBlock bbCodeBlock--expandable bbCodeBlock--quote">
        
        <div class="bbCodeBlock-content">
            
            <div class="bbCodeBlock-expandContent ">
                <span STYLE="font-family: 'courier new'"><span STYLE="font-size: 12px"><b><span STYLE="color: rgb(25, 255, 25)">Верно:</span></b> "Продам дом на горе Вайн-Вуд. Цена 220 млн$".<br/>
    <b><span STYLE="color: rgb(255, 0, 0)">Не верно:</span></b> "Продам а/с "Воздушный шар" с гравировкой +12. Цена 150кк".</span></span>
            </div>
        </div>
    </Quote>
</div>
    );
};