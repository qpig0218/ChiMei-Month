import React, { useState } from 'react';
import {
  BookOpen,
  TreePine,
  Lightbulb,
  Users,
  GraduationCap,
  HeartHandshake,
  Brain,
  Code,
  FlaskConical,
  CalendarDays,
  Handshake,
  Trophy,
  ChevronDown,
  ChevronUp,
  Hospital,
  Palette,
  Briefcase,
  Globe,
  Star,
  Scale,
  RefreshCcw,
  CircleGauge,
  Target,
  Hand,
  MessageSquare,
  Zap,
  Leaf,
  Dna,
  Laptop,
  BookMarked,
  Building, // Changed from BuildingCarousel
  MapPin,
  Clock,
  Megaphone,
  Pill,
  Syringe,
  Microscope,
  Award,
  Link,
  DollarSign,
  Landmark,
  FileText,
  Sparkles, // For general innovation/dream
  ScrollText, // For plan/document
  HeartPulse, // For health/care
  Brush, // For culture/art
  TrendingUp, // For evolution
  Focus, // For strategic focus
  ClipboardCheck // For quality/safety
} from 'lucide-react';

// 主應用程式元件
function App() {
  const [activeSection, setActiveSection] = useState('overview');

  // 鯉躍計劃的樹狀結構資料
  const carpLeapPlan = {
    root: {
      title: '奇美醫學教育之根：人本哲學與核心價值',
      icon: TreePine,
      description: '奇美醫學教育的根基深植於創辦人許文龍先生的哲學思想，這些思想濃縮為三大核心概念，引導著奇美醫院的發展方向。',
      sections: [
        {
          title: '第一性原理：回歸醫療初心與人性尊嚴',
          icon: Hand,
          content: '奇美醫學教育強調回到「人之為人、生之為人」的根本出發點。這意味著醫學教育不僅僅是傳授醫學知識，更要培養學生理解醫療的本質：維護人的尊嚴與滿足病患真正的需求。醫學生必須學會以病患為中心進行臨床思考，而非僅僅背誦書本知識。許文龍先生「人要過得幸福，追求幸福人生，最終還是要回到健康的心靈和強健的身體」的理念，直接體現了對「人」的根本關懷。奇美醫院品質管理中心提出的「人本(patient-centered)」軸心，強調共享決策(SDM)與病人參與共同設計(codesign)，以及病人辨識、跌倒預防等措施，都是「第一性原理」在實務中的具體體現。這種以原理與本質為導向的教育理念，呼應了當代醫學教育對人文關懷的重視，將醫療視為一門關乎生命的藝術和科學，需要以人文價值為基礎。奇美醫院堅信，唯有牢牢抓住這一人本初心，才能培養出醫者對病人深刻的同理心與倫理責任感。',
        },
        {
          title: '歸零重構：從挫折中學習與韌性養成',
          icon: RefreshCcw,
          content: '許文龍先生「不怕歸零」的精神，在奇美醫學教育中轉化為培養學生「歸零重構」的能力。這表示在遭遇複雜病情、不確定情境或挫折失敗時，醫學生能夠將自我歸零，回到最基本的臨床觀察與思考，再重新構築解決方案。創辦人理念中提到「跌倒了別急著站起來，先看看周圍有沒有寶物可以撿」，這句話完美詮釋了「歸零重構」的核心精神，即善於從經驗中學習並發現成長契機。這種韌性訓練能減輕未來職業倦怠的風險，培養學生正向看待挑戰，具備終身學習與適應的能力。這種對韌性的強調，是奇美醫院在醫學教育中獨特的價值主張，它認識到醫療工作的挑戰性，並致力於培養醫師在面對壓力與不確定性時的心理素質。',
        },
        {
          title: '360°全人平衡：專業與生活並重，追求幸福職場',
          icon: CircleGauge,
          content: '許文龍先生提倡「360°人生哲學」，強調生命的多面向和平衡發展。醫學生與醫護人員不僅要追求醫術精進，也要關注自己的身心靈健康、家庭生活與社會關懷，成為一個完整的人。奇美醫院認為，這種全人平衡的理念對醫療專業者尤為重要，因為唯有身心穩健且生活充實的醫護人員，才能長期以熱忱與同理心服務病人。奇美醫院教學中心提出的「照顧好同仁才能照顧好病人」的理念，直接呼應了「幸福職場」和「360°全人平衡」的概念，強調員工福祉是提供優質醫療服務的先決條件。這種對員工價值的重視，不僅是醫學教育的策略，更是人力資源管理的創新。在當前醫療人員職業倦怠日益嚴重的背景下，奇美醫院對「360°全人平衡」和「幸福職場」的重視，可能成為其吸引和留住優秀醫療人才的關鍵因素。這種獨特的哲學基底，使得奇美醫院在醫學教育領域中，能夠在強調人文關懷和韌性培養方面，與其他僅追求技術或知識傳授的機構形成差異化。',
        },
      ],
    },
    trunk: {
      title: '奇美醫學教育之幹：願景與使命',
      icon: Target,
      description: (
        <>
          立基於以上人本理念之根，奇美醫學教育體系的願景與使命隨之明確成形。奇美醫學教育的願景是：
          <span className="font-bold">「以人為本，學習者為中心；培育具備選擇未來能力的醫學人才。」</span>
          這意味著，奇美醫院致力於打造一個「回歸初心、勇於重塑、追求全人平衡」的醫學教育體系，使奇美醫學教育成為人文與創新並舉的典範。
        </>
      ),
      sections: [
        {
          title: '學生中心，病人導向',
          icon: Users,
          content: '奇美醫學教育的設計從學生的學習體驗出發，同時牢記醫療的最終對象是病人。教育體系強化以病人為中心的重構思維，培養學生將每個病例視為一個有生命故事的個體，而非單純的臨床資料。學生畢業後應具備站在病人角度思考的同理心與判斷力。奇美醫院品質管理中心強調「人本(patient-entered)：共享決策與病人參與共同設計」，直接體現了以病人為中心的理念。這種教育導向確保了醫療專業人員在追求技術卓越的同時，始終將病患的福祉與尊嚴置於核心。',
        },
        {
          title: '人文底蘊，專業並重',
          icon: BookOpen,
          content: '奇美醫院期望學生不僅成為醫學專家，更成為有人文素養的專業人士。醫學教育不再只是傳授生物醫學知識，而是強調「醫術與人文並舉」。將倫理學、醫學史、醫學人文課程納入核心，使學生理解醫療的社會脈絡和倫理挑戰。護理部強調「護理的過程有很多故事」、「醫療跟生命之間的傳遞」，與醫學人文中的敘事醫學和生命教育理念相符。吳園特展的規劃以「醫學人文為主」，包含「人文故事(醫療人員、病人)一由『咱』出發：每一個人都是一個感人的故事」以及「醫學文化藝術」展區，都是醫學人文教育具體活動的體現。奇美博物館布雷西亞廳的「醫學人文沙龍」和「在地職人、名人」分享，也直接體現了醫學人文的跨界交流。這種融合策略，清晰地將創辦人哲學與國際醫學教育趨勢(如勝任能力導向醫學教育、跨專業教育、社會責任)無縫融合，展現了前瞻性。',
        },
        {
          title: '批判思維，創新精神',
          icon: Lightbulb,
          content: '醫學教育體系致力於培養學生獨立思考和創新能力，以因應未來不斷變化的醫療環境。鼓勵學生進行「第一性思考」，即面對新問題時能從根本原理出發尋求解答，而非照本宣科。這種思維方式有助於學生發展解決複雜問題、運用科研證據的能力，以及跨領域合作的溝通領導技巧。奇美醫院的教育目標是培養學生具備在不確定性中做出明智決策的能力，鼓勵他們在實踐中不斷探索和創新。',
        },
        {
          title: '社會責任，全人發展',
          icon: Globe,
          content: (
            <>
              醫療專業的終極目的在於增進全民健康。奇美醫學教育體系教育學生胸懷社會，關注弱勢與公共衛生議題，成為具有社會責任感的醫師。「無牆醫院」的概念正是將醫療影響力從院內擴展到社區，全方位提升群體健康。奇美醫院品質管理中心強調「公平(equitable)：友善醫療」，以及<span className="font-bold">創辦人「照顧台南人的一世人」的願景</span>，都體現了對社會責任的承諾。吳園特展中「奇美在地創造醫療聯盟深耕在地醫療發展一實現『咱的醫院，照護台南鄉親』」的規劃，直接呼應了社會責任和「無牆醫院」的理念。這種對「無牆醫院」概念與社會責任的強調，預示了奇美醫院不僅將自身定位為醫療機構，更是社區健康的守護者和推動者，這將使其在地方社會中扮演更為核心的角色。這種融合策略有助於奇美醫院在人才市場上形成獨特吸引力。對於追求全面發展、不僅限於技術精進的醫學生而言，奇美醫院提供的教育環境將更具吸引力，有助於培養出更符合未來醫療體系需求的「全人醫師」。
            </>
          ),
        },
      ],
    },
    branches: {
      title: '「鯉躍計劃」四大枝枒：醫學教育的策略面向',
      icon: Leaf,
      description: '「鯉躍計劃」是奇美醫院醫學教育改革的核心方案，涵蓋師資培育、學生核心能力、醫學人文、數位賦能四大面向。這四大枝枒如同大樹的側枝，由主幹理念延伸而出，並與林宏榮院長倡導的智慧醫療、全人照護、無牆醫院策略相呼應。',
      sections: [
        {
          title: 'A. 師資培育：塑造持續學習的典範教育者',
          icon: GraduationCap,
          content: (
            <>
              <p>師資是醫學教育體系的根本支撐。奇美醫院期許教師本身能夠體現奇美「根」的精神——————堅持人本初心、勇於歸零學習、實踐360°平衡人生——成為學生的榜樣。優秀的醫學教育者不只是傳道授業解惑，更以言傳身教影響學生的專業態度和價值觀。將師資視為「典範教育者」並強調其「歸零學習」能力，是奇美醫院對教師角色深層次的理解，超越了傳統的「知識傳授者」。傳統師資培訓多聚焦於教學方法和專業知識更新，奇美則強調教師需「體現奇美之根」，即具備「第一性原理」、「歸零重構」和「360°平衡人生」的素養，並成為學生的「榜樣」。這意味著教師不僅要教導知識，更要以身作則，展示如何面對不確定性、如何從錯誤中學習、如何平衡工作與生活。</p>
              <p className="font-semibold mt-4">為打造高素質師資，奇美醫院推動以下策略：</p>
              <ul className="list-disc list-inside ml-4">
                <li><span className="font-medium">持續進修與歸零學習：</span>促進教師不斷更新專業知識與教育技巧。建立跨科際的師資研習社群，定期舉辦工作坊、讀書會，鼓勵教師分享教育經驗並進行反思。教師須定期進入臨床第一線實踐，保持對醫療現場的敏感度，同時投入教育研究，提高教學素養。這種不斷「歸零」的學習文化，使教師始終站在知識創新的前沿，樹立終身學習的典範。</li>
                <li><span className="font-medium">師生同行的導師制：</span>推行導師制度，讓每位醫學生都有資深醫師做導師，提供學業與生涯指導。導師不只是解答問題，更透過與學生共同參與臨床和研究，示範如何將人文關懷融入醫療、如何在壓力下保持平衡等。這種啟發式的引導，有助於學生發展專業認同，找尋行醫的價值與意義。</li>
                <li><span className="font-medium">跨域協同與師資多樣性：</span>醫學教育者不僅限於臨床醫師。奇美醫院邀請心理師、社工師、人文社科學者甚至藝術工作者參與教學團隊。例如，在溝通課程中由臨床心理師教授同理技巧，在人文課由作家或藝術家帶領敘事與反思練習。這種跨領域協同教學拓展了教師與學生的視野，也回應了國際倡導的「打破專業藩籬，促進跨專業合作」理念。</li>
              </ul>
            </>
          ),
        },
        {
          title: 'B. 學生核心能力：培養臨床重構力與全方位素養',
          icon: Brain,
          content: (
            <>
              <p>學生是醫學教育的中心，奇美醫學教育旨在幫助學生成長為合格的醫療人員。奇美醫院強調學生需具備回歸人性初心的能力，也要能隨時面對未知與挫折，在真實世界中解決複雜問題。這實質上對應於培養學生的核心勝任力。奇美醫院的學生核心能力培養，特別強調「臨床重構力」和「容忍不確定性」，這反映了對未來醫療複雜性的深刻理解。在「歸零重構」的哲學基礎上，奇美醫院將其轉化為學生在臨床上「重構思維」的能力，即在面對不確定和複雜的病況時，能夠回到問題的本質，重新組織資訊並尋找解決方案。這超越了單純的知識記憶或標準流程執行，而是強調醫師在面對未知時的應變和創新能力。這種能力培養模式，旨在訓練學生成為能夠在快速變化的醫療環境中持續學習和適應的「變革代理人」。它不僅提升了學生的臨床實力，也為他們未來的職業生涯注入了更強的韌性和創新潜力。</p>
              <p className="font-semibold mt-4">奇美醫院對學生核心能力的培養方向包括：</p>
              <ul className="list-disc list-inside ml-4">
                <li><span className="font-medium">臨床判讀與重構思維：</span>醫學生必須養成卓越的臨床推理能力，能夠從繁雜的病史與檢查結果中抓住本質。透過以病人為中心的病例教學，訓練學生不迷失於瑣碎資訊，而是回到「這個病人真正的問題是什麼？需要解決的核心是什麼？」這培養學生「臨床重構力」，即面對新的、未分類的臨床難題時，能以「第一性原理」重組資訊並找出創新解決方案。</li>
                <li><span className="font-medium">溝通同理與患者關係：</span>高超的醫療技術必須配合同理關懷才能發揮最大效益。奇美醫院要求學生培養優秀的溝通能力，包括傾聽病人敘事、解釋病情、與病人共同決策等技巧。課程中融入模擬病人練習，強化學生的同理心表達和人文關懷。</li>
                <li><span className="font-medium">團隊合作與領導：</span>現代醫療強調團隊協作，一位醫學生未來將在多學科團隊中工作。奇美醫院將「協同合作」納入學生核心能力培養目標。透過跨專業團隊訓練課程，培養學生的團隊意識與協調能力。品質管理中心強調的「有效(effective)：團隊合作全人照護、智慧醫療」，以及「即時(timely)：流程改造」，都與學生核心能力中的團隊合作、效率和應變能力相關。</li>
                <li><span className="font-medium">適應力與終身學習：</span>醫學知識日新月異，學生必須學會學習的方法。奇美醫學教育強調培養學生的自我導向學習能力和適應變革的心態。在課程中引入研究導向學習、實證醫學訓練，讓學生熟悉檢索文獻、批判性評估證據。</li>
              </ul>
              <p className="mt-4">奇美醫院的醫師PGY說明會和醫事職類PGY回娘家活動，直接針對PGY住院醫師的培訓和生涯發展，顯示奇美醫院對其核心教學對象的重視。透過課程與課外訓練的全方位設計，奇美醫院旨在打造學生的核心能力組合，使其成為兼具專業知識與技能、人文情懷、倫理觀念、團隊精神和創新思維的「五育並舉」全人醫師。</p>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg shadow-inner">
                <h3 className="text-lg font-bold text-blue-800 mb-2">奇美醫學教育核心勝任力與國際標準對應</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-blue-100 text-blue-700 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">奇美醫學教育核心勝任力</th>
                        <th className="py-3 px-6 text-left">國際醫學教育標準對應範例</th>
                        <th className="py-3 px-6 text-left">說明</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">臨床判讀與重構思維</td>
                        <td className="py-3 px-6 text-left">ACGME: Medical Knowledge, Patient Care; CanMEDS: Medical Expert</td>
                        <td className="py-3 px-6 text-left">培養學生在複雜、不確定情境下運用第一性原理進行診斷推理與創新解方。</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">溝通同理與患者關係</td>
                        <td className="py-3 px-6 text-left">ACGME: Interpersonal & Communication Skills, Professionalism; CanMEDS: Communicator, Collaborator, Professional</td>
                        <td className="py-3 px-6 text-left">強化醫病溝通技巧、傾聽敘事、同理心表達，建立良好醫病關係。</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">團隊合作與領導</td>
                        <td className="py-3 px-6 text-left">ACGME: Interpersonal & Communication Skills, Systems-Based Practice; CanMEDS: Collaborator, Leader</td>
                        <td className="py-3 px-6 text-left">訓練學生在跨專業團隊中有效協作、分工，並展現領導潛力。</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">適應力與終身學習</td>
                        <td className="py-3 px-6 text-left">ACGME: Practice-Based Learning & Improvement; CanMEDS: Scholar, Professional</td>
                        <td className="py-3 px-6 text-left">培養自我導向學習、實證醫學應用、從錯誤中學習的韌性與持續成長能力。</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">醫學人文素養</td>
                        <td className="py-3 px-6 text-left">ACGME: Professionalism; CanMEDS: Professional, Health Advocate</td>
                        <td className="py-3 px-6 text-left">透過跨學科人文課程、臨床人文融合、生命經驗教育，培養醫者的人文情懷、倫理判斷與社會關懷。</td>
                      </tr>
                      <tr className="hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">數位健康能力</td>
                        <td className="py-3 px-6 text-left">DECODE框架: Professionalism in Digital Health, Patient & Population Digital Health, Health Information Systems, Health Data Science</td>
                        <td className="py-3 px-6 text-left">訓練學生掌握數位工具、醫療資訊系統、AI應用，並理解數據倫理與隱私。</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          ),
        },
        {
          title: 'C. 醫學人文：厚植人文素養與全人關懷',
          icon: HeartHandshake,
          content: (
            <>
              <p>醫學人文教育的根本，在於強調人的尊嚴與關懷，這正是奇美醫療的初心所在。奇美醫院深信醫師不僅治病，更是治癒「生病的人」，因此必須了解人的文化、心理與社會脈絡。醫學人文涵蓋文學、歷史、倫理、藝術等多領域，其目標在培養醫學生的同理心、道德判斷與批判反思能力。奇美醫院的醫學人文教育，不僅限於課堂理論，更強調「臨床人文融合」和「生命經驗教育」，旨在培養醫學生深層次的同理心和對生命意義的體悟。傳統醫學人文教育常流於表面，僅教授倫理規範。奇美醫院則透過「床邊教學的人文指引」、「醫學隨筆寫作」以及邀請「安寧病房病人」或「大體老師家屬」分享生命故事，將人文教育從理論層面提升到實踐和情感體驗層面。這種「厚度累積」的教育方式，旨在讓學生真正「眼中有人」，而非僅是技術操作者。這種深層次的人文培養，與許文龍先生「身心並重」的哲學理念高度契合，也與「360°全人平衡」的目標相輔相成。當醫師擁有豐富的人文底蘊時，他們更能理解病人的整體需求，從而提供更具溫度的全人照護。在當前醫療糾紛頻繁、醫病關係緊張的背景下，奇美醫院對醫學人文的深度投入，不僅有助於改善醫病溝通，提升病人滿意度，更可能為醫療行業帶來一股清流，培養出真正受人尊敬和信任的醫師。這也為奇美醫院在社會形象上加分，強化其「有溫度」的品牌形象。</p>
              <p className="font-semibold mt-4">奇美醫學教育中大力推動醫學人文的融入，具體措施包括：</p>
              <ul className="list-disc list-inside ml-4">
                <li><span className="font-medium">跨學科人文課程：</span>開設系列醫學人文課程，內容涵蓋醫學倫理學、醫學史、文學與醫學、藝術與人類學等。例如，「醫學文學賞析」課程讓學生閱讀經典文學中與疾病、死亡相關的篇章，在討論中體會醫患的情感；「電影與醫學」課程則透過觀賞醫療主題電影，引導學生思考醫療的社會文化面向。</li>
                <li><span className="font-medium">臨床人文融合：</span>在臨床實習與見習中強調人文關懷的實踐。制定床邊教學的人文指引，要求帶教醫師在查房教學時，不僅講解病情，也討論病人的心理需求、家庭背景等。鼓勵學生記錄自己的臨床見聞，以寫作反思的方式總結學到的人性課題。護理部提到「護理的過程有很多故事」，感染管制中心強調「品質六大主軸」中的「人本(patient-entered)」，這些都為醫學人文的實踐提供了基礎。</li>
                <li><span className="font-medium">生命經驗教育：</span>邀請具有特殊生命經歷的人士與學生交流，作為醫學人文教育的一環。例如安排安寧病房的病人或罹患重症後康復的過來人，分享他們面對疾病的心路歷程；或舉辦遺體大體老師致敬儀式，讓學生從大體捐贈者家屬的發言中，體認醫學與生命、死亡之間的深刻聯繫。這些體驗式學習活動為學生提供了厚度累積的機會。</li>
              </ul>
              <p className="mt-4">吳園特展的「人文故事(醫療人員、病人)一由『咱』出發：每一個人都是一個感人的故事」以及「醫學文化藝術」展區，是醫學人文教育具體活動的體現。奇美博物館布雷西亞廳的「醫學人文沙龍」和「在地職人、名人」分享，直接體現了醫學人文的跨界交流。透過這些措施，奇美醫院期望學生經過培養，能具備深厚的人文底蘊，真正做到「眼中有人」。</p>
            </>
          ),
        },
        {
          title: 'D. 數位賦能：引領智慧醫療與數據驅動學習',
          icon: Code,
          content: (
            <>
              <p>在資訊爆炸與人工智慧時代，醫學教育必須擁抱數位技術，讓未來醫師善用科技提升醫療品質。奇美醫院強調數位與智慧醫療的核心並非技術本身，而是回歸醫療的初心——以人為本。科技應服務於人文關懷和臨床決策，而非喧賓奪主。同時，「歸零重塑」的精神也體現在數位時代的醫學教育中：醫學生和教師需不斷更新知識體系，勇於擺脫舊有模式，運用數據與人工智慧進行反思與創新。奇美醫院的願景是培養出能掌控科技又不失人性關懷的智慧醫療人才。</p>
              <p className="mt-4">奇美醫院將「數位賦能」與「學習型健康組織(Learning Health System, LHS)」理念深度結合，旨在建立一個「越治療越聰明」的醫療生態系統，而非僅是技術導入。奇美醫院的AI智慧醫院路徑圖(從1995年門診系統資訊化到2026年精準醫療、數位學生、AI個人化、照護機器人落地等規劃)顯示其在數位化方面的長期規劃。更重要的是，它將LHS的「數據-知識-實踐」循環融入醫學教育，讓學生參與品管圈、安全通報分析，甚至利用模擬病人數據庫進行臨床推理。這表明奇美不只引進技術，更在建構一個從臨床實踐中學習、透過數據反饋持續改進的組織文化。這種「數據驅動」的學習模式，與許文龍先生「歸零重構」的哲學理念相呼應。數據分析能幫助醫療人員「歸零」檢視現有流程的不足，並「重構」更優化的方案。同時，LHS強調的「病人與家庭參與」也與奇美的人本理念和「無牆醫院」概念一致。</p>
              <p className="font-semibold mt-4">數位賦能面向包含課程內容的更新與教學方式的創新兩方面：</p>
              <ul className="list-disc list-inside ml-4">
                <li><span className="font-medium">智慧醫療課程：</span>將關鍵的數位健康知識納入培養計畫，使學生畢業時具備基礎的醫療資訊學與AI素養。開設「醫療資訊學」、「人工智慧在醫學之應用」等選修課，介紹電子病歷、大數據分析、機器學習和決策支援系統等主題。課程涵蓋數據素養、數位工具使用、倫理與隱私、終身數位學習。奇美博物館豐收廳的「AI應用於醫學教育競賽發表會」決賽，是數位賦能具體活動的體現。</li>
                <li><span className="font-medium">數據驅動的學習型組織(Learning Health System, LHS)：</span>積極將LHS理念融入醫學教育，把醫院豐富的臨床資料和品質改善循環用於教學。例如，在見習階段讓學生參與醫院的品管圈或安全通報分析，學習如何透過數據找出系統問題並提出改進策略。引入模擬病人數據庫供學生進行臨床推理練習，利用虛擬案例實踐診斷決策，並由系統即時回饋。LHS被定義為「一個結合科學、資訊學、誘因與文化以達成持續改進與創新的體系」。其效益包括提升醫療品質、強化病人安全、成本控制、促進研究發展。全球LHS的典範案例(如ImproveCareNow、PCORnet、Connected Health Cities、瑞典全國品質註冊、日本濟生會熊本醫院、新加坡SingHealth & eHINTS)提供了寶貴的經驗。AI賦能次世代LHS，包括臨床決策支援、個人化醫療、流程自動化、促進聯盟合作等，並提醒AI應為賦能工具，補充而非取代人類專業，需關注數據偏倚、倫理規範。次世代LHS更敏捷、面向未來、強調實時智慧、多源資料、網絡化與生態系統化、病人與公眾參與、AI與精準醫療整合。</li>
                <li><span className="font-medium">混成與遠距教學：</span>全面導入混成式學習(blended learning), 將線上自主學習與課堂討論相結合。建立數位課程平台，提供預錄微課程影片、電子書與測驗題庫。發展遠距教學和虛擬實境(VR)模擬訓練，突破傳統教室與醫院牆壁的限制(呼應「無牆醫院」理念)。</li>
              </ul>
              <p className="mt-4">奇美醫院的數位賦能策略，旨在培養出能夠「人機協作」的未來醫師。這不僅提升了醫療效率和品質，也為學生提供了在實際工作中應用AI和數據科學的機會，使他們在畢業後能更好地適應智慧醫療的趨勢，並在該領域發揮領導作用。這也為奇美醫院在智慧醫療領域的創新和發展奠定了堅實基礎。</p>
              <div className="mt-6 p-4 bg-purple-50 rounded-lg shadow-inner">
                <h3 className="text-lg font-bold text-purple-800 mb-2">DECODE 框架下的數位健康勝任力培養內容</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-purple-100 text-purple-700 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">DECODE 框架四大領域</th>
                        <th className="py-3 px-6 text-left">奇美醫院培訓內容與實踐</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">數位健康專業素養</td>
                        <td className="py-3 px-6 text-left">醫療資訊倫理與法規課程、病人隱私保護實務、線上醫病互動模擬、數位溝通禮儀。</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">病人與族群數位健康</td>
                        <td className="py-3 px-6 text-left">遠距醫療操作與應用、健康App與穿戴裝置數據解讀、數位健康教育推廣、健康公平性議題討論。</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">健康資訊系統</td>
                        <td className="py-3 px-6 text-left">電子病歷系統深度操作、醫療資訊交換標準與實務、臨床決策支援系統應用、醫院資訊系統管理基礎。</td>
                      </tr>
                      <tr className="hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">健康資料科學</td>
                        <td className="py-3 px-6 text-left">醫療大數據分析基礎、AI在影像判讀與診斷輔助應用、機器學習原理與限制、數據驅動品質改善專案參與。</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          ),
        },
      ],
    },
    flowering: {
      title: '開花結果：持續精進的醫學教育研究與創新',
      icon: FlaskConical,
      description: '一棵大樹在深植根基、茁壯主幹、繁茂枝枒之後，最終目的是開花結果。在奇美醫學教育藍圖中，「開花結果」代表將透過醫學教育研究與評估迴圈，確保各項改革措施結出預期的果實，並為未來孕育新的成長動能。奇美醫院將醫學教育研究小組的「開花結果」定位，從單純的「評估」提升到「持續改進的引擎」，這反映了其對醫學教育「精準情境教學」與「永續發展」的承諾。',
      sections: [
        {
          title: '循證評估，閉環改進',
          icon: Dna,
          content: '教育研究小組負責設計並實施各種教學介入的評價研究，收集學生的學習成果與反饋意見。採用Kirkpatrick金字塔等評估模型，從反應、學習、行為到結果多層次評估教育效果。透過數據掌握改革的成效與不足之處，作為下輪課程修訂的依據，形塑一個PDCA(計畫-執行檢查-行動)的持續改進迴圈。學習型健康組織的核心理念即是「數據-知識-實踐」循環，強調資訊的持續流動與基於證據的改進。這與教育研究小組的「循證評估、閉環改進」理念完全一致。學習型健康組織的策略性導入強調「策略整合與持續演進」、「組織文化塑造」、「流程再造與知識轉化」、「數據基盤與治理」等，這些都是教育研究小組在推動醫學教育改進時需要考量的要素。多種學習型健康組織評估工具(如學習網絡成熟度矩陣NMG、KPWA LHS邏輯模型、LADDERS框架、LHS導入準備度自評問卷、LHS效益評估框架)可為奇美醫學教育研究小組提供具體的評估方法和指標，確保評估的科學性與全面性。',
        },
        {
          title: '教學創新與科研推動',
          icon: Microscope,
          content: '奇美醫院鼓勵教育研究小組探索各種前沿的教學法，例如隨機對照試驗比較不同教學策略的有效性，或利用學習分析(Learning Analytics)從線上學習平台數據中發現學習行為模式。這些研究不僅服務於院內改進，也將成果投稿至國內外醫學教育期刊，為全球醫學教育社群做出貢獻。',
        },
        {
          title: '政策回饋與師生參與',
          icon: Megaphone,
          content: '研究小組定期向教學委員會和院方匯報研究發現，確保政策制訂有據可循。奇美醫院也重視學生的聲音：透過問卷、座談等方式收集學生意見，學生代表亦參與課程改革討論。這種多方參與的機制營造出學習型組織文化。',
        },
      ],
    },
  };

  // 奇美月活動日程表資料
  const chimeiMonthSchedule = [
    {
      date: '11月1日(週六)',
      venue: '吳園',
      time: '09:00-12:00',
      activity: '腦中風暨腦創傷病友會: 有獎徵答、毛巾健康操、病友/家屬經驗分享',
      organizer: '復健治療師、營養師、醫師、居家護理師、臨床護理師',
    },
    {
      date: '11月1日-11月16日',
      venue: '吳園',
      time: '全天',
      activity: '吳園特展: 醫學人文與藝術展、人文故事(醫療人員、病人)、奇美在地創造醫療聯盟深耕在地醫療發展',
      organizer: '醫學人文、大台南醫療聯盟、中小型醫院',
    },
    {
      date: '11月1日/2日, 11月8日/9日(週末)',
      venue: '吳園',
      time: '全天',
      activity: '社區篩檢、健檢體驗市集(待確認)',
      organizer: '醫學人文、社區社團',
    },
    {
      date: '11月14日-11月28日',
      venue: '奇美博物館 布雷西亞廳',
      time: '全天',
      activity: '布雷西亞廳特展: 奇美醫院醫療設備、人員優化演進史(年代敘述主軸)',
      organizer: 'HIM捷思整合行銷',
    },
    {
      date: '11月15日(週六)',
      venue: '奇美博物館 豐收廳',
      time: '全天',
      activity: '感染管制會議、重症感染研討會',
      organizer: '品質管理中心、感染管制中心',
    },
    {
      date: '11月15日(週六)',
      venue: '奇美博物館 奇美廳',
      time: '全天',
      activity: '護理國際研討會',
      organizer: '護理部',
    },
    {
      date: '11月16日(週日)',
      venue: '奇美博物館 豐收廳',
      time: '全天',
      activity: '醫品&病安共識營',
      organizer: '品質管理中心、感染管制中心',
    },
    {
      date: '11月16日(週日)',
      venue: '奇美博物館 奇美廳',
      time: '全天',
      activity: '醫品&病安國際研討會: Clean Care, Safer Care 2.0、Building Equitable Care Systems、Holistic Care in Interprofessional Collaborative Practice、智慧醫療轉型、世界抗生素週啟動',
      organizer: '品質管理中心、感染管制中心、臺灣醫療品質協會、國際專家',
    },
    {
      date: '11月22日(週六)',
      venue: '奇美博物館 布雷西亞廳',
      time: '上午',
      activity: '沙龍: 醫學人文、AMEE心得分享',
      organizer: '教學行政管理員',
    },
    {
      date: '11月22日(週六)',
      venue: '奇美博物館 豐收廳',
      time: '上午、下午',
      activity: '醫師PGY說明會',
      organizer: '教學行政管理員',
    },
    {
      date: '11月22日(週六)',
      venue: '奇美博物館 奇美廳',
      time: '上午、下午',
      activity: 'YY Talk-當代人物論壇: 大咖、Andy老師、陳美伶、簡立峰',
      organizer: '教學行政管理員',
    },
    {
      date: '11月23日(週日)',
      venue: '奇美博物館 布雷西亞廳',
      time: '上午',
      activity: '醫事職類PGY回娘家、在地職人、名人沙龍',
      organizer: '教學行政管理員',
    },
    {
      date: '11月23日(週日)',
      venue: '奇美博物館 豐收廳',
      time: '上午',
      activity: 'AI應用於醫學教育競賽發表會(決賽)',
      organizer: '教學行政管理員',
    },
    {
      date: '11月23日(週日)',
      venue: '奇美博物館 豐收廳/布雷西亞廳',
      time: '下午',
      activity: '教學共識營workshop',
      organizer: '醫教委員、教學負責人、外部顧問、國外貴賓',
    },
    {
      date: '11月23日(週日)',
      venue: '奇美博物館 奇美廳',
      time: '上午、下午',
      activity: '醫學教育國際研討會: Lecture & Workshop',
      organizer: '教學行政管理員',
    },
  ];

  // 可展開/收合的內容元件
  const Accordion = ({ title, icon: Icon, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="border border-stone-300 rounded-lg mb-4 shadow-sm bg-neutral-50">
        <button
          className="flex justify-between items-center w-full p-4 text-lg font-semibold text-stone-700 bg-neutral-100 hover:bg-neutral-200 rounded-t-lg focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="flex items-center">
            {Icon && <Icon className="mr-3 text-emerald-600" size={24} />}
            {title}
          </span>
          {isOpen ? <ChevronUp className="text-stone-500" /> : <ChevronDown className="text-stone-500" />}
        </button>
        {isOpen && (
          <div className="p-4 border-t border-stone-300 text-stone-700 leading-relaxed">
            {children}
          </div>
        )}
      </div>
    );
  };

  // 頁面導覽列
  const Navbar = () => (
    <nav className="bg-gradient-to-r from-stone-500 to-stone-700 p-4 shadow-lg fixed w-full z-50 top-0">
      <div className="container mx-auto flex flex-wrap justify-center gap-4">
        <NavItem title="總覽" sectionId="overview" />
        <NavItem title="醫學教育" sectionId="carp-leap-plan" />
        <NavItem title="奇美月活動" sectionId="chimei-month-activities" />
        <NavItem title="跨界合作" sectionId="collaboration" />
        <NavItem title="預期效益" sectionId="benefits" />
      </div>
    </nav>
  );

  // 導覽項目元件
  const NavItem = ({ title, sectionId }) => (
    <button
      onClick={() => setActiveSection(sectionId)}
      className={`px-4 py-2 rounded-full text-white font-medium transition duration-300 ease-in-out
        ${activeSection === sectionId ? 'bg-emerald-500 shadow-md' : 'hover:bg-stone-600'}`}
    >
      {title}
    </button>
  );

  // 內容區塊元件
  const Section = ({ id, title, children }) => (
    <section id={id} className="py-12 px-4 sm:px-6 lg:px-8 bg-neutral-50 rounded-lg shadow-md mb-8">
      <h2 className="text-4xl font-extrabold text-stone-800 mb-8 text-center border-b-4 border-emerald-500 pb-4">
        {title}
      </h2>
      {children}
    </section>
  );

  // 總覽頁面視覺化內容
  const OverviewVisualization = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-stone-700">
      {/* 創辦人哲學 */}
      <div className="flex flex-col items-center p-6 bg-neutral-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <Brush className="text-rose-500 mb-4" size={48} />
        <h3 className="text-xl font-bold text-stone-800 mb-2 text-center">創辦人許文龍先生哲學</h3>
        <p className="text-center">「文化跟醫療」兩條路，旨在「照顧台南鄉親」身心健康，追求「幸福快樂、身心並重」。</p>
      </div>

      {/* 奇美月活動演進 */}
      <div className="flex flex-col items-center p-6 bg-neutral-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <TrendingUp className="text-amber-600 mb-4" size={48} />
        <h3 className="text-xl font-bold text-stone-800 mb-2 text-center">奇美月活動演進</h3>
        <p className="text-center">從「醫學教育月」擴展為全院多元聯展，最終聚焦於「三館聯展」形式。</p>
      </div>

      {/* 鯉躍計劃核心 */}
      <div className="flex flex-col items-center p-6 bg-neutral-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <ScrollText className="text-blue-500 mb-4" size={48} />
        <h3 className="text-xl font-bold text-stone-800 mb-2 text-center">「鯉躍計劃」核心</h3>
        <p className="text-center">強化醫學教育策略方案，接軌國際趨勢，培育新世代醫師核心能力。</p>
      </div>

      {/* 三館聯展聚焦 */}
      <div className="flex flex-col items-center p-6 bg-neutral-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <Building className="text-purple-500 mb-4" size={48} />
        <h3 className="text-xl font-bold text-stone-800 mb-2 text-center">三館聯展策略聚焦</h3>
        <p className="text-center">考量資源限制與協調難度，最大化效益，打造清晰品牌形象。</p>
      </div>

      {/* 整合醫學教育與人文關懷 */}
      <div className="flex flex-col items-center p-6 bg-neutral-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <HeartPulse className="text-red-500 mb-4" size={48} />
        <h3 className="text-xl font-bold text-stone-800 mb-2 text-center">整合醫學教育與人文關懷</h3>
        <p className="text-center">醫學教育、醫品病安、感染管制、護理、社區健康及生活型態醫學等多面向整合。</p>
      </div>

      {/* 無牆醫院理念 */}
      <div className="flex flex-col items-center p-6 bg-neutral-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <Hospital className="text-green-500 mb-4" size={48} />
        <h3 className="text-xl font-bold text-stone-800 mb-2 text-center">「無牆醫院」理念</h3>
        <p className="text-center">將醫療影響力從院內擴展到社區，實現醫療與社會的深度融合。</p>
      </div>
    </div>
  );


  return (
    <div className="font-inter bg-stone-100 min-h-screen pt-20"> {/* Changed main background */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
          body { font-family: 'Inter', sans-serif; }
          html { scroll-behavior: smooth; }
        `}
      </style>
      <Navbar />

      <main className="container mx-auto p-4">
        {/* 總覽 */}
        {activeSection === 'overview' && (
          <Section id="overview" title="奇美月活動總覽">
            <OverviewVisualization /> {/* Render the new visualization component */}
          </Section>
        )}

        {/* 醫學教育 (原鯉躍計劃) */}
        {activeSection === 'carp-leap-plan' && (
          <Section id="carp-leap-plan" title="奇美醫院「醫學教育-尋根之旅」">
            <div className="text-lg text-stone-700 leading-relaxed mb-8 text-center">
              <p>「鯉躍計劃」代表了奇美醫院對未來醫學教育的承諾與願景。它由深植的人本哲學之「根」滋養，支撐明確的教育「主幹」願景，再透過四大策略「枝枒」向外拓展，最終在持續研發中「開花結果」。</p>
            </div>

            {/* 根 */}
            <div className="relative mb-12">
              <div className="flex flex-col items-center">
                <div className="bg-emerald-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center w-24 h-24 text-center text-xl font-bold mb-4"> {/* Morandi green */}
                  <TreePine size={48} />
                </div>
                <h3 className="text-3xl font-bold text-emerald-800 mb-4">{carpLeapPlan.root.title}</h3> {/* Morandi green */}
                <p className="text-md text-stone-600 text-center max-w-2xl mb-8">{carpLeapPlan.root.description}</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {carpLeapPlan.root.sections.map((section, index) => (
                  <Accordion key={index} title={section.title} icon={section.icon}>
                    {section.content}
                  </Accordion>
                ))}
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-48px] w-1 h-12 bg-stone-300"></div> {/* Morandi grey */}
            </div>

            {/* 幹 */}
            <div className="relative mb-12 mt-12">
              <div className="flex flex-col items-center">
                <div className="bg-slate-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center w-24 h-24 text-center text-xl font-bold mb-4"> {/* Morandi blue/grey */}
                  <Target size={48} />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-4">{carpLeapPlan.trunk.title}</h3> {/* Morandi blue/grey */}
                <p className="text-md text-stone-600 text-center max-w-2xl mb-8">{carpLeapPlan.trunk.description}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {carpLeapPlan.trunk.sections.map((section, index) => (
                  <Accordion key={index} title={section.title} icon={section.icon}>
                    {section.content}
                  </Accordion>
                ))}
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-48px] w-1 h-12 bg-stone-300"></div> {/* Morandi grey */}
            </div>

            {/* 枝枒 */}
            <div className="relative mb-12 mt-12">
              <div className="flex flex-col items-center">
                <div className="bg-rose-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center w-24 h-24 text-center text-xl font-bold mb-4"> {/* Morandi rose */}
                  <Leaf size={48} />
                </div>
                <h3 className="text-3xl font-bold text-rose-800 mb-4">{carpLeapPlan.branches.title}</h3> {/* Morandi rose */}
                <p className="text-md text-stone-600 text-center max-w-2xl mb-8">{carpLeapPlan.branches.description}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {carpLeapPlan.branches.sections.map((section, index) => (
                  <Accordion key={index} title={section.title} icon={section.icon}>
                    {section.content}
                  </Accordion>
                ))}
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-48px] w-1 h-12 bg-stone-300"></div> {/* Morandi grey */}
            </div>

            {/* 開花結果 */}
            <div className="relative mb-12 mt-12">
              <div className="flex flex-col items-center">
                <div className="bg-amber-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center w-24 h-24 text-center text-xl font-bold mb-4"> {/* Morandi amber */}
                  <FlaskConical size={48} />
                </div>
                <h3 className="text-3xl font-bold text-amber-800 mb-4">{carpLeapPlan.flowering.title}</h3> {/* Morandi amber */}
                <p className="text-md text-stone-600 text-center max-w-2xl mb-8">{carpLeapPlan.flowering.description}</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {carpLeapPlan.flowering.sections.map((section, index) => (
                  <Accordion key={index} title={section.title} icon={section.icon}>
                    {section.content}
                  </Accordion>
                ))}
              </div>
            </div>
          </Section>
        )}

        {/* 奇美月活動實踐 */}
        {activeSection === 'chimei-month-activities' && (
          <Section id="chimei-month-activities" title="「奇美月」活動實踐：策略藍圖的具體展現">
            <div className="text-lg text-stone-700 leading-relaxed space-y-4 mb-8">
              <p>「奇美月」活動時間軸橫跨整個11月，核心場域為「三館聯展」：奇美博物館、吳園，以及奇美醫院自身的教育場域。這種跨場域的設計，旨在將醫療專業知識與人文藝術、社區生活緊密結合，實現「無牆醫院」的理念。</p>
              <p>奇美博物館布雷西亞廳特展(11月14日至11月28日)，以年代為敘述主軸，展示奇美醫院在醫療設備、人員優化演進史，從「夢想的起源」(創辦人許文龍先生)到1987年逢甲奇美醫院、1987年至1992年財團法人奇美醫院成立、1992年至今的深耕台南，以及未來展望。展場中將設立醫護人員人形裝置藝術，表達「以人為本，從根本出發」。</p>
              <p>吳園特展(11月1日至11月16日)，以醫學人文為主，從民眾角度規劃三大區域：人文故事(醫療人員、病人)、醫學文化藝術、奇美在地創造醫療聯盟深耕在地醫療發展。強調「咱的醫院，照護台南鄉親」。</p>
            </div>

            <h3 className="text-2xl font-bold text-stone-700 mb-6">奇美月活動日程表</h3>
            <div className="overflow-x-auto rounded-lg shadow-md">
              <table className="min-w-full bg-neutral-50"> {/* Changed table background */}
                <thead>
                  <tr className="bg-slate-500 text-white uppercase text-sm leading-normal"> {/* Changed table header background */}
                    <th className="py-3 px-6 text-left">日期</th>
                    <th className="py-3 px-6 text-left">場地</th>
                    <th className="py-3 px-6 text-left">時段</th>
                    <th className="py-3 px-6 text-left">活動內容</th>
                    <th className="py-3 px-6 text-left">主要協辦單位/參與部門</th>
                  </tr>
                </thead>
                <tbody className="text-stone-700 text-sm font-light"> {/* Changed text color */}
                  {chimeiMonthSchedule.map((event, index) => (
                    <tr key={index} className="border-b border-stone-200 hover:bg-neutral-100"> {/* Changed border and hover background */}
                      <td className="py-3 px-6 text-left whitespace-nowrap">{event.date}</td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">{event.venue}</td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">{event.time}</td>
                      <td className="py-3 px-6 text-left">{event.activity}</td>
                      <td className="py-3 px-6 text-left">{event.organizer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold text-stone-700 mt-12 mb-6">多元主題活動內容</h3>
            <div className="text-lg text-stone-700 leading-relaxed space-y-6">
              <p><span className="font-semibold text-emerald-600">醫學教育與創新：</span>醫師PGY說明會、AI應用於醫學教育競賽發表會、醫學教育國際研討會、教學共識營workshop、醫事職類PGY回娘家。</p>
              <p><span className="font-semibold text-emerald-600">醫品病安與感染管制：</span>感染管制會議、重症感染研討會、醫品&病安共識營/國際研討會、世界抗生素週啟動。</p>
              <p><span className="font-semibold text-emerald-600">護理與社區健康：</span>護理國際研討會、腦中風暨腦創傷病友會、社區篩檢、健檢體驗市集。</p>
              <p><span className="font-semibold text-emerald-600">醫學人文與藝術：</span>當代人物論壇YY Talk、醫學人文與藝術展、敘事醫學展。</p>
              <p><span className="font-semibold text-emerald-600">智慧醫療與科技：</span>AI應用於醫學教育競賽發表會、智慧醫療轉型與醫療品質提升論壇、奇美醫院的AI智慧醫院路徑圖。</p>
            </div>
          </Section>
        )}

        {/* 跨界合作模式與夥伴關係 */}
        {activeSection === 'collaboration' && (
          <Section id="collaboration" title="跨界合作模式與夥伴關係">
            <div className="text-lg text-stone-700 leading-relaxed space-y-6">
              <p>奇美月從單純的「醫學教育月」擴展為「三館聯展」並積極尋求市府合作，反映了其從「內部教育」向「城市品牌行銷」的策略轉型。這種轉型與「無牆醫院」的理念高度契合，將醫院的影響力從物理空間延伸到整個城市，實現醫療與社會的深度融合。</p>

              <Accordion title="與台南市政府、觀光局的聯合行銷與行政支援" icon={Landmark}>
                <p>奇美醫院將爭取臺南市觀光旅遊局或文化局作為活動協辦單位，取得官方背書與行政協助。例如，邀請市長或局長出席開幕記者會，以提高媒體關注度。市府將協助辦理相關申請流程(如場地借用、交通管制等)，並提供志工或公務資源支援，以降低博物館自行籌辦的行政負擔。奇美醫院將借重市府宣傳渠道，透過市府新聞稿、官方社群平台和觀光資訊網發布活動訊息，擴大活動曝光。活動名稱可結合城市品牌，如「臺南×奇美醫學文化月」，以提高辨識度與公信力。在臺南市官方觀光網站活動日曆上刊登奇美醫學文化月資訊，並於觀光局營運的旅遊平台推出相關套票或行程。市府與博物館將合作設計活動專屬導覽摺頁或地圖，標示奇美博物館及周邊醫學文化景點、美食店家，鼓勵旅客深度遊覽。</p>
              </Accordion>

              <Accordion title="與學術機構、產業夥伴的協同合作" icon={Building}>
                <p>奇美醫院將邀請國內外醫學教育專家參與國際研討會，提升學術水準。與南臺科大、人工智慧學校、資策會、巨匠電腦等合作舉辦數位技能工作坊、AI應用黑客松，推動產學合作。奇美醫院也將尋求醫療產業(製藥、生技公司)、在地企業、金融機構等作為活動贊助商，提供現金、實物或技術贊助，並設計多級贊助方案。</p>
              </Accordion>

              <Accordion title="在地商家與社區組織的參與" icon={MapPin}>
                <p>吳園特展中「奇美在地創造醫療聯盟深耕在地醫療發展」的規劃，旨在介紹大台南中、小型醫院資訊及相關聯盟策略。腦中風病友會積極邀請社區社團(如土風舞協會、婦女會)參與，強化社區連結。奇美醫院也考慮與在地特色商家合作，提供持票者專屬優惠券或小禮，帶動在地消費。奇美月規劃透過LINE官方帳號，建置吳園展示作品及相關醫療資訊與民眾互動，提供作品影音介紹、醫療聯盟資訊，這是一個重要的數位合作與推廣平台。</p>
              </Accordion>

              <Accordion title="套票設計和銷售通路的多樣化" icon={DollarSign}>
                <p>建議的套票組合(標準套票、雙人/團體套票、VIP套票)和加值在地優惠，以及多元銷售管道(線上票務平台、官網、實體售票、旅遊電商、市府觀光平台)，都旨在吸引不同類型的參與者：從專業人士到一般遊客，從本地居民到外縣市甚至國際旅客。這表明活動不僅追求專業深度，也重視廣泛的社會參與和商業可行性。這種精準行銷策略與「學習型健康組織」中「積極的利害關係人參與」要素相符。透過滿足不同群體的需求，活動能夠最大化其影響力和效益。這種商業化運作模式，有助於活動的永續發展，減少對單一資金來源的依賴。同時，透過與在地商家的合作，也將活動效益延伸到整個台南市的經濟體系，實現「文化+觀光」的雙贏。</p>
              </Accordion>
            </div>
          </Section>
        )}

        {/* 預期效益與影響力 */}
        {activeSection === 'benefits' && (
          <Section id="benefits" title="預期效益與影響力">
            <div className="text-lg text-stone-700 leading-relaxed space-y-6">
              <Accordion title="提升城市文化觀光品牌（「文化醫療之都」）" icon={Landmark}>
                <p>透過「醫學在地文化」的沉浸式活動，將台南打造成結合醫學與文化觀光的標誌性城市。吸引更多國內外遊客，提升台南的遊客人數與停留時間，促進觀光收入。</p>
              </Accordion>

              <Accordion title="促進市民健康參與與教育普及" icon={HeartHandshake}>
                <p>透過社區篩檢、健康講座、病友會等活動，提升市民對健康與醫學的認識，強化自我照護與復健動機。深化台南作為文化之都的形象。</p>
              </Accordion>

              <Accordion title="強化奇美醫院的醫學教育領導地位與社會責任" icon={Award}>
                <p>展示奇美醫院在醫學教育、醫品病安、感控、護理等領域的卓越成果與創新實踐。提升奇美醫院的國際影響力與知名度，吸引國際遊客與專家學者參與。</p>
              </Accordion>

              <Accordion title="帶動地方經濟與醫療軟實力輸出" icon={Briefcase}>
                <p>帶動相關產業(餐飲、住宿、文創產品)的發展。促進院際間的合作與學習，擴大醫療軟實力輸出。</p>
              </Accordion>
            </div>
          </Section>
        )}
      </main>

      <footer className="bg-stone-800 text-white text-center p-6 mt-12 rounded-t-lg shadow-inner">
        <p>&copy; 2025 奇美醫院「奇美月」視覺化。版權所有。</p>
        <p className="text-sm mt-2">此頁面旨在視覺化奇美醫院「奇美月活動總整理」內容，僅供參考。</p>
      </footer>
    </div>
  );
}

export default App;
