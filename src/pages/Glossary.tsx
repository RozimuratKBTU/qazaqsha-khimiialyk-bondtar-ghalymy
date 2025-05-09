
import WikiLayout from "../components/WikiLayout";
import TableOfContents from "../components/TableOfContents";
import { Separator } from "@/components/ui/separator";

const Glossary = () => {
  const tocItems = [
    { id: "a", title: "А", level: 1 },
    { id: "b", title: "Б", level: 1 },
    { id: "v", title: "В", level: 1 },
    { id: "g", title: "Г", level: 1 },
    { id: "d", title: "Д", level: 1 },
    { id: "e", title: "Е", level: 1 },
    { id: "i", title: "И", level: 1 },
    { id: "k", title: "К", level: 1 },
    { id: "m", title: "М", level: 1 },
    { id: "o", title: "О", level: 1 },
    { id: "p", title: "П", level: 1 },
    { id: "s", title: "С", level: 1 },
    { id: "t", title: "Т", level: 1 },
    { id: "e2", title: "Э", level: 1 },
  ];

  return (
    <WikiLayout>
      <h1 className="wiki-title">Терминдер глоссарийі</h1>
      
      <p className="wiki-paragraph">
        Бұл бетте химиялық байланыстар тақырыбына қатысты маңызды терминдер мен ұғымдар алфавиттік ретпен берілген.
      </p>

      <TableOfContents items={tocItems} />
      
      <h2 id="a" className="wiki-subtitle">A</h2>
      
      <dl className="space-y-4">
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Аксиальды байланыс</dt>
          <dd className="pl-4 mt-1">Молекулалық құрылымда вертикаль бағытта орналасқан химиялық байланыс.</dd>
        </div>
        
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Анион</dt>
          <dd className="pl-4 mt-1">Теріс зарядталған ион, электрон(дар) қабылдау нәтижесінде түзіледі.</dd>
        </div>
        
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Атомдық орбиталь</dt>
          <dd className="pl-4 mt-1">Электронның атом ядросы айналасында болу ықтималдығын сипаттайтын математикалық функция.</dd>
        </div>
      </dl>
      
      <h2 id="b" className="wiki-subtitle">Б</h2>
      
      <dl className="space-y-4">
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Байланыс диссоциация энергиясы</dt>
          <dd className="pl-4 mt-1">Химиялық байланысты үзу үшін қажетті энергия мөлшері.</dd>
        </div>
        
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Байланыс ұзындығы</dt>
          <dd className="pl-4 mt-1">Байланысқан екі атом ядролары арасындағы қашықтық.</dd>
        </div>
        
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Бөліспеген электрондар жұбы</dt>
          <dd className="pl-4 mt-1">Атомға тиесілі, бірақ байланыс түзуге қатыспайтын электрондар жұбы.</dd>
        </div>
      </dl>
      
      <h2 id="v" className="wiki-subtitle">В</h2>
      
      <dl className="space-y-4">
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Валенттілік</dt>
          <dd className="pl-4 mt-1">Атомның химиялық байланыстар түзуге қабілеттілігі, атом түзе алатын байланыстардың саны.</dd>
        </div>
        
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Ван-дер-Ваальс күштері</dt>
          <dd className="pl-4 mt-1">Молекулалар арасындағы әлсіз электростатикалық күштер, молекулалар арасындағы тартылысты қамтамасыз етеді.</dd>
        </div>
      </dl>
      
      <h2 id="g" className="wiki-subtitle">Г</h2>
      
      <dl className="space-y-4">
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Гибридизация</dt>
          <dd className="pl-4 mt-1">Атомдық орбитальдардың араласуы нәтижесінде гибридті орбитальдардың түзілуі, бұл ковалентті байланыстардың кеңістіктік бағдарлануын түсіндіреді.</dd>
        </div>
        
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Гомеополярлы байланыс</dt>
          <dd className="pl-4 mt-1">Ковалентті байланыстың басқа атауы, атомдар арасында электрондарды бөлісу арқылы түзіледі.</dd>
        </div>
      </dl>
      
      <h2 id="d" className="wiki-subtitle">Д</h2>
      
      <dl className="space-y-4">
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Дативті байланыс</dt>
          <dd className="pl-4 mt-1">Координациялық байланыс деп те аталады, онда электрондар жұбы бір атомнан (донор) екінші атомға (акцептор) беріледі.</dd>
        </div>
        
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Дипольді момент</dt>
          <dd className="pl-4 mt-1">Молекуладағы зарядтардың таралу симметриясын сипаттайтын шама, полярлық молекулаларға тән.</dd>
        </div>
      </dl>
      
      <h2 id="e" className="wiki-subtitle">Е</h2>
      
      <dl className="space-y-4">
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Еселік байланыс</dt>
          <dd className="pl-4 mt-1">Екі атом арасындағы екі немесе одан да көп ковалентті байланыстар, мысалы қос және үштік байланыстар.</dd>
        </div>
      </dl>
      
      <h2 id="i" className="wiki-subtitle">И</h2>
      
      <dl className="space-y-4">
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Иондық байланыс</dt>
          <dd className="pl-4 mt-1">Электрондардың толық берілуі нәтижесінде пайда болатын және қарама-қарсы зарядталған иондар арасындағы электростатикалық тартылыс арқылы түзілетін химиялық байланыс.</dd>
        </div>
        
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Иондану энергиясы</dt>
          <dd className="pl-4 mt-1">Нейтралды атомнан электронды алып тастау үшін қажетті энергия мөлшері.</dd>
        </div>
      </dl>
      
      <h2 id="k" className="wiki-subtitle">К</h2>
      
      <dl className="space-y-4">
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Катион</dt>
          <dd className="pl-4 mt-1">Оң зарядталған ион, электрон(дар)ды жоғалту нәтижесінде түзіледі.</dd>
        </div>
        
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Ковалентті байланыс</dt>
          <dd className="pl-4 mt-1">Атомдар арасында электрондарды бөлісу арқылы түзілетін химиялық байланыс. Екі түрі бар: полярлы және полярлы емес.</dd>
        </div>
        
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Координациялық байланыс</dt>
          <dd className="pl-4 mt-1">Дативті байланыс деп те аталады, онда электрондар жұбы бір атомнан екінші атомға беріледі.</dd>
        </div>
        
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Кристалдық тор</dt>
          <dd className="pl-4 mt-1">Қатты заттардағы атомдардың, иондардың немесе молекулалардың реттелген үш өлшемді құрылымы.</dd>
        </div>
        
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Кристалдық тор энергиясы</dt>
          <dd className="pl-4 mt-1">Кристалдық торды газ күйіндегі иондарға ыдырату үшін қажетті энергия.</dd>
        </div>
      </dl>
      
      <h2 id="m" className="wiki-subtitle">М</h2>
      
      <dl className="space-y-4">
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Металдық байланыс</dt>
          <dd className="pl-4 mt-1">Металл атомдарының оң зарядталған иондары мен еркін қозғалатын валенттік электрондар арасындағы электростатикалық әрекеттесу.</dd>
        </div>
        
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Молекулалық орбиталь</dt>
          <dd className="pl-4 mt-1">Молекуладағы электрондардың таралуын сипаттайтын орбиталь, бүкіл молекулаға тиесілі болады.</dd>
        </div>
      </dl>
      
      <h2 id="o" className="wiki-subtitle">О</h2>
      
      <dl className="space-y-4">
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Октет ережесі</dt>
          <dd className="pl-4 mt-1">Химиялық байланыстар түзу кезінде атомдар сегіз валенттік электрон алуға (немесе бөлісуге) тырысатындығын көрсететін ереже.</dd>
        </div>
      </dl>
      
      <h2 id="p" className="wiki-subtitle">П</h2>
      
      <dl className="space-y-4">
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Полярлы байланыс</dt>
          <dd className="pl-4 mt-1">Электронегативтілігі әр түрлі атомдар арасында түзілетін ковалентті байланыс, электрондар бір атомға қарай тартылады.</dd>
        </div>
        
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Полярлы емес байланыс</dt>
          <dd className="pl-4 mt-1">Электронегативтілігі бірдей немесе ұқсас атомдар арасында түзілетін ковалентті байланыс, электрондар екі атом арасында тең бөлінеді.</dd>
        </div>
        
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">π (пи) байланыс</dt>
          <dd className="pl-4 mt-1">p-орбитальдардың бүйірлік қабаттасуы нәтижесінде пайда болатын ковалентті байланыс, қос және үштік байланыстардың құрамдас бөлігі.</dd>
        </div>
      </dl>
      
      <h2 id="s" className="wiki-subtitle">С</h2>
      
      <dl className="space-y-4">
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">σ (сигма) байланыс</dt>
          <dd className="pl-4 mt-1">Атомдық орбитальдардың тікелей қабаттасуы нәтижесінде пайда болатын ковалентті байланыс, барлық жай байланыстардың негізі.</dd>
        </div>
        
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Сутектік байланыс</dt>
          <dd className="pl-4 mt-1">Сутек атомы мен электронегативті атом (оттегі, азот немесе фтор) арасындағы әлсіз электростатикалық тартылыс.</dd>
        </div>
      </dl>
      
      <h2 id="t" className="wiki-subtitle">Т</h2>
      
      <dl className="space-y-4">
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Теңіз электрондар моделі</dt>
          <dd className="pl-4 mt-1">Металдық байланысты түсіндіретін модель, онда валенттік электрондар бүкіл металл кристалы бойынша еркін қозғалады.</dd>
        </div>
      </dl>
      
      <h2 id="e2" className="wiki-subtitle">Э</h2>
      
      <dl className="space-y-4">
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Электрон жақындық энергиясы</dt>
          <dd className="pl-4 mt-1">Нейтралды атом электронды қабылдаған кезде бөлінетін энергия мөлшері.</dd>
        </div>
        
        <div className="border-b border-gray-200 pb-2">
          <dt className="font-semibold">Электронегативтілік</dt>
          <dd className="pl-4 mt-1">Атомның электрондарды өзіне тарту қабілетін сипаттайтын шама. Поллинг шкаласы бойынша өлшенеді.</dd>
        </div>
      </dl>
      
      <p className="wiki-paragraph mt-6">
        Бұл глоссарий химиялық байланыстармен байланысты негізгі терминдерді қамтиды. Химиялық байланыстарды жақсы түсіну үшін осы терминдерді білу өте маңызды.
      </p>
    </WikiLayout>
  );
};

export default Glossary;
