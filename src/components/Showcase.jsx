import { projects } from '../data/projects'
import { discord } from '../config'
import { useLang } from '../i18n/LanguageContext'
import { Reveal, SectionHeading } from './Reveal'

export function Showcase() {
  const { lang, t } = useLang()

  return (
    <section id="showcase" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading title={t.showcase.title} subtitle={t.showcase.subtitle} />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const content = project[lang]
            return (
              <Reveal key={project.id} delay={index * 0.04}>
                <article className="group glass overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-vibe/40">
                  <div className="relative overflow-hidden border-b border-white/10">
                    <img
                      src={project.image}
                      alt={content.name}
                      className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white">{content.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/55">{content.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="font-mono text-[10px] tracking-wider text-vibe/80">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={discord.invite}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex text-sm text-white/70 transition hover:text-vibe"
                    >
                      {t.showcase.view} →
                    </a>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
