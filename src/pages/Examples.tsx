
import WikiLayout from "../components/WikiLayout";
import WikiInfoBox from "../components/WikiInfoBox";
import WikiImage from "../components/WikiImage";
import TableOfContents from "../components/TableOfContents";
import { Separator } from "@/components/ui/separator";

const Examples = () => {
  const tocItems = [
    { id: "everyday", title: "Күнделікті өмірдегі мысалдар", level: 1 },
    { id: "covalent", title: "Ковалентті байланыс мысалдары", level: 1 },
    { id: "ionic", title: "Иондық байланыс мысалдары", level: 1 },
    { id: "metallic", title: "Металдық байланыс мысалдары", level: 1 },
    { id: "hydrogen", title: "Сутектік байланыс мысалдары", level: 1 },
    { id: "applications", title: "Химиялық байланыстардың қолданылуы", level: 1 },
  ];

  return (
    <WikiLayout>
      <h1 className="wiki-title">Мысалдар және қолданыстар</h1>
      
      <WikiInfoBox title="Химиялық байланыстар мысалдары">
        <div className="space-y-2 text-sm">
          <div className="w-full flex justify-center mb-3">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Table_salt_grains.jpg/220px-Table_salt_grains.jpg" 
              alt="Ас тұзы кристалдары" 
              className="w-32 h-auto" 
            />
          </div>
          <p className="text-center text-xs mb-2">Натрий хлориді (ас тұзы) — иондық байланыс мысалы</p>
          <div>
            <p className="text-center text-xs mt-4">Химиялық байланыстардың күнделікті өмірдегі мысалдары</p>
          </div>
        </div>
      </WikiInfoBox>

      <p className="wiki-paragraph">
        <strong>Химиялық байланыстар</strong> күнделікті өмірде кездесетін заттардың негізінде жатыр. Бұл бетте әртүрлі химиялық байланыс түрлерінің нақты мысалдары мен олардың практикалық қолданыстары келтірілген.
      </p>

      <TableOfContents items={tocItems} />

      <h2 id="everyday" className="wiki-subtitle">Күнделікті өмірдегі мысалдар</h2>
      <p className="wiki-paragraph">
        Химиялық байланыстар күнделікті өмірдегі көптеген заттар мен құбылыстарға негіз болады:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="border border-gray-200 rounded-sm p-4">
          <h3 className="font-semibold mb-2">Ас тұзы (NaCl)</h3>
          <WikiImage 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Salt_shaker_on_white_background.jpg/220px-Salt_shaker_on_white_background.jpg"
            alt="Ас тұзы"
            caption="Ас тұзы — иондық байланыстың мысалы"
            width="100%"
            float="none"
          />
          <p className="mt-2">Натрий мен хлор арасында иондық байланыс түзіледі, бұл тұздың кристалдық құрылымын қалыптастырады.</p>
        </div>
        
        <div className="border border-gray-200 rounded-sm p-4">
          <h3 className="font-semibold mb-2">Су (H₂O)</h3>
          <WikiImage 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Water_droplet_blue_bg05.jpg/220px-Water_droplet_blue_bg05.jpg"
            alt="Су тамшысы"
            caption="Су — ковалентті және сутектік байланыстардың мысалы"
            width="100%"
            float="none"
          />
          <p className="mt-2">Су молекуласында ковалентті байланыстар, ал су молекулалары арасында сутектік байланыстар түзіледі.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="border border-gray-200 rounded-sm p-4">
          <h3 className="font-semibold mb-2">Алюминий фольга</h3>
          <WikiImage 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Aluminium-foil.jpg/220px-Aluminium-foil.jpg"
            alt="Алюминий фольга"
            caption="Алюминий — металдық байланыстың мысалы"
            width="100%"
            float="none"
          />
          <p className="mt-2">Алюминийдегі металдық байланыстар оның созылғыштығы мен жылу/электр өткізгіштігін қамтамасыз етеді.</p>
        </div>
        
        <div className="border border-gray-200 rounded-sm p-4">
          <h3 className="font-semibold mb-2">Метан (CH₄)</h3>
          <WikiImage 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Methane-3D-space-filling.svg/220px-Methane-3D-space-filling.svg.png"
            alt="Метан молекуласы"
            caption="Метан — полярлы емес ковалентті байланыс мысалы"
            width="100%"
            float="none"
          />
          <p className="mt-2">Метан молекуласында көміртек пен сутек атомдары арасында полярлы емес ковалентті байланыстар түзіледі.</p>
        </div>
      </div>
      
      <h2 id="covalent" className="wiki-subtitle">Ковалентті байланыс мысалдары</h2>
      <p className="wiki-paragraph">
        Ковалентті байланыстар табиғатта және күнделікті өмірде кең таралған:
      </p>
      
      <div className="overflow-x-auto">
        <table className="wiki-table">
          <thead>
            <tr>
              <th>Зат</th>
              <th>Формуласы</th>
              <th>Байланыс түрі</th>
              <th>Қолданылуы</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Оттегі</td>
              <td>O₂</td>
              <td>Полярлы емес (қос)</td>
              <td>Тыныс алу, жану процестері</td>
            </tr>
            <tr>
              <td>Көмірқышқыл газы</td>
              <td>CO₂</td>
              <td>Полярлы</td>
              <td>Фотосинтез, газдалған сусындар</td>
            </tr>
            <tr>
              <td>Аммиак</td>
              <td>NH₃</td>
              <td>Полярлы</td>
              <td>Тыңайтқыштар, тазалау құралдары</td>
            </tr>
            <tr>
              <td>Хлороформ</td>
              <td>CHCl₃</td>
              <td>Полярлы</td>
              <td>Еріткіш, анестетик (бұрын)</td>
            </tr>
            <tr>
              <td>Этанол</td>
              <td>C₂H₅OH</td>
              <td>Полярлы</td>
              <td>Дезинфекциялау, отын</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <WikiImage 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Ammonia-3D-balls.png/220px-Ammonia-3D-balls.png"
        alt="Аммиак молекуласы"
        caption="Аммиак (NH₃) молекуласындағы ковалентті байланыстар"
        width="220px"
      />
      
      <h2 id="ionic" className="wiki-subtitle">Иондық байланыс мысалдары</h2>
      <p className="wiki-paragraph">
        Иондық байланыстар көптеген минералдарда, тұздарда және күнделікті қолданыстағы заттарда кездеседі:
      </p>
      
      <div className="overflow-x-auto">
        <table className="wiki-table">
          <thead>
            <tr>
              <th>Зат</th>
              <th>Формуласы</th>
              <th>Құрамындағы иондар</th>
              <th>Қолданылуы</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ас тұзы</td>
              <td>NaCl</td>
              <td>Na⁺ және Cl⁻</td>
              <td>Тамақ дәмдеуіш, консервант</td>
            </tr>
            <tr>
              <td>Кальций карбонаты</td>
              <td>CaCO₃</td>
              <td>Ca²⁺ және CO₃²⁻</td>
              <td>Әк, мәрмәр, бор</td>
            </tr>
            <tr>
              <td>Калий нитраты</td>
              <td>KNO₃</td>
              <td>K⁺ және NO₃⁻</td>
              <td>Тыңайтқыш, консервант</td>
            </tr>
            <tr>
              <td>Магний оксиді</td>
              <td>MgO</td>
              <td>Mg²⁺ және O²⁻</td>
              <td>Отқа төзімді материалдар, антацид</td>
            </tr>
            <tr>
              <td>Натрий гидроксиді</td>
              <td>NaOH</td>
              <td>Na⁺ және OH⁻</td>
              <td>Сабын жасау, тазалау құралдары</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <WikiImage 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Halit-Kristalle.jpg/220px-Halit-Kristalle.jpg"
        alt="Натрий хлориді кристалдары"
        caption="Натрий хлориді (NaCl) кристалдарындағы иондық байланыстар"
        width="220px"
        float="left"
      />
      
      <h2 id="metallic" className="wiki-subtitle">Металдық байланыс мысалдары</h2>
      <p className="wiki-paragraph">
        Металдық байланыстар таза металдар мен қорытпалардың негізін құрайды:
      </p>
      
      <div className="overflow-x-auto">
        <table className="wiki-table">
          <thead>
            <tr>
              <th>Металл/Қорытпа</th>
              <th>Құрамы</th>
              <th>Қасиеттері</th>
              <th>Қолданылуы</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Мыс</td>
              <td>Cu</td>
              <td>Жоғары электр өткізгіштік</td>
              <td>Электр сымдары, монеталар</td>
            </tr>
            <tr>
              <td>Алюминий</td>
              <td>Al</td>
              <td>Жеңіл, төзімді</td>
              <td>Ұшақтар, орама материалы</td>
            </tr>
            <tr>
              <td>Болат</td>
              <td>Fe + C (1-2%)</td>
              <td>Қатты, берік</td>
              <td>Құрылыс, көлік жасау</td>
            </tr>
            <tr>
              <td>Жез</td>
              <td>Cu + Zn</td>
              <td>Коррозияға төзімді</td>
              <td>Монеталар, музыкалық аспаптар</td>
            </tr>
            <tr>
              <td>Қола</td>
              <td>Cu + Sn</td>
              <td>Қатты, төзімді</td>
              <td>Мүсіндер, медальдар</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2 id="hydrogen" className="wiki-subtitle">Сутектік байланыс мысалдары</h2>
      <p className="wiki-paragraph">
        Сутектік байланыстар биологиялық жүйелерде және күнделікті өмірде маңызды рөл атқарады:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="border border-gray-200 rounded-sm p-4">
          <h3 className="font-semibold mb-2">ДНҚ құрылымы</h3>
          <WikiImage 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/DNA_Structure%2BKey%2BLabelled.pn_NoBB.png/220px-DNA_Structure%2BKey%2BLabelled.pn_NoBB.png"
            alt="ДНҚ құрылымы"
            caption="ДНҚ-дағы нуклеотидтер арасындағы сутектік байланыстар"
            width="100%"
            float="none"
          />
          <p className="mt-2">ДНҚ қос спиралі азотты негіздер арасындағы сутектік байланыстар арқылы тұрақтандырылады.</p>
        </div>
        
        <div className="border border-gray-200 rounded-sm p-4">
          <h3 className="font-semibold mb-2">Ақуыз құрылымы</h3>
          <WikiImage 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Protein-secondary-structure.png/220px-Protein-secondary-structure.png"
            alt="Ақуыз екінші құрылымы"
            caption="Ақуыздағы сутектік байланыстар"
            width="100%"
            float="none"
          />
          <p className="mt-2">Ақуыздардың спиральды және парақша құрылымдары сутектік байланыстар арқылы түзіледі.</p>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="wiki-table">
          <thead>
            <tr>
              <th>Зат/Құбылыс</th>
              <th>Сутектік байланыс түрі</th>
              <th>Әсері</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Су</td>
              <td>O-H···O</td>
              <td>Жоғары қайнау температурасы, беттік керілу</td>
            </tr>
            <tr>
              <td>ДНҚ</td>
              <td>N-H···N, N-H···O</td>
              <td>Қос спираль құрылымының тұрақтылығы</td>
            </tr>
            <tr>
              <td>Ақуыздар</td>
              <td>N-H···O</td>
              <td>Екінші және үшінші құрылымның тұрақтылығы</td>
            </tr>
            <tr>
              <td>Целлюлоза</td>
              <td>O-H···O</td>
              <td>Өсімдік жасушаларының қабырғасы құрылымы</td>
            </tr>
            <tr>
              <td>Алкогольдер</td>
              <td>O-H···O</td>
              <td>Жоғары қайнау температурасы</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2 id="applications" className="wiki-subtitle">Химиялық байланыстардың қолданылуы</h2>
      <p className="wiki-paragraph">
        Химиялық байланыстарды түсіну әртүрлі салаларда қолданылады:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="border border-gray-200 rounded-sm p-4">
          <h3 className="font-semibold mb-2">Медицина және фармацевтика</h3>
          <Separator className="mb-2" />
          <ul className="list-disc pl-4 text-sm space-y-1">
            <li>Дәрілік препараттарды жобалау</li>
            <li>Биологиялық белсенді қосылыстарды синтездеу</li>
            <li>Ауруларды молекулярлық деңгейде зерттеу</li>
          </ul>
        </div>
        
        <div className="border border-gray-200 rounded-sm p-4">
          <h3 className="font-semibold mb-2">Материалтану</h3>
          <Separator className="mb-2" />
          <ul className="list-disc pl-4 text-sm space-y-1">
            <li>Жаңа қорытпалар мен композиттер</li>
            <li>Наноматериалдар</li>
            <li>Жартылай өткізгіштер</li>
            <li>Полимерлер</li>
          </ul>
        </div>
        
        <div className="border border-gray-200 rounded-sm p-4">
          <h3 className="font-semibold mb-2">Энергетика</h3>
          <Separator className="mb-2" />
          <ul className="list-disc pl-4 text-sm space-y-1">
            <li>Күн элементтері</li>
            <li>Аккумуляторлар мен отын элементтері</li>
            <li>Катализаторлар</li>
            <li>Сутегі энергетикасы</li>
          </ul>
        </div>
      </div>
      
      <p className="wiki-paragraph">
        Химиялық байланыстарды зерттеу және қолдану арқылы ғалымдар жаңа материалдарды, дәрілік препараттарды және технологияларды жасайды. Байланыстардың түрі мен күшін өзгерту арқылы заттардың қасиеттерін мақсатты түрде өзгертуге болады.
      </p>
      
      <WikiImage 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Polymer_polyethylene.svg/330px-Polymer_polyethylene.svg.png"
        alt="Полиэтилен құрылымы"
        caption="Полиэтилен полимеріндегі ковалентті байланыстар"
        width="330px"
      />
      
      <p className="wiki-paragraph">
        Заманауи технологиялар химиялық байланыстарды молекулярлық деңгейде басқаруға мүмкіндік береді, бұл медицина, электроника, энергетика және басқа да көптеген салаларда инновациялық шешімдерге жол ашады.
      </p>
    </WikiLayout>
  );
};

export default Examples;
