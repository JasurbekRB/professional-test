// Professional Test — 14 ta mavzu, jami 131 ta savol.
// Har bir savol: { q: savol, a: variantlar, c: to'g'ri variant indeksi }
const topics = [
 { title: "Kompyuter tarixi", questions: [
  {q:"Birinchi avlod kompyuterlari asosan qaysi elementga asoslangan?",a:["Tranzistor","Elektron lampa","Mikroprotsessor","Integral sxema"],c:1},
  {q:"ENIAC qaysi davrda yaratilgan?",a:["1940-yillarda","1960-yillarda","1980-yillarda","2000-yillarda"],c:0},
  {q:"Kompyuterning asosiy vazifasi nima?",a:["Faqat matn yozish","Ma’lumotni qayta ishlash","Faqat internetga ulanish","Faqat rasm chiqarish"],c:1},
  {q:"Transistorli kompyuterlar qaysi avlodga kiradi?",a:["Birinchi","Ikkinchi","Uchinchi","To‘rtinchi"],c:1},
  {q:"Mikroprotsessorlardan foydalanish qaysi avlodga xos?",a:["Birinchi","Ikkinchi","Uchinchi","To‘rtinchi"],c:3},
  {q:"Charles Babbage ko‘pincha kim deb ataladi?",a:["Internet asoschisi","Kompyuter otasi","Linux yaratuvchisi","Birinchi dasturchi tili muallifi"],c:1},
  {q:"Ada Lovelace tarixda nima bilan tanilgan?",a:["Birinchi dasturchilardan biri","Windows yaratuvchisi","Mikrochip ixtirochisi","Brauzer muallifi"],c:0},
  {q:"Abak qanday qurilma?",a:["Saqlash qurilmasi","Hisoblash vositasi","Tarmoq qurilmasi","Printer turi"],c:1},
  {q:"Shaxsiy kompyuterlar keng tarqalishi qaysi davrda tezlashdi?",a:["XVIII asrda","XX asrning oxirida","XV asrda","XXI asr oxirida"],c:1},
  {q:"Kompyuter tarixida vakuum lampalarining asosiy kamchiligi nima edi?",a:["Juda kichikligi","Ko‘p issiqlik va energiya sarfi","Internet talab qilishi","Rangli ekran yo‘qligi"],c:1}
 ]},
 { title: "Ma’lumotlar bazasi", questions: [
  {q:"Ma’lumotlar bazasi nima?",a:["Tartibli saqlangan ma’lumotlar to‘plami","Faqat matn muharriri","Kompyuter qurilmasi","Operatsion tizim"],c:0},
  {q:"DBMS nimani anglatadi?",a:["Database Management System","Digital Binary Memory Storage","Data Backup Main Server","Desktop Basic Mode Setup"],c:0},
  {q:"Jadvaldagi qator odatda nimani ifodalaydi?",a:["Yozuvni","Ustunni","Indeksni","Fayl turini"],c:0},
  {q:"Jadvaldagi ustun nimani belgilaydi?",a:["Alohida atributni","Butun bazani","Server manzilini","Zaxira nusxani"],c:0},
  {q:"Birlamchi kalit (primary key) vazifasi nima?",a:["Yozuvni noyob aniqlash","Jadvalni bezash","Ma’lumotni siqish","Internetni tezlatish"],c:0},
  {q:"SQL asosan nima uchun ishlatiladi?",a:["Ma’lumotlar bazasini so‘rash va boshqarish","Rasm tahrirlash","Video montaj","Operatsion tizim o‘rnatish"],c:0},
  {q:"Relatsion bazada ma’lumotlar odatda qanday tashkil qilinadi?",a:["Jadvallarda","Faqat rasmlarda","Faqat papkalarda","Faqat audio fayllarda"],c:0},
  {q:"Zaxira nusxa (backup) nima uchun kerak?",a:["Ma’lumotni yo‘qotilganda tiklash","Ekran yorqinligini oshirish","Protsessorni almashtirish","Tarmoq nomini o‘zgartirish"],c:0},
  {q:"NoSQL bazalarining bir xususiyati qaysi?",a:["Turli ma’lumot modellarini qo‘llashi","Faqat SQL buyruqlarini qabul qilishi","Faqat bitta jadvaldan iboratligi","Internetga ulanmasligi"],c:0},
  {q:"Ma’lumotlar bazasidagi indeks nima uchun ishlatiladi?",a:["Qidiruvni tezlashtirish","Yozuvlarni ranglash","Parol yaratish","Faylni chop etish"],c:0}
 ]},
 { title: "Kompyuter arxitekturasi", questions: [
  {q:"CPU ning asosiy vazifasi nima?",a:["Buyruqlarni bajarish va hisoblash","Doimiy internet berish","Qog‘oz chop etish","Faqat fayllarni saqlash"],c:0},
  {q:"RAM qanday xotira?",a:["Tezkor va vaqtinchalik","Faqat o‘qiladigan doimiy","Optik disk","Tarmoq xotirasi"],c:0},
  {q:"SSD ning HDD dan asosiy farqi nima?",a:["Harakatlanuvchi mexanik qismlari yo‘q","Faqat magnit lenta ishlatadi","Faqat tashqi bo‘ladi","Ma’lumot saqlamaydi"],c:0},
  {q:"GPU qaysi vazifada ayniqsa foydali?",a:["Grafika va parallel hisoblash","Faqat klaviatura boshqaruvi","Elektr ta’minoti","Tarmoq kabeli uzatishi"],c:0},
  {q:"Motherboard nima?",a:["Komponentlarni bog‘lovchi asosiy plata","Monitor turi","Operatsion tizim","Antivirus dasturi"],c:0},
  {q:"ROM odatda qanday xotira?",a:["Doimiy, o‘zgarmas yoki kam o‘zgaradigan","Faqat vaqtinchalik","Faqat bulutli","Faqat grafik"],c:0},
  {q:"1 bayt necha bitdan iborat?",a:["4","8","16","32"],c:1},
  {q:"Kompyuter quvvat bloki nima qiladi?",a:["Elektr energiyasini kerakli kuchlanishlarga aylantiradi","Ma’lumotlarni saralaydi","Internet protokolini bajaradi","Rasmni ekranga chizadi"],c:0},
  {q:"Kesh xotiraning maqsadi nima?",a:["Tez-tez kerak bo‘ladigan ma’lumotga tez yetishish","Fayllarni arxivlash","Tarmoqni shifrlash","Ekran o‘lchamini o‘zgartirish"],c:0},
  {q:"Kompyuterda periferik qurilma qaysi?",a:["Printer","CPU registri","ALU","RAM katagi"],c:0}
 ]},
 { title: "Operatsion tizimlar", questions: [
  {q:"Operatsion tizimning vazifasi nima?",a:["Kompyuter resurslari va dasturlarni boshqarish","Faqat matn terish","Faqat internet qidirish","Faqat rasm chizish"],c:0},
  {q:"Quyidagilardan qaysi biri operatsion tizim?",a:["Linux","HTML","SQL","JPEG"],c:0},
  {q:"Windows Task Manager nima uchun ishlatiladi?",a:["Jarayonlar va resurslarni kuzatish","Veb-sayt yaratish","Rasmni siqish","Domen sotib olish"],c:0},
  {q:"Fayl tizimi nima qiladi?",a:["Fayllarni saqlash va tartiblash usulini belgilaydi","Monitor rangini boshqaradi","CPU chastotasini oshiradi","Internet tezligini kafolatlaydi"],c:0},
  {q:"Linux yadrosi nima?",a:["Operatsion tizimning asosiy qismi","Matn muharriri","Brauzer kengaytmasi","Printer drayveri"],c:0},
  {q:"Multitasking nimani anglatadi?",a:["Bir nechta jarayonni boshqarish","Bitta faylni o‘chirish","Faqat bitta dastur ishlatish","Kompyuterni formatlash"],c:0},
  {q:"Drayver nima uchun kerak?",a:["Operatsion tizim va qurilma o‘zaro ishlashi uchun","Fayllarni tarjima qilish uchun","Veb-sahifani bezash uchun","Parolni eslab qolish uchun"],c:0},
  {q:"GUI nimaning qisqartmasi?",a:["Graphical User Interface","General Utility Internet","Global User Index","Graphic Upload Input"],c:0},
  {q:"Terminal yoki buyruq satri nima beradi?",a:["Matnli buyruqlar orqali boshqarish","Faqat video ko‘rish","Faqat fayl chop etish","Faqat sensorni sozlash"],c:0}
 ]},
 { title: "Kompyuter tarmoqlari", questions: [
  {q:"LAN nimani anglatadi?",a:["Local Area Network","Large Access Node","Linked App Number","Local Analog Name"],c:0},
  {q:"IP manzil nima uchun ishlatiladi?",a:["Tarmoqdagi qurilmani aniqlash","Ekran o‘lchamini belgilash","Faylni siqish","Klaviatura tilini tanlash"],c:0},
  {q:"Router vazifasi nima?",a:["Tarmoqlar orasida paketlarni yo‘naltirish","Faqat matn chop etish","Ma’lumotni doimiy saqlash","CPU sovitish"],c:0},
  {q:"DNS nima qiladi?",a:["Domen nomini IP manzilga moslaydi","Faylni PDF ga aylantiradi","Parolni shifrlamaydi","Monitorni sozlaydi"],c:0},
  {q:"HTTPS ning HTTP dan muhim farqi nima?",a:["TLS orqali shifrlangan aloqa","Faqat rasmlar uzatadi","Internet talab qilmaydi","Faqat mahalliy tarmoqda ishlaydi"],c:0},
  {q:"Wi-Fi nima?",a:["Simsiz tarmoq texnologiyasi","Ma’lumotlar bazasi","Dasturlash tili","Protsessor turi"],c:0},
  {q:"Bandwidth odatda nimani bildiradi?",a:["Aloqa kanalining ma’lumot uzatish sig‘imi","Kompyuter og‘irligi","Ekran aniqligi","Disk hajmi"],c:0},
  {q:"Firewall nima uchun ishlatiladi?",a:["Tarmoq trafikini qoidalar asosida filtrlash","CPU ni sovitish","Fayllarni nomlash","Ranglarni o‘zgartirish"],c:0},
  {q:"TCP protokolining muhim xususiyati qaysi?",a:["Ishonchli, tartiblangan yetkazishni ta’minlaydi","Faqat ovoz yozadi","Faqat IP manzil beradi","Har doim shifrlaydi"],c:0}
 ]},
 { title: "Algoritmlar", questions: [
  {q:"Algoritm nima?",a:["Muammoni yechish uchun aniq qadamlar ketma-ketligi","Kompyuter korpusi","Ma’lumot turi","Internet manzili"],c:0},
  {q:"Chiziqli qidiruv qanday ishlaydi?",a:["Elementlarni ketma-ket tekshiradi","Faqat daraxtda ishlaydi","Ma’lumotni albatta saralaydi","Faqat raqamlarni o‘chiradi"],c:0},
  {q:"Binary search uchun odatda nima talab qilinadi?",a:["Saralangan ma’lumotlar","Faqat takroriy qiymatlar","Internet aloqasi","Grafik karta"],c:0},
  {q:"Bubble sort qanday g‘oyaga asoslangan?",a:["Yonma-yon elementlarni taqqoslab almashtirish","Tasodifiy tanlash","Faqat eng kichik elementni o‘chirish","Hash hisoblash"],c:0},
  {q:"Algoritm murakkabligidagi O(n) nimani bildiradi?",a:["Ish hajmi n ga chiziqli bog‘liq","Doimiy vaqt","Kvadrat vaqt","Logarifmik xotira"],c:0},
  {q:"Rekursiya nima?",a:["Funksiyaning o‘zini chaqirishi","O‘zgaruvchini o‘chirish","Tarmoq protokoli","Jadval yaratish"],c:0},
  {q:"Psevdokod nima uchun ishlatiladi?",a:["Algoritmni tilga bog‘liq bo‘lmagan shaklda ifodalash","Dasturni bevosita bajarish","Ma’lumotni shifrlash","Rasm yaratish"],c:0},
  {q:"Flowchart nima?",a:["Algoritmning grafik ko‘rinishi","Dasturlash muhiti","Ma’lumotlar bazasi","Tarmoq kabeli"],c:0},
  {q:"Binary search vaqt murakkabligi odatda qanday?",a:["O(log n)","O(n²)","O(n!)","O(2ⁿ)"],c:0}
 ]},
 { title: "Dasturlash tillari", questions: [
  {q:"Python qanday til?",a:["Yuqori darajali dasturlash tili","Ma’lumotlar bazasi","Operatsion tizim","Tarmoq kabeli"],c:0},
  {q:"HTML ning asosiy vazifasi nima?",a:["Veb-sahifa tuzilishini belgilash","Serverni sovitish","Ma’lumotlar bazasini zaxiralash","Protsessorni boshqarish"],c:0},
  {q:"CSS nima uchun ishlatiladi?",a:["Veb-sahifa ko‘rinishini bezash","Faqat server yaratish","SQL so‘rovini bajarish","Kompyuterni ishga tushirish"],c:0},
  {q:"JavaScript ko‘pincha nima uchun ishlatiladi?",a:["Veb-sahifaga interaktivlik qo‘shish","Diskni formatlash","Elektr kuchlanishini o‘lchash","Faqat rasm saqlash"],c:0},
  {q:"Compiler nima qiladi?",a:["Dastur kodini boshqa bajariladigan shaklga tarjima qiladi","Internet tezligini o‘lchaydi","Matnni chop etadi","Fayllarni papkaga ko‘chiradi"],c:0},
  {q:"O‘zgaruvchi (variable) nima?",a:["Qiymat saqlash uchun nomlangan joy","Faqat izoh","Monitor qismi","Tarmoq protokoli"],c:0},
  {q:"Boolean turida odatda qanday qiymatlar bo‘ladi?",a:["True va False","Faqat butun sonlar","Faqat matn","Faqat kasr sonlar"],c:0},
  {q:"Funksiya nima uchun kerak?",a:["Qayta ishlatiladigan kod blokini tashkil qilish","Kompyuterga elektr berish","Tarmoqni uzish","Monitorni yoqish"],c:0},
  {q:"Syntax error nimani bildiradi?",a:["Kod yozilish qoidasi buzilgan","Kompyuter qizib ketgan","Internet uzilgan","Disk to‘lgan"],c:0}
 ]},
 { title: "Dasturiy ta’minot muhandisligi", questions: [
  {q:"Software engineering nima?",a:["Dasturiy ta’minotni tizimli ishlab chiqish sohasi","Faqat kompyuter ta’miri","Faqat tarmoq o‘rnatish","Grafik dizayn turi"],c:0},
  {q:"SDLC nimani anglatadi?",a:["Software Development Life Cycle","System Data Link Control","Software Design Language Code","Secure Digital Local Cache"],c:0},
  {q:"Talablarni tahlil qilishdan maqsad nima?",a:["Foydalanuvchi ehtiyojlarini aniqlash","Faqat rang tanlash","Kodlarni tasodifiy yozish","Serverni o‘chirish"],c:0},
  {q:"Git nima?",a:["Versiyalarni boshqarish tizimi","Dasturlash tili","Ma’lumotlar bazasi","Operatsion tizim"],c:0},
  {q:"Unit test nimani tekshiradi?",a:["Kichik kod birligini alohida","Butun internetni","Monitor sifatini","Elektr ta’minotini"],c:0},
  {q:"Agile yondashuvining muhim xususiyati qaysi?",a:["Takroriy ishlab chiqish va moslashish","Talablarni hech qachon o‘zgartirmaslik","Faqat yil oxirida sinash","Hujjatlarni butunlay taqiqlash"],c:0},
  {q:"Code review nima?",a:["Boshqa dasturchi kodini ko‘rib chiqish","Kompyuterni tozalash","Domen nomini sotib olish","Faylni siqish"],c:0},
  {q:"Bug nima?",a:["Dasturdagi xato yoki kutilmagan muammo","Yangi funksiya nomi","Ma’lumotlar bazasi turi","Internet tezligi"],c:0},
  {q:"API nima uchun kerak?",a:["Dasturlar yoki xizmatlar o‘zaro muloqoti uchun interfeys","Monitorni ulash uchun","Faylni chop etish uchun","Protsessorni sovitish uchun"],c:0}
 ]},
 { title: "Ma’lumotlar tuzilmalari", questions: [
  {q:"Array nima?",a:["Elementlar ketma-ketligi","Tarmoq protokoli","Operatsion tizim","Faqat matn fayli"],c:0},
  {q:"Stack qaysi tamoyilga asoslanadi?",a:["LIFO","FIFO","HTTP","DNS"],c:0},
  {q:"Queue qaysi tamoyilga asoslanadi?",a:["FIFO","LIFO","SQL","RAM"],c:0},
  {q:"Linked list elementlari qanday bog‘lanadi?",a:["Havolalar yoki ko‘rsatkichlar orqali","Faqat jadval rangi bilan","Faqat IP manzil bilan","Elektr simlari bilan"],c:0},
  {q:"Binary tree tugunida ko‘pi bilan nechta farzand bo‘lishi mumkin?",a:["2","3","4","Cheksiz"],c:0},
  {q:"Hash table nimaga qulay?",a:["Kalit orqali tez qiymat qidirish","Faqat ketma-ket chop etish","Video tahrirlash","Tarmoq kabellarini tekshirish"],c:0},
  {q:"Graph nimadan tashkil topadi?",a:["Tugunlar va qirralardan","Qator va ustunlardan faqat","Faqat bitta ildizdan","Faqat sonlardan"],c:0},
  {q:"Tree tuzilmasining yuqori boshlang‘ich tuguni nima deyiladi?",a:["Root","Leaf","Edge","Queue"],c:0},
  {q:"Set ma’lumot tuzilmasi ko‘pincha nimani kafolatlaydi?",a:["Takrorlanmaydigan elementlar","Elementlar albatta tartiblanganini","Faqat matn saqlanishini","Har bir qiymat ikki marta borligini"],c:0}
 ]},
 { title: "Relatsion baza va SQL", questions: [
  {q:"SQL SELECT buyrug‘i nima qiladi?",a:["Ma’lumotlarni so‘raydi","Jadvalni albatta o‘chiradi","Foydalanuvchini bloklaydi","Serverni o‘chiradi"],c:0},
  {q:"INSERT buyrug‘i vazifasi nima?",a:["Yangi yozuv qo‘shish","Yozuvlarni saralash","Jadval nomini ko‘rish","Bazani zaxiralash"],c:0},
  {q:"UPDATE buyrug‘i nima qiladi?",a:["Mavjud ma’lumotni o‘zgartiradi","Jadvalni faqat ko‘rsatadi","Yangi server yaratadi","Tarmoqni shifrlaydi"],c:0},
  {q:"DELETE buyrug‘i odatda nima qiladi?",a:["Yozuvlarni o‘chiradi","Ustun qo‘shadi","Natijani saralaydi","Indeksni doim yaratadi"],c:0},
  {q:"WHERE sharti nima uchun kerak?",a:["Qatorlarni shart bo‘yicha filtrlash","Natijani ranglash","Bazani ko‘chirish","Parolni tiklash"],c:0},
  {q:"ORDER BY nima qiladi?",a:["Natijalarni saralaydi","Jadvalni o‘chiradi","Ustun qo‘shadi","Foydalanuvchini yaratadi"],c:0},
  {q:"JOIN nima uchun ishlatiladi?",a:["Jadvallardagi bog‘liq ma’lumotlarni birlashtirish","Ma’lumotni siqish","Bazani o‘chirish","Tarmoqni sozlash"],c:0},
  {q:"FOREIGN KEY nimani ifodalaydi?",a:["Boshqa jadval kalitiga bog‘lanishni","Yozuvning rangini","Fayl kengaytmasini","Serverning IP sini"],c:0},
  {q:"COUNT(*) odatda nima qaytaradi?",a:["Qatorlar sonini","Ustun nomini","Eng katta matnni","Bazadagi fayl hajmini"],c:0}
 ]},
 { title: "Ma’lumotlar bazasini optimallashtirish", questions: [
  {q:"Indeksning asosiy foydasi nima?",a:["Qidiruvni tezlashtirishi mumkin","Har doim yozishni tezlashtiradi","Ma’lumotni avtomatik shifrlaydi","Bazani kichraytirishni kafolatlaydi"],c:0},
  {q:"Query optimization maqsadi nima?",a:["So‘rovni samaraliroq bajarish","Savol matnini tarjima qilish","Jadval rangini o‘zgartirish","Foydalanuvchi nomini almashtirish"],c:0},
  {q:"Normalization nimaga yordam beradi?",a:["Ortiqcha takrorlanish va yangilash muammolarini kamaytirish","Barcha indekslarni o‘chirish","Internetni tezlatish","Ma’lumotni rasmga aylantirish"],c:0},
  {q:"Denormalization qachon qo‘llanishi mumkin?",a:["O‘qish tezligini oshirish uchun ayrim takrorlanishga ruxsat berilganda","Ma’lumot umuman kerak bo‘lmaganda","Faqat parol yaratishda","Faqat fayl chop etishda"],c:0},
  {q:"EXPLAIN buyrug‘i ko‘pincha nima ko‘rsatadi?",a:["So‘rov bajarilish rejasini","Monitor o‘lchamini","Foydalanuvchi parolini","Diskning fizik rangini"],c:0},
  {q:"N+1 query muammosi nimani anglatadi?",a:["Bog‘liq yozuvlar uchun ortiqcha ko‘p so‘rov yuborilishi","Bir jadvalda bitta qator borligi","Baza paroli 11 belgili ekanini","Serverda 11 ta disk borligini"],c:0},
  {q:"Katta jadvalni bo‘lish (partitioning) nima berishi mumkin?",a:["Ma’lumotni boshqarish va ayrim so‘rovlarni samaraliroq qilish","Har doim diskni ikki baravar oshirish","SQL ni bekor qilish","Barcha ma’lumotni o‘chirish"],c:0},
  {q:"Connection pooling nima uchun kerak?",a:["Bazaga ulanishlarni qayta ishlatish","Har bir so‘rovda yangi kompyuter yaratish","Fayllarni arxivlash","Tarmoqni uzish"],c:0},
  {q:"Keshdan foydalanishning foydasi qaysi?",a:["Takroriy so‘rov natijalarini tezroq olish","Ma’lumotni albatta yo‘qotish","Barcha xatolarni avtomatik tuzatish","Kalitlarni o‘chirish"],c:0}
 ]},
 { title: "Kompyuter grafikasi", questions: [
  {q:"Raster grafika nimadan tashkil topadi?",a:["Piksellardan","Faqat matematik chiziqlardan","Jadvallardan","Tarmoq paketlaridan"],c:0},
  {q:"Vektor grafikaning afzalligi nima?",a:["Masshtab o‘zgarganda sifatni yaxshi saqlaydi","Har doim ko‘proq piksel talab qiladi","Faqat fotosuratda ishlaydi","Faqat qora-oq bo‘ladi"],c:0},
  {q:"RGB modeli qaysi ranglardan iborat?",a:["Qizil, yashil, ko‘k","Sariq, qora, oq","Ko‘k, sariq, qora","Qizil, oq, jigarrang"],c:0},
  {q:"Resolution nimani bildiradi?",a:["Tasvirning piksel o‘lchami yoki zichligi","Faylning yaratilgan sanasi","Kompyuter xotirasi turi","Tarmoq tezligi"],c:0},
  {q:"PNG formatining foydali xususiyati qaysi?",a:["Shaffoflikni qo‘llab-quvvatlaydi","Har doim yo‘qotishli siqadi","Faqat audio saqlaydi","Faqat vektor format"],c:0},
  {q:"3D grafikada polygon nima?",a:["Ko‘pburchak yuzasi","Ovoz kanali","SQL operatori","Tarmoq manzili"],c:0},
  {q:"Rendering nima?",a:["Sahna yoki modeldan yakuniy tasvir yaratish","Faylni nomlash","Matnni tarjima qilish","Internetga ulanish"],c:0},
  {q:"Anti-aliasing nima uchun kerak?",a:["Qirralardagi zinapoya ko‘rinishini kamaytirish","Rasmni doim kichraytirish","Ovoz sifatini oshirish","Faylni shifrlash"],c:0},
  {q:"CMYK ko‘proq qayerda ishlatiladi?",a:["Bosma nashrda","CPU boshqaruvida","Wi-Fi ulanishida","Ma’lumotlar bazasida"],c:0}
 ]},
 { title: "Sun’iy intellekt", questions: [
  {q:"Sun’iy intellekt (AI) nimani o‘rganadi?",a:["Aqlli vazifalarni bajaradigan tizimlarni yaratish","Faqat kompyuter korpusini ishlab chiqarish","Faqat elektr tokini o‘lchash","Faqat fayl saqlash"],c:0},
  {q:"Machine learning nima?",a:["Ma’lumotlardan qonuniyat o‘rganadigan AI usullari","Faqat qo‘lda qoidalar yozish","Monitor texnologiyasi","Tarmoq kabeli turi"],c:0},
  {q:"Supervised learning uchun odatda nima kerak?",a:["Belgili (label) ma’lumotlar","Faqat elektr energiyasi","Faqat tasvirsiz ma’lumot","Internet doim uzilgan bo‘lishi"],c:0},
  {q:"Neural network nimadan ilhomlangan?",a:["Miyaning soddalashtirilgan neyron tuzilishidan","Faqat kompyuter tarmoqlaridan","Faqat ma’lumotlar bazasidan","Faqat grafik formatlardan"],c:0},
  {q:"Training dataset nima?",a:["Modelni o‘rgatish uchun ishlatiladigan ma’lumotlar","Modelning yakuniy logotipi","Kompyuter drayveri","Internet paroli"],c:0},
  {q:"Overfitting nimani anglatadi?",a:["Model o‘quv ma’lumotiga haddan tashqari moslashib qolishi","Model hech qachon o‘rganmasligi","Ma’lumot bazasi o‘chishi","GPU ishlamasligi"],c:0},
  {q:"NLP qaysi sohaga tegishli?",a:["Tabiiy tilni qayta ishlash","Tarmoq kabelini loyihalash","Printer boshqaruvi","Disk formatlash"],c:0},
  {q:"Computer vision nima bilan shug‘ullanadi?",a:["Tasvir va videodan ma’no ajratish","Faqat matn terish","Serverlarni sovitish","Jadvallarni saralash"],c:0},
  {q:"Modelni test ma’lumotida baholashdan maqsad nima?",a:["Yangi ma’lumotlarda ishlashini tekshirish","O‘quv natijasini yashirish","Kodni o‘chirish","Faqat xotirani bo‘shatish"],c:0},
  {q:"Generativ AI nima qila oladi?",a:["Matn, rasm yoki boshqa yangi kontent yaratishi mumkin","Faqat fayllarni nomlaydi","Faqat kompyuterni o‘chiradi","Faqat tarmoq kabelini tekshiradi"],c:0}
 ]},
 { title: "Hisoblash nazariyasi", questions: [
  {q:"Turing mashinasi nima uchun muhim?",a:["Hisoblashning nazariy modelidir","Jismoniy printer turi","SQL bazasi","Internet brauzeri"],c:0},
  {q:"Finite automaton nima?",a:["Chekli holatlar bilan ishlaydigan hisoblash modeli","Cheksiz xotirali kompyuter","Grafik muharrir","Ma’lumotlar bazasi"],c:0},
  {q:"Formal til nima?",a:["Qoidalar bilan belgilangan belgilar ketma-ketliklari to‘plami","Faqat og‘zaki nutq","Operatsion tizim","Internet protokoli"],c:0},
  {q:"Regular expression nima uchun ishlatiladi?",a:["Matn naqshlarini ifodalash va qidirish","CPU chastotasini o‘zgartirish","Jadvalni chop etish","Kompyuterni sovitish"],c:0},
  {q:"Decidability masalasi nimani so‘raydi?",a:["Muammoni algoritm bilan har doim hal qilish mumkinmi","Fayl rangli yoki oq-qorami","Tarmoq simsizmi","Disk qancha og‘ir"],c:0},
  {q:"Big-O yozuvi nimani tavsiflaydi?",a:["Algoritm resurslari o‘sish chegarasini","Kodning rangini","Fayl turini","Internet domenini"],c:0},
  {q:"DFA ning to‘liq nomi qaysi?",a:["Deterministic Finite Automaton","Digital File Algorithm","Data Format Array","Direct Function Access"],c:0},
  {q:"P va NP hisoblash murakkabligi nazariyasining nimasi?",a:["Muammolar sinflari","Dasturlash tillari","Xotira turlari","Tarmoq qurilmalari"],c:0},
  {q:"Grammatika formal tillarda nima belgilaydi?",a:["Satrlarga ruxsat beruvchi hosil qilish qoidalarini","Kompyuter quvvatini","Fayl hajmini","IP manzilini"],c:0},
  {q:"Kontekst-erkin grammatika odatda qaysi sohada qo‘llanadi?",a:["Dasturlash tillari sintaksisini tavsiflashda","Monitor yorqinligini sozlashda","Tarmoq kabelini ulashda","Diskni formatlashda"],c:0}
 ]}
];

// Savollar soni: 131. Ilova ishga tushganda nazorat qilinadi.
window.TEST_TOPICS = topics;
