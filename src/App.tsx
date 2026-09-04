import { useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  CalendarCheck,
  Camera,
  Car,
  Check,
  ChevronRight,
  CircleGauge,
  Clock3,
  ClipboardCheck,
  ExternalLink,
  FileCheck2,
  Fuel,
  Gauge,
  KeyRound,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Phone,
  ReceiptText,
  ShieldCheck,
  UserCheck,
  Upload,
  WalletCards,
  Wrench,
  X,
} from 'lucide-react'

type ScenarioKey = 'hemat' | 'normal' | 'ramai'

const scenarios: Record<
  ScenarioKey,
  { label: string; gross: number; fuel: number; ops: number }
> = {
  hemat: { label: 'Konservatif', gross: 400, fuel: 110, ops: 40 },
  normal: { label: 'Normal', gross: 500, fuel: 130, ops: 45 },
  ramai: { label: 'Ramai', gross: 600, fuel: 150, ops: 50 },
}

const monthlyRent = 4500
const workingDays = 26
const dailyRent = Math.round(monthlyRent / workingDays)

const whatsappUrl =
  'https://wa.me/628111718111?text=Halo%2C%20saya%20tertarik%20trial%20rental%20Toyota%20Raize%20untuk%20driver%20online.%20Boleh%20minta%20info%20ketersediaannya%3F'

const googleFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSeITmhowtCaF1u3plmr13K7_M-c3C2tTHKXC7VGT-S6pSPpxw/viewform'
const googleFormEmbedUrl = googleFormUrl
  ? `${googleFormUrl}${googleFormUrl.includes('?') ? '&' : '?'}embedded=true`
  : ''

const money = (value: number) => `Rp${value.toLocaleString('id-ID')}rb`

function RegisterButton({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="#daftar"
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-[#b7f34a] font-extrabold text-[#102015] transition hover:-translate-y-0.5 hover:bg-[#c8ff64] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b7f34a] ${compact ? 'px-5 py-3 text-sm' : 'px-6 py-4 text-base shadow-[0_12px_36px_rgba(183,243,74,.22)]'}`}
    >
      <ClipboardCheck size={compact ? 18 : 20} strokeWidth={2.5} />
      Daftar Sekarang
      {!compact && <ArrowRight size={19} className="transition-transform group-hover:translate-x-1" />}
    </a>
  )
}

function App() {
  const [scenario, setScenario] = useState<ScenarioKey>('normal')
  const [menuOpen, setMenuOpen] = useState(false)
  const selected = scenarios[scenario]
  const takeHome = selected.gross - dailyRent - selected.fuel - selected.ops
  const monthlyTakeHome = takeHome * workingDays

  return (
    <main className="overflow-hidden bg-[#f6f5ef] text-[#172019]">
      <section className="relative min-h-[760px] overflow-hidden bg-[#172019] text-white lg:min-h-[820px]">
        <img
          src={`${import.meta.env.BASE_URL}raize-malang-hero.webp`}
          alt="Ilustrasi SUV kompak putih bersama driver online di Malang pada pagi hari"
          width="1586"
          height="992"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[61%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,20,13,.94)_0%,rgba(10,20,13,.77)_37%,rgba(10,20,13,.12)_70%,rgba(10,20,13,.28)_100%)] max-md:bg-[linear-gradient(180deg,rgba(10,20,13,.78)_0%,rgba(10,20,13,.14)_32%,rgba(10,20,13,.94)_72%,#0a140d_100%)]" />

        <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="Raize untuk Narik">
            <span className="grid size-10 place-items-center rounded-xl bg-[#b7f34a] text-[#172019]">
              <Car size={22} strokeWidth={2.5} />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-black tracking-[.16em]">RAIZE</span>
              <span className="block text-[10px] font-semibold tracking-[.14em] text-white/60">
                UNTUK NARIK
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-bold text-white/75 md:flex">
            <a className="transition hover:text-white" href="#skema">Skema</a>
            <a className="transition hover:text-white" href="#hitungan">Hitungan</a>
            <a className="transition hover:text-white" href="#skenario">Skenario</a>
            <a className="transition hover:text-white" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
            <RegisterButton compact />
          </div>

          <button
            type="button"
            aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid size-11 place-items-center rounded-full border border-white/25 bg-black/20 md:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {menuOpen && (
          <div className="absolute left-4 right-4 top-20 z-30 rounded-2xl bg-[#f6f5ef] p-5 text-[#172019] shadow-2xl md:hidden">
            <a
              href="#daftar"
              onClick={() => setMenuOpen(false)}
              className="mb-3 flex items-center justify-between rounded-2xl bg-[#172019] p-4 text-white"
            >
              <span>
                <span className="block font-black">Daftar Sekarang</span>
                <span className="mt-0.5 block text-xs font-semibold text-white/50">Isi form langsung di halaman ini</span>
              </span>
              <span className="grid size-10 place-items-center rounded-xl bg-[#b7f34a] text-[#172019]"><ClipboardCheck size={20} /></span>
            </a>
            <div className="grid gap-1 font-bold">
              {[
                ['Skema rental', '#skema'],
                ['Coba hitungan', '#hitungan'],
                ['Kalau rencana berubah', '#skenario'],
                ['Aturan yang jelas', '#aturan'],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-3 hover:bg-black/5"
                >
                  {label}<ChevronRight size={18} />
                </a>
              ))}
            </div>
          </div>
        )}

        <div id="top" className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-end px-5 pb-10 sm:px-8 lg:min-h-[700px] lg:items-center lg:px-10 lg:pb-0">
          <div className="max-w-2xl pt-24">
            <div className="mb-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3 py-2 text-xs font-bold backdrop-blur-md">
                <MapPin size={14} className="text-[#b7f34a]" /> Malang Raya
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3 py-2 text-xs font-bold backdrop-blur-md">
                <BadgeCheck size={14} className="text-[#b7f34a]" /> 1.0 Turbo TSS · 2021
              </span>
            </div>

            <h1 className="max-w-xl text-[3.25rem] font-black leading-[.92] tracking-[-.055em] sm:text-7xl lg:text-[5.4rem]">
              Narik pakai Raize.
              <span className="mt-2 block text-[#b7f34a]">Hitungan tetap masuk.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              Skema khusus driver online—mulai trial 7 hari, lanjut 30 hari kalau sama-sama cocok.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <RegisterButton />
              <a
                href="#hitungan"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-4 text-sm font-extrabold backdrop-blur-md transition hover:bg-white/15"
              >
                Lihat hitungannya <CircleGauge size={19} />
              </a>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white/65 transition hover:text-white">
              <MessageCircle size={17} /> Belum siap daftar? Tanya via WhatsApp
            </a>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-7 sm:px-8 lg:absolute lg:inset-x-0 lg:bottom-8 lg:px-10">
          <div className="ml-auto grid max-w-xl grid-cols-3 overflow-hidden rounded-2xl border border-white/15 bg-[#101a13]/78 backdrop-blur-xl">
            {[
              ['Rp4,5jt', 'per 30 hari'],
              ['7 hari', 'trial dulu'],
              ['Rp3jt', 'deposit kembali'],
            ].map(([value, label]) => (
              <div key={label} className="border-r border-white/10 px-3 py-4 last:border-r-0 sm:px-5">
                <div className="text-lg font-black text-[#b7f34a] sm:text-2xl">{value}</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[.12em] text-white/55 sm:text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#b7f34a]">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-5 sm:px-8 md:grid-cols-[1.2fr_1fr] md:items-center lg:px-10">
          <div className="flex items-center gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#172019] text-[#b7f34a]">
              <Fuel size={23} />
            </span>
            <div>
              <div className="text-lg font-black leading-tight sm:text-xl">Bisa tetap isi Pertalite</div>
              <div className="mt-0.5 text-xs font-semibold text-[#344237]">Sesuai buku pedoman: bensin tanpa timbal RON 90 atau lebih.</div>
            </div>
          </div>
          <div className="flex items-center gap-3 border-t border-black/15 pt-4 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <Gauge size={21} className="shrink-0" />
            <p className="text-sm font-bold leading-snug">Biaya BBM lebih fleksibel untuk operasional harian.</p>
          </div>
        </div>
      </section>

      <section id="skema" className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="eyebrow">Mulai pelan, jalan lama</div>
            <h2 className="section-title">Coba dulu. Cocok dulu. Baru lanjut.</h2>
            <p className="section-copy mx-auto">Tidak perlu langsung terikat panjang. Kepercayaan dibangun satu tahap sekali.</p>
            <div className="mt-5 inline-flex items-center gap-1 text-xs font-extrabold text-black/40 sm:hidden">
              Geser untuk lihat tahap berikutnya <ChevronRight size={15} />
            </div>
          </div>

          <div className="mobile-snap relative -mx-5 mt-10 grid snap-x snap-mandatory grid-flow-col auto-cols-[86%] gap-4 overflow-x-auto px-5 pb-4 sm:mx-auto sm:max-w-4xl sm:grid-flow-row sm:auto-cols-auto sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:mt-14">
            <div className="pointer-events-none absolute left-1/4 right-1/4 top-10 hidden h-px bg-black/15 lg:block" />
            {[
              {
                step: '01', icon: KeyRound, title: 'Trial 7 hari', price: 'Rp1,225jt', note: 'Rp175rb × 7 · dibayar di depan', accent: true,
              },
              {
                step: '02', icon: CalendarCheck, title: 'Paket 30 hari', price: 'Rp4,5jt', note: 'Setelah trial berjalan lancar', accent: false,
              },
            ].map(({ step, icon: Icon, title, price, note, accent }) => (
              <article key={step} className={`relative min-h-[340px] snap-start rounded-[1.75rem] border p-7 sm:min-h-0 sm:p-8 ${accent ? 'border-[#172019] bg-[#172019] text-white shadow-2xl' : 'border-black/10 bg-white'}`}>
                <div className={`relative z-10 grid size-20 place-items-center rounded-2xl ${accent ? 'bg-[#b7f34a] text-[#172019]' : 'bg-[#edf7d9]'}`}>
                  <Icon size={31} strokeWidth={1.8} />
                </div>
                <div className={`mt-8 text-xs font-black tracking-[.18em] ${accent ? 'text-[#b7f34a]' : 'text-black/40'}`}>LANGKAH {step}</div>
                <h3 className="mt-2 text-2xl font-black">{title}</h3>
                <div className="mt-6 text-4xl font-black tracking-tight">{price}</div>
                <p className={`mt-2 text-sm font-semibold ${accent ? 'text-white/60' : 'text-black/50'}`}>{note}</p>
                {step === '01' && (
                  <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-bold text-white/75">
                    <WalletCards size={15} className="text-[#b7f34a]" /> + deposit Rp3jt, refundable
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="hitungan" className="bg-[#172019] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <div>
            <div className="eyebrow text-[#b7f34a]">Hitungan driver</div>
            <h2 className="section-title text-white">Yang penting bukan setoran. Yang penting sisanya.</h2>
            <p className="section-copy text-white/60">Pilih kondisi harian untuk melihat ilustrasi uang yang masih dibawa pulang.</p>

            <div className="mt-8 grid grid-cols-3 gap-2 rounded-2xl bg-white/5 p-2" role="group" aria-label="Pilih skenario pendapatan">
              {(Object.keys(scenarios) as ScenarioKey[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setScenario(key)}
                  aria-pressed={scenario === key}
                  className={`rounded-xl px-2 py-3 text-xs font-extrabold transition sm:text-sm ${scenario === key ? 'bg-[#b7f34a] text-[#172019]' : 'text-white/55 hover:bg-white/5 hover:text-white'}`}
                >
                  {scenarios[key].label}
                </button>
              ))}
            </div>

            <p className="mt-5 text-xs leading-relaxed text-white/40">Ilustrasi, bukan janji penghasilan. Platform, jam kerja, area, dan gaya berkendara memengaruhi hasil aktual.</p>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-[#f6f5ef] text-[#172019] shadow-[0_30px_100px_rgba(0,0,0,.35)]">
            <div className="flex items-center justify-between border-b border-black/10 p-6 sm:p-8">
              <div>
                <div className="text-xs font-black uppercase tracking-[.16em] text-black/40">Pemasukan bersih platform</div>
                <div className="mt-1 text-4xl font-black sm:text-5xl">{money(selected.gross)}</div>
              </div>
              <div className="grid size-14 place-items-center rounded-2xl bg-[#b7f34a]"><Banknote size={27} /></div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: 'Setoran', value: dailyRent, icon: ReceiptText },
                  { label: 'BBM', value: selected.fuel, icon: Fuel },
                  { label: 'Operasional', value: selected.ops, icon: Phone },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="rounded-2xl border border-black/10 bg-white p-4">
                    <Icon size={19} className="mb-3 text-black/45" />
                    <div className="text-xs font-bold text-black/45">{label}</div>
                    <div className="mt-1 text-xl font-black">− {money(value)}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex h-3 overflow-hidden rounded-full bg-black/5" aria-hidden="true">
                <div className="bg-[#ff7d61] transition-all" style={{ width: `${(dailyRent / selected.gross) * 100}%` }} />
                <div className="bg-[#f4c95d] transition-all" style={{ width: `${(selected.fuel / selected.gross) * 100}%` }} />
                <div className="bg-[#8c9b92] transition-all" style={{ width: `${(selected.ops / selected.gross) * 100}%` }} />
                <div className="bg-[#78b62b] transition-all" style={{ width: `${(takeHome / selected.gross) * 100}%` }} />
              </div>

              <div className="mt-8 flex flex-col gap-5 rounded-2xl bg-[#b7f34a] p-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="text-xs font-black uppercase tracking-[.15em] text-black/45">Sisa untuk Anda / hari narik</div>
                  <div className="mt-1 text-5xl font-black tracking-[-.05em]">{money(takeHome)}</div>
                </div>
                <div className="sm:text-right">
                  <div className="text-xs font-bold text-black/45">× {workingDays} hari kerja</div>
                  <div className="mt-1 text-xl font-black">≈ Rp{(monthlyTakeHome / 1000).toLocaleString('id-ID', { maximumFractionDigits: 2 })}jt / bulan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <div className="eyebrow">Biaya dibagi jelas</div>
              <h2 className="section-title">Punya mobil beda dengan menjalankan mobil.</h2>
            </div>
            <p className="section-copy lg:pb-2">Biaya kepemilikan di owner. Biaya operasional saat narik di driver.</p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <article className="rounded-[2rem] bg-white p-7 sm:p-9">
              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-2xl bg-[#edf7d9]"><ShieldCheck size={24} /></span>
                <div><div className="text-xs font-black uppercase tracking-[.15em] text-black/35">Owner</div><h3 className="text-2xl font-black">Mobil tetap terurus</h3></div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {['Pajak tahunan', 'Premi asuransi', 'Servis berkala', 'Aus normal & ban'].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-xl bg-[#f6f5ef] p-3 text-sm font-bold"><Check size={17} className="shrink-0 text-[#579300]" />{item}</div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] bg-[#e9e2d5] p-7 sm:p-9">
              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-2xl bg-white"><CircleGauge size={24} /></span>
                <div><div className="text-xs font-black uppercase tracking-[.15em] text-black/35">Driver</div><h3 className="text-2xl font-black">Fokus ke operasional</h3></div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {['BBM & tol', 'Parkir & data', 'ETLE masa pakai', 'Own risk asuransi'].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-xl bg-white/70 p-3 text-sm font-bold"><Check size={17} className="shrink-0" />{item}</div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="skenario" className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <div>
              <div className="eyebrow">Kalau rencana berubah</div>
              <h2 className="section-title">Hari tidak hilang. Tanggalnya yang bergeser.</h2>
            </div>
            <p className="section-copy lg:pb-2">Contoh konkret supaya owner dan driver tidak perlu menebak-nebak saat situasi berubah.</p>
          </div>

          <article className="mt-12 overflow-hidden rounded-[2rem] bg-[#172019] p-6 text-white sm:p-9 lg:p-12">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="text-xs font-black uppercase tracking-[.16em] text-[#b7f34a]">Contoh utama · owner pakai 1 hari</div>
                <h3 className="mt-3 max-w-2xl text-2xl font-black leading-tight sm:text-4xl">Driver tetap mendapat 30 hari penuh. Tanggal bayar berikutnya ikut +1 hari.</h3>
              </div>
              <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white/65">
                <CalendarCheck size={16} className="text-[#b7f34a]" /> Tidak hangus
              </span>
            </div>

            <div className="relative mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-white/15 sm:block" />
              {[
                { date: '1 Sep', label: 'Mulai periode', note: 'Hari driver ke-1', tone: 'bg-white text-[#172019]' },
                { date: '9 Sep', label: 'Dipakai owner', note: '1 hari · driver libur bayar', tone: 'bg-[#ff8b70] text-[#172019]' },
                { date: '1 Okt', label: 'Hari ganti', note: 'Hari driver ke-30', tone: 'bg-[#b7f34a] text-[#172019]' },
                { date: '2 Okt', label: 'Bayar berikutnya', note: 'Bergeser +1 hari', tone: 'bg-white text-[#172019]' },
              ].map(({ date, label, note, tone }) => (
                <div key={date} className={`relative z-10 rounded-2xl p-4 sm:p-5 ${tone}`}>
                  <div className="text-2xl font-black tracking-tight sm:text-3xl">{date}</div>
                  <div className="mt-5 text-sm font-black">{label}</div>
                  <div className="mt-1 text-[11px] font-semibold opacity-55">{note}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="grid h-4 grid-cols-[8fr_1fr_21fr_1fr] gap-1" aria-label="Ilustrasi 30 hari driver, satu hari owner, dan satu hari pengganti">
                <div className="rounded-full bg-[#7faf34]" />
                <div className="min-w-2 rounded-full bg-[#ff8b70]" />
                <div className="rounded-full bg-[#7faf34]" />
                <div className="min-w-2 rounded-full bg-[#b7f34a]" />
              </div>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-bold text-white/50">
                <span className="inline-flex items-center gap-2"><i className="size-2 rounded-full bg-[#7faf34]" /> Hari pakai driver</span>
                <span className="inline-flex items-center gap-2"><i className="size-2 rounded-full bg-[#ff8b70]" /> Dipakai owner</span>
                <span className="inline-flex items-center gap-2"><i className="size-2 rounded-full bg-[#b7f34a]" /> Hari pengganti</span>
              </div>
            </div>

            <div className="mt-8 grid gap-2 sm:grid-cols-3">
              {['Owner kabari min. 3 hari', 'Maks. 2 hari per periode', 'Mendadak: driver boleh menolak'].map((rule) => (
                <div key={rule} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-bold text-white/65">
                  <Check size={16} className="shrink-0 text-[#b7f34a]" /> {rule}
                </div>
              ))}
            </div>
          </article>

          <div className="mt-12 flex items-end justify-between gap-6">
            <div>
              <div className="eyebrow">Skenario lain</div>
              <h3 className="text-2xl font-black tracking-tight sm:text-3xl">Balik ke aturan yang sama.</h3>
            </div>
            <div className="hidden items-center gap-1 text-xs font-extrabold text-black/35 sm:flex">Geser kartu <ChevronRight size={15} /></div>
          </div>

          <div className="mobile-snap -mx-5 mt-6 grid snap-x snap-mandatory grid-flow-col auto-cols-[82%] gap-3 overflow-x-auto px-5 pb-4 sm:mx-0 sm:auto-cols-[43%] sm:px-0 lg:auto-cols-[31%]">
            {[
              { icon: Car, label: 'OWNER PAKAI 2 HARI', value: 'Tanggal +2 hari', text: 'Akhir periode dan pembayaran berikutnya sama-sama bergeser dua hari.' },
              { icon: Wrench, label: 'WORKSHOP NORMAL 3 HARI', value: 'Tanggal +3 hari', text: 'Kalau bukan karena kelalaian driver, tiga hari itu diganti di akhir.' },
              { icon: ReceiptText, label: 'OWNER STOP 10 HARI LEBIH AWAL', value: 'Refund Rp1,5jt', text: 'Sisa 10 hari × Rp150rb dikembalikan pro rata ke driver.' },
              { icon: KeyRound, label: 'DRIVER BALIK LEBIH AWAL', value: 'Tidak otomatis refund', text: 'Paket tetap berjalan sampai akhir. Kondisi khusus bisa dibicarakan.' },
              { icon: Clock3, label: 'PEMBAYARAN TERLAMBAT', value: 'Periode baru ditahan', text: 'Hari 1 dihubungi, hari 2 buat rencana, hari 3 belum selesai maka tidak diperpanjang.' },
            ].map(({ icon: Icon, label, value, text }) => (
              <article key={label} className="min-h-64 snap-start rounded-[1.5rem] border border-black/10 bg-[#f6f5ef] p-6">
                <div className="flex items-start justify-between gap-3">
                  <span className="grid size-11 place-items-center rounded-xl bg-[#172019] text-[#b7f34a]"><Icon size={21} /></span>
                  <span className="text-right text-[10px] font-black tracking-[.12em] text-black/30">{label}</span>
                </div>
                <div className="mt-9 text-2xl font-black leading-tight">{value}</div>
                <p className="mt-3 text-sm leading-relaxed text-black/50">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#b7f34a] p-5 text-sm font-black sm:justify-center">
            <BadgeCheck size={22} className="shrink-0" /> Yang mengubah rencana, memastikan pihak lain tidak kehilangan haknya.
          </div>
        </div>
      </section>

      <section id="aturan" className="bg-[#e9e2d5] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="eyebrow">Aman untuk dua pihak</div>
            <h2 className="section-title">Aturannya jelas dari awal.</h2>
            <p className="section-copy">Bukan untuk bikin ribet—supaya kalau ada masalah, kita sama-sama tahu harus bagaimana.</p>
            <div className="mt-5 inline-flex items-center gap-1 text-xs font-extrabold text-black/40 sm:hidden">
              Geser untuk lihat semua aturan <ChevronRight size={15} />
            </div>
          </div>

          <div className="mobile-snap -mx-5 mt-10 grid snap-x snap-mandatory grid-flow-col auto-cols-[82%] gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid-flow-row sm:auto-cols-auto sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:mt-12 lg:grid-cols-4">
            {[
              { icon: Wrench, title: 'Mogok normal', text: 'Hari mobil tidak bisa dipakai ditambahkan ke masa sewa.' },
              { icon: ShieldCheck, title: 'Kecelakaan', text: 'Utamakan aman, lapor, dokumentasi, lalu ikuti proses asuransi.' },
              { icon: Navigation, title: 'GPS terbuka', text: 'Dipasang dan diberitahukan untuk keamanan aset dan bantuan darurat.' },
              { icon: Camera, title: 'Serah terima', text: 'Foto, video, odometer, ban, kunci, STNK, dan kondisi dicatat bersama.' },
            ].map(({ icon: Icon, title, text }) => (
              <article key={title} className="group min-h-64 snap-start rounded-[1.75rem] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="grid size-14 place-items-center rounded-2xl bg-[#172019] text-[#b7f34a]"><Icon size={26} /></div>
                <h3 className="mt-8 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/55">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-5 grid gap-4 rounded-[1.75rem] bg-[#172019] p-6 text-white md:grid-cols-[auto_1fr_auto] md:items-center md:p-8">
            <span className="grid size-14 place-items-center rounded-2xl bg-[#b7f34a] text-[#172019]"><Clock3 size={26} /></span>
            <div>
              <h3 className="text-xl font-black">Telat tidak dibiarkan menumpuk</h3>
              <p className="mt-1 text-sm text-white/55">Hari 1 dihubungi · hari 2 buat rencana · hari 3 belum selesai, sewa tidak diperpanjang.</p>
            </div>
            <div className="rounded-full border border-white/15 px-4 py-2 text-center text-xs font-bold text-white/60">Semua pembayaran di depan</div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <div className="eyebrow">Siapa yang kami cari</div>
            <h2 className="section-title">Bukan yang janji bayar paling tinggi.</h2>
            <p className="section-copy">Kami cari driver yang reliable, komunikasinya enak, dan menjaga mobil seperti alat kerjanya sendiri.</p>
            <div className="mt-7 flex max-w-lg items-center gap-4 rounded-2xl bg-[#b7f34a] p-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#172019] text-[#b7f34a]">
                <UserCheck size={21} />
              </span>
              <div>
                <div className="text-sm font-black">Daftar Grab/Gojek diurus driver</div>
                <div className="mt-0.5 text-xs font-semibold text-black/55">Registrasi, persetujuan, dan aktivasi akun platform adalah tanggung jawab driver.</div>
              </div>
            </div>
            <div className="mt-3 inline-flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-bold">
              <UserCheck size={21} className="text-[#579300]" /> Mobil hanya boleh dipakai driver yang disetujui
            </div>
            <div className="mt-5 flex items-center gap-1 text-xs font-extrabold text-black/40 sm:hidden">
              Geser untuk lihat prosesnya <ChevronRight size={15} />
            </div>
          </div>

          <div className="mobile-snap -mx-5 grid snap-x snap-mandatory grid-flow-col auto-cols-[82%] gap-3 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid-flow-row sm:auto-cols-auto sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0">
            {[
              { icon: FileCheck2, n: '01', title: 'Kirim dokumen', text: 'KTP, KK, SIM A, SKCK, alamat, dan bukti akun bila sudah aktif.' },
              { icon: Phone, n: '02', title: 'Kenalan singkat', text: 'Bahas pengalaman, pola kerja, dan komunikasi.' },
              { icon: BadgeCheck, n: '03', title: 'Cek 2 referensi', text: 'Keluarga dan referensi kerja yang bisa dihubungi.' },
              { icon: Car, n: '04', title: 'Mulai trial', text: 'Serah terima lengkap, lalu evaluasi bersama 7 hari.' },
            ].map(({ icon: Icon, n, title, text }) => (
              <article key={n} className="min-h-52 snap-start rounded-2xl border border-black/10 bg-white p-6 sm:min-h-0">
                <div className="flex items-center justify-between"><Icon size={24} /><span className="text-xs font-black tracking-[.15em] text-black/25">{n}</span></div>
                <h3 className="mt-8 text-lg font-black">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black/50">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="daftar" className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <div className="eyebrow">Form ada di halaman ini</div>
              <h2 className="section-title">Daftar sekarang. Langsung di sini.</h2>
            </div>
            <p className="section-copy lg:pb-2">
              Isi form di bawah untuk verifikasi calon driver. Aktivasi akun Grab/Gojek tetap diurus oleh driver.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ['KTP', 'Identitas'],
              ['KK', 'Data keluarga'],
              ['SIM A', 'Masih berlaku'],
              ['SKCK', 'Opsional'],
            ].map(([document, note], index) => (
              <div key={document} className="rounded-2xl border border-black/10 bg-[#f6f5ef] p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-xl bg-[#172019] text-[#b7f34a]">
                    {index === 0 ? <ClipboardCheck size={20} /> : <Upload size={20} />}
                  </span>
                  <span className="text-[10px] font-black tracking-[.14em] text-black/25">0{index + 1}</span>
                </div>
                <div className="mt-5 text-lg font-black">{document}</div>
                <div className="mt-1 text-xs font-semibold text-black/45">{note}</div>
              </div>
            ))}
          </div>

          <div className="relative z-50 mt-6 min-w-0 overflow-hidden rounded-[2rem] bg-[#172019] p-3 shadow-[0_30px_100px_rgba(23,32,25,.18)] sm:p-5">
            {googleFormEmbedUrl ? (
              <>
                <div className="flex flex-col gap-3 px-3 pb-5 pt-2 text-white sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-extrabold">Siapkan foto dokumen sebelum mulai.</p>
                    <p className="mt-1 text-xs font-semibold text-white/45">Untuk upload yang paling nyaman, buka formulir di layar penuh.</p>
                  </div>
                  <a
                    href={googleFormUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#b7f34a] px-5 py-3 text-sm font-extrabold text-[#172019]"
                  >
                    Buka layar penuh <ExternalLink size={17} />
                  </a>
                </div>
                <iframe
                  src={googleFormEmbedUrl}
                  title="Form pendaftaran driver rental Toyota Raize"
                  loading="lazy"
                  className="block h-[76svh] min-h-[680px] max-h-[900px] w-full min-w-0 rounded-[1.35rem] bg-white sm:h-[900px]"
                >
                  Memuat formulir pendaftaran…
                </iframe>
                <div className="flex flex-col gap-3 px-3 pb-2 pt-5 text-white sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs font-semibold text-white/45">Upload dokumen memerlukan login Google.</p>
                  <a
                    href={googleFormUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b7f34a] px-5 py-3 text-sm font-extrabold text-[#172019]"
                  >
                    Buka formulir penuh <ExternalLink size={17} />
                  </a>
                </div>
              </>
            ) : (
              <div className="grid min-h-80 place-items-center rounded-[1.35rem] border border-white/10 bg-white/5 p-8 text-center text-white">
                <div>
                  <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-[#b7f34a] text-[#172019]"><ClipboardCheck size={29} /></span>
                  <h3 className="mt-6 text-2xl font-black">Form pendaftaran sedang disiapkan</h3>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/50">Link Google Form akan tampil langsung di sini setelah dibuat.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-7xl rounded-[2.25rem] bg-[#b7f34a] p-7 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <div className="eyebrow">Ringkasnya</div>
              <h2 className="section-title">Angka utama, tanpa kejutan.</h2>
            </div>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-black/15">
              {[
                ['Trial 7 hari', 'Rp1,225jt'],
                ['Deposit kembali', 'Rp3jt'],
                ['Paket 30 hari', 'Rp4,5jt'],
                ['Setara / hari kerja', '± Rp173rb'],
              ].map(([label, value]) => (
                <div key={label} className="bg-[#c8ff64] p-5 sm:p-6">
                  <div className="text-xs font-bold text-black/45">{label}</div>
                  <div className="mt-1 text-2xl font-black">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#172019] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-[#b7f34a] text-[#172019]"><ClipboardCheck size={29} /></span>
          <h2 className="mt-8 text-4xl font-black tracking-[-.04em] sm:text-6xl">Siap mulai? Isi form pendaftarannya.</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/55">Form pendaftaran tersedia langsung di halaman ini. Siapkan KTP, KK, dan SIM A.</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <RegisterButton />
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-white/65 transition hover:text-white"><MessageCircle size={18} /> Tanya dulu via WhatsApp</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#172019] px-5 py-8 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 font-black"><Car size={20} className="text-[#b7f34a]" /> RAIZE UNTUK NARIK</div>
          <p className="max-w-xl text-xs leading-relaxed text-white/35">Penawaran kendaraan pribadi untuk driver online di Malang Raya. Ilustrasi visual; unit aktual dikonfirmasi saat survei. Syarat akhir mengikuti perjanjian tertulis dan verifikasi asuransi.</p>
        </div>
      </footer>

      <a
        href="#daftar"
        aria-label="Daftar sekarang melalui form di halaman ini"
        className="fixed bottom-3 left-3 right-3 z-40 flex items-center justify-center gap-2 rounded-full bg-[#b7f34a] px-5 py-4 text-sm font-black text-[#172019] shadow-[0_14px_38px_rgba(0,0,0,.3)] transition hover:bg-[#c8ff64] sm:hidden"
      >
        <ClipboardCheck size={20} strokeWidth={2.5} />
        Daftar Sekarang
        <span className="text-xs font-bold text-[#172019]/55">· isi form di sini</span>
      </a>
    </main>
  )
}

export default App
