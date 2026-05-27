export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-400 text-sm mb-4 tracking-widest uppercase">
              Linux • Cloud • Soporte IT
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Soporte IT remoto y automatización para pequeños negocios.
            </h1>

            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Ayudo a freelancers, estudiantes y pequeños negocios a resolver
              problemas técnicos, optimizar sistemas Linux y automatizar tareas.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-2xl font-medium text-black"
              >
                Contactarme
              </a>

              <a
                href="#servicios"
                className="border border-zinc-700 hover:border-cyan-400 hover:text-cyan-400 transition px-6 py-3 rounded-2xl"
              >
                Ver servicios
              </a>
            </div>
          </div>

          <div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl p-6">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              <pre className="text-sm text-cyan-400 overflow-x-auto">
{`martincaceres@linux ~ $ neofetch
OS: EndeavourOS Linux
Shell: zsh
WM: bspwm
CPU: Intel i3-4170
Terminal: kitty
Skills: Linux • Bash • AWS • IT Support`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MI */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-900">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>

            <p className="text-zinc-400 leading-relaxed mb-4">
              Soy estudiante de soporte IT y usuario avanzado de Linux. Trabajo
              principalmente con sistemas Linux, automatización mediante Bash,
              despliegue de páginas web y resolución de problemas técnicos.
            </p>

            <p className="text-zinc-400 leading-relaxed">
              Me enfoco en soluciones simples, rápidas y eficientes para
              personas que necesitan ayuda técnica real sin complicaciones.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              'Linux',
              'Bash',
              'AWS',
              'Cloudflare',
              'Nginx',
              'Git/GitHub',
              'Excel',
              'Soporte IT',
            ].map((skill) => (
              <div
                key={skill}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-center hover:border-cyan-400 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section
        id="servicios"
        className="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-900"
      >
        <h2 className="text-3xl font-bold mb-12">Servicios</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition">
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
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition">
            <h3 className="text-2xl font-semibold mb-4">
              ☁️ Hosting y cloud
            </h3>

            <ul className="space-y-3 text-zinc-400">
              <li>• Landing pages</li>
              <li>• Cloudflare Pages</li>
              <li>• Nginx básico</li>
              <li>• HTTPS gratuito</li>
              <li>• Deploy de sitios web</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition">
            <h3 className="text-2xl font-semibold mb-4">
              ⚡ Automatización
            </h3>

            <ul className="space-y-3 text-zinc-400">
              <li>• Scripts Bash</li>
              <li>• Organización automática</li>
              <li>• Automatización de backups</li>
              <li>• Limpieza de archivos</li>
              <li>• Procesamiento de datos</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-900">
        <h2 className="text-3xl font-bold mb-12">Proyectos</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-3">
              Servidor Linux virtualizado
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              Implementación de Debian Server con Nginx, firewall UFW y scripts
              Bash de mantenimiento automático.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-3">
              Automatización de archivos
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              Script Bash para organización automática de documentos y backups.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="max-w-4xl mx-auto px-6 py-20 border-t border-zinc-900"
      >
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Necesitás ayuda técnica?
          </h2>

          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Podés contactarme para soporte IT remoto, automatización,
            configuración Linux o despliegue de páginas web.
          </p>

          <div className="flex flex-col gap-4 items-center text-lg">
            <p>
              📧 caceresmartin574@gmail.com
            </p>

            <p>
              💼 github.com/MartinCaceresmc
            </p>

            <p>
              📍 Neuquén, Argentina
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-8 text-center text-zinc-500 text-sm">
        © 2026 Gonzalo Martín Cáceres • Linux • Cloud • Soporte IT
      </footer>
    </div>
  );
}
