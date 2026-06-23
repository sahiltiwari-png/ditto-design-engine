import { createFileRoute } from "@tanstack/react-router";
import { Search, User, Heart, ShoppingBag, Globe, Instagram, Facebook } from "lucide-react";
import heroSummer1 from "@/assets/hero-summer-1.jpg";
import heroSummer2 from "@/assets/hero-summer-2.jpg";
import louboutin from "@/assets/louboutin.jpg";
import summerSandals from "@/assets/summer-sandals.jpg";
import newBalance from "@/assets/new-balance.jpg";
import handbag from "@/assets/handbag.jpg";
import fathersDay from "@/assets/fathers-day.jpg";
import sneakerSpace from "@/assets/sneaker-space.jpg";
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
      { title: "Level Shoes — The World's Largest Luxury Shoe Store" },
      { name: "description", content: "Shop luxury shoes, bags, accessories and edits from the world's top designers. 90-minute delivery in Dubai." },
    ],
  }),
  component: Index,
});

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
        <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="mt-3 space-y-1">
        <p className="text-[11px] font-semibold tracking-wider">{p.brand}</p>
        <p className="text-xs text-muted-foreground">{p.name}</p>
        <p className="text-xs font-medium">{p.price}</p>
        {"tag" in p && p.tag && <p className="pt-1 text-[10px] font-semibold tracking-wider text-accent-red">{p.tag} <span className="ml-1 text-foreground">NEW</span></p>}
        {!("tag" in p && p.tag) && <p className="pt-1 text-[10px] font-semibold tracking-wider">NEW</p>}
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Announcement bar */}
      <div className="bg-black py-2 text-center text-[11px] font-medium tracking-[0.2em] text-white">
        90-MINUTE DELIVERY IN DUBAI
      </div>

      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-4 py-4 md:px-8">
          <a href="/" className="flex shrink-0 flex-col leading-none">
            <span className="font-display text-2xl font-semibold tracking-tight">level</span>
            <span className="text-[10px] tracking-[0.3em] text-muted-foreground">SHOES</span>
          </a>
          <nav className="ml-4 hidden items-center gap-6 text-xs font-semibold tracking-wider md:flex">
            <a className="border-b-2 border-foreground pb-1" href="#">WOMEN</a>
            <a href="#">MEN</a>
            <a href="#">KIDS</a>
          </nav>
          <div className="ml-auto flex flex-1 items-center gap-3 md:max-w-md">
            <div className="flex flex-1 items-center gap-2 rounded-full border border-border bg-muted px-4 py-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input placeholder="Search" className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <button className="hidden items-center gap-1 sm:flex"><Globe className="h-4 w-4" /> UAE</button>
            <button className="hidden items-center gap-1 sm:flex">العربية</button>
            <button aria-label="Account"><User className="h-5 w-5" strokeWidth={1.5} /></button>
            <button aria-label="Wishlist"><Heart className="h-5 w-5" strokeWidth={1.5} /></button>
            <button aria-label="Cart"><ShoppingBag className="h-5 w-5" strokeWidth={1.5} /></button>
          </div>
        </div>
        {/* Sub nav */}
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-[1400px] items-center gap-6 overflow-x-auto px-4 py-3 text-xs font-medium tracking-wider md:px-8">
            <a className="text-accent-red font-semibold" href="#">Sale</a>
            <a href="#">New In</a>
            <a href="#">Designers</a>
            <a href="#">Shoes</a>
            <a href="#">Bags</a>
            <a href="#">Accessories</a>
            <a href="#">Drops</a>
            <a href="#">Edits</a>
            <a href="#">Gifts</a>
            <a href="#">Pre-Loved</a>
            <a href="#">Stories</a>
          </div>
        </div>
      </header>

      {/* Sale Banner */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, oklch(0.9 0.05 20), oklch(0.85 0.07 15))" }}>
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-10 md:py-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/80">Up to</p>
            <p className="font-display text-7xl font-semibold text-white md:text-9xl">60%</p>
          </div>
          <a href="#" className="text-xs font-semibold tracking-wider text-white underline underline-offset-4">SHOP SALE</a>
        </div>
      </section>

      {/* Hero — Sounds of Summer */}
      <section className="mx-auto max-w-[1400px] px-2 pt-2 md:px-4">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img src={heroSummer1} alt="Sounds of summer editorial" className="h-full w-full object-cover" />
            <div className="absolute bottom-6 left-6">
              <h2 className="font-display text-3xl italic text-white md:text-5xl">sounds of summer</h2>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <img src={heroSummer2} alt="Summer sandals" className="h-full w-full object-cover" />
            <a href="#" className="absolute bottom-6 left-6 text-xs font-semibold tracking-wider text-white underline underline-offset-4">SHOP NOW</a>
          </div>
        </div>
      </section>

      {/* New In */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 md:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">New In</h2>
          <a href="#" className="text-xs font-semibold tracking-wider underline underline-offset-4">VIEW ALL</a>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-6">
          {newIn.map((p) => <ProductCard key={p.name} p={p} />)}
        </div>
      </section>

      {/* 90-minute delivery */}
      <section className="bg-[oklch(0.92_0.08_130)]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-10 md:px-12">
          <div>
            <h3 className="font-display text-3xl font-semibold leading-tight text-[oklch(0.35_0.18_260)] md:text-5xl">
              90-MINUTE<br />DELIVERY<br />IN DUBAI
            </h3>
            <p className="mt-3 text-[10px] font-bold tracking-[0.2em] text-[oklch(0.35_0.18_260)]">SAME-DAY ACROSS THE UAE</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden h-32 w-40 bg-[oklch(0.75_0.04_70)] shadow-lg md:block" />
            <a href="#" className="text-xs font-semibold tracking-wider underline underline-offset-4">SHOP NOW</a>
          </div>
        </div>
      </section>

      {/* Louboutin + Summer */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <div className="aspect-square overflow-hidden bg-accent-red">
              <img src={louboutin} alt="Christian Louboutin collection" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold">CHRISTIAN LOUBOUTIN</h3>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">A bold new men's era under Jaden Smith's creative direction.</p>
            <a href="#" className="mt-3 inline-block text-xs font-semibold tracking-wider underline underline-offset-4">Shop The Collection</a>
          </div>
          <div>
            <div className="aspect-square overflow-hidden bg-[oklch(0.6_0.2_240)]">
              <img src={summerSandals} alt="Summer sandals" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold">SUMMER</h3>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">The forecast calls for sandals, stamped in the Burberry check.</p>
            <a href="#" className="mt-3 inline-block text-xs font-semibold tracking-wider underline underline-offset-4">Shop The Edit</a>
          </div>
        </div>
      </section>

      {/* New Balance / Hold Your Peace / Father's Day */}
      <section className="mx-auto max-w-[1400px] px-4 pb-16 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { img: newBalance, title: "NEW BALANCE", desc: "The first nap. The early morning. The sunset stroll.", cta: "Discover The Drop" },
            { img: handbag, title: "HOLD YOUR PEACE", desc: "What you carry says enough.", cta: "Shop Dolce & Gabbana & More" },
            { img: fathersDay, title: "FATHER'S DAY", desc: "For the man who almost has everything.", cta: "Shop Gifts For Him" },
          ].map((c) => (
            <div key={c.title}>
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              <a href="#" className="mt-2 inline-block text-xs font-semibold tracking-wider underline underline-offset-4">{c.cta}</a>
            </div>
          ))}
        </div>
      </section>

      {/* Sneaker Space */}
      <section className="mx-auto max-w-[1400px] px-4 pb-16 md:px-8">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div className="aspect-[4/3] overflow-hidden">
            <img src={sneakerSpace} alt="The Sneaker Space" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="px-4 text-center md:px-12">
            <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">THE<br />SNEAKER<br />SPACE</h2>
            <p className="mt-6 text-sm text-muted-foreground">World Cup heat. Hero pairs in rotation.</p>
            <a href="#" className="mt-3 inline-block text-xs font-semibold tracking-wider underline underline-offset-4">Shop New Releases</a>
          </div>
        </div>
      </section>

      {/* Trending Drops */}
      <section className="mx-auto max-w-[1400px] px-4 pb-20 md:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Trending Drops</h2>
          <a href="#" className="text-xs font-semibold tracking-wider underline underline-offset-4">VIEW ALL</a>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-6">
          {trending.map((p) => <ProductCard key={p.name} p={p} />)}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-muted">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-6 py-14 md:grid-cols-2 md:px-12">
          <div>
            <h3 className="font-display text-3xl font-semibold leading-tight md:text-4xl">All news is<br />good news</h3>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">Be the first to know about new arrivals, exclusive drops, promotions and more when you sign up to receive our emails.</p>
          </div>
          <form className="flex flex-col gap-3">
            <div className="flex">
              <input type="email" placeholder="Email address" className="flex-1 border border-border bg-background px-4 py-3 text-sm outline-none" />
              <button className="bg-foreground px-6 text-xs font-semibold tracking-wider text-background">SUBSCRIBE</button>
            </div>
            <p className="text-[11px] text-muted-foreground">By subscribing, I accept the Privacy Terms and I give my consent to receive emails from Level Shoes.</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-6 py-14 text-xs md:grid-cols-5 md:px-12">
          <div>
            <h4 className="mb-4 font-display text-base font-semibold">LEVEL SHOES</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>+971 800 538 3573</li>
              <li>customercare@levelshoes.com</li>
              <li>About Us</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold tracking-wider">CUSTOMER CARE</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Track Orders / Create</li>
              <li>Returns</li>
              <li>FAQs</li>
              <li>Shipping & Delivery</li>
              <li>Returns</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold tracking-wider">SERVICES</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Personal Shopping</li>
              <li>FITT</li>
              <li>The Glo Club</li>
              <li>The Cobbler</li>
              <li>The IT List</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold tracking-wider">DOWNLOAD OUR APP</h4>
            <p className="mb-3 text-muted-foreground">Scan the QR code to download our app for iOS or Android.</p>
            <div className="h-24 w-24 bg-foreground" />
          </div>
          <div>
            <h4 className="mb-4 font-semibold tracking-wider">MUSE LOYALTY PROGRAMME</h4>
            <p className="text-muted-foreground">Collect points on every order and use them to redeem against future purchases and enjoy exclusive rewards and member-only offers.</p>
            <a href="#" className="mt-3 inline-block font-semibold underline underline-offset-4">Discover more</a>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-6 py-5 text-[11px] text-muted-foreground md:flex-row md:px-12">
            <p>Copyright © 2026 Level Shoes. All Rights Reserved. Terms & Conditions · Privacy & Cookie Policy</p>
            <div className="flex items-center gap-3">
              <span>FOLLOW US</span>
              <Instagram className="h-4 w-4" />
              <Facebook className="h-4 w-4" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
