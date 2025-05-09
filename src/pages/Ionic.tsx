
import WikiLayout from "../components/WikiLayout";
import WikiInfoBox from "../components/WikiInfoBox";
import WikiImage from "../components/WikiImage";
import TableOfContents from "../components/TableOfContents";

const Ionic = () => {
  const tocItems = [
    { id: "definition", title: "Анықтамасы", level: 1 },
    { id: "formation", title: "Иондық байланыстың түзілуі", level: 1 },
    { id: "properties", title: "Иондық байланыстар қасиеттері", level: 1 },
    { id: "examples", title: "Мысалдар", level: 1 },
    { id: "comparison", title: "Ковалентті байланыспен салыстыру", level: 1 },
  ];

  return (
    <WikiLayout>
      <h1 className="wiki-title">Иондық байланыс</h1>
      
      <WikiInfoBox title="Иондық байланыс">
        <div className="space-y-2 text-sm">
          <div className="w-full flex justify-center mb-3">
            <img 
              src="https://thumbs.dreamstime.com/b/%D0%B0%D1%82%D0%BE%D0%BC-%D0%B8%D0%BE%D0%BD%D0%B0-%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD-%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B0-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BC%D0%BE%D0%BB%D0%B5%D0%BA%D1%83%D0%BB%D1%8B-%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-144614196.jpg"
              alt="Иондық байланыс схемасы" 
              className="w-32 h-auto" 
            />
          </div>
          <p className="text-center text-xs mb-2">Натрий хлориді (NaCl) құрылымында иондық байланыстар</p>
          <div className="grid grid-cols-2 gap-1">
            <div className="font-medium">Анықтамасы:</div>
            <div>Электронды беру нәтижесінде түзілетін электростатикалық тартылыс</div>
            <div className="font-medium">Түзілуі:</div>
            <div>Металл және бейметалл арасында</div>
            <div className="font-medium">Күші:</div>
            <div>Күшті</div>
            <div className="font-medium">Кездесетін жері:</div>
            <div>Тұздар, сілтілер, кейбір оксидтер</div>
          </div>
        </div>
      </WikiInfoBox>

      <p className="wiki-paragraph">
        <strong>Иондық байланыс</strong> — бір атомнан екінші атомға электрондардың толық берілуі нәтижесінде түзілетін электростатикалық тартылыс күші. Бұл байланыс әдетте металл және бейметалл элементтерінің атомдары арасында түзіледі.
      </p>

      <TableOfContents items={tocItems} />

      <WikiImage 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUZ2r457jfrrdlGhv6E-OiAZQCLeAmhQS8Gw&s"
        alt="Натрий мен хлор арасындағы иондық байланыс"
        caption="Натрий мен хлор арасындағы иондық байланыстың қалыптасуы"
        width="300px"
      />
      
      <h2 id="definition" className="wiki-subtitle">Анықтамасы</h2>
      <p className="wiki-paragraph">
        Иондық байланыс — электронегативтілігі жоғары айырмашылығына ие болатын екі атом арасындағы валентті электрондардың толық берілуі нәтижесінде пайда болатын электростатикалық тартылыс. Бұл процесте электронегативтілігі төмен атом (әдетте металл) электронегативтілігі жоғары атомға (әдетте бейметалл) электрон(дар) береді.
      </p>
      
      <p className="wiki-paragraph">
        Электрон берілгеннен кейін оң зарядты ион (катион) және теріс зарядты ион (анион) пайда болады. Осы иондар арасындағы электростатикалық тартылыс иондық байланыс деп аталады.
      </p>
      
      <h2 id="formation" className="wiki-subtitle">Иондық байланыстың түзілуі</h2>
      <p className="wiki-paragraph">
        Иондық байланыстың түзілуі үшін келесі шарттар орындалуы керек:
      </p>
      
      <ul className="wiki-list">
        <li>Бір атомның электрон беруге бейімділігі (төмен иондану энергиясы) болуы керек</li>
        <li>Екінші атомның электрон қабылдауға бейімділігі (жоғары электрон жақындық энергиясы) болуы керек</li>
        <li>Түзілетін қосылыс энергетикалық тұрғыдан тұрақты болуы керек (яғни, кристалдық тор энергиясы жоғары болуы тиіс)</li>
      </ul>
      
      <p className="wiki-paragraph">
        Иондық байланыстың ең жақсы мысалы — натрий хлориді (NaCl). Натрий атомы (Na) өзінің валенттік электронын оңай береді, ал хлор атомы (Cl) бір электронды оңай қабылдайды. Нәтижесінде Na⁺ және Cl⁻ иондары түзіліп, олар арасында иондық байланыс пайда болады.
      </p>
      
      <h2 id="properties" className="wiki-subtitle">Иондық байланыстар қасиеттері</h2>
      <p className="wiki-paragraph">
        Иондық байланыстар келесі қасиеттерге ие:
      </p>
      
      <ul className="wiki-list">
        <li>Бағытталмағандық — иондық байланыстар кеңістікте бағытталмаған, олар барлық бағытта бірдей әсер етеді</li>
        <li>Күштілік — иондық байланыстар ковалентті байланыстарға қарағанда күштірек болады</li>
        <li>Жоғары балқу және қайнау температурасы — иондық қосылыстар жоғары балқу және қайнау температурасына ие болады</li>
        <li>Ерігіштік — иондық қосылыстар суда жақсы ериді, бірақ органикалық еріткіштерде нашар ериді</li>
        <li>Электр өткізгіштік — балқыған немесе ерітілген күйде электр тогын жақсы өткізеді, бірақ қатты күйде өткізбейді</li>
      </ul>
      
      <h2 id="examples" className="wiki-subtitle">Мысалдар</h2>
      <p className="wiki-paragraph">
        Иондық байланыстың бірнеше мысалдары:
      </p>
      
      <table className="wiki-table">
        <thead>
          <tr>
            <th>Қосылыс</th>
            <th>Формуласы</th>
            <th>Түзілетін иондар</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Натрий хлориді</td>
            <td>NaCl</td>
            <td>Na⁺ және Cl⁻</td>
          </tr>
          <tr>
            <td>Магний оксиді</td>
            <td>MgO</td>
            <td>Mg²⁺ және O²⁻</td>
          </tr>
          <tr>
            <td>Кальций хлориді</td>
            <td>CaCl₂</td>
            <td>Ca²⁺ және 2Cl⁻</td>
          </tr>
          <tr>
            <td>Калий фториді</td>
            <td>KF</td>
            <td>K⁺ және F⁻</td>
          </tr>
          <tr>
            <td>Алюминий оксиді</td>
            <td>Al₂O₃</td>
            <td>2Al³⁺ және 3O²⁻</td>
          </tr>
        </tbody>
      </table>

      <WikiImage 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Sodium-chloride-3D-vdW.png/330px-Sodium-chloride-3D-vdW.png"
        alt="Натрий хлориді кристалдық құрылымы"
        caption="Натрий хлориді (NaCl) кристаллының құрылымы"
        width="220px"
        float="left"
      />
      
      <h2 id="comparison" className="wiki-subtitle">Ковалентті байланыспен салыстыру</h2>
      <p className="wiki-paragraph">
        Иондық және ковалентті байланыстарды салыстыру:
      </p>
      
      <table className="wiki-table">
        <thead>
          <tr>
            <th>Қасиеті</th>
            <th>Иондық байланыс</th>
            <th>Ковалентті байланыс</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Түзілуі</td>
            <td>Электрондардың толық берілуі</td>
            <td>Электрондарды бөлісу</td>
          </tr>
          <tr>
            <td>Элементтер арасында</td>
            <td>Металл және бейметалл</td>
            <td>Бейметалл және бейметалл</td>
          </tr>
          <tr>
            <td>Күші</td>
            <td>Күшті</td>
            <td>Орташа-күшті</td>
          </tr>
          <tr>
            <td>Бағыттылығы</td>
            <td>Бағытталмаған</td>
            <td>Бағытталған</td>
          </tr>
          <tr>
            <td>Балқу температурасы</td>
            <td>Жоғары</td>
            <td>Төмен-орташа</td>
          </tr>
          <tr>
            <td>Ерігіштігі</td>
            <td>Суда жақсы ериді</td>
            <td>Органикалық еріткіштерде жақсы ериді</td>
          </tr>
          <tr>
            <td>Электр өткізгіштігі</td>
            <td>Ерітінділерде немесе балқымада өткізеді</td>
            <td>Өткізбейді (көп жағдайда)</td>
          </tr>
        </tbody>
      </table>
      
      <p className="wiki-paragraph">
        Нақты қосылыстарда иондық және ковалентті байланыстардың аралас түрлері кездесуі мүмкін екенін ескеру керек. Элементтердің электронегативтілік айырмашылығына байланысты байланыс таза иондық немесе таза ковалентті емес, аралас сипатта болуы мүмкін.
      </p>
    </WikiLayout>
  );
};

export default Ionic;
