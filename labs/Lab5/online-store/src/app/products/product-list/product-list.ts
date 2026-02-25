import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {

  @Input() categoryId: number | null = null;

  products: Product[] = [
    {
  id: 1,
  name: 'Apple iPhone 15 128GB черный',
  description: 'Apple iPhone 15 — современный смартфон с мощным процессором, продвинутой камерой и стильным дизайном. Оснащен функцией Dynamic Island, которая отображает уведомления и важную информацию. Отлично подходит для повседневного использования, съемки фото и видео. Количество отзывов: 4460.',
  price: 404375,
  rating: 5.0,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
  likes: 1200,
  categoryId: 1
},
{
  id: 2,
  name: 'Apple iPhone 13 128GB черный',
  description: 'Apple iPhone 13 оснащен 6.1-дюймовым дисплеем Super Retina XDR с высокой плотностью пикселей, благодаря чему изображения выглядят очень четко и ярко. Уменьшенная область камеры TrueDepth увеличивает полезную площадь экрана. Подходит для повседневного использования, фото и видео. Количество отзывов: 7983.',
  price: 340000,
  rating: 4.8,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
  likes: 900,
  categoryId: 1
},
{
  id: 3,
  name: 'Samsung Galaxy A07 6GB/128GB черный',
  description: 'Samsung Galaxy A07 — универсальный смартфон с большим объемом памяти, подходящий для хранения фото, видео и приложений. Отлично справляется с повседневными задачами, просмотром видео и играми. Поддержка двух SIM-карт позволяет удобно управлять связью. Количество отзывов: 1055.',
  price: 68665,
  rating: 4.6,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/p3d/pda/61291251.jpg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/p3d/pda/61291251.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p0c/pd7/61291243.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p7d/pd7/61291247.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/samsung-galaxy-a07-6-gb-128-gb-chernyi-144817763/?c=750000000',
  likes: 500,
  categoryId: 1
},
{
  id: 4,
  name: 'Huawei Watch GT 6 41mm золотистый',
  description: 'Huawei Watch GT 6 — стильные смарт-часы с элегантным дизайном и удобным интерфейсом. Подходят для отслеживания активности, уведомлений и здоровья. Легкие и комфортные для повседневного использования. Количество отзывов: 33.',
  price: 99133,
  rating: 4.5,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/pb7/p87/72527964.png?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/pb7/p87/72527964.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p87/pfe/73833197.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p6b/pfe/73833198.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p37/pb4/73833200.png?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/huawei-watch-gt-6-41-mm-zolotistyi-zolotistyi-147986879/?c=750000000',
  likes: 150,
  categoryId: 4,
},
{
  id: 5,
  name: 'Apple iPhone 16 128GB черный',
  description: 'Apple iPhone 16 — современный смартфон с высокой производительностью и улучшенной камерой. Оснащен ярким дисплеем и быстрым процессором, что делает его отличным выбором для повседневных задач, игр и съемки. Поддерживает современные технологии и обеспечивает плавную работу приложений. Количество отзывов: 1674.',
  price: 490000,
  rating: 4.9,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/he0/ha4/87295470764062.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h12/hfe/87295470796830.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/hff/h15/87295470829598.png?format=gallery-medium'
  ],
  link: 'http://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000',
  likes: 2000,
  categoryId: 1
},
{
  id: 6,
  name: 'Apple iPhone 13 128GB белый',
  description: 'Apple iPhone 13 оснащен 6.1-дюймовым дисплеем Super Retina XDR с высокой плотностью пикселей, благодаря чему изображения выглядят четко и ярко. Уменьшенная область камеры TrueDepth увеличивает полезную площадь экрана. Отлично подходит для фото, видео и повседневного использования.',
  price: 365000,
  rating: 4.8,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h3b/h93/64209085235230.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h8f/hce/64209121476638.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h4b/h84/64209123573790.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000',
  likes: 850,
  categoryId: 1
},
{
  id: 7,
  name: 'Внешний аккумулятор ESTELLAX MagSafe Pro 10000mAh 22.5W фиолетовый',
  description: 'Estellax MagSafe Pro — современный внешний аккумулятор с емкостью 10000mAh, обеспечивающий несколько зарядов смартфона. Поддерживает магнитное крепление MagSafe для удобного использования без проводов. Компактный и легкий, отлично подходит для повседневного использования.',
  price: 12590,
  rating: 4.7,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/pb5/p03/71084622.png?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/pb5/p03/71084622.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p99/p03/71084623.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p7c/p03/71084624.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p0d/p51/71320356.png?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/vneshnii-akkumuljator-estellax-magsafe-pro-10000-mach-22-5-vt-fioletovyi-146052658/?c=750000000',
  likes: 300,
  categoryId: 2
},
{
  id: 8,
  name: 'Redmi A3x 3GB/64GB черный',
  description: 'Redmi A3x — доступный смартфон с базовой производительностью и стильным дизайном, подходящий для повседневных задач. Обеспечивает комфортную работу с приложениями, общение и просмотр контента. Отличный выбор для пользователей, которым нужен надежный и недорогой смартфон.',
  price: 52900,
  rating: 4.6,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h9a/h1b/86584697651230.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/hac/h2e/86584697683998.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h46/h73/86584697716766.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/redmi-a3x-3-gb-64-gb-chernyi-121654928/?c=750000000',
  likes: 400,
  categoryId: 1
},
{
  id: 9,
  name: 'Внешний аккумулятор Virma SPB10K Magnetic 10000mAh 22.5W серый',
  description: 'Virma SPB10K Magnetic — компактный внешний аккумулятор с емкостью 10000mAh, подходящий для зарядки смартфонов и других устройств. Поддерживает магнитное крепление для удобного беспроводного использования. Отлично подходит для повседневного использования и поездок. Количество отзывов: 428.',
  price: 13900,
  rating: 4.6,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/pb4/p4f/60229626.png?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/pb4/p4f/60229626.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p60/p4f/60229629.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p9f/p4c/60229633.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p67/p4c/60229635.png?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/vneshnii-akkumuljator-virma-spb10k-magnetic-10000-mach-22-5-vt-seryi-142183000/?c=750000000',
  likes: 250,
  categoryId: 2
},
{
  id: 10,
  name: 'Наушники GERLAX GH-34 черный',
  description: 'GERLAX GH-34 — беспроводные наушники с качественным звуком и современным дизайном. Поддерживают стабильное соединение по Bluetooth и подходят для прослушивания музыки, звонков и повседневного использования. Обеспечивают комфорт даже при длительном ношении. Количество отзывов: 564.',
  price: 2769,
  rating: 4.5,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h33/hfc/86037848064030.png?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/h33/hfc/86037848064030.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h52/h6d/86037848129566.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h15/h72/86037848195102.png?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/naushniki-gerlax-gh-34-chernyi-119492193/?c=750000000',
  likes: 100,
  categoryId: 3
},
{
  id: 11,
  name: 'Apple AirPods 4 белый',
  description: 'Apple AirPods 4 — беспроводные наушники с качественным звуком и поддержкой пространственного аудио. Оснащены адаптивным эквалайзером и функцией отслеживания движения головы для более реалистичного звучания. Отлично подходят для музыки, звонков и повседневного использования. Количество отзывов: 3261.',
  price: 60240,
  rating: 4.9,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/pec/pd7/97865769.jpeg',
    'https://resources.cdn-kaspi.kz/img/m/p/h9f/had/87309385662494.png?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000',
  likes: 1800,
  categoryId: 3
},
{
  id: 12,
  name: 'Sony PlayStation 5 Slim',
  description: 'Sony PlayStation 5 Slim — современная игровая консоль с высокой производительностью и быстрым SSD-накопителем. Обеспечивает плавный геймплей и качественную графику, позволяя полностью погрузиться в игровой процесс. Компактный дизайн делает её удобной для размещения дома. Количество отзывов: 628.',
  price: 302839,
  rating: 4.9,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p0b/p2a/78474503.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p27/p2a/78474504.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p27/p2a/78474505.png?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000',
  likes: 2200,
  categoryId: 4
}, 
{
  id: 13,
  name: 'Телевизор Яндекс Бейсик с Алисой YNDX-00076 140 см черный',
  description: 'Представляем Яндекс Бейсик с Алисой YNDX-00076 — ваш идеальный спутник для домашнего развлечения! Этот LED-телевизор с диагональю 140 см и разрешением 4K UHD обеспечит вам высококачественное изображение и объемное звучание благодаря Dolby Audio.',
  price: 238645,
  rating: 4.7,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/pd4/p12/25408606.jpg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/pd4/p12/25408606.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p9c/p12/25408608.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p80/p12/25408609.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p14/p10/25408610.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/jandeks-beisik-s-alisoi-yndx-00076-140-sm-chernyi-133033164/?c=750000000',
  likes: 0,
  categoryId: 4
},
{
  id: 14,
  name: 'Очки виртуальной реальности Meta Quest 3 512GB',
  description: 'Очки виртуальной реальности Meta Quest 3 — совершенствованный аппаратный стек и первая гарнитура с процессором Snapdragon XR2 Gen 2, обеспечивающая удвоенную вычислительную мощность графического процессора для более быстрой загрузки и более плавного игрового процесса по сравнению с Meta Quest 2.',
  price: 290999,
  rating: 4.8,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h00/h89/84023738925086.png?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/h00/h89/84023738925086.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/hb3/h72/84136536309790.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h0a/hd6/84136536440862.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h25/hb7/84136536506398.png?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/meta-quest-3-512-gb-113525753/?c=750000000',
  likes: 0,
  categoryId: 4
},
{
  id: 15,
  name: 'Наушники Apple AirPods Max 2 фиолетовый',
  description: 'Модель автоматически умеет определять, когда нужно отключить шумоподавление. За счет излучателей большого диаметра наушники выдают громкий звук с хорошим балансом частот. Пространственный звук создается благодаря динамическому отслеживанию положения головы пользователя.',
  price: 288535,
  rating: 4.9,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p38/3402331.jpeg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/p18/p38/3402331.jpeg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p2b/p62/3531965.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p66/p16/3402329.jpeg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/paf/p34/3402330.jpeg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-fioletovyi-128589567/?c=750000000',
  likes: 0,
  categoryId: 3
},
{
  id: 16,
  name: 'Apple Watch SE 2 Gen 2022 40mm starlight-бежевый',
  description: 'Смарт-часы Apple Watch SE 2 Gen 2022 оснащены гибким силиконовым ремешком и квадратным сенсорным дисплеем с технологией OLED. Алюминиевый корпус устройства выдерживает неблагоприятные воздействия благодаря водонепроницаемости 5 Бар и прочности.',
  price: 208000,
  rating: 4.8,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/hf8/64534203301918.jpg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/h9d/hf8/64534203301918.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h41/hc5/64534206382110.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h6d/hd0/64534209134622.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/apple-watch-se-2-gen-2022-40-mm-starlight-bezhevyi-106362759/?c=750000000',
  likes: 0,
  categoryId: 4
},
{
  id: 17,
  name: 'Зарядное устройство Apple 20W USB-C Power Adapter белый',
  description: 'Адаптер питания Apple USB-C мощностью 20 Вт дает возможность быстро и эффективно заряжать гаджеты. Проверяется на основном сайте через QR на оригинальность. Этот адаптер совместим с любыми устройствами Apple, оснащенными портом USB-C: смартфон, планшет или смарт-часы.',
  price: 1985,
  rating: 4.9,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/haa/h98/63961936723998.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h81/h1a/63961938624542.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/hb3/he6/80523586928670.png?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000',
  likes: 350,
  categoryId: 2
},
{
  id: 18,
  name: 'Чехол CLASSNO для Apple Watch 10 42 мм прозрачный',
  description: 'Чехол CLASSNO для Apple Watch 10 42 мм — это надёжная защита вашего смарт-часов от царапин, ударов и других повреждений. Идеально подходит для активных людей, которые ведут динамичный образ жизни и хотят максимально защитить свои часы во время занятий спортом, путешествий или повседневного использования.',
  price: 990,
  rating: 4.7,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/pbe/p20/29962191.jpeg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/pbe/p20/29962191.jpeg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p1e/p41/29962192.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p3a/p41/29962193.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/pab/p41/29962197.png?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/chehol-classno-dlja-apple-watch-10-42-mm-prozrachnyi-136260049/?c=750000000',
  likes: 120,
  categoryId: 2
},
{
  id: 19,
  name: 'Смарт-очки Ray-Ban Meta Wayfarer RW4006 черный',
  description: 'Легендарный стиль Ray-Ban и технологии Meta объединены в одной модели. Смарт-очки позволяют записывать видео, делать фото и слушать музыку. Линзы обеспечивают 100% защиту от UVA и UVB лучей и высокий комфорт при использовании.',
  price: 273233,
  rating: 4.7,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pd8/54777416.jpg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/pef/pd8/54777416.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/pd3/pd8/54777417.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/pb7/pd8/54777418.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/smart-ochki-ray-ban-meta-wayfarer-standard-rw4006-601sm1-50-22-chernyi-116509833/?c=750000000',
  likes: 0,
  categoryId: 2
},

{
  id: 20,
  name: 'Наушники Apple USB-C MYQY3ZM/A белый',
  description: 'Наушники Apple USB-C — удобное решение для повседневного использования. Подходят для iPhone и Android, имеют встроенный микрофон и современный разъем USB Type-C. Отличный звук и комфорт для музыки и звонков.',
  price: 10460,
  rating: 4.8,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/pa1/pc8/41468726.jpg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/pa1/pc8/41468726.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/pf5/pc8/41468729.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p7d/pcb/41468731.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/naushniki-apple-usb-c-myqy3zm-a-belyi-139440255/?c=750000000',
  likes: 0,
  categoryId: 3
}
  ];

  get filteredProducts() {
    if (this.categoryId === null) return this.products;
    return this.products.filter(p => p.categoryId === this.categoryId);
  }

  onLike(product: Product) {
    product.likes++;
  }

  removeProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}