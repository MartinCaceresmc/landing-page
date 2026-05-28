import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-zinc-100 font-sans overflow-x-hidden">

      {/* NAVBAR PREMIUM */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800/50 bg-zinc-950/70 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold text-cyan-400"
          >
            GonzaloIT
          </motion.h1>

          <div className="hidden md:flex gap-8 text-sm text-zinc-300">
            <a href="#servicios" className="hover:text-cyan-400 transition">
              Servicios
            </a>

            <a href="#proyectos" className="hover:text-cyan-400 transition">
              Proyectos
            </a>

            <a href="#workflow" className="hover:text-cyan-400 transition">
              Workflow
            </a>

            <a href="#precios" className="hover:text-cyan-400 transition">
              Precios
            </a>

            <a href="#contacto" className="hover:text-cyan-400 transition">
              Contacto
            </a>

            <a
              href="https://github.com/MartinCaceresmc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 pt-40 pb-24"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div>
            <p className="text-cyan-400 text-sm mb-4 tracking-widest uppercase">
              Linux • Cloud • Automatización • Soporte IT
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Soluciones Linux, automatización y soporte IT remoto para
              freelancers y pequeños negocios.
            </h1>

            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Ayudo a optimizar sistemas Linux, desplegar páginas web y resolver
              problemas técnicos de forma rápida, moderna y eficiente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5492995134979"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 hover:bg-cyan-400 transition px-5 py-3 rounded-2xl font-medium text-black w-full sm:w-auto text-center shadow-lg shadow-cyan-500/20"
              >
                Contactarme por WhatsApp
              </a>

              <a
                href="#servicios"
                className="border border-zinc-700 hover:border-cyan-400 hover:text-cyan-400 transition px-5 py-3 rounded-2xl w-full sm:w-auto text-center"
              >
                Ver servicios
              </a>
            </div>

            <div className="flex items-center gap-2 mt-6 text-green-400">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              Disponible para proyectos freelance
            </div>
          </div>

          {/* TERMINAL */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-zinc-900/70 backdrop-blur border border-zinc-800 rounded-3xl shadow-2xl p-6"
          >

            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <TypeAnimation
              sequence={[
                'gonzaloit@linux ~ $ whoami',
                1000,

                'gonzaloit@linux ~ $ whoami\nGonzalo Martín Cáceres',
                1500,

                'gonzaloit@linux ~ $ skills\nLinux\nBash\nAWS\nCloudflare\nReact\nNginx',
                2000,

                'gonzaloit@linux ~ $ status\n● Disponible para proyectos freelance',
                2000,

                'gonzaloit@linux ~ $ deploy landing-page',
                1500,

                '✔ Deploy successful',
                2500,
              ]}
              wrapper="pre"
              speed={65}
              repeat={Infinity}
              className="text-xs sm:text-sm text-cyan-400 overflow-x-auto whitespace-pre-line"
            />

          </motion.div>
        </div>
      </motion.section>

      {/* SERVICIOS */}
      <section
        id="servicios"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-20 border-t border-zinc-900"
      >
        <h2 className="text-3xl font-bold mb-12">
          Servicios
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-zinc-900/70 backdrop-blur border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-4">
              🔧 Soporte IT remoto
            </h3>

            <ul className="space-y-3 text-zinc-400">
              <li>• Optimización de PCs</li>
              <li>• Instalación de Linux</li>
              <li>• Resolución de errores</li>
              <li>• Configuración de software</li>
              <li>• Backups y mantenimiento</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-zinc-900/70 backdrop-blur border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-4">
              ☁️ Hosting y cloud
            </h3>

            <ul className="space-y-3 text-zinc-400">
              <li>• Landing pages</li>
              <li>• Cloudflare Pages</li>
              <li>• HTTPS gratuito</li>
              <li>• Deploy de sitios web</li>
              <li>• Configuración básica Nginx</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-zinc-900/70 backdrop-blur border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-4">
              ⚡ Automatización
            </h3>

            <ul className="space-y-3 text-zinc-400">
              <li>• Scripts Bash</li>
              <li>• Automatización de backups</li>
              <li>• Limpieza automática</li>
              <li>• Organización de archivos</li>
              <li>• Procesamiento de datos</li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* PROYECTOS */}
      <section
        id="proyectos"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-20 border-t border-zinc-900"
      >
        <h2 className="text-3xl font-bold mb-12">
          Proyectos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-zinc-900/70 backdrop-blur border border-zinc-800 rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475"
              alt="Servidor Linux"
              className="w-full h-52 object-cover"
            />

            <div className="p-8">
              <h3 className="text-xl font-semibold mb-3">
                Servidor Linux virtualizado
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Debian Server + Nginx + UFW + scripts Bash de automatización.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-zinc-900/70 backdrop-blur border border-zinc-800 rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
              alt="Landing Page"
              className="w-full h-52 object-cover"
            />

            <div className="p-8">
              <h3 className="text-xl font-semibold mb-3">
                Landing page en Cloudflare
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                React + Vite + Tailwind + Cloudflare Pages + deploy automático.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* WORKFLOW */}
      <section
        id="workflow"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-20 border-t border-zinc-900"
      >
        <h2 className="text-3xl font-bold mb-12">
          Workflow
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {[
            '📩 Contacto',
            '🛠️ Análisis',
            '⚡ Desarrollo',
            '🚀 Deploy',
          ].map((step) => (
            <motion.div
              key={step}
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-900/70 backdrop-blur border border-zinc-800 rounded-3xl p-8 text-center shadow-xl"
            >
              <p className="text-xl font-semibold">
                {step}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* PRECIOS */}
      <section
        id="precios"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-20 border-t border-zinc-900"
      >
        <h2 className="text-3xl font-bold mb-12">
          Servicios y precios
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-zinc-900/70 backdrop-blur border border-zinc-800 rounded-3xl p-8 text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Landing Page
            </h3>

            <p className="text-4xl font-bold text-cyan-400 mb-4">
              Desde USD 30
            </p>

            <p className="text-zinc-400">
              Desarrollo y deploy de landing pages modernas y rápidas.
            </p>
          </div>

          <div className="bg-zinc-900/70 backdrop-blur border border-cyan-500 rounded-3xl p-8 text-center scale-105 shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Soporte IT
            </h3>

            <p className="text-4xl font-bold text-cyan-400 mb-4">
              Desde USD 10/h
            </p>

            <p className="text-zinc-400">
              Resolución de problemas técnicos y soporte remoto.
            </p>
          </div>

          <div className="bg-zinc-900/70 backdrop-blur border border-zinc-800 rounded-3xl p-8 text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Automatización
            </h3>

            <p className="text-4xl font-bold text-cyan-400 mb-4">
              Desde USD 20
            </p>

            <p className="text-zinc-400">
              Scripts Bash y automatización de tareas repetitivas.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="max-w-4xl mx-auto px-4 sm:px-6 py-20 border-t border-zinc-900"
      >
        <div className="bg-zinc-900/70 backdrop-blur border border-zinc-800 rounded-3xl p-10 text-center shadow-2xl">

          <h2 className="text-4xl font-bold mb-6">
            ¿Necesitás ayuda técnica?
          </h2>

          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Podés contactarme para soporte IT remoto, automatización Linux o
            despliegue de páginas web.
          </p>

          <div className="flex flex-col gap-4 items-center text-lg">

            <p>
              📧 caceresmartin574@gmail.com
            </p>

            <a
              href="https://github.com/MartinCaceresmc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition"
            >
              GitHub
            </a>

            <p>
              📍 Neuquén, Argentina
            </p>

          </div>
        </div>
      </section>

      {/* FOOTER MEJORADO */}
      <footer className="border-t border-zinc-900 py-10 text-center text-zinc-500 text-sm">

        <div className="mb-4">
          <h3 className="text-cyan-400 text-xl font-bold">
            GonzaloIT
          </h3>
        </div>

        <p className="mb-2">
          Linux • Cloud • Automatización • Soporte IT
        </p>

        <p>
          © 2026 Gonzalo Martín Cáceres
        </p>

      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/5492995134979"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-black rounded-full shadow-2xl hover:scale-110 transition duration-300 w-16 h-16 flex items-center justify-center text-2xl"
      >
        💬
      </a>

    </div>
  );
}