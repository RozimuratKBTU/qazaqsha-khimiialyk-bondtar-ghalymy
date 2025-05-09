
import WikiLayout from "../components/WikiLayout";
import WikiInfoBox from "../components/WikiInfoBox";
import WikiImage from "../components/WikiImage";
import TableOfContents from "../components/TableOfContents";

const Covalent = () => {
  const tocItems = [
    { id: "definition", title: "Анықтамасы", level: 1 },
    { id: "types", title: "Түрлері", level: 1 },
    { id: "nonpolar", title: "Полярлы емес ковалентті байланыс", level: 2 },
    { id: "polar", title: "Полярлы ковалентті байланыс", level: 2 },
    { id: "properties", title: "Ковалентті байланыстар қасиеттері", level: 1 },
    { id: "examples", title: "Мысалдар", level: 1 },
  ];

  return (
    <WikiLayout>
      <h1 className="wiki-title">Ковалентті байланыс</h1>
      
      <WikiInfoBox title="Ковалентті байланыс">
        <div className="space-y-2 text-sm">
          <div className="w-full flex justify-center mb-3">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLkFYHznBMoQAvsCQWQ8xM3ntVR_PsCYE92Q&s"
              alt="Сутегі молекуласындағы ковалентті байланыс" 
              className="w-32 h-auto" 
            />
          </div>
          <p className="text-center text-xs mb-2">Сутегі молекуласындағы ковалентті байланыс</p>
          <div className="grid grid-cols-2 gap-1">
            <div className="font-medium">Анықтамасы:</div>
            <div>Электрон жұбын бөлісу арқылы пайда болатын байланыс</div>
            <div className="font-medium">Түрлері:</div>
            <div>Полярлы, полярлы емес</div>
            <div className="font-medium">Күші:</div>
            <div>Орта-күшті</div>
            <div className="font-medium">Кездесетін жері:</div>
            <div>Бейметалл элементтері арасында</div>
          </div>
        </div>
      </WikiInfoBox>

      <p className="wiki-paragraph">
        <strong>Ковалентті байланыс</strong> — атомдар арасында электрондарды бөлісу арқылы түзілетін химиялық байланыс. Бұл байланыс әдетте бейметалл элементтерінің атомдары арасында түзіледі. Ковалентті байланыс молекулярлық қосылыстардың негізін құрайды.
      </p>

      <TableOfContents items={tocItems} />

      <WikiImage 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSwJSq6j3M9TI3BlTOZBn1z-EclCiCm2LvDDj_74XjdwW_Gv6dftdci2xPK_rBOqGALGQ&usqp=CAU"
        alt="Метан молекуласындағы ковалентті байланыстар"
        caption="Метан (CH₄) молекуласындағы ковалентті байланыстар"
        width="250px"
      />
      
      <h2 id="definition" className="wiki-subtitle">Анықтамасы</h2>
      <p className="wiki-paragraph">
        Ковалентті байланыс атомдар арасында валенттік электрон жұбын бөлісу арқылы түзіледі. Бұл процесте әр атом электрондық октет (сегіздік) конфигурациясына жету үшін өзінің валенттік электрондарын бөліседі.
      </p>
      
      <p className="wiki-paragraph">
        Ковалентті байланыс атомдардың электронегативтілігі бірдей немесе жақын болғанда пайда болады. Ковалентті байланыста электрондар екі атом арасында орналасады, екі атомды да тартып, тұрақты құрылым түзеді.
      </p>
      
      <h2 id="types" className="wiki-subtitle">Түрлері</h2>
      <p className="wiki-paragraph">
        Ковалентті байланыстың негізгі екі түрі бар: полярлы және полярлы емес.
      </p>
      
      <h3 id="nonpolar" className="text-lg font-semibold mt-4 mb-2">Полярлы емес ковалентті байланыс</h3>
      <p className="wiki-paragraph">
        Полярлы емес ковалентті байланыс электронегативтілігі бірдей атомдар арасында түзіледі (мысалы, H₂, O₂, N₂). Мұндай байланыста электрондар екі атом арасында тең бөлінеді, сондықтан электр заряды жоқ.
      </p>
      
      <WikiImage 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr6CEFiggxEre4it1WMuojY6jYV4BegDuhQA&s"
        alt="Полярлы емес ковалентті байланыс"
        caption="Полярлы емес ковалентті байланыстың қалыптасуы"
        width="250px"
        float="left"
      />
      
      <p className="wiki-paragraph">
        Полярлы емес ковалентті байланыстар бар молекулалар симметриялы және диполь моменті жоқ. Мысалы, сутегі молекуласында (H₂) екі бірдей сутегі атомы арасында ковалентті байланыс түзіледі, онда электрондар екі атом арасында бірдей таралады.
      </p>
      
      <h3 id="polar" className="text-lg font-semibold mt-4 mb-2">Полярлы ковалентті байланыс</h3>
      <p className="wiki-paragraph">
        Полярлы ковалентті байланыс электронегативтілігі әртүрлі атомдар арасында түзіледі. Мұндай байланыста электрондар электронегативтілігі жоғары атомға қарай тартылады, нәтижесінде электрондар тең бөлінбейді.
      </p>
      
      <p className="wiki-paragraph">
        Электрондардың тең бөлінбеуі салдарынан молекулада жартылай оң және жартылай теріс зарядталған аймақтар пайда болады, бұл диполь моментін тудырады. Мысал ретінде HCl молекуласын келтіруге болады, онда хлор атомы электронегативтірек болғандықтан, электрондар хлор атомына қарай тартылып, оны жартылай теріс зарядтайды.
      </p>
      
      <h2 id="properties" className="wiki-subtitle">Ковалентті байланыстар қасиеттері</h2>
      <p className="wiki-paragraph">
        Ковалентті байланыстар келесі негізгі қасиеттерге ие:
      </p>
      
      <ul className="wiki-list">
        <li>Бағыттылық — ковалентті байланыстар кеңістікте белгілі бір бағытта орналасады</li>
        <li>Күш — ковалентті байланыстар әдетте орташа күшті (иондық байланыстардан әлсіздеу, бірақ сутектік байланыстардан күштірек)</li>
        <li>Қанықпағандық — атомдар бірнеше ковалентті байланыс түзе алады (мысалы, бір, екі немесе үш)</li>
        <li>Орташа балқу және қайнау температурасы — ковалентті байланысқан қосылыстардың балқу және қайнау температуралары аралық мәндерге ие</li>
      </ul>
      
      <h2 id="examples" className="wiki-subtitle">Мысалдар</h2>
      <p className="wiki-paragraph">
        Ковалентті байланыстың бірнеше мысалдары:
      </p>
      
      <table className="wiki-table">
        <thead>
          <tr>
            <th>Молекула</th>
            <th>Байланыс түрі</th>
            <th>Сипаттамасы</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>H₂</td>
            <td>Полярлы емес</td>
            <td>Екі сутегі атомы арасында бір ковалентті байланыс</td>
          </tr>
          <tr>
            <td>O₂</td>
            <td>Полярлы емес</td>
            <td>Екі оттегі атомы арасында қос ковалентті байланыс</td>
          </tr>
          <tr>
            <td>N₂</td>
            <td>Полярлы емес</td>
            <td>Екі азот атомы арасында үш ковалентті байланыс</td>
          </tr>
          <tr>
            <td>HCl</td>
            <td>Полярлы</td>
            <td>Сутек пен хлор арасында бір ковалентті байланыс</td>
          </tr>
          <tr>
            <td>H₂O</td>
            <td>Полярлы</td>
            <td>Оттегі мен екі сутегі атомы арасында бір-бірден ковалентті байланыс</td>
          </tr>
        </tbody>
      </table>
      
      <p className="wiki-paragraph">
        Ковалентті байланыстар органикалық молекулалардың құрылымын анықтауда маңызды рөл атқарады. Көміртек атомдары бір-бірімен және басқа элементтермен ковалентті байланыстар түзе алады, бұл органикалық қосылыстардың алуан түрлілігін қамтамасыз етеді.
      </p>
    </WikiLayout>
  );
};

export default Covalent;
