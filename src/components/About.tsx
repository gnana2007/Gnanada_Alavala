import { MapPin, GraduationCap, Award, Compass } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-36 border-t border-lagoon-border/40 overflow-hidden">
      <div className="mx-auto max-w-[1400px] w-full px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Quick Facts */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-lagoon-primary" />
                  <span className="font-mono text-xs tracking-[0.2em] uppercase text-lagoon-muted font-medium">
                    BACKGROUND
                  </span>
                </div>
                <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-lagoon-deep tracking-tight">
                  ABOUT
                </h2>
              </div>

              {/* Quick Info Glass Card */}
              <div className="p-6 rounded-3xl glass-panel border border-white/80 shadow-glass-sm flex flex-col gap-4">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-lagoon-deep">
                  <GraduationCap className="w-4 h-4 text-lagoon-primary shrink-0" />
                  <div>
                    <span className="font-semibold block">B.Tech in Computer Science</span>
                    <span className="text-lagoon-muted text-xs">SRM University-AP (CGPA 8.6 / 10)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-lagoon-deep">
                  <Compass className="w-4 h-4 text-lagoon-primary shrink-0" />
                  <div>
                    <span className="font-semibold block">Next Tech Lab (NTL)</span>
                    <span className="text-lagoon-muted text-xs">Active Lab Member</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-lagoon-deep">
                  <MapPin className="w-4 h-4 text-lagoon-primary shrink-0" />
                  <div>
                    <span className="font-semibold block">Vijayawada, India</span>
                    <span className="text-lagoon-muted text-xs">Available for remote & hybrid roles</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-lagoon-deep">
                  <Award className="w-4 h-4 text-lagoon-accent shrink-0" />
                  <div>
                    <span className="font-semibold block">9 Hacks Hackathon</span>
                    <span className="text-lagoon-muted text-xs">2nd Runner-Up (3D VR)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-8 flex flex-col gap-6 max-w-2xl">
            <p className="font-heading font-medium text-xl sm:text-2xl md:text-3xl text-lagoon-deep leading-relaxed">
              I&rsquo;m a Computer Science engineering student interested in AI, full-stack development, computer vision and interactive systems.
            </p>

            <p className="text-base sm:text-lg text-lagoon-muted leading-relaxed font-normal">
              I enjoy taking ideas from a rough sketch and turning them into working prototypes.
              Sometimes that means building an AI system with vector retrieval and embeddings. Sometimes it means connecting software to hardware sensors and microcontrollers. Usually, it means experimenting until something works.
            </p>

            <p className="text-base sm:text-lg text-lagoon-muted leading-relaxed font-normal">
              When I&rsquo;m not building prototypes, I practice competitive programming and data structures on LeetCode and CodeChef, collaborate with researchers at Next Tech Lab, and explore tactile interfaces that bridge physical inputs with cloud architectures.
            </p>

            {/* Quote Box */}
            <div className="mt-4 p-6 rounded-2xl bg-white/70 border border-lagoon-border/80 border-l-4 border-l-lagoon-primary">
              <blockquote className="font-heading italic text-lagoon-deep text-base sm:text-lg font-normal">
                &ldquo;I don&rsquo;t just learn technologies. I build things with them.&rdquo;
              </blockquote>
              <span className="font-mono text-xs text-lagoon-primary mt-2 block font-medium">
                — Gnanada Alavala
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
