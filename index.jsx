import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Heart, Gift, CalendarHeart, Sparkles, Flower2, Mail, MessageCircleHeart } from "lucide-react";

const FloatingHeart = ({ left, delay, size, opacity, duration }) => (
  <motion.div
    className="absolute text-amber-300 pointer-events-none"
    style={{ left, opacity }}
    initial={{ y: "105vh", scale: 0.6, rotate: 0 }}
    animate={{ y: "-15vh", scale: [0.6, 1, 0.85], rotate: [0, 12, -8, 0] }}
    transition={{ duration, repeat: Infinity, delay, ease: "linear" }}
  >
    <Heart size={size} fill="currentColor" />
  </motion.div>
);

const MessageTimelineItem = ({ date, text, extraText, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.55, delay: Math.min(index * 0.035, 0.35) }}
    className="relative grid gap-4 rounded-3xl border border-amber-100/80 bg-white/75 p-5 shadow-lg shadow-amber-100/50 backdrop-blur-md sm:grid-cols-[140px_1fr]"
  >
    <div className="flex items-center gap-3 sm:block">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-200 sm:mx-auto">
        <MessageCircleHeart size={24} />
      </div>
      <p className="mt-0 text-sm font-black text-orange-700 sm:mt-3 sm:text-center">{date}</p>
    </div>
    <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-white p-5">
      <p className="font-serif text-xl italic leading-8 text-stone-800">“{text}”</p>
      {extraText && <p className="mt-4 font-serif text-lg italic leading-8 text-stone-700">“{extraText}”</p>}
    </div>
  </motion.div>
);

export default function MesiversarioGiftPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const detailsSlides = [
    {
      icon: Mail,
      title: "Cartica de amor",
      text: "Una cartica para decirte todo lo que te amo.",
    },
    {
      icon: Flower2,
      title: "Una flor para otra flor jijiji",
      text: "Porque tú también eres una florcita hermosa en mi vida.",
    },
    {
      icon: Gift,
      title: "Las pulseritas",
      text: "Se suponía que las pulseritas estarían también en tu camita como sorpresita, pero no me aguanté y te las di.",
    },
    {
      icon: CalendarHeart,
      title: "Una fecha especial",
      text: "Una fecha que la sabrás al final.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % detailsSlides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + detailsSlides.length) % detailsSlides.length);
  };

  const floatingHearts = useMemo(
    () => [
      { left: "6%", delay: 0, size: 18, opacity: 0.35, duration: 15 },
      { left: "16%", delay: 2, size: 26, opacity: 0.25, duration: 19 },
      { left: "28%", delay: 4, size: 16, opacity: 0.3, duration: 14 },
      { left: "42%", delay: 1, size: 22, opacity: 0.28, duration: 18 },
      { left: "57%", delay: 3, size: 20, opacity: 0.34, duration: 16 },
      { left: "71%", delay: 5, size: 28, opacity: 0.22, duration: 20 },
      { left: "86%", delay: 1.5, size: 18, opacity: 0.32, duration: 17 },
      { left: "94%", delay: 6, size: 24, opacity: 0.2, duration: 21 },
    ],
    []
  );

  return (
    <main
      className="relative min-h-screen overflow-hidden text-stone-950"
      style={{
        background:
          "radial-gradient(circle at top left, #fff1cc 0%, #fff8ec 34%, #eef7f4 68%, #ffffff 100%)",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {floatingHearts.map((heart, index) => (
          <FloatingHeart key={index} {...heart} />
        ))}
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-5 py-16 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-5 py-2 text-sm font-semibold text-orange-700 shadow-lg shadow-amber-100 backdrop-blur"
        >
          <Sparkles size={17} />
          Un regalo que hice con amor
        </motion.div>

        <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="text-center lg:text-left"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-amber-600">Feliz mesiversario</p>
            <h1 className="text-5xl font-black leading-tight text-stone-950 sm:text-6xl lg:text-7xl">
              Para mi futura esposita
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-700 lg:mx-0">
              Una cartica de una paginita no me bastaba para decir todo lo que quería, por eso te hice esta página para poder decirte todito lo que hace que estos 6 meses hayan sido los mejores de mi vida.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <button
                onClick={() => setIsDetailsOpen(true)}
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-7 py-4 font-bold text-white shadow-2xl shadow-amber-200 transition hover:-translate-y-1 hover:shadow-amber-300"
              >
                <Gift size={22} />
                Ver detalles
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-white/70 bg-white/70 p-7 shadow-2xl shadow-amber-100 backdrop-blur-md"
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-600">Mini historia</p>
          <h2 className="mt-3 text-3xl font-black text-stone-950">Un caminito de mensajes</h2>
          <p className="mt-4 leading-8 text-stone-700">
            Estos son mensajitos que fuimos guardando con el tiempo. Cada fecha tiene recuerdito que cuenta una parte de lo que hemos vivido y construido junticosh.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-white/70 bg-white/70 p-7 shadow-2xl shadow-amber-100 backdrop-blur-md"
        >
          {[
            { date: "17/7/2022", text: "Hola buenas noches" },
            { date: "29/12/2022", text: "Regulares Pal otro año o miedo?" },
            { date: "26/8/2023", text: "Tu eres el amor de mi vida" },
            { date: "5/2/2024", text: "Te amo" },
            { date: "15/4/2024", text: "Yo quiero casarme contigo" },
            { date: "7/10/2024", text: "Lista de metas" },
            { date: "20/11/2024", text: "Mi futuro esposito piciosito" },
            { date: "19/1/2025", text: "Mensajitos despues de nuestra primer campaña" },
            { date: "31/5/2025", text: "Mi ancianito quichito" },
            { date: "21/8/2025", text: "Eres absolutamente bella no hay defecto en ti", extraText: "Como la Sulamita" },
            { date: "30/10/2025", text: "Un compañerito del cual nunca me quiero separar" },
            { date: "16/11/2025", text: "Quieres ser mi novia?" },
            { date: "21/11/2025", text: "Me da muchaaaaa felicidad saber que voy a estar contigo siempre", extraText: "Tu cambiaste mi vida demasiado, me diste una razoncita mas para esforzarme" },
            { date: "26/1/2026", text: "Yo ya encontre a mi esposita" },
            { date: "17/2/2026", text: "Te amo noviecito" },
            { date: "4/5/2026", text: "Es que te mereces todo el amor del mundo" },
          ].map((item, index) => (
            <MessageTimelineItem key={`${item.date}-${index}`} {...item} index={index} />
          ))}
        </motion.div>
      </section>

      <section className="relative mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-amber-500 to-orange-500 p-1 shadow-2xl shadow-amber-200"
        >
          <div className="rounded-[1.8rem] bg-white/90 p-8 text-center backdrop-blur-md sm:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-amber-100 text-orange-600">
              <Heart size={32} fill="currentColor" />
            </div>
            <h2 className="text-3xl font-black text-stone-950 sm:text-4xl">La cartica que no cabía en una paginita</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-700">
              “No cabía todo lo que quería decirte en una paginita jiji, así que aquí te dejo mi corazón en forma de cartica.”
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="mt-8 rounded-2xl bg-orange-500 px-8 py-4 font-bold text-white shadow-xl shadow-amber-200 transition hover:-translate-y-1 hover:bg-orange-600"
            >
              Leer la carta
            </button>
          </div>
        </motion.div>
      </section>

      <footer className="relative px-5 pb-10 text-center text-sm font-semibold text-amber-600">
        Hecho con amor para celebrar nuestro mesiversario ♥
      </footer>

      {isDetailsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/40 p-5 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/70 bg-white p-7 shadow-2xl"
          >
            <button
              onClick={() => setIsDetailsOpen(false)}
              className="absolute right-5 top-5 z-10 rounded-full bg-amber-50 px-3 py-1 text-sm font-bold text-orange-600 hover:bg-amber-100"
            >
              Cerrar
            </button>

            {(() => {
              const SlideIcon = detailsSlides[currentSlide].icon;

              return (
                <div className="pt-6 text-center">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-[1.7rem] bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-xl shadow-amber-200">
                    <SlideIcon size={38} />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-600">
                    Detalle {currentSlide + 1} de {detailsSlides.length}
                  </p>
                  <h2 className="mt-4 text-4xl font-black text-stone-950">
                    {detailsSlides[currentSlide].title}
                  </h2>
                  <p className="mx-auto mt-5 max-w-xl font-serif text-xl italic leading-9 text-stone-700">
                    “{detailsSlides[currentSlide].text}”
                  </p>
                </div>
              );
            })()}

            <div className="mt-8 flex items-center justify-between gap-3">
              <button
                onClick={previousSlide}
                className="rounded-2xl border border-amber-200 bg-white px-5 py-3 font-bold text-stone-700 shadow-lg shadow-amber-100 transition hover:-translate-y-1"
              >
                Anterior
              </button>

              <div className="flex gap-2">
                {detailsSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-3 rounded-full transition-all ${
                      currentSlide === index ? "w-8 bg-orange-500" : "w-3 bg-amber-200"
                    }`}
                    aria-label={`Ir al detalle ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="rounded-2xl bg-orange-500 px-5 py-3 font-bold text-white shadow-lg shadow-amber-200 transition hover:-translate-y-1 hover:bg-orange-600"
              >
                Siguiente
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/40 p-5 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative max-h-[85vh] w-full max-w-2xl overflow-auto rounded-[2rem] border border-white/70 bg-white p-7 shadow-2xl"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-5 rounded-full bg-amber-50 px-3 py-1 text-sm font-bold text-orange-600 hover:bg-amber-100"
            >
              Cerrar
            </button>
            <div className="pr-16">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-600">Carta</p>
              <h2 className="mt-3 text-3xl font-black text-stone-950">Para ti, mi amor</h2>
            </div>
            <div className="mt-6 rounded-3xl bg-amber-50 p-6 font-serif text-lg leading-9 text-stone-800">
              <p>
                No cabía todo lo que quería decirte en una paginita jiji, mi amor hermosa. No hay día que no piense en ti y no quiera que llegue ya el día que nos casemosh. Tengo tantas ansias de que empiece nuestra vida de espositos, porque es que no hay nada que me pueda hacer más feliz que vivir con el amor de mi vida y servirle por siempre a Jehová a su lado.
              </p>
              <p className="mt-5">
                Si algo he podido experimentar estos mesesitos es que entre más cerca estoy de ti, las cosas que hago por Jehová y la organización, las que podemos hacer junticos, las he disfrutado muchito mash.
              </p>
              <p className="mt-5">
                Gracias porque has sido un gran apoyito para mí en todo y más últimamente. Hay diitas que tal vez hasta inconscientemente me preocupo mucho por querer ayudar a algún hermanito y más ahora con lo del comité. Han habido días, y puedo decir que pocas veces me pasaba así, pero han habido diitas que no he sentido nervios sino temor.
              </p>
              <p className="mt-5">
                Pero hablar contigo me tranquilizaba de una manera impresionante. Tú siempre estás muy atenta de mí, de cómo estoy, y eso lo valoro muchito mi amor. Y a veces no sé si no te lo digo tanto o si sí lo hago y no caigo en cuenta, pero de verdad gracias, gachas por todo tu apoyo.
              </p>
              <p className="mt-5">
                Gachas porque es gracias a ti que puedo hacer todo lo que hago y porque sé que puedo lograr muchas mash cositash, porque ya nada lo hago solito, sino que siempre tú estás a mi ladito.
              </p>
              <p className="mt-5">
                Tienes tantas cualidades tan hermosas que no tengo duda de que vas a ser una esposita excelente. Y solo quiero que sepas que cada día quiero que te sientas más cerquita de mí, que confíes más en mí y que tengas toda la seguridad siempre de que te amo más que ayer pero menos que mañana. Cada diita siempre te voy a amar más.
              </p>
              <p className="mt-5">
                Pero meno JAJAJAJAJAJJA, mucho texto. Lo último que te prometí era una fecha, solo te diré:
              </p>
              <div className="my-7 rounded-[1.7rem] bg-white p-6 text-center shadow-inner shadow-amber-100">
                <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-600">Faltan 416 días</p>
                <p className="mt-3 text-4xl font-black not-italic text-orange-600 sm:text-5xl">SAVE THE DATE</p>
              </div>
              <p className="mt-5 text-center text-xl">
                Te amo de aquí a la luna en pasitos de tortuguia, lento pero segurito, y con todo mi corazón en cada pasito. 🐢🌙
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}
