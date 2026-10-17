
const rawTopics = [
{
title:"1. Kompyuter tarixi",
questions:[
["Dastlabki mikrokompyuterlarda keng tarqalgan operatsion tizim qaysi edi?","MS-DOS|UNIX|Windows|CP/M",3],
["ENIAC nima bilan mashhur?","Ilk umumiy maqsadli elektron raqamli kompyuterlardan biri|Birinchi shaxsiy kompyuter|Birinchi mikrochip|Birinchi klaviatura",0],
["Dastlabki davrda kompyuterlarni bevosita boshqarish uchun qaysi til ishlatilgan?","COBOL|FORTRAN|Lisp|Assembly",3],
["Internet rivojlanishining muhim davri qaysi o‘n yillikda bo‘lgan?","1950-yillar|1970-yillar|1990-yillar|2000-yillar",1],
["UNIX operatsion tizimini kimlar yaratgan?","Bill Gates va Paul Allen|Steve Jobs va Steve Wozniak|Ken Thompson va Dennis Ritchie|Larry Page va Sergey Brin",2],
["Shaxsiy kompyuterlar keng tarqala boshlagan davr qaysi?","1950-yillar|1960-yillar|1970-yillar|1940-yillar",2],
["Moore qonuni nimani ta’riflaydi?","Chipdagi tranzistorlar soni ma’lum davrda taxminan ikki barobar ortishini|Internet tezligi har yili ikki barobar ortishini|Kompyuter narxi doim ikki barobar oshishini|Xotira doim kamayishini",0],
["Alan Turing kompyuter nazariyasida qaysi tushuncha bilan mashhur?","Saralash algoritmi|Mashinali o‘rganish algoritmi|Operatsion tizim|Tyuring mashinasi",3],
["Birinchi tranzistor qaysi tashkilot laboratoriyasida yaratilgan?","Bell Labs|IBM|Intel|Microsoft",0],
["ARPANETning asosiy maqsadlaridan biri nima edi?","Ilmiy tadqiqot kompyuterlarini bog‘lash va resurs almashish|Faqat o‘yin yaratish|Shaxsiy kompyuter sotish|Mobil telefon ishlab chiqarish",0]
]},
{
title:"2. Ma’lumotlar bazasi",
questions:[
["Ma’lumotlar bazasi nima?","Dastur kodi|Tartiblangan ma’lumotlar to‘plami|Operatsion tizim|Kompyuter qurilmasi",1],
["Ma’lumotlar bazasini boshqarish tizimi nima?","DBMS|CPU|RAM|HTML",0],
["SQL nimani anglatadi?","Structured Query Language|Simple Question List|System Quality Logic|Standard Quick Link",0],
["Jadvaldagi qator nima deyiladi?","Ustun|Yozuv|Maydon|Indeks",1],
["Jadvaldagi ustun nimani ifodalaydi?","Alohida atributni|Butun bazani|Serverni|Faylni",0],
["Primary key nima?","Takrorlanishi mumkin bo‘lgan qiymat|Yozuvni yagona aniqlovchi kalit|Jadval nomi|SQL buyrug‘i",1],
["Foreign key nima uchun ishlatiladi?","Jadvallar o‘rtasida bog‘lanish yaratish|Kompyuterni o‘chirish|Matnni formatlash|Faylni siqish",0],
["SQL orqali ma’lumot olish buyrug‘i qaysi?","SELECT|DELETE|DROP|UPDATE",0],
["Ma’lumotlarni o‘zgartirish buyrug‘i qaysi?","UPDATE|SELECT|CREATE|GRANT",0],
["Backup nima?","Zaxira nusxa|Jadval ustuni|Ma’lumot turi|Indeks nomi",0]
]},
{
title:"3. Kompyuter arxitekturasi",
questions:[
["CPU nima?","Markaziy protsessor|Qattiq disk|Monitor|Klaviatura",0],
["RAM qanday xotira?","Doimiy|Tezkor va vaqtinchalik|Optik|Tashqi",1],
["ROM nima?","Faqat vaqtinchalik xotira|Doimiy xotira|Protsessor|Tarmoq",1],
["ALU nima bajaradi?","Arifmetik va mantiqiy amallar|Internetga ulanish|Fayl chop etish|Ovoz yozish",0],
["GPU nima uchun ishlatiladi?","Grafik hisoblash|Matn kiritish|Elektr ta’minoti|Tarmoq manzili",0],
["Motherboard nima?","Asosiy plata|Operatsion tizim|Brauzer|Printer",0],
["SSDning HDDdan asosiy farqi nima?","Harakatlanuvchi mexanik qismlari yo‘q|Faqat internet bilan ishlaydi|Faqat tashqi qurilma|RAM o‘rnini bosadi",0],
["1 bayt necha bit?","4|8|16|32",1],
["CPU tezligi odatda qaysi birlikda o‘lchanadi?","GHz|Litr|Dyuym|Volt",0],
["Kesh xotira nima uchun kerak?","Tez-tez ishlatiladigan ma’lumotga tez kirish|Monitor yorqinligi|Fayl chop etish|Internet tarifini tanlash",0]
]},
{
title:"4. Operatsion tizimlar",
questions:[
["Operatsion tizimning vazifasi nima?","Kompyuter resurslarini boshqarish|Faqat rasm chizish|Faqat internet qidirish|Faqat video ko‘rish",0],
["Qaysi biri operatsion tizim?","Windows|Google|HTML|YouTube",0],
["Linux qanday tizim?","Ochiq kodli operatsion tizimlar oilasi|Faqat matn muharriri|Protsessor|Brauzer",0],
["Android asosan qaysi qurilmalarda ishlatiladi?","Mobil qurilmalarda|Faqat printerlarda|Faqat server kabellarida|Faqat skanerlarda",0],
["Multitasking nima?","Bir nechta vazifani bajarish|Faqat bitta faylni saqlash|Kompyuterni ta’mirlash|Tarmoqni uzish",0],
["GUI nimani anglatadi?","Grafik foydalanuvchi interfeysi|Global USB Internet|General Unit Input|Graph Utility Index",0],
["Driver nima?","Operatsion tizimga qurilma bilan ishlashga yordam beruvchi dastur|Video o‘yin|Matn fayli|Elektr kabeli",0],
["Booting nima?","Kompyuterni ishga tushirish jarayoni|Faylni o‘chirish|Internet tezligini o‘lchash|Rasmni kesish",0],
["Task Manager nima uchun kerak?","Jarayonlar va resurslarni kuzatish|Faqat musiqa tinglash|Kod tarjima qilish|Printer siyohini to‘ldirish",0],
["Fayl tizimi nima?","Ma’lumotlarni saqlash va tartiblash usuli|Kompyuter ekrani|Tarmoq kabeli|Protsessor turi",0]
]},
{
title:"5. Kompyuter tarmoqlari",
questions:[
["LAN nima?","Mahalliy tarmoq|Global protsessor|Xotira turi|Dasturlash tili",0],
["WAN nima?","Keng hududli tarmoq|Faqat bitta kompyuter|Monitor turi|Fayl formati",0],
["IP manzil nima uchun kerak?","Tarmoqdagi qurilmani aniqlash|Matnni bezash|Kompyuterni sovitish|Rasmni tahrirlash",0],
["Router vazifasi nima?","Tarmoqlar orasida ma’lumot yo‘naltirish|Faqat chop etish|Ma’lumotni ekran qilish|Tok ishlab chiqarish",0],
["DNS nima qiladi?","Domen nomini IP manzilga moslaydi|Kompyuterni o‘chiradi|Rasmni siqadi|Parol yaratadi",0],
["HTTP asosan nima uchun ishlatiladi?","Veb ma’lumot almashish|Audio yozish|Kompyuter sovitish|Jadval chizish",0],
["Wi-Fi nima?","Simsiz tarmoq texnologiyasi|Qattiq disk turi|Operatsion tizim|Dasturlash tili",0],
["Firewall nima?","Tarmoq trafigini qoidalar asosida nazorat qiluvchi himoya|Monitor|Klaviatura|Matn muharriri",0]
]},
{
title:"6. Algoritmlar",
questions:[
["Algoritm nima?","Muammoni yechish uchun ketma-ket ko‘rsatmalar|Kompyuter korpusi|Rasm turi|Internet manzili",0],
["Flowchart nima?","Algoritmning blok-sxemasi|Ma’lumotlar bazasi|Operatsion tizim|Printer",0],
["Binary search qachon ishlaydi?","Saralangan ma’lumotlarda|Faqat rasmlarda|Faqat videolarda|Faqat tartibsiz matnda",0],
["Linear search qanday ishlaydi?","Elementlarni ketma-ket tekshiradi|Faqat o‘rtadagi elementni tekshiradi|Ma’lumotlarni o‘chiradi|Internetga ulanadi",0],
["Big O nimani ifodalaydi?","Algoritm samaradorligining o‘sish tartibini|Ekran o‘lchamini|Fayl hajmini aniq baytda|Internet narxini",0],
["Loop nima?","Takrorlash konstruksiyasi|Ma’lumot turi|Tarmoq qurilmasi|Xotira turi",0],
["Recursion nima?","Funksiyaning o‘zini chaqirishi|Faylni nusxalash|Kompyuterni qayta yoqish|Ma’lumotni shifrlash",0],
["Sorting nima?","Ma’lumotlarni tartiblash|Ma’lumotlarni yashirish|Dastur o‘rnatish|Internetga ulanish",0]
]},
{
title:"7. Dasturlash tillari",
questions:[
["Python qanday til?","Yuqori darajali dasturlash tili|Operatsion tizim|Kompyuter qurilmasi|Ma’lumotlar bazasi",0],
["HTML nima?","Veb sahifa tuzilishini belgilash tili|Ma’lumotlar bazasi|Protsessor|Antivirus",0],
["CSS nima uchun ishlatiladi?","Veb sahifa ko‘rinishini bezash|Serverni sovitish|Ma’lumotni zaxiralash|IP manzil yaratish",0],
["JavaScript ko‘pincha nima uchun ishlatiladi?","Veb sahifaga interaktivlik qo‘shish|Kompyuter yig‘ish|Elektr ishlab chiqarish|Diskni formatlash",0],
["O‘zgaruvchi nima?","Qiymat saqlash uchun nomlangan joy|Monitor turi|Tarmoq kabeli|Fayl kengaytmasi",0],
["Funksiya nima?","Muayyan vazifani bajaruvchi kod bloki|Xotira qurilmasi|Operatsion tizim|Internet protokoli",0],
["Compiler nima qiladi?","Kodni boshqa shaklga, ko‘pincha mashina kodiga, tarjima qiladi|Monitorni yoqadi|Internet tezligini oshiradi|Faylni chop etadi",0],
["Bug nima?","Dasturdagi xato|Kompyuter sichqonchasi|Tarmoq manzili|Fayl turi",0],
["Git nima?","Versiyalarni boshqarish tizimi|Dasturlash tili|Protsessor|Operatsion tizim",0],
["API nima?","Dasturlar o‘zaro muloqot qilishi uchun interfeys|Xotira chipi|Klaviatura turi|Video formati",0]
]},
{
title:"8. Dasturiy ta’minot muhandisligi",
questions:[
["Software engineering nima?","Dasturiy ta’minotni tizimli ishlab chiqish sohasi|Faqat kompyuter sotish|Faqat dizayn chizish|Elektr ta’mirlash",0],
["SDLC nima?","Dasturiy ta’minot hayotiy sikli|Xotira turi|Tarmoq kabeli|Protsessor tezligi",0],
["Requirement nima?","Tizimga qo‘yilgan talab|Dastur rangi|Fayl kengaytmasi|Kompyuter modeli",0],
["Testing nima uchun kerak?","Dasturdagi xatolarni aniqlash|Ekranni kattalashtirish|Internet sotib olish|Klaviaturani almashtirish",0],
["Agile nimaga asoslanadi?","Moslashuvchan va bosqichma-bosqich ishlab chiqish|Faqat bir marta topshirish|Sinov qilmaslik|Hujjatlarni yo‘qotish",0],
["Code review nima?","Kod sifatini tekshirish|Kompyuterni tozalash|Faylni siqish|Tarmoqni o‘chirish",0],
["Deployment nima?","Dasturni foydalanish muhitiga chiqarish|Kod yozishni boshlashdan oldingi reja|Klaviatura sozlash|Diskni bo‘lish",0],
["Maintenance nima?","Dasturni qo‘llab-quvvatlash va yangilash|Faqat dizayn tanlash|Internetni o‘chirish|Fayl nomini o‘zgartirish",0]
]},
{
title:"9. Ma’lumotlar tuzilmalari",
questions:[
["Array nima?","Elementlar ketma-ketligi|Operatsion tizim|Tarmoq protokoli|Monitor",0],
["Stack qaysi tamoyil bilan ishlaydi?","LIFO|FIFO|HTTP|SQL",0],
["Queue qaysi tamoyil bilan ishlaydi?","FIFO|LIFO|GPU|HTML",0],
["Linked list nimadan tashkil topadi?","Bog‘langan tugunlardan|Faqat rasmlardan|Tarmoq kabellaridan|Protsessorlardan",0],
["Tree qanday tuzilma?","Ierarxik tuzilma|Faqat tekis ro‘yxat|Video formati|Operatsion tizim",0],
["Graph nimadan iborat?","Tugunlar va qirralardan|Faqat matndan|Faqat fayllardan|Faqat jadvallardan",0],
["Hash table nima uchun ishlatiladi?","Kalit orqali tezkor qidirish|Video ko‘rsatish|Kompyuterni yoqish|Matnni tarjima qilish",0],
["Binary tree nima?","Har tugunida ko‘pi bilan ikkita farzand bo‘lishi mumkin bo‘lgan daraxt|Ikki operatsion tizim|Ikki qatorli jadval|Tarmoq turi",0]
]},
{
title:"10. Relatsion ma’lumotlar bazasi va SQL",
questions:[
["Relatsion bazada ma’lumotlar odatda qanday saqlanadi?","Jadvallarda|Faqat rasmlarda|Faqat audio fayllarda|Faqat xotira chipida",0],
["SELECT nima qiladi?","Ma’lumotlarni so‘rab oladi|Jadvalni albatta o‘chiradi|Serverni o‘chiradi|Parolni o‘zgartiradi",0],
["INSERT nima qiladi?","Yangi yozuv qo‘shadi|Yozuvlarni saralashdan boshqa hech narsa qilmaydi|Jadvalni o‘chiradi|Bazani yopadi",0],
["DELETE nima qiladi?","Yozuvlarni o‘chiradi|Yangi jadval yaratadi|Ma’lumotni tanlaydi|Indeks nomini o‘zgartiradi",0],
["CREATE TABLE nima qiladi?","Jadval yaratadi|Yozuvni tanlaydi|Ma’lumotni o‘chiradi|Bazani zaxiralaydi",0],
["WHERE nima uchun ishlatiladi?","Shart bo‘yicha filtrlash|Jadval nomini almashtirish|Serverni ishga tushirish|Rasm chizish",0],
["ORDER BY nima qiladi?","Natijalarni tartiblaydi|Jadvalni o‘chiradi|Foydalanuvchi qo‘shadi|Bazani shifrlaydi",0],
["JOIN nima uchun ishlatiladi?","Jadvallardagi bog‘liq ma’lumotlarni birlashtirish|Kompyuterni qayta yoqish|Faylni siqish|Internetni ulash",0],
["COUNT nima qaytaradi?","Satrlar sonini hisoblaydi|Faqat matn uzunligini beradi|Jadvalni o‘chiradi|Yangi ustun yaratadi",0],
["GROUP BY nima qiladi?","Qatorlarni umumiy qiymatlar bo‘yicha guruhlaydi|Barcha yozuvlarni o‘chiradi|Faylni nusxalaydi|Parol yaratadi",0]
]},
{
title:"11. Ma’lumotlar bazasini optimallashtirish",
questions:[
["Indeks nima uchun kerak?","Qidiruvni tezlashtirish|Monitor rangini o‘zgartirish|Faylni chop etish|Parolni tiklash",0],
["Normalization maqsadi nima?","Ma’lumot takrorlanishini kamaytirish|Barcha ma’lumotni ko‘paytirish|Internet tezligini o‘lchash|Ekranni kattalashtirish",0],
["Denormalization nima?","Ba’zi holatlarda tezlik uchun ma’lumotlarni takror saqlash|Barcha jadvallarni o‘chirish|Serverni yopish|Faylni shifrlash",0],
["Query optimization nima?","So‘rovni samaraliroq bajarish|Klaviaturani sozlash|Yangi operatsion tizim o‘rnatish|Monitorni almashtirish",0],
["Transaction nima?","Bir butun operatsiya sifatida bajariladigan amallar to‘plami|Faqat bitta ustun|Tarmoq qurilmasi|Matn formati",0],
["ACID xususiyatlari qaysi tizimga tegishli?","Ma’lumotlar bazasi tranzaksiyalariga|Grafik dizaynga|Internet brauzeriga|Kompyuter ekraniga",0],
["Replication nima?","Ma’lumot nusxalarini boshqa serverlarda saqlash|Ma’lumotni butunlay o‘chirish|Jadval rangini o‘zgartirish|Kodni tarjima qilish",0],
["Sharding nima?","Ma’lumotlarni bo‘laklarga ajratib saqlash|Barcha ma’lumotni bitta qatorga yozish|Monitorni ulash|Parolni almashtirish",0],
["EXPLAIN buyrug‘i nima uchun ishlatilishi mumkin?","So‘rov bajarilish rejasini ko‘rish|Barcha ma’lumotni o‘chirish|Serverni o‘chirish|Yangi foydalanuvchi yaratish",0],
["Backup va recovery nima?","Zaxira nusxa olish va tiklash|Faqat jadvalni saralash|Internetga ulanish|Dastur rangini tanlash",0]
]},
{
title:"12. Kompyuter grafikasi",
questions:[
["Raster grafika nimadan tashkil topadi?","Piksellardan|Faqat formulalardan|Tarmoq tugunlaridan|SQL so‘rovlaridan",0],
["Vektor grafikaning afzalligi nima?","Kattalashtirganda sifatni yaxshi saqlaydi|Har doim piksellardan iborat|Faqat videoda ishlaydi|Faqat qora-oq bo‘ladi",0],
["RGB rang modeli qaysi ranglardan iborat?","Qizil, yashil, ko‘k|Qora, oq, kulrang|Sariq, qora, oq|Ko‘k, sariq, jigarrang",0],
["Resolution nimani bildiradi?","Tasvirdagi piksel o‘lchami yoki zichligi|Fayl nomi|Protsessor modeli|Tarmoq tezligi",0],
["PNG formati nimani qo‘llab-quvvatlaydi?","Shaffoflikni|Faqat audio saqlashni|Faqat matnni|Faqat 3D modelni",0],
["JPEG ko‘pincha nima uchun ishlatiladi?","Fotosuratlar|Dastur kodi|Ma’lumotlar bazasi|Operatsion tizim",0],
["3D grafika nechta o‘lchamdan foydalanadi?","Uchta|Bitta|Ikkita|Beshta",0],
["Rendering nima?","Grafik sahnadan yakuniy tasvir yaratish|Faylni o‘chirish|Tarmoqni sozlash|Jadvalni filtrlash",0],
["Animation nima?","Harakat taassurotini beruvchi tasvirlar ketma-ketligi|Faqat bitta statik rasm|Ma’lumotlar bazasi|Operatsion tizim",0],
["Texture nima?","3D obyekt yuzasining ko‘rinishini belgilovchi tasvir yoki naqsh|Klaviatura turi|Tarmoq protokoli|SQL buyrug‘i",0],
["CAD nima uchun ishlatiladi?","Kompyuter yordamida loyihalash|Faqat musiqa tinglash|Internet qidirish|Ma’lumotlarni o‘chirish",0]
]},
{
title:"13. Sun’iy intellekt",
questions:[
["Sun’iy intellekt nima?","Mashinalarning aqliy vazifalarga o‘xshash ishlarni bajarishi|Faqat kompyuter yig‘ish|Faqat ma’lumot saqlash|Faqat internet ulash",0],
["Machine Learning nima?","Ma’lumotlardan o‘rganadigan algoritmlar sohasi|Monitor turi|Operatsion tizim|Tarmoq kabeli",0],
["Deep Learning nimaga asoslanadi?","Ko‘p qatlamli neyron tarmoqlarga|Faqat SQL jadvallariga|Faqat elektron pochtaga|Faqat fayl nomlariga",0],
["Neyron tarmoq nimadan ilhomlangan?","Biologik nerv tizimidan|Qattiq diskdan|Printerdan|Tarmoq kabelidan",0],
["Supervised learning nima?","Belgilangan ma’lumotlardan o‘rganish|Hech qanday ma’lumotsiz ishlash|Faqat ma’lumotni o‘chirish|Faqat rasm chizish",0],
["Unsupervised learning nima?","Belgilanmagan ma’lumotlardan tuzilma topish|Faqat tayyor javoblarni ko‘chirish|Operatsion tizim yaratish|Faylni chop etish",0],
["NLP nimani o‘rganadi?","Inson tilini kompyuter yordamida qayta ishlash|Protsessor haroratini|Tarmoq kabelini|Grafik karta quvvatini",0],
["Computer Vision nima?","Kompyuterning tasvir va videolarni tahlil qilishi|Faqat matn yozish|Serverni sovitish|Faylni siqish",0],
["Training data nima?","Modelni o‘rgatishda ishlatiladigan ma’lumotlar|Faqat tayyor dastur|Kompyuter korpusi|Internet kabeli",0],
["Overfitting nima?","Model o‘quv ma’lumotiga haddan tashqari moslashib qolishi|Model umuman o‘qitilmasligi|Kompyuter o‘chishi|Ma’lumotlar bazasi yaratilishi",0]
]},
{
title:"14. Hisoblash nazariyasi",
questions:[
["Turing mashinasi nima?","Hisoblashni nazariy o‘rganish modeli|Haqiqiy printer|Ma’lumotlar bazasi|Grafik muharrir",0],
["Automata theory nimani o‘rganadi?","Abstrakt hisoblash mashinalarini|Faqat kompyuter narxini|Grafik dizaynni|Elektr kabellarini",0],
["Finite automaton nima?","Cheklangan holatlar soniga ega hisoblash modeli|Cheksiz qattiq disk|Operatsion tizim|Tarmoq qurilmasi",0],
["Computability nima?","Muammoni algoritm bilan yechish mumkinligini o‘rganish|Kompyuter narxini hisoblash|Ekran yorqinligi|Fayl hajmi",0],
["Complexity theory nimani o‘rganadi?","Algoritmlarning vaqt va xotira resurslarini|Kompyuter dizaynini|Internet tarifini|Monitor rangini",0],
["NP-complete muammolar qaysi sohaga tegishli?","Hisoblash murakkabligi nazariyasiga|Grafik dizaynga|Audio tahririga|Operatsion tizim sozlamalariga",0],
["Regular expression nima uchun ishlatiladi?","Matndagi andozalarni ifodalash va qidirish|Kompyuterni o‘chirish|Grafik karta boshqarish|Serverni sovitish",0],
["Formal language nima?","Qoidalar asosida aniqlangan belgilar satrlari to‘plami|Oddiy suhbat tili xolos|Operatsion tizim|Kompyuter qurilmasi",0]
]}
];

const topics = rawTopics.map(topic => ({
  title: topic.title,
  questions: topic.questions.map(q => [q[0], q[1].split("|"), q[2]])
}));

let current = 0;
let results = [];
let checked = false;

function renderTopic() {
  checked = false;
  const topic = topics[current];

  document.getElementById("topicTitle").textContent = topic.title;
  document.getElementById("topicCounter").textContent =
    `${current + 1} / ${topics.length}`;
  document.getElementById("topicInfo").textContent =
    `${topic.questions.length} ta savol`;
  document.getElementById("progressPercent").textContent =
    `${Math.round(current / topics.length * 100)}%`;
  document.getElementById("bar").style.width =
    `${current / topics.length * 100}%`;

  document.getElementById("feedback").textContent = "";
  document.getElementById("checkBtn").disabled = false;
  document.getElementById("nextBtn").disabled = true;
  document.getElementById("nextBtn").textContent =
    current === topics.length - 1
      ? "Natijalarni ko‘rish →"
      : "Keyingi mavzu →";

  document.getElementById("questions").innerHTML =
    topic.questions.map((q, i) => `
      <div class="question" id="q${i}">
        <p>${i + 1}. ${q[0]}</p>
        ${q[1].map((option, j) => `
          <label>
            <input type="radio" name="question${i}" value="${j}">
            <span>${String.fromCharCode(65 + j)}) ${option}</span>
          </label>
        `).join("")}
      </div>
    `).join("");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function checkTopic() {
  if (checked) return;

  const topic = topics[current];
  let score = 0;
  let unanswered = 0;

  topic.questions.forEach((q, i) => {
    const selected = document.querySelector(
      `input[name="question${i}"]:checked`
    );
    const labels = document.querySelectorAll(`#q${i} label`);

    if (!selected) unanswered++;
    else if (Number(selected.value) === q[2]) score++;

    labels.forEach((label, j) => {
      label.style.borderColor = "transparent";

      if (j === q[2]) {
        label.style.borderColor = "#4ade80";
      }

      if (selected && j === Number(selected.value) && j !== q[2]) {
        label.style.borderColor = "#fb7185";
      }

      label.querySelector("input").disabled = true;
    });
  });

  results[current] = {
    score,
    total: topic.questions.length
  };

  checked = true;
  document.getElementById("feedback").textContent =
    `Natija: ${score}/${topic.questions.length}. ` +
    (unanswered
      ? `${unanswered} ta savol javobsiz qoldi.`
      : "Barcha savollarga javob berdingiz.");

  document.getElementById("checkBtn").disabled = true;
  document.getElementById("nextBtn").disabled = false;
}

function nextTopic() {
  if (!checked) return;

  if (current < topics.length - 1) {
    current++;
    renderTopic();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById("quiz").hidden = true;
  document.getElementById("result").hidden = false;

  const totalScore = results.reduce((sum, r) => sum + r.score, 0);
  const totalQuestions = results.reduce((sum, r) => sum + r.total, 0);
  const percentage = totalQuestions
    ? (totalScore / totalQuestions * 100).toFixed(1)
    : "0.0";

  document.getElementById("total").textContent =
    `${totalScore} / ${totalQuestions}`;
  document.getElementById("percent").textContent =
    `Umumiy natija: ${percentage}%`;

  document.getElementById("details").innerHTML = topics.map((topic, i) => {
    const r = results[i];
    const percent = (r.score / r.total * 100).toFixed(0);

    return `
      <div class="result-row">
        <strong>${topic.title}</strong>
        <span>${r.score}/${r.total} · ${percent}%</span>
      </div>
    `;
  }).join("");

  document.getElementById("bar").style.width = "100%";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function restart() {
  current = 0;
  results = [];
  checked = false;

  document.getElementById("quiz").hidden = false;
  document.getElementById("result").hidden = true;

  renderTopic();
}

renderTopic();
