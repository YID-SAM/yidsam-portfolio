import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-zinc-950"
    >
      <Container>

        <SectionTitle
          title="About Me"
          subtitle="Creative Designer, Video Editor, Content Creator and Voice Over Artist."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-gray-400 leading-8">
              I am Yidnekachew Samuel, a passionate
              creative professional dedicated to helping
              individuals and brands communicate their
              stories through design, video, content,
              and professional voice-over services.
            </p>

            <p className="text-gray-400 leading-8 mt-6">
              My mission is to transform ideas into
              engaging visual and audio experiences that
              inspire audiences and create meaningful
              connections.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">

            <div className="bg-zinc-900 p-6 rounded-2xl text-center">
              <h3 className="text-3xl font-bold text-violet-500">
                50+
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Projects
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl text-center">
              <h3 className="text-3xl font-bold text-violet-500">
                4+
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Years
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl text-center">
              <h3 className="text-3xl font-bold text-violet-500">
                100%
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Passion
              </p>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}