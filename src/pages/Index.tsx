import { useEffect, useRef } from 'react';

const sections = [
  {
    num: '01',
    title: 'Введение',
    body: [
      'Производственная практика — это первый настоящий шаг от теории к профессии. В рамках обучения по специальности «повар, кондитер» я проходил практику в ресторане «Сенкевич» в городе Омске, где смог применить полученные знания в условиях действующего предприятия общественного питания.',
      'Цель практики заключалась в закреплении профессиональных навыков, изучении организации производственного процесса на кухне ресторана и освоении технологии приготовления блюд и кондитерских изделий под руководством опытных наставников.',
    ],
  },
  {
    num: '02',
    title: 'История предприятия «Сенкевич»',
    body: [
      'Ресторан «Сенкевич» — заметное заведение в ресторанной жизни Омска, получившее своё название в честь известного путешественника и телеведущего. С момента открытия предприятие выстраивало репутацию места с авторской кухней, вниманием к качеству продуктов и атмосферой гостеприимства.',
      'За годы работы ресторан сформировал собственную команду профессионалов, отлаженные технологические процессы и постоянный круг гостей. Кухня сочетает классические традиции и современные подходы, а кондитерское направление стало одной из визитных карточек заведения — десерты готовятся на месте, по фирменным рецептурам.',
    ],
  },
  {
    num: '03',
    title: 'Мои обязанности поваром-кондитером',
    body: [
      'На время практики я был закреплён за кондитерским цехом и горячим участком кухни. В мои ежедневные обязанности входила подготовка рабочего места, приём и проверка качества сырья, а также соблюдение санитарных норм и правил гигиены.',
      'Я участвовал в приготовлении теста различных видов, выпечке, оформлении тортов и пирожных, приготовлении кремов и начинок. Под контролем шеф-кондитера осваивал последовательность технологических операций, точность взвешивания ингредиентов и аккуратность подачи готовых изделий.',
    ],
  },
  {
    num: '04',
    title: 'Полученный опыт и навыки',
    body: [
      'Практика дала мне понимание того, как устроена работа кухни в режиме реального ресторана — с его темпом, требованиями к скорости и неизменно высоким стандартам качества. Я научился работать в команде, распределять время и сохранять концентрацию в напряжённые часы загрузки.',
      'Среди профессиональных навыков, которые я закрепил: точная работа с рецептурами, владение кондитерским инвентарём, контроль температурных режимов, оформление изделий и соблюдение требований к их хранению. Не менее ценным оказался опыт общения с коллективом и дисциплина производственного процесса.',
    ],
  },
  {
    num: '05',
    title: 'Заключение и рекомендации',
    body: [
      'Практика в ресторане «Сенкевич» стала важным этапом моего профессионального становления. Я не только закрепил теоретические знания, но и получил реальное представление о профессии повара-кондитера, её ответственности и творческой стороне.',
      'Рекомендую данное предприятие в качестве базы для прохождения практики: здесь созданы условия для обучения, доброжелательный коллектив и грамотное наставничество. Полученный опыт я считаю прочным фундаментом для дальнейшего профессионального роста.',
    ],
  },
];

const Index = () => {
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('in-view');
        });
      },
      { threshold: 0.15 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <header className="mx-auto max-w-3xl px-6 pt-28 pb-20 md:pt-40 md:pb-28">
        <p className="animate-fade-up text-sm uppercase tracking-[0.35em] text-muted-foreground">
          Отчёт о производственной практике
        </p>
        <h1
          className="animate-fade-up mt-8 font-display text-6xl font-medium leading-[0.95] tracking-tight md:text-8xl"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          Ресторан
          <br />
          <span className="italic">«Сенкевич»</span>
        </h1>
        <div
          className="animate-fade-up mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 text-sm text-muted-foreground"
          style={{ animationDelay: '0.25s', opacity: 0 }}
        >
          <span>Повар-кондитер</span>
          <span className="h-px w-8 bg-foreground/20" />
          <span>город Омск</span>
          <span className="h-px w-8 bg-foreground/20" />
          <span>2026</span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 pb-40">
        {sections.map((s, i) => (
          <section
            key={s.num}
            ref={(el) => (refs.current[i] = el)}
            className="reveal border-t border-foreground/10 py-16 md:py-24"
          >
            <div className="grid gap-8 md:grid-cols-[5rem_1fr]">
              <span className="font-display text-2xl italic text-muted-foreground">
                {s.num}
              </span>
              <div>
                <h2 className="font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
                  {s.title}
                </h2>
                <div className="mt-8 space-y-6">
                  {s.body.map((p, idx) => (
                    <p
                      key={idx}
                      className="text-lg leading-relaxed text-foreground/80"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>

      <footer className="border-t border-foreground/10">
        <div className="mx-auto flex max-w-3xl flex-col gap-2 px-6 py-12 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span className="font-display text-lg italic text-foreground">
            Отчёт о практике
          </span>
          <span>Ресторан «Сенкевич» · Омск</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
