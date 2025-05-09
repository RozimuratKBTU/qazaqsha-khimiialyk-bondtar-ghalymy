
import WikiLayout from "../components/WikiLayout";
import WikiInfoBox from "../components/WikiInfoBox";
import WikiImage from "../components/WikiImage";
import TableOfContents from "../components/TableOfContents";

const Index = () => {
  const tocItems = [
    { id: "overview", title: "Жалпы шолу", level: 1 },
    { id: "types", title: "Химиялық байланыстардың түрлері", level: 1 },
    { id: "covalent", title: "Ковалентті байланыс", level: 2 },
    { id: "ionic", title: "Иондық байланыс", level: 2 },
    { id: "metallic", title: "Металдық байланыс", level: 2 },
    { id: "hydrogen", title: "Сутектік байланыс", level: 2 },
    { id: "importance", title: "Маңыздылығы", level: 1 },
  ];

  return (
    <WikiLayout>
      <h1 className="wiki-title">Химиялық байланыстар</h1>
      
      <WikiInfoBox title="Химиялық байланыс">
        <div className="space-y-2 text-sm">
          <div className="w-full flex justify-center mb-3">
            <img 
              src="https://www.mozaweb.com/ru/mozaik3D/KEM/szerves/benzol/960.jpg"
              alt="Бензол молекуласының үш өлшемді моделі" 
              className="w-32 h-auto" 
            />
          </div>
          <p className="text-center text-xs mb-2">Бензол молекуласындағы ковалентті байланыстар</p>
          <div className="grid grid-cols-2 gap-1">
            <div className="font-medium">Анықтама:</div>
            <div>Атомдар арасындағы электрлік тартылыс</div>
            <div className="font-medium">Түрлері:</div>
            <div>Ковалентті, иондық, металдық, сутектік</div>
            <div className="font-medium">Күш:</div>
            <div>Кеңістіктік және электростатикалық әсерлерге байланысты</div>
            <div className="font-medium">Оқу саласы:</div>
            <div>Химия, физика</div>
          </div>
        </div>
      </WikiInfoBox>

      <p className="wiki-paragraph">
        <strong>Химиялық байланыс</strong> — атомдар арасында электрондарды тарту немесе бөлісу арқылы пайда болатын тартылыс күші. Химиялық байланыстар арқылы атомдар химиялық қосылыстар құрайды. Химиялық байланыстардың түрлеріне байланысты заттар әртүрлі қасиеттерге ие болады.
      </p>

      <TableOfContents items={tocItems} />

      <WikiImage 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Halit-Kristalle.jpg/330px-Halit-Kristalle.jpg"
        alt="Натрий және хлор арасындағы иондық байланыс"
        caption="Натрий мен хлор арасындағы иондық байланыстың қалыптасуы"
      />
      
      <h2 id="overview" className="wiki-subtitle">Жалпы шолу</h2>
      <p className="wiki-paragraph">
        Химиялық байланыстар атомдар бір-бірімен қосылған кезде пайда болады. Олар электрондардың қайта бөлінуі немесе бөлісілуі арқылы қалыптасады. Атомдар арасындағы байланыстың күші мен түрі элементтердің электронегативтілігіне, электрондық конфигурациясына және басқа факторларға байланысты.
      </p>
      
      <p className="wiki-paragraph">
        Химиялық байланыстар энергетикалық тұрғыдан тиімді, өйткені байланысқан атомдар бөлек атомдардан төменгі энергия күйінде болады. Бұл энергетикалық тұрақтылық химиялық қосылыстардың пайда болуына әкеледі.
      </p>
      
      <h2 id="types" className="wiki-subtitle">Химиялық байланыстардың түрлері</h2>
      <p className="wiki-paragraph">
        Химиялық байланыстарды бірнеше негізгі түрлерге бөлуге болады:
      </p>
      
      <h3 id="covalent" className="text-lg font-semibold mt-4 mb-2">Ковалентті байланыс</h3>
      <p className="wiki-paragraph">
        Ковалентті байланыс — екі атом арасында электрондарды бөлісу арқылы пайда болатын химиялық байланыс. Мұндай байланыс әдетте бейметалл элементтерінің атомдары арасында пайда болады. Ковалентті байланыс полярлы және полярлы емес болып бөлінеді.
      </p>
      
      <h3 id="ionic" className="text-lg font-semibold mt-4 mb-2">Иондық байланыс</h3>
      <p className="wiki-paragraph">
        Иондық байланыс — бір атомнан екінші атомға электрондар толық беру нәтижесінде пайда болатын электростатикалық тартылыс. Иондық байланыс әдетте металл мен бейметалл элементтерінің атомдары арасында пайда болады.
      </p>
      
      <h3 id="metallic" className="text-lg font-semibold mt-4 mb-2">Металдық байланыс</h3>
      <p className="wiki-paragraph">
        Металдық байланыс — метал атомдарының оң зарядталған иондары мен еркін электрондар арасындағы электростатикалық әрекеттесу. Бұл байланыс металдардың жылу мен электр тогының жақсы өткізгіштігін қамтамасыз етеді.
      </p>
      
      <h3 id="hydrogen" className="text-lg font-semibold mt-4 mb-2">Сутектік байланыс</h3>
      <p className="wiki-paragraph">
        Сутектік байланыс — сутек атомы мен электронегативтілігі жоғары атомдар (оттегі, азот немесе фтор) арасындағы әлсіз электростатикалық тартылыс. Сутектік байланыстар судың ерекше қасиеттерінің және биологиялық молекулалардың құрылымының негізінде жатыр.
      </p>
      
      <h2 id="importance" className="wiki-subtitle">Маңыздылығы</h2>
      <p className="wiki-paragraph">
        Химиялық байланыстар барлық заттардың негізгі құрылымдық элементтері болып табылады. Олар минералдардан бастап тірі организмдердің күрделі молекулаларына дейін барлық материалдардың қасиеттерін анықтайды. Химиялық байланыстарды түсіну фармацевтика, материалтану, биохимия және басқа да көптеген салаларда маңызды.
      </p>
      
      <p className="wiki-paragraph">
        Химиялық байланыстың түрі мен күші қосылыстардың физикалық және химиялық қасиеттеріне тікелей әсер етеді. Мысалы, ковалентті байланыспен байланысқан молекулалар балқу және қайнау температурасы төмен болуы мүмкін, ал иондық байланысқан қосылыстар жоғары балқу температурасын көрсетеді.
      </p>
    </WikiLayout>
  );
};

export default Index;
