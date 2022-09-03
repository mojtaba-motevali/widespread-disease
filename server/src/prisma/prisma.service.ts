import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super({
      log: ['query'],
    });
  }

  async createSpecialist(name) {
    return await this.specialist.create({
      data: { name: name },
      select: { id: true },
    });
  }
  async createDoctor({
    firstName,
    lastName,
    address,
    latitude,
    longitude,
    specialistId,
  }) {
    await this
      .$queryRaw(`INSERT INTO doctor ("firstName","lastName","address","lat","long","specialistId") VALUES(
            '${firstName}','${lastName}','${address}','${latitude}','${longitude}','${specialistId}');`);
  }

  async addSpecialistAndDoctor() {
    const promises = [];
    const riye = await this.createSpecialist('ریه');
    promises.push(
      this.createDoctor({
        firstName: 'اسداله',
        lastName: 'اسدیان',
        latitude: 32.650694,
        longitude: 51.673296,
        specialistId: riye.id,
        address: 'خیابان آمادگاه - مجتمع پزشکی سپاهان - ساختمان 3',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'منصور',
        lastName: 'شهپریان پور',
        latitude: 32.633813,
        longitude: 51.63889,
        specialistId: riye.id,
        address: 'خیابان وحید - روبروی خاقانی - ساختمان پزشکان وحید - طبقه 3',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'مجید',
        lastName: 'کیوانفر',
        latitude: 32.631428,
        longitude: 51.658686,
        specialistId: riye.id,
        address:
          'توحید میانی ، کوچه 23 ( کوچه پارکینگ طبقاتی ) ، ساخنمان سارویه ، طبقه دوم',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'جعفر',
        lastName: 'اصلانی',
        latitude: 32.648248,
        longitude: 51.692993,
        specialistId: riye.id,
        address:
          'خیابان بزرگمهر .چهارراه نورباران.خیابان شریف واقفی.چهارراه ابوالحسن اصفهانی.نبش خیابان گلزار .ساختمان پزشکی پاراتیکا .طبقه سوم',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'علی رضا',
        lastName: 'امامی نائینی',
        latitude: 32.655369,
        longitude: 51.666153,
        specialistId: riye.id,
        address: 'خیابان شمس آبادی - مجتمع رازی - پلاک 106',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'رویا',
        lastName: 'شرکت',
        latitude: 32.635278,
        longitude: 51.67117,
        specialistId: riye.id,
        address:
          'خیابان میر - حدفاصل پل هوایی شیخ صدوق و چهار باغ بالا - بن بست ارگ - جنب چاپخانه البرز',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'بابک',
        lastName: 'امرا',
        latitude: 32.631251,
        longitude: 51.673843,
        specialistId: riye.id,
        address:
          'خیابان شیخ صدوق شمالی - خیابان شیخ مفید - ساختمان بامداد - پلاک 11',
      }),
    );
    const omomi = await this.createSpecialist('عمومی');
    promises.push(
      this.createDoctor({
        firstName: 'احمدرضا',
        lastName: 'مسماریان',
        latitude: 32.652405,
        longitude: 51.697608,
        specialistId: omomi.id,
        address:
          'خیابان بزرگمهر - ابتدای خیابان هشت بهشت غربی - پشت ایستگاه اتوبوس - ساختمان صوفی',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'منصور',
        lastName: 'بحرینی',
        latitude: 32.622919,
        longitude: 51.636211,
        specialistId: omomi.id,
        address: 'فلکه ارتش - جنب پادگان - مرکز توپخانه - پلاک 454',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'هومان',
        lastName: 'حسینی',
        latitude: 32.630697,
        longitude: 51.658274,
        specialistId: omomi.id,
        address:
          'خیابان توحید میانی بالای بانک پاسارگاد مجتمع نگار یک طبقه پنج واحد ۱۹',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'زینت',
        lastName: 'ضیایی',
        latitude: 32.676157,
        longitude: 51.651802,
        specialistId: omomi.id,
        address: 'دروازه تهران - کوی شهیدشهبازی - مجتمع صدرا - طبقه 3 - واحد 5',
      }),
    );
    const maghz = await this.createSpecialist('مغز و اعصاب');
    promises.push(
      this.createDoctor({
        firstName: 'محمد رضا',
        lastName: 'محقق',
        latitude: 35.731417,
        longitude: 51.44514,
        specialistId: maghz.id,
        address: 'شمس آبادی - چهار راه قصر - مجتمع قصر نور - واحد ۵۱۱',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'امیر',
        lastName: 'توکلی',
        latitude: 32.610621,
        longitude: 51.618581,
        specialistId: maghz.id,
        address: 'اصفهان-خیابان ولیعصر-بیمارستان فوق تخصصی میلاد',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'احمدرضا',
        lastName: 'رفیعی',
        latitude: 32.628512,
        longitude: 51.645005,
        specialistId: maghz.id,
        address:
          'خیابان حکیم نظامی - ابتدای خیابان محتشم کاشانی -روبروی ام آرآی سپاهان - مجتمع پردیس جنوبی - طبقه ششم',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'سیدفرزاد',
        lastName: 'ایزدی',
        latitude: 32.622992,
        longitude: 51.665179,
        specialistId: maghz.id,
        address:
          'دروازه شیراز (میدان آزادی) - نبش چهارباغ بالا - ابتدای بن بست هاله',
      }),
    );
    const asab = await this.createSpecialist('اعصاب و روان-روانپزشک');
    promises.push(
      this.createDoctor({
        firstName: 'مهشید',
        lastName: 'طباطباییان',
        latitude: 32.627321,
        longitude: 51.663484,
        specialistId: asab.id,
        address:
          'اصفهان- خیابان شریعتی- روبروی اورژانس شریعتی- ساختمان نوید ١- طبقه 4',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'آصفه',
        lastName: 'مژده',
        latitude: 32.626224,
        longitude: 51.664839,
        specialistId: asab.id,
        address:
          'چهارباغ بالا - روبروی زمزم - مجتمع پزشکی پارسیان - طبقه دوم - واحد 414',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'پویا',
        lastName: 'حاذق',
        latitude: 32.650525,
        longitude: 51.699058,
        specialistId: asab.id,
        address:
          'خیابان بزرگمهر.نبش رکن الدوله.ساختمان الماس.طبقه اول.کلینیک معنا',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'سید نیره',
        lastName: 'مظفری',
        latitude: 32.652151,
        longitude: 51.66579,
        specialistId: asab.id,
        address:
          'خیابان شمس آبادی - جنب هنرستان امیر کبیر - ساختمان مسیح - طبقه 2',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'صفا',
        lastName: 'مقصودلو',
        latitude: 32.62425,
        longitude: 51.664858,
        specialistId: asab.id,
        address:
          'دروازه شیراز - ابتدای چهارباغ بالا - مجتمع پارسیان - طبقه سوم',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'علیرضا',
        lastName: 'مظهری',
        latitude: 32.653753,
        longitude: 51.66572,
        specialistId: asab.id,
        address: 'چهارراه قصر - اول خیابان شیخ بهایی - کلینیک بهار',
      }),
    );
    const ghalb = await this.createSpecialist('قلب');
    promises.push(
      this.createDoctor({
        firstName: 'مهدی',
        lastName: 'سلیمانیان',
        latitude: 32.64844,
        longitude: 51.689121,
        specialistId: ghalb.id,
        address:
          'خیابان شریف واقفی - ضلع غربی تقاطع گلزار - مجتمع پزشکی پاراتیکا - طبقه سوم',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'بهار',
        lastName: 'مرادی',
        latitude: 32.629159,
        longitude: 51.638427,
        specialistId: ghalb.id,
        address:
          'خیابان وحید، نبش محتشم کاشانی، مجتمع عزیزخانی، طبقه دوم، واحد 22',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'سید وحید',
        lastName: 'شریف',
        latitude: 32.626348,
        longitude: 51.65835,
        specialistId: ghalb.id,
        address:
          'چهار راه پلیس - خیابان توحید جنوبی - نبش کوچه کاویان - ساختمان پزشکان ژیوار - طبقه 3 - واحد 304',
      }),
    );

    promises.push(
      this.createDoctor({
        firstName: 'سیدمحمد',
        lastName: 'عاملی',
        latitude: 32.652847,
        longitude: 51.665813,
        specialistId: ghalb.id,
        address:
          'خیابان شمس آبادی، قبل از چهار راه شیخ بهایی، مجتمع پزشکان رازی، طبقه ی اول',
      }),
    );

    promises.push(
      this.createDoctor({
        firstName: 'الناز',
        lastName: 'صدیقی فرد',
        latitude: 32.707878,
        longitude: 51.681866,
        specialistId: ghalb.id,
        address: ' خیابان کاوه ، ابتدای خیابان برازنده ، کلینیک حضرت ابوالفضل',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'بابک',
        lastName: 'شیرانی',
        latitude: 32.66146,
        longitude: 51.667675,
        specialistId: ghalb.id,
        address: 'خیابان طیب،جنب پمپ بنزین،مجتمع مهتاب 9،طبقه سوم واحد 19',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'جلال',
        lastName: 'نمازی',
        latitude: 32.648076,
        longitude: 51.69279,
        specialistId: ghalb.id,
        address:
          'خیابان بزرگمهر - خیابان شریف واقفی - تقاطع گلزار - مجتمع پزشکی پاراتیکا',
      }),
    );
    const kodak = await this.createSpecialist('کودکان');
    promises.push(
      this.createDoctor({
        firstName: 'محمدرضا',
        lastName: 'اسلامیان',
        latitude: 32.633594,
        longitude: 51.658904,
        specialistId: kodak.id,
        address:
          'توحید میانی.طبقه فوقانی داروخانه دی.مجتمع توحید.طبقه پنجم.واحد 512',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'مجید',
        lastName: 'خادمیان',
        latitude: 32.651005,
        longitude: 51.698609,
        specialistId: kodak.id,
        address:
          'اصفهان، خیابان بزرگمهر، روبروی بیمارستان صدوقی، ساختمان آمیتیس، واحد 101',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'ندا',
        lastName: 'سادات حکیمیان',
        latitude: 32.629664,
        longitude: 51.694824,
        specialistId: kodak.id,
        address:
          'خیابان سجاد - ابتدای سپهسالار (قایم مقام) - جنب ایستگاه تاکسی - مجتمع شیخ بهایی - طبقه اول',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'مهران',
        lastName: 'موحد محمدی',
        latitude: 32.653371,
        longitude: 51.665911,
        specialistId: kodak.id,
        address: 'خ شمس آبادی چهار راه قصر مجتمع قصر نور طبقه ۳واحد ۳۱۴',
      }),
    );

    const halgh = await this.createSpecialist('گوش حلق بینی');
    promises.push(
      this.createDoctor({
        firstName: 'نرگس',
        lastName: 'عسکری',
        latitude: 32.638553,
        longitude: 51.6537,
        specialistId: halgh.id,
        address:
          'اصفهان،خیابان حکیم نظامی،حدفاصل چهارراه حکیم نظامی و پل فلزی،مجتمع پزشکی حکیم،طبقه ۳،واحد ۳۰۰',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'امیرعباس',
        lastName: 'کارگشایی',
        latitude: 32.63235,
        longitude: 51.658534,
        specialistId: halgh.id,
        address:
          'مطب - خیابان توحید میانی - روبروی داروخانه منوچهری - ساختمان نگار 2 - واحد 1',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'سید حسین',
        lastName: 'مصطفوی',
        latitude: 32.64553,
        longitude: 51.675823,
        specialistId: halgh.id,
        address: 'خیابان فردوسی - مجتمع تجاری زاینده رود - شماره 112',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'علیرضا',
        lastName: 'معتمدی',
        latitude: 32.652238,
        longitude: 51.6986,
        specialistId: halgh.id,
        address:
          'بزرگمهر - چهار راه هشت بهشت - مجتمع پزشکان سروش - طبقه پنجم- واحد۳۰',
      }),
    );
    const govaresh = await this.createSpecialist('گوارش');
    promises.push(
      this.createDoctor({
        firstName: 'مهدی',
        lastName: 'احمدیان',
        latitude: 32.662603,
        longitude: 51.667041,
        specialistId: govaresh.id,
        address:
          'خیابان طیب - جنب پمپ بنزین - طبقه دوم داروخانه شبانه روزی دکتر تاجی',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'مجید',
        lastName: 'خادمیان',
        latitude: 32.651021,
        longitude: 51.698621,
        specialistId: govaresh.id,
        address:
          'اصفهان، خیابان بزرگمهر، روبروی بیمارستان صدوقی، ساختمان آمیتیس، واحد 101',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'محمد',
        lastName: 'جعفری',
        latitude: 32.609285,
        longitude: 51.653804,
        specialistId: govaresh.id,
        address: 'بلوار صفه، بیمارستان فوق تخصصی الزهرا',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'فاطمه',
        lastName: 'فاموری',
        latitude: 32.625951,
        longitude: 51.664873,
        specialistId: govaresh.id,
        address: 'خیابان چهارباغ بالا - روبروی شرکت زمزم - ساختمان ماکان 2',
      }),
    );
    const ankologi = await this.createSpecialist('انکولوژی');
    promises.push(
      this.createDoctor({
        firstName: 'مهران',
        lastName: 'شریفی',
        latitude: 32.631163,
        longitude: 51.675725,
        specialistId: ankologi.id,
        address: 'خیابان شیخ مفید - کلینیک شماره 2',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'محسن',
        lastName: 'خانی',
        latitude: 32.65043,
        longitude: 51.674103,
        specialistId: ankologi.id,
        address:
          'خیابان آمادگاه - روبروی هتل ونوس - ابتدای کوی محمداباد -ساختمان سبا - درمانگاه تخصصی سبا',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'فریبزر',
        lastName: 'مکاریان رجبی',
        latitude: 32.664402,
        longitude: 51.666547,
        specialistId: ankologi.id,
        address: 'خیابان طیب - ساختمان نگین',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'طالب',
        lastName: 'آذرم',
        latitude: 32.593439,
        longitude: 51.668032,
        specialistId: ankologi.id,
        address: ' خیابان هزارجریب - ابتدای کوی امام جعفرصادق - ساختمان پردیس',
      }),
    );
    const orologi = await this.createSpecialist('اورولوژی');
    promises.push(
      this.createDoctor({
        firstName: 'امیر',
        lastName: 'افیونی',
        latitude: 32.630888,
        longitude: 51.657977,
        specialistId: orologi.id,
        address:
          'خیابان توحید میانی - نبش کوچه هجدهم - طبقه فوقانی بانک پاسارگاد - مجتمع نگار',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'حمید',
        lastName: 'مزدک',
        latitude: 32.634192,
        longitude: 51.681074,
        specialistId: orologi.id,
        address: ' خیابان میر - روبروی داروخانه نقش جهان',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'سیدمسعود',
        lastName: 'سجادی',
        latitude: 32.651655,
        longitude: 51.69823,
        specialistId: orologi.id,
        address:
          'پل بزرگمهر - اول خیابان بزرگمهر - جنب داروخانه زکریا - ساختمان 152 - طبقه سوم',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'مهران',
        lastName: 'حلبیان',
        latitude: 32.724027,
        longitude: 51.679928,
        specialistId: orologi.id,
        address: 'اتوبان کاوه ، خیابان دکتر غرضی ، بیمارستان دکتر غرضی',
      }),
    );
    const ortoped = await this.createSpecialist('ارتوپدی');
    promises.push(
      this.createDoctor({
        firstName: 'آرش',
        lastName: 'فولادی',
        latitude: 32.628906,
        longitude: 51.658189,
        specialistId: ortoped.id,
        address:
          'اصفهان ،چهارراه پلیس ، ابتدای توحید میانی،ساختمان یاس ، طبقه چهارم ، واحد 402',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'فریده',
        lastName: 'نجفی',
        latitude: 32.657157,
        longitude: 51.666628,
        specialistId: ortoped.id,
        address:
          'خیابان شمس آبادی - جنب چهار راه طالقانی - مجتمع خورشید - طبقه 4 - واحد 19 - مطب دکتر فریده نجفی',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'حمیدرضا',
        lastName: 'ضیائی',
        latitude: 32.649777,
        longitude: 51.676611,
        specialistId: ortoped.id,
        address: 'دروازه شیراز، ابتدای خیابان هزار جریب، مجتمع سپهر، طبقه دوم',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'حسین',
        lastName: 'اکبری اقدم',
        latitude: 32.630698,
        longitude: 51.658814,
        specialistId: ortoped.id,
        address: 'توحید میانی ، جنب بانک سامان ، مجتمع نور ، طبقه سوم',
      }),
    );
    const ghodad = await this.createSpecialist('غدد');
    promises.push(
      this.createDoctor({
        firstName: 'پوریا',
        lastName: 'همدانی',
        latitude: 32.650781,
        longitude: 51.673332,
        specialistId: ghodad.id,
        address:
          'خیابان آمادگاه - جنب داروخانه سپاهان - ساختمان سپاهان 2 - طبقه 2 - واحد 7',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'نوشین',
        lastName: 'خلیلی بروجنی',
        latitude: 32.652647,
        longitude: 51.666098,
        specialistId: ghodad.id,
        address: 'اصفهان خیابان شمس ابادی ساختمان قمرالدوله طبقه اول واحد 104',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'الهام',
        lastName: 'هاشمی',
        latitude: 32.633577,
        longitude: 51.63901,
        specialistId: ghodad.id,
        address:
          'چهارراه خاقانی - خیابان وحید میانی- نبش باغ دریاچه - مجتمع پزشکی پاستور - طبقه دوم',
      }),
    );
    promises.push(
      this.createDoctor({
        firstName: 'محمدرضا',
        lastName: 'میرزایی',
        latitude: 32.650634,
        longitude: 51.672907,
        specialistId: ghodad.id,
        address: 'آمادگاه - روبروی داروخانه اصفهان - مجتمع پزشکی میلاد',
      }),
    );
    await Promise.all(promises);
  }

  async onModuleInit() {
    await this.$connect();
    const result = await this.signs.findUnique({
      where: { name: 'تب' },
    });
    if (!result) {
      try {
        await this.addSpecialistAndDoctor();
        await this.run();
        await this.addDiseaseItems();
      } catch (e) {
        console.log(e);
      }
    }
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }
  async createDiseaseSign({ signName, diseaseName }) {
    await this.signs_disease_join.create({
      data: {
        signs: {
          connectOrCreate: {
            where: { name: signName },
            create: { name: signName },
          },
        },
        disease: {
          connectOrCreate: {
            where: { name: diseaseName },
            create: { name: diseaseName },
          },
        },
      },
    });
  }

  async run() {
    let promises = [];
    let diseaseName = 'آسم'.trim();

    await this.createDiseaseSign({ signName: 'تنگی نفس'.trim(), diseaseName });
    await this.createDiseaseSign({
      signName: 'سفتی یا درد در قفسه سینه'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({ signName: 'سرفه'.trim(), diseaseName });

    diseaseName = 'آپاندیسیت'.trim();

    await this.createDiseaseSign({ signName: 'تب خفیف'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'تهوع'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'استفراغ'.trim(), diseaseName });
    await this.createDiseaseSign({
      signName: 'از دست دادن اشتها'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({ signName: 'یبوست'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'تورم شکم'.trim(), diseaseName });
    await this.createDiseaseSign({
      signName: 'درد در اطرف ناف'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'درد سمت راست پایین شکم'.trim(),
      diseaseName,
    });

    diseaseName = 'ام اس'.trim();
    await this.createDiseaseSign({
      signName: 'دوبینی یا تاری دید'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({ signName: 'خستگی'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'سر گیجه'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'لرزه'.trim(), diseaseName });
    await this.createDiseaseSign({
      signName: 'عدم هماهنگی یا راه رفتن لرزان'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'سوزش و درد در قسمت هایی از بدن'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'کاهش دید یا از دست دادن کامل بینایی'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'التهاب عصبی چشمی'.trim(),
      diseaseName,
    });

    diseaseName = 'برونشیت'.trim();
    await this.createDiseaseSign({
      signName: 'آبریزش بینی'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({ signName: 'عطسه کردن'.trim(), diseaseName });
    await this.createDiseaseSign({
      signName: 'سرفه خشک و عمیق'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'خلط سبز و زرد رنگ'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({ signName: 'تب'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'خستگی'.trim(), diseaseName });

    diseaseName = 'بی اشتهایی عصبی'.trim();

    await this.createDiseaseSign({
      signName: 'قطع قاعدگی'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({ signName: 'یبوست'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'پوست خشک'.trim(), diseaseName });
    await this.createDiseaseSign({
      signName: 'عدم تحمل به سرما'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'ضربان نامنظم قلب'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'کاهش فشار خون'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'کم شدن اب بدن'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'تورم دست و پا'.trim(),
      diseaseName,
    });

    diseaseName = 'بیش فعالی کودکان'.trim();
    await this.createDiseaseSign({
      signName: 'اختلال در توجه'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'خیالبلفی مکرر'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'عدم پیگیری دستورات و گوش دادن'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({ signName: 'پریشانی'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'پرحرفی'.trim(), diseaseName });
    await this.createDiseaseSign({
      signName: 'کم تحملی در انتظار'.trim(),
      diseaseName,
    });

    diseaseName = 'تالاسمی'.trim();
    await this.createDiseaseSign({ signName: 'خستگی'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'ضعف'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'تنگی نفس '.trim(), diseaseName });
    await this.createDiseaseSign({
      signName: 'ظاهر رنگ پریده'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'تحریک پذیری'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'تغییر رنگ پوست'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: ' تورم شکم '.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'ادرار تیره رنگ'.trim(),
      diseaseName,
    });

    diseaseName = 'تپش قلب'.trim();
    await this.createDiseaseSign({ signName: 'سر گیجه'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'تنگی نفس'.trim(), diseaseName });
    await this.createDiseaseSign({
      signName: 'احساس سبکی سر'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'افزایش سرعت نبض'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'نامنظمی ضربان قلب'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'درد قفسه سینه'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: ' احساس سنگینی در قفسه سینه'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({ signName: 'غش کردن'.trim(), diseaseName });

    diseaseName = 'دیابت نوع 1 کودکان'.trim();
    await this.createDiseaseSign({
      signName: 'افزیش تشنگی'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'ادرار مداوم'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'گرسنگی مفرط'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({ signName: 'کاهش وزن'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'خستگی'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'تاری دید'.trim(), diseaseName });
    await this.createDiseaseSign({
      signName: 'عفونت تخمیری'.trim(),
      diseaseName,
    });

    diseaseName = 'رفلاکس معده و مری'.trim();
    await this.createDiseaseSign({
      signName: 'درد در سینه'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({ signName: 'بلع سخت'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'سرفه خشک'.trim(), diseaseName });
    await this.createDiseaseSign({
      signName: 'احساس وجود توده در گلو '.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: ' احساس خشکی در گلو'.trim(),
      diseaseName,
    });

    diseaseName = 'سو هاضمه'.trim();
    await this.createDiseaseSign({ signName: 'نفخ'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'آروغ'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'حالت تهوع'.trim(), diseaseName });
    await this.createDiseaseSign({
      signName: 'احساس سیری'.trim(),
      diseaseName,
    });

    diseaseName = 'سنگ مثانه'.trim();

    await this.createDiseaseSign({
      signName: 'درد ناحیه پایین شکم '.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'ادرار دردناک'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'تکرر ادرار'.trim(),
      diseaseName,
    });

    diseaseName = 'سکته مغزی'.trim();

    await this.createDiseaseSign({
      signName: 'مشکل در راه رفتن'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'از دست دادن تعادل'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'مشکل در صحبت کردن و فهمیدن'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({ signName: 'فلج'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'رعشه'.trim(), diseaseName });
    await this.createDiseaseSign({
      signName: 'اختلال در بینایی'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({ signName: 'سردرد'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'تهوع'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'سر گیجه'.trim(), diseaseName });

    diseaseName = 'عفونت مثانه'.trim();

    await this.createDiseaseSign({ signName: ' تب'.trim(), diseaseName });
    await this.createDiseaseSign({
      signName: 'ادرار تیره'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'وجود خون در ادرار'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'تکرر ادرار'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'احساس فشار در ناحیه پایین شکم'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'احساس ناراحتی در ناحیه لگن'.trim(),
      diseaseName,
    });

    diseaseName = 'عفونت مجاری ادرار'.trim();

    await this.createDiseaseSign({
      signName: 'نیاز شدید به دفع ادرار'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'احساس سوزش در حین ادرار'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'وجود باکتری در ادرار'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'تکرر ادرار'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'وجود خون در ادرار'.trim(),
      diseaseName,
    });

    diseaseName = 'فشار خون بالا'.trim();

    await this.createDiseaseSign({ signName: 'سردرد'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'سر گیجه'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'خون دماغ'.trim(), diseaseName });

    diseaseName = 'میگرن'.trim();
    await this.createDiseaseSign({
      signName: ' سردر تپشی و ضربانی'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({ signName: 'تهوع'.trim(), diseaseName });
    await this.createDiseaseSign({
      signName: 'حساسیت به نور و صدا '.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'دردی که با فعالیت فیزیکی بدتر میشود'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'دردی که انجام فعالیت های روزمره را مختل میکند'.trim(),
      diseaseName,
    });

    diseaseName = 'نارسایی قلبی'.trim();
    await this.createDiseaseSign({
      signName: 'ضربان قلب تند'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'خستگی و ضعف'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({ signName: 'تنگی نفس'.trim(), diseaseName });
    await this.createDiseaseSign({
      signName: 'ورم در قسمت ران پا ، مچ پا و پاها'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'سرفه مداوم'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'تکرر ادرار'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'ورم در ناحیه شکم'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'کاهش اشتها '.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'اختلال در تمرکز'.trim(),
      diseaseName,
    });

    diseaseName = 'نقرس'.trim();

    await this.createDiseaseSign({
      signName: 'درد شدید مفاصل'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'ناراحتی و احساس ناخوشایندی'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'التهاب و قرمزی'.trim(),
      diseaseName,
    });

    diseaseName = 'همورویید'.trim();
    await this.createDiseaseSign({
      signName: 'درد و ناراحتی'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'خارش و سوزش مقعد'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'ترشح مدفوع'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'بیرون زدگی همورویید از ناحیه مقعد'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'نقاط توده ای و برجسته در ناحیه مقعد'.trim(),
      diseaseName,
    });

    diseaseName = 'پوکی استخوان'.trim();
    await this.createDiseaseSign({
      signName: 'کوتاهی قد به مرور زمان'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'خمیدگی یا قوز'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'شکستگی استخوان'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({ signName: 'درد پشت'.trim(), diseaseName });

    diseaseName = 'هیرسوتیسم'.trim();

    await this.createDiseaseSign({ signName: 'صدای کلفت'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'کچلی'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'جوش'.trim(), diseaseName });
    await this.createDiseaseSign({
      signName: 'کاهش سایز سینه'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'بزرگی کلیتوریس'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'افزایش حجم ماهیچه ها'.trim(),
      diseaseName,
    });

    // az inja bebad ro maziar anjam midahad

    diseaseName = 'کمای دیابتی'.trim();

    await this.createDiseaseSign({
      signName: 'افزایش تشنگی'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'تکرر ادرار'.trim(),
      diseaseName,
    });

    await this.createDiseaseSign({
      signName: 'خستگی و بی حالی'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({ signName: 'تنگی نفس'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'تهوع'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'استفراغ'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'درد شکمی'.trim(), diseaseName });
    await this.createDiseaseSign({
      signName: 'بوی بد دهان'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'دهان خیلی خشک'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'افزایش ضربان قلب'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'قند خون پایین'.trim(),
      diseaseName,
    });

    diseaseName = 'کم کاری تیرئید'.trim();
    await this.createDiseaseSign({ signName: 'خستگی'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'تنبلی'.trim(), diseaseName });
    await this.createDiseaseSign({
      signName: 'احساس کسل بودن'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'حساسیت یه سرما'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({ signName: 'یبوست'.trim(), diseaseName });
    await this.createDiseaseSign({
      signName: 'پوست خشک و رنگ پریده'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'صورت متورم'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'درد و حساسیت و سفت شدن عضلانی'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'ضعف عضلانی'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({ signName: 'افسردگی'.trim(), diseaseName });
    await this.createDiseaseSign({
      signName: 'دوره قاعدگی شدیدتر از حالت عادی'.trim(),
      diseaseName,
    });

    diseaseName = 'کرونا'.trim();
    await this.createDiseaseSign({ signName: 'تب'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: ' سرفه خشک'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'بدن درد'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'خستگی'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'درد بدن'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'درد گلو'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'اسهال'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'سردرد'.trim(), diseaseName });
    await this.createDiseaseSign({
      signName: 'از دست دادن حس بویایی'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'دشواری در تنفس'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({ signName: 'تنگی نفس'.trim(), diseaseName });
    await this.createDiseaseSign({
      signName: 'درد در قفسه سینه'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'فشار در قفسه سینه'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'از دست دادن گفتار'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'از دست دادن حرکت'.trim(),
      diseaseName,
    });

    diseaseName = 'سرماخوردگی'.trim();

    await this.createDiseaseSign({ signName: 'عطسه'.trim(), diseaseName });
    await this.createDiseaseSign({
      signName: 'آبریزش بینی'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'گرفتگی بینی'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({ signName: 'سوزش گلو '.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'سرفه'.trim(), diseaseName });
    await this.createDiseaseSign({
      signName: 'ترشحات پشت حلق'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'پرآبی چشم ها'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({ signName: 'تب'.trim(), diseaseName });

    diseaseName = 'آنفولانزا'.trim();

    await this.createDiseaseSign({ signName: 'تب'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'سرفه'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'درد گلو'.trim(), diseaseName });
    await this.createDiseaseSign({
      signName: 'گرفتگی بینی'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({
      signName: 'آبریزش بینی'.trim(),
      diseaseName,
    });
    await this.createDiseaseSign({ signName: 'سردرد'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'لرز'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'بدن درد'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'احساس ضعف'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'استفراغ'.trim(), diseaseName });
    await this.createDiseaseSign({ signName: 'اسهال'.trim(), diseaseName });
  }
  async updateDisease(
    diseaseName,
    { spreads, sideeffect, description, causedBy, medicrecom, specialistName },
  ) {
    await this.disease.update({
      where: { name: diseaseName },
      data: {
        spreads,
        description,
        causedBy,
        medicrecom,
        sideeffect,
        specialist: {
          connect: {
            name: specialistName,
          },
        },
      },
    });
  }

  async addDiseaseItems() {
    let promises = [];
    let diseaseName = 'آسم'.trim();
    promises.push(
      this.updateDisease(diseaseName, {
        spreads: false,
        description:
          'آسم شرایطی است که در آن مجاری هوایی باریک و متورم شده و مخاط اضافی ایجاد می کند و باعث اختلال در تنفس، سرفه، خس خس سینه و تنگی نفس می شود. در برخی افراد آسم، یک مشکل جزئی است اما در برخی افراد می تواند به یک مشکل اساسی تبدیل شود و فعالیت های روزمره فرد را مختل می کند و حتی ممکن است منجر به حمله آسم جدی شود.',
        causedBy: [
          'هنوز به طور کامل مشخص نیست که چرا بعضی از افراد به این بیماری مبتلا می شوند و بعضی دیگر مبتلا نمی شوند اما احتمالا هر دو عامل ژنتیک و محیط در این بیماری دخیل هستند.',
        ],
        medicrecom: [
          'آسم می تواند چالش برانگیز و استرس زا باشد. ممکن است گاهی اوقات ناامید، عصبانی یا افسرده شوید زیرا برای جلوگیری از محرک های محیطی باید فعالیت های معمول خود را کاهش دهید. همچنین برخی از علائم بیماری و روال های پیچیده مدیریت آن باعث احساس محدودیت یا خجالت در افراد می شود. بهترین راه برای غلبه بر اضطراب و احساس درماندگی، درک شرایط و کنترل خود است. برای این منظور می توانید یک لیست از کارهای روزانه خود تهیه و آن ها را مدیریت کنید. در بین انجام فعالیت های روزانه خود استراحت کرده و فعالیت هایی که علائم شما را وخیم تر می کنند را انجام ندهید.',
        ],
        sideeffect: [
          'ویزیت های اورژانس و بستری شدن در بیمارستان',
          'عوارض جانبی مصرف طولانی مدت برخی داروها',
          'علائم و نشانه های مختل کننده خواب، کار یا فعالیت های روزمره فرد',
          'تنگ شدن دائمی لوله های برونشی (ترمیم مجاری هوایی) و اختلال در تمرکز',
        ],
        specialistName: 'ریه',
      }),
    );
    diseaseName = 'آپاندیسیت'.trim();
    promises.push(
      this.updateDisease(diseaseName, {
        spreads: false,
        description:
          'آپاندیسیت یک بیماری است که طی آن آپاندیس شما ملتهب و پر از چرک می شود. آپاندیس شما یک کیسه انگشتی شکل است که از روده بزرگ منشعب شده و در سمت راست پایین شکم قرار دارد. برای این ساختار کوچک هیچ گونه کارکرد ضروری شناخته نشده است اما این به آن معنی نیست که نمی تواند مشکلاتی را ایجاد کند.',
        causedBy: [
          'انسداد: باقیمانده مواد غذایی یا یک قطعه مدفوع سخت(مدفوع سنگ مانند) می تواند سبب مسدود شدن دهانه مجرای آپاندیس شما شود.',
          'عفونت: همچنین آپاندیسیت ممکن است به دنبال عفونت مانند عفونت ویروسی دستگاه گوارش یا در نتیجه سایر انواع التهاب ایجاد شود.',
        ],
        medicrecom: [
          'مصرف میوه و به خصوص میوه‌های حاوی فیبر باعث جلوگیری از جمع شدن مواد مضر در آپاندیس می‌شود.',
          'در همه حال توصیه می‌شود که مصرف سبزیجات در برنامه غذایی باشد. از جمله فواید مصرف سبزیجات پاکسازی دستگاه گوارش است که شامل آپاندیس نیز می‌شود.',
          'غلات از جمله مواد دیگری می‌باشد که در سلامت روده موثر است و مانع بروز آپاندیسیت می‌شود',
        ],
        sideeffect: [
          'پاره شدن آپاندیس: اگر آپاندیس شما پاره شود، محتویات روده های شما و ارگانیسم های عفونی می تواند به داخل حفره شکم نفوذ کند. این امر می تواند سبب عفونت حفره شکمی شما (پریتونیت) شود.',
          'تشکیل کیسه چرک در شکم: اگر آپاندیس شما پاره شود، عفونت و نفوذ محتویات روده ای ممکن است در اطراف آپاندیس تشکیل آبسه(کیسه عفونت) دهد. آبسه آپاندیس قبل از اینکه پاره شده و سبب عفونت گسترده تر در حفره شکم شود، نیازمند درمان است.',
        ],
        specialistName: 'عمومی',
      }),
    );
    diseaseName = 'ام اس'.trim();
    promises.push(
      this.updateDisease(diseaseName, {
        spreads: false,
        description:
          'اسکلروز متعدد که به نام ام اس (MS) نیز شناخته می‌شود، نوعی بیماری مزمن است که به سیستم عصبی مرکزی (مغز، نخاع و عصب‌های چشمی) حمله می‌کند. در موارد شدید بیمار فلج و یا کور می‌شود، در حالی که در موارد خفیف ممکن است فقط بی‌حسی در اندام‌ها تجربه شود.',
        causedBy: [
          'علت این بیماری هنوز شناخته نشده است؛ با این حال یافته‌ها نشان می‌دهد که در بیماری ام اس، سیستم عصبی مرکزی توسط سیستم ایمنی خود فرد موردحمله قرار می‌گیرد. به همین دلیل اعتقاد بر این است که ام اس یک بیماری خود ایمنی است.',
        ],
        medicrecom: [
          'درمان فیزیکی: هدف از این کار آموزش مهارت‌هایی به بیماران است تا بتوانند توانایی حرکتی و کارکردی خود را حفظ و بازیابی کنند. اولین گام در راستای تلاش برای تسکین گرفتگی‌ها برداشته می‌شود؛ درمان فیزیکی از طریق تمرینات کششی روزانه بر کشش و انبساط عضلات تمرکز می‌کند.',
          'کاردرمانی: استفاده‌ی درمانی از کار، مراقبت از خود و انجام فعالیت‌ها به منظور افزایش رشد و جلوگیری از ناتوانی در نظر گرفته می‌شود',
          'درمان مشکلات تکلم و بلع: افراد متخصص آموزش‌دیده‌ای توانایی تکلم و زبان بیمار را بررسی و در صورت وجود مشکل، اختلالات گفتاری و زبانی را درمان می‌کنند. به این افراد آسیب‌شناسان گفتار و زبان یا گفتار درمان می‌گویند.',
          'بازتوانی شناختی: بازتوانی شناختی در مدیریت مشکلات خاص مربوط به تفکر و ادراک به بیمار کمک می‌کند.',
          'بازتوانی پیشنهادی: این نوع بازتوانی به افراد ناتوان کمک می‌کند تا برنامه‌ها و مهارت‌های شغلی را یاد بگیرند و بتوانند از عهده‌ی انجام یک شغل برآیند.',
        ],
        sideeffect: [
          'اسپاسم و سفتی عضلات',
          'ی حسی و فلج ، به طور معمول در پاها',
          'اختلال در دفع مدفوع یا ادرار و نیز اختلال در عملکرد جنسی',
          'تغییرات ذهنی همچون فراموشی  و یا عدم تمرکز',
        ],
        specialistName: 'مغز و اعصاب',
      }),
    );
    diseaseName = 'برونشیت'.trim();
    promises.push(
      this.updateDisease(diseaseName, {
        spreads: false,
        description:
          'برونشیت ممکن است یک بیماری ناخوشایند باشد که به دنبال یک بیماری ویروسی مانند سرماخوردگی رخ می‌دهد یا ممکن است در پی یک بیماری جدی‌تر مانند سرفه خشک و مزمن در اثر استعمال سیگار ایجاد شود. همچنین گاهی برونشیت در اثر قرار گرفتن در معرض دود، مواد تحریک‌کننده شیمیایی یا باکتری‌ها ایجاد می‌شود.',
        causedBy: [
          'تحریک‌کننده‌هایی مانند دود دخانیات، مواد شیمیایی موجود در تمیزکننده‌های خانگی و حتی بخار یا گرد و غبار محیط نیز می‌تواند باعث برونشیت حاد شود',
          'استعمال دخانیات، شایع‌ترین علت برونشیت است. آلودگی هوا نیز علائم مبتلایان به برونشیت را وخیم‌تر می‌کند.',
        ],
        medicrecom: [
          'تسکین علائم با نوشیدن مایعات زیاد، استراحت فراوان و پرهیز از استنشاق دود و بخار است',
          'درصورت استعمال سیگار،سیگار را ترک کنید. این امر به جلوگیری از ادامه آسیب به ریه‌ها کمک می‌کند',
          'واکسن پنوموکوکی و واکسن آنفلوآنزای سالانه نیز در صورت توصیه پزشک، موثر است',
        ],
        sideeffect: [],
        specialistName: 'ریه',
      }),
    );

    diseaseName = 'بی اشتهایی عصبی'.trim();
    promises.push(
      this.updateDisease(diseaseName, {
        spreads: false,
        description:
          'ناروکسیا یا بی اشتهایی عصبی نوعی اختلال تغذیه است که با پایین آمدن غیر طبیعی وزن، ترس شدید از افزایش وزن و تصور غلط از وزن شناخته می شود. افراد مبتلا به این اختلال عصبی به کنترل وزن و اندامشان بسیار اهمیت می دهند و به همین دلیل با انجام تلاش های فراوان، جانشان را نیز به خطر می اندازند',
        causedBy: [
          'دلیل اصلی بی اشتهایی عصبی مشخص نیست. درست مانند بسیاری از بیماری ها ترکیبی از شاخص های بیولوژیکی، فیزیولوژیکی و محیطی است.',
          'دلایل بیلوژیکی: ممکن است تغییرات ژنتیکی سبب شود فرد در خطر ابتلا به بی اشتهایی عصبی قرار بگیرد. برخی افراد ممکن است گرایش ژنتیکی به سمت کمال گرایی، حساس بودن و پشت کار داشته باشند',
          'دلایل فیزیولوژیکی: رخی افراد مبتلا به بی اشتهایی عصبی ممکن است دچار وسواس فکری باشند که مجبورند رژیم های غذایی بسیار سخت را بگیرند و یا با وجود گرسنگی غذا نخورند',
          'دلایل محیطی:  فرهنگ مدرن امروزی روی لاغری تاکید دارد. موفقیت و ارزش خود را معادل  با لاغر بودن می دانند. فشارِ هم سن و سال ها ممکن است اشتیاق به لاغر بودن را در افراد افزایش دهد.',
        ],
        medicrecom: [
          'از این فکر که وزن یا سایز بدنی خاص به صورت خودکار سبب شادی و رضایت می شود خلاص شوید',
          'لاغری و کاهش وزن نشانه موفق بودن و اضافه وزن نشانه ضعف و تنبلی نیست',
          'طبق اهداف، دستاوردها، استعداد ها و شخصیت به خود ارزش دهید. بدنتان سایز و شکل منحصر به فرد خود را دارد آن را بپذیرید و خود را از درون بسازید.',
        ],
        sideeffect: [
          'کم خونی',
          'مشکلات قلبی مانند پرولاپس دریچه میترال، ریتم قلبی غیر طبیعی یا نارسایی قلبی',
          'پوکی استخوان و افزایش خطر شکستگی',
          'از دست دادن عضلات',
          'کاهش تستوسترون در آقایان',
          'مشکلات دستگاه گوارش مانند یبوست، نفخ یا حالت تهوع',
          'افسردگی، اضطراب و دیگر اختلالات خلق و خو',
          'مصرف الکل یا مواد مخدر',
          'آسیب زدن به خود، فکر به خودکشی و یا اقدام به آن',
          '...و',
        ],
        specialistName: 'اعصاب و روان-روانپزشک',
      }),
    );

    diseaseName = 'بیش فعالی کودکان'.trim();
    promises.push(
      this.updateDisease(diseaseName, {
        spreads: false,
        description:
          'بیش فعالی یا ADHD نوعی اختلال شایع است که حدود هشت تا ۱۰ درصد کودکان را مبتلا می کند. این بیماری در پسران شایعتر از دختران است که هنوز دلیل اصلی آن مشخص نشده است. ویژگی های اولیه بیش فعالی از سال های اولیه رشد یعنی قبل از ورود به مدرسه شروع می شود.',
        causedBy: [
          'علت به وجود آمدن بیش فعالی احتمالا ترکیبی از عوامل ژنتیکی و محیطی است.',
          'استنشاق تحمیلی دود سیگار توسط مادر باردار، باعث اختلال در رفتار کودک می شود. استرس مادر هم با این موضوع ارتباط دارد.',
          'مسمومیت ناشی از سرب حاصل از دود اتومبیل و آلودگی هوا، غذاهای محتوی مواد افزودنی مثل شیرین کننده های مصنوعی و یا رنگ دهنده های خوراکی، مواد جلوگیری کننده از فاسد شدن غذا که در بعضی از غذاهای آماده وجود دارد، نیز در ایجاد این اختلال سهیم هستند',
        ],
        medicrecom: [
          'لوبیا، پنیر، تخم مرغ، گوشت و آجیل می تواند منبع خوبی از پروتئین باشد. خوردن این نوع غذاها در صبح و برای تنقلات بعد از مدرسه مفید است. این مواد غذایی ممکن است به بهبود تمرکز کمک کند و احتمالا باعث می شود داروهای بیش فعالی به مدت طولانی عمل کند.',
          'کاهش این غذاها: آب نبات، شربت ذرت، عسل، شکر، محصولات ساخته شده از آرد سفید، برنج سفید و سیب زمینی بدون پوست.',
        ],
        sideeffect: [],
        specialistName: 'اعصاب و روان-روانپزشک',
      }),
    );
    diseaseName = 'تالاسمی'.trim();
    promises.push(
      this.updateDisease(diseaseName, {
        spreads: false,
        description:
          'تالاسمی یک اختلال ارثی خونی است که هموگلوبین و گلبول‌های قرمز از نظر تعداد در بدن فرد مبتلا نسبت به حالت طبیعی کمتر است. هموگلوبین ملکولی از جنس پروتئین است که در سلول‌های قرمز خون شما وجود دارد و به سلول‌های خونی اجازه‌ی حمل اکسیژن را می دهد. این اختلال منجر به تخریب بیش از حد سلول‌های قرمز خون شده و باعث کم خونی می‌شود',
        causedBy: [
          'تالاسمی یک بیماری ارثی است و هنگامی رخ می دهد که یکی از ژن‌های تولیدکننده‌ی هموگلوبین دچار اختلال یا جهش شود',
          ' اگر تنها یکی از والدین شما ناقل تالاسمی باشد، ممکن است به نوعی از تالاسمی به عنوان تالاسمی مینور مبتلا شوید. در این حالت احتمالا علائم تالاسمی را نخواهید داشت، اما ناقل بیماری خواهید بود',
        ],
        medicrecom: [],
        sideeffect: [
          'اضافه بار آهن',
          'مشکلات قلبی',
          'عفونت',
          'بد شکلی‌های استخوانی',
          'بزرگی طحال',
          'روند آهسته‌ی رشد',
        ],
        specialistName: 'انکولوژی',
      }),
    );
    diseaseName = 'تپش قلب'.trim();
    promises.push(
      this.updateDisease(diseaseName, {
        spreads: false,
        description:
          'تا حالا شده که قلب‌تان به‌طور ناگهانی و بدون دلیل برای چند ثانیه تند و محکم بزند یا حس کنید که بعضی ضربان‌ها جا افتاده‌اند؟ به این حس تپش قلب می‌گویند. برای بعضی‌ها این اتفاق سالی یک‌بار می‌افتد اما بعضی افراد در طی روز بارها آن را تجربه می‌کنند و گاهی این‌قدر قوی است که به حمله قلبی شبیه می‌شود',
        causedBy: [
          'انقباض زودهنگام دهلیزهای بالایی قلب',
          ' فیبریلاسیون دهلیزی و سرعت ضربان بالای فوق‌بطنی',
          'انقباض زودهنگام بطن',
          '...و',
        ],
        medicrecom: [
          'مصرف کافئین را محدود یا کاملا متوقف کنید تا مطمئن بشوید که مشکل‌تان به علت مصرف کافئین نیست',
          'سیگار نکشید',
          'از سلامت رژیم غذایی خود مطمئن شوید (قند خون پایین می‌تواند باعث تپش قلب شود)',
          'مایعات زیاد بنوشید',
          'خواب کافی داشته باشید',
        ],
        sideeffect: [],
        specialistName: 'قلب',
      }),
    );
    diseaseName = 'دیابت نوع 1 کودکان'.trim();
    promises.push(
      this.updateDisease(diseaseName, {
        spreads: false,
        description:
          'دیابت نوع 1 در کودکان، شرایطی است که بدن کودک دیگر هورمون مهمی (انسولین) تولید نمی کند و او برای زنده ماندن به انسولین احتیاج دارد، بنابراین انسولین از دست رفته باید با تزریق یا با پمپ انسولین جایگزین شود. دیابت نوع یک در کودکان قبلاً به دیابت نوجوانان یا دیابت وابسته به انسولین معروف بود',
        causedBy: [
          'علت دقیق دیابت نوع 1 مشخص نیست. اما در بیشتر مبتلایان به دیابت نوع 1، سیستم ایمنی بدن به اشتباه سلول های تولید کننده انسولین (جزایر) در لوزالمعده را از بین می برد.',
        ],
        medicrecom: [
          'ورزش منظم',
          'مصرف انسولین',
          'حذف کربوهیدرات',
          'خوردن غذاهای سالم',
          'نظارت مکرر قند خون',
        ],
        sideeffect: [
          'پوکی استخوان. دیابت ممکن است خطر ابتلا به پوکی استخوان کودک را در بزرگسالی افزایش دهد',
          'آسیب چشم. دیابت می تواند به رگ های خونی شبکیه صدمه بزند و منجر به مشکلات بینایی شود',
          'آسیب کلیه. دیابت می تواند به خوشه های ریز رگ های خونی که سموم بدن را دفع می کنند، آسیب برسانند',
          'بیماری قلبی وعروقی.  دیابت خطر ابتلا کودک به شرایطی مانند انسداد رگ های خونی، فشار خون بالا، بیماری قلبی و سکته مغزی در دوران بعد از زندگی افزایش می دهد.',
          'آسیب عصبی. قند اضافی می تواند به دیواره رگ های خونی ریز که اعصاب را تغذیه می کند آسیب برساند. این می تواند باعث سوزن سوزن شدن اندام ها، بی حسی، سوزش یا درد آنها شود. آسیب عصبی معمولاً طی مدت طولانی به تدریج اتفاق میفتد.',
        ],
        specialistName: 'کودکان',
      }),
    );
    diseaseName = 'رفلاکس معده و مری'.trim();
    promises.push(
      this.updateDisease(diseaseName, {
        spreads: false,
        description:
          'ر ورودی معده شما، یک دریچه عضله ای حلقه ای شکل، وجود دارد، که اسفنکتر مری پایین (LES) نامیده می شود به طور معمول، LES بعد از عبور مواد غذایی بسته میشود اگر LES به طور کامل بسته نشود، اسید تولید شده توسط معده، می تواند به مری نفوذ کند این، می تواند سوزش سر دل را ایجاد کند ؛ اگر علائم رفلاکس اسید معده ،بیش از دو بار در هفته اتفاق افتد، شما بیماری رفلاکس اسید دارید',
        causedBy: [
          'خوردن وعده های غذایی بزرگ و دراز کشیدن بعد از آن',
          'داشتن اضافه وزن',
          'خوردن یک وعده غذایی سنگین و دراز کشیدن بر روی پشت و یا خم شدن',
          'خوردن تنقلات قبل از خواب',
          'خوردن غذاهای خاص، مانند مرکبات، گوجه فرنگی، شکلات، نعناع، ​​سیر، پیاز، یا غذاهای تند و چرب',
          'سیگار کشیدن',
          'حاملگی',
        ],
        medicrecom: [
          'در طول روز، وعده های غذایی کمتری مصرف کنید',
          'ترک سیگار',
          'زیر سر خود بالش قرار دهید، تا حداقل 4 اینچ تا 6 اینچ بالا بیاید',
          'حداقل 2 تا 3 ساعت قبل از خوابیدن ،غذا نخورید',
          'چرت روزانه خود را بر روی صندلی بزنید',
          'از لباسهای تنگ و کمربند تنگ استفاده نکنید',
        ],
        sideeffect: [],
        specialistName: 'گوش حلق بینی',
      }),
    );
    diseaseName = 'سو هاضمه'.trim();
    promises.push(
      this.updateDisease(diseaseName, {
        spreads: false,
        description:
          'سوء هاضمه یک درد گوارشی بدون زخم است و با علائمی چون احساس درد و سیری زودرس هنگام خوردن، سوزش شکم، نفخ، احساس گاز زیاد در شکم، تهوع، استفراغ خونی و ترش کردن غذا همراه است.',
        causedBy: [
          'پرخوری و یا تند خوردن غذا',
          'مصرف غذاهای چرب، روغنی و پر ادویه',
          'نوشیدن زیاد قهوه، چای و نوشابه های گازدار و نوشیدنی کاکائویی',
          'نوشیدن الکل',
          'کشیدن سیگار',
          'اضطراب و نگرانی',
          'بیماری سلیاک',
          'گاستریت یا التهاب معده',
          'سنگ کیسه صفرا',
        ],
        medicrecom: [
          'اجتناب از دراز کشیدن بلافاصله بعد از صرف غذا، زیرا انجام این کار می تواند علائم سوء هاضمه را تشدید کند',
          'نوشیدن شیر یا آب می تواند به کاهش سطح اسید معده کمک نماید.',
        ],
        sideeffect: ['تنگی مری', 'تنگی باب المعده', 'مری بارت'],
        specialistName: 'گوارش',
      }),
    );
    diseaseName = 'سنگ مثانه'.trim();
    promises.push(
      this.updateDisease(diseaseName, {
        spreads: false,
        description: '',
        causedBy: [
          'مثانه نوروژنیک: در صورتی که عصب هایی که به مثانه منتهی می شوند و سیستم عصبی دچار آسیب شده باشند، ادرار موجود در مثانه کاملاً تخلیه نمی شود.',
          'زرگ شدن پروستات: در صورتی که پروستات بزرگ شود، به مثانه فشار وارد می آورد و در جریان ادرار اختلال ایجاد می کند و مقداری ادرار در مثانه باقی می ماند.',
          'وسایل پزشکی: سنگ مثانه می تواند به علت کاتتر و سایر وسایل پزشکی که ممکن است به مثانه برخورد کرده باشند ایجاد شود.',
          'التهاب مثانه: عفونت مجاری ادراری یا رادیو تراپی می تواند باعث التهاب مثانه شود.',
          'سیستوسل: در زنان، دیواره مثانه ضعیف شده و به سمت واژن می رود. این می تواند بر جریان ادرار از مثانه تأثیر بگذارد.',
        ],
        medicrecom: [],
        sideeffect: ['اختلال عملکرد مزمن مثانه', 'عفونت‌های دستگاه ادراری'],
        specialistName: 'اورولوژی',
      }),
    );
    diseaseName = 'سکته مغزی'.trim();
    promises.push(
      this.updateDisease(diseaseName, {
        spreads: false,
        description:
          'سکته مغزی زمانی رخ می‌دهد که خونی که مسئول تغذیه قسمتی از مغز شما می‌باشد، قطع گردیده و یا شدیداً کاهش پیدا کند، که این امر موجب می‌گردد بافت مغز از اکسیژن و غذا محروم‌گردد. در عرض چند دقیقه سلول‌های مغز شروع به مردن و نابود شدن می‌نمایند.',
        causedBy: [
          'ممکن است سکته به علت انسداد یک سرخرگ( سکته ایسکمیک)، به‌وجود آید، و یا به علت رگ خونی که نشت کرده و یا پاره شده و از هم پاشیده شده باشد(سکته هموراژیک). بعضی از افراد نیز ممکن است قطع ناگهانی و زودگذر در جریان خون از سوی مغزشان را تجربه نمایند(حمله ایسکمیک ترانزینت یا حمله گذرای کم‌خونی).',
        ],
        medicrecom: [
          'به خود سخت نگیرید',
          'حتی اگر برایتان سخت است، از خانه بیرون بروید',
          'عضو گروه‌های حمایتی شوید',
          'اجازه دهید که اعضاء خانواده و دوستانتا ن بدانند که به چه نیاز دارید',
          'بدانید که تنها نیستید',
        ],
        sideeffect: [
          'فلج شدن یا فقدان و از دست دادن حرکت ماهیچه',
          'مشکل در صحبت کردن(تکلم) و یا اختلال در بلع',
          'فقدان و از دست دادن حافظه و یا اشکال و دشواری در فکرکردن',
          'مشکلات احساسی',
          'تغییرات رفتاری و توجه و مراقبت از خود',
        ],
        specialistName: 'مغز و اعصاب',
      }),
    );
    diseaseName = 'عفونت مثانه'.trim();
    promises.push(
      this.updateDisease(diseaseName, {
        spreads: false,
        description:
          'عفونت مثانه نوعی عفونت ادراری است که کلیه ها، حالب ها و یا میزراه را درگیر می کند. عفونت مثانه معمولا به وسیله ی باکتری های موجود در مثانه ایجاد می شود. همچنین ممکن است مخمرها در کسانی که دارای نقص ایمنی هستند، باعث عفونت شوند.',
        causedBy: [
          'باکتری های وارد شده به مثانه از طریق میزراه، میتوانند باعث عفونت شوند.',
          'تکثیر بیش از حد باکتری ها، باعث از بین رفتن توانایی بدن در نابود کردن آن ها و این عارضه، یکی از علل ایجاد عفونت در مثانه است',
        ],
        medicrecom: [
          'نوشیدن شش تا هشت لیوان آب در روز',
          'نوشیدن روزانه ی آب ذغال اخته',
          'اقدام به موقع در تخلیه ی ادرار',
          'تمیز کردن ناحیه تناسلی بوسیله ی دستمال کاغذی از سمت جلو به عقب در خانم ها',
          'استفاده از حمام سرپایی بجای استفاده از وان',
          'پوشیدن لباس های زیر کتان و گشاد',
        ],
        sideeffect: [],
        specialistName: 'اورولوژی',
      }),
    );
    diseaseName = 'عفونت مجاری ادرار'.trim();
    promises.push(
      this.updateDisease(diseaseName, {
        spreads: false,
        description:
          'عفونت دستگاه ادراری (uti) نوعی عفونت در هر بخش از سیستم ادراری - کلیه ها، مجاری ادرار و مجرای پیشاب است.بیشتر عفونت ها برای مثانه پایینی و مجرای ادرار هستند.زنان در مقایسه با مردان در معرض خطر بیشتری قرار دارند.عفونت در مثانه تان می تواند آزاردهنده باشد.',
        causedBy: [
          'عفونت دستگاه ادراری معمولاً زمانی رخ می دهد که باکتری از مجرای پیشاب وارد مجرای ادرار شود و در مثانه تکثیر شود.',
          'دیابت و بیماری های دیگری که سیستم ایمنی را مختل می کنند، می تواند خطر عفونت ادراری را افزایش دهد.',
          'افرادی که خودشان نمی توانند ادرار کنند و از یک لوله (کاتتر) برای ادرار کردن استفاده می کنند، این کار آنها را در معرض خطر ابتلا به عفونت ادراری قرار می دهد.',
          'جراحی ادراری یا امتحان دستگاه ادرار که شامل ابزارهای پزشکی است هم می تواند خطر ابتلا به عفونت دستگاه ادراری را افزایش دهد.',
        ],
        medicrecom: [
          'آب کرن بری بنوشید',
          'خود را از جلو به عقب پاک کنید',
          'مایعات زیادی به خصوص آب بنوشید',
          'بعد از مقاربت، مثانه تان را خالی کنید',
          'از محصولات زنانه تحریک آمیز اجتناب کنید',
          'روش کنترل بارداری خود را تغییر دهید',
        ],
        sideeffect: [],
        specialistName: 'اورولوژی',
      }),
    );
    diseaseName = 'فشار خون بالا'.trim();
    promises.push(
      this.updateDisease(diseaseName, {
        spreads: false,
        description:
          'فشار خون نیروی جریان خون شما در فشار بر دیواره‌های سرخرگ‌هاست. هر بار که قلبتان می‌تپد، خون را به سرخرگ‌ها پمپ می‌کند. وقتی قلب می‌تپد و خون را پمپ می‌کند، فشار خون شما در بالاترین حد است. به این فشار سیستولی می‌گویند. وقتی قلب شما بین تپش‌ها در حال استراحت است فشار خون می‌افتد. به این فشار دیاستولی گفته می‌شود.',
        causedBy: [
          'افزایش سن',
          'نژاد',
          'سابقه خانوادگی',
          'اضافه‌وزن یا چاقی مفرط',
          'فعالیت بدنی کم',
          'مصرف تنباکو',
          'استرس',
          'بارداری',
        ],
        medicrecom: [
          'تغذیه سالم یکی از مؤثرترین راه‌ها برای کاهش فشار خون است. توصیه می‌شود غذاهایی که حاوی مقادیر کمتری نمک و سدیم هستند و پتاسیم بیشتری دارند مصرف شوند.',
          'توصیه می‌شود از مصرف نوشیدنی‌های الکلی خودداری شود',
          'انجام ورزش هوازی (ایروبیک) چند بار در هفته برای داشتن قلبی سالم، بسیار مفید است چون باعث بهبود جریان خون می‌شود.',
        ],
        sideeffect: [],
        specialistName: 'عمومی',
      }),
    );
    diseaseName = 'میگرن'.trim();
    promises.push(
      this.updateDisease(diseaseName, {
        spreads: false,
        description:
          'سردردهای مکرری که اغلب یک طرف سر را درگیر می‌کند و با بی‌اشتهایی، تهوع و استفراغ همراه است. دردهای میگرنی نبض‌دار و به حدی شدید است که عملکرد فرد را مختل می‌کند. سردردها می‌تواند از لحاظ شدت، فرکانس (دفعات حمله در روز) و استمرار در بین بیماران مختلف بسیار متفاوت باشد. حساسیت به نور و صدا نیز از دیگر علائم این بیماری است.',
        causedBy: [
          'برخی غذاها مثل ادویه‌جات',
          'به هم خوردن الگوی خواب',
          'تغییرات هورمونی (مثل دوره ماهانه در زنان)',
          'داروها',
          'فعالیت فیزیکی',
          'محرک بینایی، شنوایی و حتی چشایی',
          'تغییرات دما',
          'گرسنگی',
          'عوامل روانی',
        ],
        medicrecom: [
          'دراز کشیدن در یک اتاق تاریک و ساکت',
          'ماساژ دادن کف سر یا گیجگاه‌ها',
          'قرار دادن یک حوله‌ سرد روی پیشانی یا پشت گردن',
        ],
        sideeffect: ['مشکل قلبی', 'فیبرومیالژیا', 'افسردگی', 'اضطراب', 'تشنج'],
        specialistName: 'مغز و اعصاب',
      }),
    );
    diseaseName = 'نارسایی قلبی'.trim();
    promises.push(
      this.updateDisease(diseaseName, {
        spreads: false,
        description:
          'نارسایی قلبی، که بعضاً به عنوان نارسایی احتقانی قلب نیز شناخته می شود، ناتوانی عضله قلب در پمپاژ خون مورد نیاز بدن می باشد. وظیفه ی اصلی قلب خون رسانی به سراسر بدن است و وقتی قلب نارسا می شود، قادر به انجام این وظیفه نخواهد بود.',
        causedBy: [
          'بیماری عروق کرونر',
          'فشار خون بالا',
          'بیماری دریچه قلبی',
          'میوکاردیت',
          'کاردیومیوپاتی',
          'بیماری های مادرزادی قلبی',
          'بیماری های زمینه ای',
        ],
        medicrecom: [
          'شامل عدم مصرف سیگار،',
          'فعالیت ورزشی مناسب با وضعیت بیمار',
          'مصرف رژیم غذایی سالم',
          'کنترل وزن و کاهش استرس',
        ],
        sideeffect: [],
        specialistName: 'قلب',
      }),
    );
    diseaseName = 'نقرس'.trim();
    promises.push(
      this.updateDisease(diseaseName, {
        spreads: false,
        description: `نقرس یکی از انواع بیماری های ورم مفاصل می باشد که با درد همراه است. نقرس در اثر افزایش اسید اوریک در خون به وجود می آید. یکی از عوامل افزایش دهنده ی اسید اوریک، دریافت زیاد مواد غذایی حاوی اسید آمینه ی "پورین" است.`,
        causedBy: [
          'افزایش تولید اسید اوریک به وسیله بدن',
          'کاهش خروج اسید اوریک توسط کلیه ها',
          ' افزایش دریافت غذاهای پورین',
          'بیماری های حاد',
          'ضربه روحی',
          'جراحی',
          'تب',
          'کمبود آب بدن',
        ],
        medicrecom: [
          'اجتناب از غذاهای حاوی سطح بالایی از پورین، مانند گوشت قرمز، امعاء و احشاء،',
          '، اجتناب از نوشیدنی‌های شیرین و تنقلات، زیرا با افزایش خطر ابتلا به نقرس در ارتباط هستند.',
          'حفظ وزن سالم- از یک رژیم غذایی متعادل پیروی کنید. رژیم غذایی خود را محدود و سخت نکنید و یا رژیم حاوی پروتئین بالا و کربوهیدرات کم را در پیش بگیرید.',
          'نجام ورزش منظم- سعی کنید ورزش‌هایی (مانند شنا) را انجام دهید که فشار بیش از حد بر مفاصل شما وارد نمی‌کند.',
          'نوشیدن مقدار زیادی آب- بدن خود را کاملاً هیدراته نگه‌دارید تا خطر تشکیل کریستال در مفاصل خود را کاهش دهید.',
          'کاهش مصرف الکل- از مصرف آبجو و به‌ویژه نوشابه‌های الکلی و نیز شراب‌خواری پرهیز کنید.',
        ],
        sideeffect: [],
        specialistName: 'گوارش',
      }),
    );
    diseaseName = 'همورویید'.trim();
    promises.push(
      this.updateDisease(diseaseName, {
        spreads: false,
        description:
          'هموروید یا بواسیر عبارت است از سیاه رگ ‌های گشاد شده و واریسی در مقعد که ممکن است در مجرای مقعدی که آن را بواسیر داخلی‌ یا خارجی‌ می‌نامند ایجاد شود. این عارضه میتواند به هنگام دفع مدفوع درد و ناراحتی‌ و گاهی خون ریزی به همراه داشته باشد.',
        causedBy: [
          'رژیم غذایی کم فیبر',
          'یبوست مزمن',
          'استرس و فشارهای عصبی',
          'بالا رفتن فشار خون در سیستم گوارشی(در اثر اعتیاد به الکل)',
          'عارضه ‌های کبدی (مانند سیروز کبدی)',
        ],
        medicrecom: [
          'استفاده از درمان های موضعی',
          'ناحیه مقعد را تمیز نگهدارید',
          'به طور منظم از وان آب گرم استفاده کنید',
          'از کمپرس یخ استفاده کنید',
          'از توالت فرنگی استفاده کنید',
          'از دستمال توالت های خشک و زبر استفاده نکنید',
          'استفاده از داروهای خوراکی',
        ],
        sideeffect: [
          'آنمی: از دست دهی مزمن خون ناشی از همورویید منجر به آنمی –ناکافی بودن سلولهای خونی قرمز- خواهد شد که باعث خستگی و ضعف می شود.',
          'همورویید محتقن: چنانچه خون رسانی به همورویید داخلی قطع شود، هموروئید دچار اختناق می گردد که منجر به درد شدید و منتهی به مرگ بافتی (قانقاریا) خواهد شد.',
        ],
        specialistName: 'گوارش',
      }),
    );
    diseaseName = 'پوکی استخوان'.trim();
    promises.push(
      this.updateDisease(diseaseName, {
        spreads: false,
        description:
          'ساختار نرمال استخوان حفره حفره و نازک می‌شود و توانایی تحمل نیروهایی که هر روزه بر استخوان وارد می‌شود کمتر می‌شود. تشخیص پوکی استخوان به این صورت است که شکستگی‌های ناشی از بیماری پوکی استخوان می‌توانند شدید باشند، باعث درد شوند و بر کیفیت زندگی فرد اثر گذار باشند.  شکستگی های ناشی از پوکی استخوان بیشتر در ستون مهره، شکستگی لگن، مچ دست و معمولاٌ بدنبال زمین خوردن ایجاد می شوند.',
        causedBy: [
          'جنس: زنان بیشتر از مردان دچار پوکی استخوان می شوند',
          'سن: با افزایش سن احتمال بروز پوکی استخوان زیاد می شود',
          'نژاد: در سفید پوستان و نژاد آسیایی شیوع بیشتری دارد',
          'پرکاری غدد پاراتیروئید و غدد فوق کلیوی',
          'استفاده طولانی مدت از داروهای استروئیدی (کورتن ها).',
          'بیماریهای تیروئید ازجمله پر کاری غده تیروئید',
        ],
        medicrecom: [
          'تغذیه مناسب و فعالیتهای ورزشی منظم',
          'مصرف مواد لبنی کم چرب، سبزیجات، غذاهای دریایی؛ آب میوه بخصوص اب پرتقال و مکمل های حاوی کلسیم',
        ],
        sideeffect: [
          'شکستگی استخوان',
          ' کوتاهی قد ',
          'حالت خمیدگی بدن بطرف جلو',
        ],
        specialistName: 'ارتوپدی',
      }),
    );
    diseaseName = 'هیرسوتیسم'.trim();
    promises.push(
      this.updateDisease(diseaseName, {
        spreads: false,
        description:
          'پرمویی یک بیماری نسبتاً شایع در بین خانم‌ها محسوب می‌شود به طوری که از هر ۲۰ خانم یک نفر با این مشکل درگیر است که رقم نسبتا بالایی است',
        causedBy: [
          'چاقی',
          'عوارض دارویی مانند داروهای هورمونی و انسولین',
          'هیپرپلازی مادرزادی غدد آدرنال',
          'سندرم تخمدان پلی‌کیستیک',
        ],
        medicrecom: [
          'چای سبز و برگ نعناع در این موارد توصیه می‌شود زیرا این دو ماده‌ی طبیعی موجب کاهش تستوسترون شده و به رفع علائم هیرسوتیسم کمک می‌کند. برای تهییه این دمنوش می‌توانید از دستور زیر استفاده کنید و رویش موهای زائد را کنترل کنید',
        ],
        sideeffect: [],
        specialistName: 'غدد',
      }),
    );
    diseaseName = 'کمای دیابتی'.trim();
    promises.push(
      this.updateDisease(diseaseName, {
        spreads: false,
        description:
          'کمای دیابتی یکی از عوارض تهدید کننده ی زندگی افراد دیابتیک است که منجر به بیهوشی فرد می شود',
        causedBy: [
          'اگر مبتلا به دیابت هستید، قند خون بالا خطرناک ( هایپرگلایسمی ) و یا قند خون پایین خطرناک ( هایپوگلایسمی ) می تواند شما را به سمت کمای دیابتی سوق دهد',
        ],
        medicrecom: [
          'بیماران دیابتی نباید از مواد خوراکی خارج از دستور پزشک استفاده کنند',
        ],
        sideeffect: [
          'افزایش تشنگی',
          'تکرر ادرار',
          'دهان خیلی خشک',
          'لرزش و حالت عصبی داشتن',
          'درد شکمی',
          'گرسنگی',
          'تهوع',
          'نامنظم شدن یا افزایش ضربان قلب',
          'سردرگمی',
        ],
        specialistName: 'غدد',
      }),
    );
    diseaseName = 'کم کاری تیرئید'.trim();
    promises.push(
      this.updateDisease(diseaseName, {
        spreads: false,
        description:
          'این بیماری هنگامی ایجاد می‌شود که غده تیروئید نتواند به اندازه نیاز بدن هورمون تولید کند',
        causedBy: [
          'هیپوتیروئیدی اولیه',
          'برداشتن تیروئید با جراحی',
          'برداشتن تیروئید با جراحی',
          'مصرف داروهایی مانند لیتیوم',
          'هیپوتیروئیدی خود ایمنی',
        ],
        medicrecom: [
          'رژیم غذایی مدیترانه ای',
          'نسبت به غذاهای خاص محتاط باشید',
        ],
        sideeffect: [
          'گواتر',
          'بیماری‌های قلبی',
          'مشکلات روحی روانی',
          'ناباروری',
        ],
        specialistName: 'غدد',
      }),
    );
    diseaseName = 'کرونا'.trim();
    promises.push(
      this.updateDisease(diseaseName, {
        spreads: true,
        description:
          'این ویروس باعث عفونت ریه‌ها می‌شود. نخستین علامت بیماری تب است و سپس سرفه خشک که می‌تواند به مشکلات تنفسی نیز منتهی شود',
        causedBy: [
          'روزانه ده‌ها هزار مورد جدید ابتلا به ویروس کرونا از سراسر دنیا گزارش می‌شود. اما گمان می‌رود که مقامات بهداشتی شناخت دقیقی از کلیه موارد ابتلا ندارند',
        ],
        medicrecom: [
          'دوری از اجتماعات و اماکن پرتراکم و شلوغ',
          'پرهیز از تماس نزدیک با افراد بیمار و دارای نشانه‌های بیماری',
          'ماندن در خانه و رعایت فاصله فیزیکی با افراد',
        ],
        sideeffect: [],
        specialistName: 'ریه',
      }),
    );
    diseaseName = 'سرماخوردگی'.trim();
    promises.push(
      this.updateDisease(diseaseName, {
        spreads: true,
        description:
          'سرما خوردگی بیماری واگیر مربوط به دستگاه تنفسی فوقانی است که عمدتاً بینی را تحت تأثیر قرار می‌دهد.',
        causedBy: [
          'ویروس سرماخوردگی اغلب به دو شکل منتقل می‌شود، استنشاق یا بلعیدن ذرات موجود در هوا که ویروس را دربردارند یا تماس با مخاط بینی یا اشیای آلوده',
        ],
        medicrecom: [
          'استراحت کافی، نوشیدن مایعات برای حفظ آب بدن، و قرقره با آب ولرم و نمک اقداماتی است که از گذشته انجام می‌شده و می‌تواند مفید باشد',
        ],
        sideeffect: ['خستگی', 'سردرد ', 'عطسه', ' گلودرد', 'تب', 'آبریزش بینی'],
        specialistName: 'عمومی',
      }),
    );
    diseaseName = 'آنفولانزا'.trim();
    promises.push(
      this.updateDisease(diseaseName, {
        spreads: true,
        description:
          'آنفولانزا بیماری واگیر داری است که باعث عفونت دستگاه تنفسی می شود و با علائم شدیدی همراه است که باید سریعا به دکتر مراجعه کنید.',
        causedBy: ['اورتومیکسو ویروس ها از عوامل بروز آنفلوآنزا هستند'],
        medicrecom: [
          'واکسناسیون تب های فصلی هر ساله می تواند بدن شما را از سه یا چهار ویروس آنفولانزای رایج محافظت کند',
        ],
        sideeffect: [],
        specialistName: 'عمومی',
      }),
    );

    await Promise.all(promises);
  }
}
