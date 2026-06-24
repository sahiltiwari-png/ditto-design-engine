import { createFileRoute } from "@tanstack/react-router";
import { Search, User, Heart, ShoppingBag, Instagram, Facebook, ArrowRight } from "lucide-react";
import heroMain from "@/assets/hero-main.jpg.asset.json";
import collection1 from "@/assets/collection1.jpg.asset.json";
import mens1 from "@/assets/mens1.jpg.asset.json";
import mens2 from "@/assets/mens2.jpg.asset.json";
import moment1 from "@/assets/moment1.jpg.asset.json";
import moment2 from "@/assets/moment2.jpg.asset.json";
import elegance1 from "@/assets/elegance1.png.asset.json";
import momentNoir from "@/assets/moment-noir.png.asset.json";
import logo from "@/assets/logo.jpeg.asset.json";
import louboutin from "@/assets/louboutin.jpg";
import summerSandals from "@/assets/summer-sandals.jpg";
import newBalance from "@/assets/new-balance.jpg";
import handbag from "@/assets/handbag.jpg";
import fathersDay from "@/assets/fathers-day.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import s1 from "@/assets/s1.jpg";
import s2 from "@/assets/s2.jpg";
import s3 from "@/assets/s3.jpg";
import s4 from "@/assets/s4.jpg";
import s5 from "@/assets/s5.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Le Moment — Designed for Moments That Last" },
      { name: "description", content: "Le Moment — luxury fashion, timeless craftsmanship and effortless sophistication." },
    ],
  }),
  component: Index,
});

const NAV = ["New", "Women", "Collections", "Gift Guide", "FAQ", "About Us", "Contact Us"];

const newIn = [
  { brand: "VALENTINO GARAVANI", name: "Palm Avenue loafers", price: "3,100 AED", img: p1 },
  { brand: "GIVENCHY", name: "Logo tote bag", price: "4,400 AED", img: p2 },
  { brand: "JIMMY CHOO", name: "Shearling-trim espadrilles", price: "2,500 AED", img: p3 },
  { brand: "DOLCE & GABBANA", name: "VI Home travel bag", price: "12,900 AED", img: p4 },
  { brand: "BRUNELLO CUCINELLI", name: "Pool sandals", price: "2,700 AED", tag: "GLOBAL EXCLUSIVE", img: p5 },
];

const trending = [
  { brand: "ON", name: "Cloud 6 sneakers", price: "800 AED", img: s1 },
  { brand: "NEW BALANCE", name: "530 sneakers", price: "880 AED", img: s2 },
  { brand: "ASICS", name: "GT-2160 sneakers", price: "560 AED", img: s3 },
  { brand: "ADIDAS", name: "Samba OG sneakers", price: "500 AED", img: s4 },
  { brand: "ON", name: "Cloudfit sneakers", price: "850 AED", img: s5 },
];

function ProductCard({ p }: { p: typeof newIn[number] }) {
  return (
    <div className="group flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <button className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center text-foreground/70 hover:text-foreground" aria-label="Add to wishlist">
          <Heart className="h-5 w-5" strokeWidth={1.25} />
        </button>
        <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
      <div className="mt-3 space-y-1">
        <p className="text-[11px] font-semibold tracking-wider">{p.brand}</p>
        <p className="text-xs text-muted-foreground">{p.name}</p>
        <p className="text-xs font-medium">{p.price}</p>
        {"tag" in p && p.tag
          ? <p className="pt-1 text-[10px] font-semibold tracking-wider text-accent-red">{p.tag} <span className="ml-1 text-foreground">NEW</span></p>
          : <p className="pt-1 text-[10px] font-semibold tracking-wider">NEW</p>}
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Announcement bar */}
      <div className="overflow-hidden bg-black py-2 text-center text-[11px] font-medium tracking-[0.3em] text-white">
        <div className="animate-marquee whitespace-nowrap">
          ✦ COMPLIMENTARY SHIPPING WORLDWIDE  ✦  90-MINUTE DELIVERY IN DUBAI  ✦  NEW SEASON DROPS WEEKLY  ✦  LE MOMENT — DESIGNED FOR MOMENTS THAT LAST  ✦
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center gap-6 px-4 py-4 md:px-8">
          <a href="/" className="flex shrink-0 items-center gap-3 transition-transform hover:scale-105">
            <img src={logo.url} alt="Le Moment" className="h-20 w-20 object-contain md:h-24 md:w-24" />
            <div className="flex flex-col leading-none">
              <span className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Le Moment</span>
              <span className="text-[10px] tracking-[0.3em] text-muted-foreground md:text-xs">MAISON DE LUXE</span>
            </div>
          </a>
          <nav className="ml-6 hidden flex-1 items-center gap-7 text-[11px] font-semibold tracking-[0.15em] lg:flex">
            {NAV.map((item, i) => (
              <a
                key={item}
                href="#"
                className="relative uppercase transition-colors hover:text-accent-red after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-accent-red after:transition-all after:duration-300 hover:after:w-full"
                style={{ animation: `fadeInDown 0.5s ease-out ${i * 0.05}s both` }}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-4">
            <button aria-label="Search" className="transition-transform hover:scale-110"><Search className="h-5 w-5" strokeWidth={1.5} /></button>
            <button aria-label="Account" className="hidden transition-transform hover:scale-110 sm:block"><User className="h-5 w-5" strokeWidth={1.5} /></button>
            <button aria-label="Wishlist" className="hidden transition-transform hover:scale-110 sm:block"><Heart className="h-5 w-5" strokeWidth={1.5} /></button>
            <button aria-label="Cart" className="flex items-center gap-1.5 transition-transform hover:scale-110">
              <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
              <span className="text-xs font-semibold">Cart (0)</span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO with sale */}
      <section className="relative overflow-hidden">
        <div className="relative aspect-[16/9] max-h-[680px] w-full overflow-hidden md:aspect-[21/9]">
          <img src={heroMain.url} alt="Le Moment summer editorial" className="h-full w-full scale-105 object-cover animate-[heroZoom_8s_ease-out_forwards]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 mx-auto flex max-w-[1400px] flex-col justify-center px-6 md:px-12">
            <div className="max-w-xl animate-[fadeInUp_1s_ease-out]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-white/90">Summer Sale · 2026</p>
              <p className="mt-4 font-display text-2xl font-light italic text-white md:text-3xl">Up to</p>
              <div className="flex items-baseline gap-3">
                <span className="font-display text-[120px] font-bold leading-none text-white md:text-[200px]" style={{ textShadow: "0 6px 30px rgba(0,0,0,0.4)" }}>60</span>
                <span className="font-display text-6xl font-semibold text-white md:text-8xl">%</span>
                <span className="font-display text-2xl font-light italic text-white/90 md:text-3xl">off</span>
              </div>
              <p className="mt-2 max-w-md text-sm font-light text-white/85 md:text-base">Curated edits from our most-coveted maisons — a fleeting moment, eternally yours.</p>
              <a href="#" className="group mt-7 inline-flex items-center gap-3 border border-white/80 bg-white/10 px-8 py-3.5 text-[11px] font-semibold tracking-[0.3em] text-white backdrop-blur transition-all hover:bg-white hover:text-black">
                SHOP SALE
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Designed for Moments That Last */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-12">
        <h2 className="text-center font-display text-4xl font-semibold md:text-6xl">Designed for Moments<br />That Last</h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="group relative col-span-1 aspect-[4/5] overflow-hidden md:col-span-2 md:aspect-[16/10]">
            <img src={moment1.url} alt="Minimalist elegance" className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
          </div>
          <div className="group relative aspect-[4/5] overflow-hidden md:aspect-auto">
            <img src={moment2.url} alt="Outerwear moment" className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-sm leading-relaxed text-muted-foreground md:text-[15px]">
            At Le Moment, we believe true luxury lies in timeless craftsmanship, effortless sophistication, and pieces designed to be worn beyond seasons.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
            Every collection is thoughtfully created using premium materials and refined tailoring to celebrate modern femininity with confidence and elegance.
          </p>
          <a href="#" className="mt-6 inline-flex items-center gap-2 border-b border-foreground pb-1 text-[11px] font-semibold tracking-[0.3em] transition-all hover:gap-3">
            DISCOVER OUR JOURNEY <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>

      {/* Moment Noir editorial banner */}
      <section className="relative overflow-hidden bg-black">
        <div className="mx-auto max-w-[1600px]">
          <div className="relative aspect-[21/9] w-full overflow-hidden">
            <img src={momentNoir.url} alt="Moment Noir editorial" className="h-full w-full object-cover opacity-95" />
            <div className="absolute inset-0 flex items-end justify-end p-8 md:p-16">
              <a href="#" className="inline-flex items-center gap-2 border border-white/70 px-6 py-3 text-[11px] font-semibold tracking-[0.3em] text-white transition-all hover:bg-white hover:text-black">
                EXPLORE THE EDIT <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* New In */}
      <section className="mx-auto max-w-[1400px] px-4 py-20 md:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.3em] text-accent-red">NEW ARRIVALS</p>
            <h2 className="mt-2 font-display text-3xl font-semibold md:text-5xl">New In</h2>
          </div>
          <a href="#" className="text-[11px] font-semibold tracking-[0.3em] underline underline-offset-4">VIEW ALL</a>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-6">
          {newIn.map((p) => <ProductCard key={p.name} p={p} />)}
        </div>
      </section>

      {/* Collections — Women + Men */}
      <section className="mx-auto max-w-[1400px] px-4 pb-20 md:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            { img: collection1.url, title: "WOMEN", sub: "The Atelier Edit", cta: "Shop Women" },
            { img: elegance1.url, title: "TAILORING", sub: "Modern Femininity", cta: "Explore Collection" },
          ].map((c) => (
            <div key={c.title} className="group relative aspect-[4/5] overflow-hidden bg-muted">
              <img src={c.img} alt={c.title} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <p className="text-[11px] font-semibold tracking-[0.3em] text-white/80">{c.sub}</p>
                <h3 className="mt-2 font-display text-4xl font-semibold md:text-5xl">{c.title}</h3>
                <a href="#" className="mt-4 inline-flex items-center gap-2 border-b border-white pb-1 text-[11px] font-semibold tracking-[0.3em] transition-all hover:gap-3">
                  {c.cta} <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gift Guide — Wrapped With Elegance */}
      <section className="mx-auto max-w-[1400px] px-4 pb-20 md:px-8">
        <div className="text-center">
          <p className="text-[11px] font-semibold tracking-[0.3em] text-accent-red">GIFT GUIDE</p>
          <h2 className="mt-2 font-display text-4xl font-semibold md:text-6xl">Wrapped With Elegance</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">Considered gifts for the people who shape your most treasured moments.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { img: newBalance, title: "FOR HER", desc: "Soft tailoring and signature silhouettes.", cta: "Shop Gifts For Her" },
            { img: handbag, title: "FOR HIM", desc: "Refined essentials, made to be worn always.", cta: "Shop Gifts For Him" },
            { img: fathersDay, title: "THE ICONS", desc: "Timeless pieces, eternally desired.", cta: "Discover" },
          ].map((c) => (
            <div key={c.title} className="group">
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              <a href="#" className="mt-2 inline-block text-[11px] font-semibold tracking-[0.3em] underline underline-offset-4">{c.cta}</a>
            </div>
          ))}
        </div>
      </section>

      {/* Pair editorial */}
      <section className="mx-auto max-w-[1400px] px-4 pb-20 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="group">
            <div className="aspect-square overflow-hidden">
              <img src={louboutin} alt="Christian Louboutin" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold">CHRISTIAN LOUBOUTIN</h3>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">A bold new era under fresh creative direction.</p>
            <a href="#" className="mt-3 inline-block text-[11px] font-semibold tracking-[0.3em] underline underline-offset-4">Shop The Collection</a>
          </div>
          <div className="group">
            <div className="aspect-square overflow-hidden">
              <img src={mens1.url} alt="Tailored mens edit" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold">THE GENTLEMAN</h3>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">Heritage tailoring, reimagined for the modern man.</p>
            <a href="#" className="mt-3 inline-block text-[11px] font-semibold tracking-[0.3em] underline underline-offset-4">Shop Menswear</a>
          </div>
        </div>
      </section>

      {/* Trending Drops */}
      <section className="mx-auto max-w-[1400px] px-4 pb-20 md:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.3em] text-accent-red">TRENDING NOW</p>
            <h2 className="mt-2 font-display text-3xl font-semibold md:text-5xl">Trending Drops</h2>
          </div>
          <a href="#" className="text-[11px] font-semibold tracking-[0.3em] underline underline-offset-4">VIEW ALL</a>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-6">
          {trending.map((p) => <ProductCard key={p.name} p={p} />)}
        </div>
      </section>

      {/* Pair editorial 2 — sandals / belt */}
      <section className="mx-auto max-w-[1400px] px-4 pb-20 md:px-8">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <div className="group relative aspect-[4/5] overflow-hidden">
            <img src={summerSandals} alt="Summer essentials" className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="font-display text-3xl font-semibold md:text-4xl">SUMMER</h3>
              <a href="#" className="mt-2 inline-block text-[11px] font-semibold tracking-[0.3em] underline underline-offset-4">Shop The Edit</a>
            </div>
          </div>
          <div className="group relative aspect-[4/5] overflow-hidden">
            <img src={mens2.url} alt="Accessories" className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="font-display text-3xl font-semibold md:text-4xl">ACCESSORIES</h3>
              <a href="#" className="mt-2 inline-block text-[11px] font-semibold tracking-[0.3em] underline underline-offset-4">Shop Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-muted">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-6 py-16 md:grid-cols-2 md:px-12">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.3em] text-accent-red">STAY IN THE MOMENT</p>
            <h3 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-5xl">Join the Le Moment<br />community</h3>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">Be the first to know about new arrivals, private edits, and member-only invitations.</p>
          </div>
          <form className="flex flex-col gap-3 self-end">
            <div className="flex">
              <input type="email" placeholder="Email address" className="flex-1 border border-border bg-background px-4 py-3.5 text-sm outline-none focus:border-foreground" />
              <button className="bg-foreground px-8 text-[11px] font-semibold tracking-[0.3em] text-background transition-colors hover:bg-accent-red">SUBSCRIBE</button>
            </div>
            <p className="text-[11px] text-muted-foreground">By subscribing, you accept the Privacy Terms and consent to receive emails from Le Moment.</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-6 py-14 text-xs md:grid-cols-4 md:px-12">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo.url} alt="Le Moment" className="h-8 w-8 object-contain" />
              <h4 className="font-display text-lg font-semibold">Le Moment</h4>
            </div>
            <p className="mt-3 text-muted-foreground">Designed for moments that last.</p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold tracking-[0.2em]">SHOP</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>New</li><li>Women</li><li>Collections</li><li>Gift Guide</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold tracking-[0.2em]">SUPPORT</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>FAQ</li><li>About Us</li><li>Contact Us</li><li>Shipping & Returns</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold tracking-[0.2em]">FOLLOW</h4>
            <div className="flex items-center gap-3"><Instagram className="h-4 w-4" /><Facebook className="h-4 w-4" /></div>
            <p className="mt-4 text-muted-foreground">hello@lemoment.com</p>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-6 py-5 text-[11px] text-muted-foreground md:flex-row md:px-12">
            <p>© 2026 Le Moment. All Rights Reserved.</p>
            <p>Terms & Conditions · Privacy Policy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
