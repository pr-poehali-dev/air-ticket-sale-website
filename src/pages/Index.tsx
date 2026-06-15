import { useState } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/e11bc11c-60be-4d54-be6b-296e1a780d70/files/f5dcaa96-cd7a-4a40-bc87-28c74cfa181a.jpg';

const navLinks = ['Авиабилеты', 'Отели', 'Мои заказы'];

const tripTypes = ['Туда-обратно', 'В одну сторону', 'Сложный маршрут'];

const flights = [
  {
    airline: 'S7 Airlines', code: 'S7', tag: 'Лучший выбор',
    dep: '09:35', arr: '15:20', from: 'LED', to: 'DME',
    fromCity: 'Санкт-Петербург', toCity: 'Москва',
    fromAir: 'Пулково', toAir: 'Домодедово',
    dur: '1 ч 45 мин', stops: 'Прямой', price: '8 450',
    seats: null,
  },
  {
    airline: 'Аэрофлот', code: 'SU', tag: 'Популярный',
    dep: '11:10', arr: '17:30', from: 'LED', to: 'DME',
    fromCity: 'Санкт-Петербург', toCity: 'Москва',
    fromAir: 'Пулково', toAir: 'Домодедово',
    dur: '2 ч 20 мин', stops: '1 пересадка', price: '6 990',
    seats: 'Осталось 3 места',
  },
  {
    airline: 'Победа', code: 'DP', tag: null,
    dep: '07:00', arr: '08:50', from: 'LED', to: 'DME',
    fromCity: 'Санкт-Петербург', toCity: 'Москва',
    fromAir: 'Пулково', toAir: 'Домодедово',
    dur: '1 ч 50 мин', stops: 'Прямой', price: '5 200',
    seats: null,
  },
];

const reviews = [
  { name: 'Анна М.', city: 'Москва', text: 'Нашла билеты на 30% дешевле, чем на других сайтах. Оплата заняла пару минут, всё прозрачно.', rating: 5 },
  { name: 'Дмитрий К.', city: 'Казань', text: 'Удобный поиск и честные цены без скрытых сборов. Возврат оформили без вопросов.', rating: 5 },
  { name: 'Елена В.', city: 'Сочи', text: 'Летаю через FlyWay уже год. Поддержка отвечает быстро, интерфейс приятный.', rating: 5 },
];

const features = [
  { icon: 'BadgePercent', title: 'Выгодные цены', text: 'Сравнивайте и выбирайте' },
  { icon: 'ShieldCheck', title: 'Без скрытых сборов', text: 'Прозрачные условия' },
  { icon: 'Headphones', title: 'Поддержка 24/7', text: 'Мы всегда на связи' },
  { icon: 'Timer', title: 'Быстро и удобно', text: 'Покупка в пару кликов' },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <Icon name="Plane" size={26} className={light ? 'text-white' : 'text-primary'} />
      <span className={`text-xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-foreground'}`}>FlyWay</span>
    </div>
  );
}

function Field({ label, value, placeholder, icon }: { label: string; value?: string; placeholder?: string; icon?: string }) {
  return (
    <div className="bg-white border border-border rounded-xl px-4 py-2.5 hover:border-primary/50 transition-colors cursor-pointer">
      <div className="text-xs text-muted-foreground mb-0.5">{label}</div>
      <div className="flex items-center justify-between gap-2">
        <span className={`text-sm font-semibold ${value ? 'text-foreground' : 'text-muted-foreground/60'}`}>{value || placeholder}</span>
        {icon && <Icon name={icon} size={16} className="text-muted-foreground shrink-0" />}
      </div>
    </div>
  );
}

export default function Index() {
  const [trip, setTrip] = useState(0);
  const [directOnly, setDirectOnly] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-[72px]">
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l, i) => (
              <a key={l} href="#" className={`text-sm font-medium transition-colors hover:text-primary ${i === 0 ? 'text-foreground' : 'text-muted-foreground'}`}>{l}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:grid place-items-center w-10 h-10 rounded-full hover:bg-secondary transition-colors"><Icon name="Heart" size={20} className="text-muted-foreground" /></button>
            <button className="hidden sm:grid place-items-center w-10 h-10 rounded-full hover:bg-secondary transition-colors"><Icon name="Bell" size={20} className="text-muted-foreground" /></button>
            <button className="grid place-items-center w-10 h-10 rounded-full bg-secondary"><Icon name="User" size={20} className="text-[hsl(var(--flyway-dark))]" /></button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container py-10 md:py-16">
          <div className="relative rounded-[28px] overflow-hidden shadow-xl animate-scale-in">
            <img src={HERO_IMG} alt="Самолёт над горами" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--flyway-dark))]/85 via-[hsl(var(--flyway-dark))]/55 to-transparent" />
            <div className="relative px-6 md:px-14 py-12 md:py-20">
              <div className="max-w-xl animate-fade-in">
                <h1 className="text-4xl md:text-[52px] leading-[1.05] font-extrabold text-white">Путешествуйте<br />по миру легко</h1>
                <p className="mt-5 text-white/85 text-base md:text-lg max-w-md">Находите лучшие авиабилеты по выгодным ценам и отправляйтесь в новые места.</p>
              </div>

              {/* Search card */}
              <div className="mt-9 bg-white rounded-2xl p-5 md:p-6 shadow-2xl max-w-3xl animate-fade-in" style={{ animationDelay: '0.15s', opacity: 0 }}>
                <div className="flex flex-wrap gap-2 mb-5">
                  {tripTypes.map((t, i) => (
                    <button key={t} onClick={() => setTrip(i)} className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${trip === i ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-secondary'}`}>{t}</button>
                  ))}
                </div>

                <div className="relative grid sm:grid-cols-2 gap-3 mb-3">
                  <Field label="Откуда" value="Санкт-Петербург" />
                  <Field label="Куда" placeholder="Куда летим?" />
                  <button className="hidden sm:grid absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 place-items-center w-9 h-9 rounded-full bg-secondary border-4 border-white shadow z-10 hover:rotate-180 transition-transform duration-300">
                    <Icon name="ArrowLeftRight" size={16} className="text-[hsl(var(--flyway-dark))]" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Field label="Туда" value="15 июн, пн" icon="Calendar" />
                  <Field label="Обратно" value="22 июн, пн" icon="Calendar" />
                  <Field label="Пассажиры и класс" value="1 пассажир, эконом" icon="ChevronDown" />
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-5">
                  <button onClick={() => setDirectOnly(!directOnly)} className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                    <span className={`w-5 h-5 rounded-[6px] grid place-items-center border transition-colors ${directOnly ? 'bg-primary border-primary' : 'border-border'}`}>
                      {directOnly && <Icon name="Check" size={14} className="text-white" />}
                    </span>
                    Прямые рейсы
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-8 py-3.5 rounded-xl hover:bg-[hsl(var(--flyway-dark))] transition-colors shadow-lg shadow-primary/20">
                    Найти билеты <Icon name="ChevronRight" size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {features.map((f) => (
              <div key={f.title} className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 border border-border">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-secondary shrink-0"><Icon name={f.icon} size={20} className="text-primary" /></span>
                <div>
                  <div className="text-sm font-bold">{f.title}</div>
                  <div className="text-xs text-muted-foreground">{f.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search results */}
      <section className="container py-12" id="search">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
          <div>
            <h2 className="text-3xl font-bold">Найденные билеты</h2>
            <p className="text-muted-foreground mt-1 text-sm">Санкт-Петербург → Москва · 15 июня</p>
          </div>
          <div className="flex items-center gap-2 bg-white border border-border rounded-xl px-4 py-2.5 text-sm font-medium cursor-pointer">
            <Icon name="ArrowDownNarrowWide" size={16} className="text-muted-foreground" />
            Сначала дешёвые
            <Icon name="ChevronDown" size={16} className="text-muted-foreground" />
          </div>
        </div>

        <div className="space-y-4">
          {flights.map((f, idx) => (
            <div key={idx} className="group bg-white rounded-2xl border border-border p-5 md:p-6 flex flex-col lg:flex-row lg:items-center gap-6 hover:border-primary/40 hover:shadow-lg transition-all">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  {f.tag && (
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${f.tag === 'Лучший выбор' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-[hsl(var(--flyway-dark))]'}`}>{f.tag}</span>
                  )}
                  <span className="grid place-items-center w-8 h-8 rounded-full bg-secondary text-xs font-bold text-[hsl(var(--flyway-dark))]">{f.code}</span>
                  <span className="text-sm font-medium text-muted-foreground">{f.airline}</span>
                </div>
                <div className="flex items-center gap-4 md:gap-8">
                  <div>
                    <div className="text-2xl font-bold">{f.dep}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{f.from}</div>
                    <div className="text-xs text-muted-foreground">{f.fromCity}</div>
                    <div className="text-xs text-muted-foreground">{f.fromAir}</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center pt-1">
                    <span className="text-xs text-muted-foreground mb-1">{f.stops}</span>
                    <div className="w-full flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="flex-1 h-px bg-border relative"><Icon name="Plane" size={14} className="text-primary absolute left-1/2 -translate-x-1/2 -top-2 bg-white" /></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground mt-1">{f.dur}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{f.arr}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{f.to}</div>
                    <div className="text-xs text-muted-foreground">{f.toCity}</div>
                    <div className="text-xs text-muted-foreground">{f.toAir}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Icon name="Briefcase" size={14} /> Ручная кладь 10 кг</span>
                  <span className="flex items-center gap-1.5"><Icon name="Luggage" size={14} /> Багаж 1 место</span>
                  {f.seats && <span className="text-destructive font-medium">{f.seats}</span>}
                </div>
              </div>

              <div className="lg:w-px lg:h-24 lg:bg-border" />

              <div className="flex lg:flex-col items-center lg:items-end justify-between gap-3 lg:min-w-[150px]">
                <div className="text-right">
                  <div className="text-2xl font-extrabold">от {f.price} ₽</div>
                  <div className="text-xs text-muted-foreground">за пассажира</div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="grid place-items-center w-11 h-11 rounded-xl border border-border hover:bg-secondary transition-colors"><Icon name="Heart" size={18} className="text-muted-foreground" /></button>
                  <button className="bg-primary text-primary-foreground font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[hsl(var(--flyway-dark))] transition-colors">Выбрать</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-secondary/40 py-16" id="reviews">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">Отзывы путешественников</h2>
            <p className="text-muted-foreground mt-2">Более 2 миллионов довольных пассажиров по всему миру</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl border border-border p-6 flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => <Icon key={i} name="Star" size={18} className="text-primary fill-primary" />)}
                </div>
                <p className="text-foreground/90 leading-relaxed flex-1">«{r.text}»</p>
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-border">
                  <span className="grid place-items-center w-11 h-11 rounded-full bg-secondary font-bold text-[hsl(var(--flyway-dark))]">{r.name[0]}</span>
                  <div>
                    <div className="font-semibold text-sm">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(var(--flyway-dark))] text-white">
        <div className="container py-14">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <Logo light />
              <p className="mt-4 text-white/70 text-sm leading-relaxed max-w-xs">Сервис поиска и покупки авиабилетов по всему миру. Помогаем путешествовать легко и с комфортом.</p>
              <div className="flex gap-3 mt-5">
                {['Send', 'Instagram', 'Youtube'].map((s) => (
                  <button key={s} className="grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"><Icon name={s} size={18} className="text-white" /></button>
                ))}
              </div>
            </div>
            {[
              { t: 'Компания', l: ['О нас', 'Вакансии', 'Партнёрам', 'Контакты'] },
              { t: 'Услуги', l: ['Авиабилеты', 'Отели', 'Аренда авто', 'Страховка'] },
              { t: 'Поддержка', l: ['Помощь', 'Возврат билетов', 'Правила', 'Конфиденциальность'] },
            ].map((col) => (
              <div key={col.t}>
                <div className="font-bold mb-4">{col.t}</div>
                <ul className="space-y-3">
                  {col.l.map((l) => <li key={l}><a href="#" className="text-white/70 text-sm hover:text-white transition-colors">{l}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-white/15 text-white/60 text-sm">
            <span>© 2026 FlyWay. Все права защищены.</span>
            <span className="flex items-center gap-2"><Icon name="ShieldCheck" size={16} /> Безопасная оплата</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
