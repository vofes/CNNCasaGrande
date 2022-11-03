import React from "react";
import styled from "styled-components";


const PageContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Wrapper = styled.div `
    display: flex;
    width: 60%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HeaderButton = styled.button `
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid gray;
    color: white;

    text-align: center;
    font-size: 24px;
    font-weight: bold;
`;

const DropdownBody = styled.div `
  overflow: hidden;
  max-height: ${props => props.showDropdown === true ? "100vh" : "0"};
  transform-origin: top;
  transition: max-height 0.26s ease;
  text-align: center;
  font-size: 16px;
  color: #e2e2e2;
  font-family: 'courier new';
  line-height: 16pt;
`;

const Symbol = styled.div`
  margin-left: 15px;
`;

const Purple = styled.span `
  color: rgb(153, 50, 204);
`;

const Red = styled.span `
  color: rgb(255, 0, 0);
`

const Green = styled.span `
  color: rgb(25, 255, 25);
`

const Quote = styled.p `
  background-color: rgb(23, 24, 29);
  padding-top: 10px;
  padding-bottom: 10px;
  border-left: 2px solid red;
`

const Heading = (props) => {
  return (
    <HeaderButton onClick={props.onClick}>
      {props.text}
      <Symbol>{props.symbol}</Symbol>
    </HeaderButton>
  );
};

const Dropdown = (props) => {
  const [showDropdown, setShowDropdown] = React.useState(false);

  function ToggleDrowDown() {
    setShowDropdown(!showDropdown);
  }

  return (
    <Wrapper>
      <Heading text={props.title} symbol={showDropdown ? "˄" : "˅"} onClick={ () => ToggleDrowDown() }/>
      <DropdownBody showDropdown={showDropdown}>
        {props.content}
      </DropdownBody>
    </Wrapper>
  );
};

function RulesCNN() {
  return (
    <PageContainer>


      <Dropdown
        title={(
          <p><span style={{fontSize: "24px"}}><span style={{color: "orange"}}>Глава I. </span>Общее положение</span><br/></p>
        )}
        content={(
          <p>
            <Purple>1.1.</Purple> Объявления необходимо проверять круглосуточно.<br/>
            <Purple>1.2.</Purple> Ограничение в количестве символов: минимальное - 6, максимальное - 80. <br/>
            <Purple>1.3.</Purple> За нарушение ПРО сотрудник понесет наказание вплоть до увольнения. <br/>
            <Purple>1.4.</Purple> Спорные объявления могут быть отредактированы на усмотрение редактора. <br/>
            <Purple>1.5.</Purple> Объявления, нарушающие Правила Подачи объявлений, должны быть отклонены. <br/>
            <Purple>1.6.</Purple> Незнание правил не освобождает от ответственности. <br/>
            <Purple>1.7.</Purple> За нарушение данных правил руководство организации имеет право выдать наказание на свое усмотрение. <br/>
            <Purple>1.8.</Purple> Объявления запрещено использовать в качестве общения. <br/>
            <Purple>1.9.</Purple> В тексте объявления не должно содержаться ООС информации. <br/>
            <Purple>1.10.</Purple> В объявлениях запрещено использование нецензурных выражений. <br/>
            <Purple>1.11.</Purple> Объявления, не несущие в себе смысловой нагрузки, отклоняются. <br/>
            <Purple>1.12.</Purple> Объявления подаются ИСКЛЮЧИТЕЛЬНО на русском языке. Исключение: название авто. <br/>
            <Purple>1.13.</Purple> К редактированию объявлений допускаются сотрудники с 2 должности. <br/>
            <Purple>1.14.</Purple> Объявления редактируются за рабочим компьютером в офисе фракции. <br/>
            <Purple>1.15.</Purple> Сдавать Правила Редактирования Объявлений разрешено только сотрудникам с должностью Радиоведущий [5] и выше. <br/>
            <Purple>1.16.</Purple> Содержание объявления не должно быть изменено сотрудником, а лишь отредактировано по стандарту. <br/>
          </p>
        )}/>

      <Dropdown
        title={(
          <p><span style={{fontSize: "24px"}}><span style={{color: "orange"}}>Глава II. </span>Основные правила редактирования.</span><br/></p>
        )}
        content={(
          <p>
            <Purple>2.1.</Purple> Объявления должны быть отредактированы с исправлением всех орфографических ошибок автора. <br/>
            <Purple>2.2.</Purple> Каждый сотрудник Средств Массовой Информации обязан знать правила редактирования объявлений. <br/>
            <Purple>2.3.</Purple> Строго запрещено принимать объявления от игроков с ником Нон-РП формата (vasya, vasya_Pupkin). <br/>
            <Purple>2.4.</Purple> Обменивать товары можно исключительно, если они одного типа. <br/>

            <Quote>
              <Green>Можно:</Green> машина на машину, аксессуар на аксессуар, дом на дом. <br/>
              <Red>Нельзя:</Red> машину на аксессуар, дом на бизнес. <br/>
            </Quote>

            <Purple>2.5.</Purple> Разрешено редактировать любые объявления с предметами, для которых указана замена в Главе 4, либо в других пунктах правил. <br/>
            <Purple>2.6.</Purple> Все названия автомобилей, предметов, ресурсов, бизнесов - должны быть выделены в кавычки с обеих сторон. <br/>
            <Purple>2.7.</Purple> Запрещены объявления, содержащие более 1 единицы товара. Исключение: лен и хлопок, руды из шахты. <br/>
            <Purple>2.8.</Purple> Разрешено указывать уровень, заменив его на проживании лет в штате. <br/>

            <Quote>
              <Green>Верно:</Green> “Семья "Luis" ищет дальних родственников, проживающих от 5 лет в штате. Встреча у маяка”. <br/>
              <Red>Не верно:</Red> "Семья "Luis" ищет родственников с 5 уровнем. Встреча у маяка". <br/>
            </Quote>

            <Purple>2.9.</Purple> Разрешено указывать ВИП-статус, заменив его на грамоту. <br/>

            <Quote>
              <Green>Верно:</Green> “Семья "Luis" ищет дальних родственников с грамотой “Premium”. Встреча у маяка”. <br/>
              <Red>Не верно:</Red> "Семья "Luis" ищет родственников со статусом "Premium". Встреча у маяка". <br/>
            </Quote>

            <Purple>2.10.</Purple> Если в объявлении указано количество того или иного предмета/ресурса, указываем "..в кол-ве ** штук". <br/>

            <Quote>
              <Green>Верно:</Green> "Продам р/с "Золото" в кол-ве 300 штук. Цена договорная". <br/>
              <Green>Верно:</Green> "Продам игровые видеокарты 5 поколения в кол-ве 3 штук. Цена договорная". <br/>
              <Red>Не верно:</Red> "Продам р/с "Камень" 500 штук". Цена договорная". <br/>
            </Quote>

            <Purple>2.11.</Purple> В объявлениях разрешена реклама проходящих аукционов на дома/бизнесы. <br/>
            
            <Quote>
              <Green>Верно:</Green> "Сейчас проходит аукцион на дом №250 в г.Лос-Сантос". <br/>
              <Green>Верно:</Green> "Сейчас проходит аукцион на б/з "Магазин одежды" №105 в г.Лас-Вентурас". <br/>
            </Quote>
          </p>
        )}/>


    </PageContainer>
  );
}

export default RulesCNN;