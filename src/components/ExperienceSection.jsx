import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

export default function ExperienceSection() {
  return (
<<<<<<< HEAD
    <section className="bg-white text-[#0b1221] py-20 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
=======
    <div className="bg-white text-[#0b1221] pt-14 pr-9 flex items-center  md:py-40 md:pt-60 md:pl-[250px]  md:max-h-[400px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28  max-w-6xl mx-auto w-full">
>>>>>>> a20db82979ee095e309127bc1af38bf69ad63ea0
        
        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
<<<<<<< HEAD
          className="flex flex-col gap-8"
        >
          <div className="flex items-center gap-3">
            <div className="bg-[#0b1221] text-white p-3 rounded-full">
              <Briefcase size={22} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Work Experience</h2>
          </div>

          <div className="flex flex-col gap-8 border-l border-gray-300 pl-6">
            {/* Job 1 */}
            <div>
              <h3 className="font-semibold text-lg sm:text-xl">UI & UX Designer</h3>
              <p className="text-gray-600 text-sm mb-2">
                Mohaymen <span className="text-gray-400">•</span> June 2025 - Present
              </p>
              <p className="text-gray-500 text-sm leading-relaxed"></p>
            </div>

            {/* Job 2 */}
            <div>
              <h3 className="font-semibold text-lg sm:text-xl">UI & UX Designer</h3>
              <p className="text-gray-600 text-sm mb-2">
                MAKEEN IDEAL MEDIA <span className="text-gray-400">•</span> Feb 2024 - June 2025
              </p>
              <p className="text-gray-500 text-sm leading-relaxed"></p>
=======
          className="flex flex-col gap-8 items-center md:items-start text-center md:text-left"
        >
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="bg-[#0b1221] text-white p-3 rounded-full">
              <Briefcase size={22} />
            </div>
            <h2 className="text-2xl font-extrabold">Work Experience</h2>
          </div>

          <div className="flex flex-col gap-10 border-l md:border-l border-gray-300 pl-6 md:pl-6">
            <div>
              <h3 className="font-semibold text-lg">Product Designer</h3>
              <p className="text-gray-600 text-sm mb-2">
                Mohaymen <span className="text-gray-400">•</span> June 2025 - Present
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">UX & UI Designer</h3>
              <p className="text-gray-600 text-sm mb-2">
                MAKEEN IDEAL MEDIA <span className="text-gray-400">•</span> Feb 2024 - June 2025
              </p>
>>>>>>> a20db82979ee095e309127bc1af38bf69ad63ea0
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
<<<<<<< HEAD
          className="flex flex-col gap-8"
        >
          <div className="flex items-center gap-3">
            <div className="bg-[#0b1221] text-white p-3 rounded-full">
              <GraduationCap size={22} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Education</h2>
          </div>

          <div className="flex flex-col gap-8 border-l border-gray-300 pl-6">
            {/* Education 1 */}
            <div>
              <h3 className="font-semibold text-lg sm:text-xl">Bachelor of Industrial Design</h3>
=======
          className="flex flex-col gap-8 items-center md:items-start text-center md:text-left"
        >
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="bg-[#0b1221] text-white p-3 rounded-full">
              <GraduationCap size={22} />
            </div>
            <h2 className="text-2xl font-extrabold">Education</h2>
          </div>

          <div className="flex flex-col gap-10 border-l border-gray-300 pl-6 md:pl-6">
            <div>
              <h3 className="font-semibold text-lg">Bachelor of Industrial Design</h3>
>>>>>>> a20db82979ee095e309127bc1af38bf69ad63ea0
              <p className="text-gray-600 text-sm mb-2">
                Islamic Azad University, Central Tehran Branch
              </p>
            </div>

<<<<<<< HEAD
            {/* Education 2 */}
            <div>
              <h3 className="font-semibold text-lg sm:text-xl">MAKEEN ACADEMY</h3>
              <p className="text-gray-600 text-sm mb-2">UX/UI Design</p>
            </div>

            {/* Education 3 */}
            <div>
              <h3 className="font-semibold text-lg sm:text-xl">Mohaymen Boot Camp</h3>
=======
            <div>
              <h3 className="font-semibold text-lg">MAKEEN ACADEMY</h3>
              <p className="text-gray-600 text-sm mb-2">UX/UI Design</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Mohaymen Boot Camp</h3>
>>>>>>> a20db82979ee095e309127bc1af38bf69ad63ea0
              <p className="text-gray-600 text-sm mb-2">Product Management</p>
            </div>
          </div>
        </motion.div>

      </div>
<<<<<<< HEAD
    </section>
=======
    </div>
>>>>>>> a20db82979ee095e309127bc1af38bf69ad63ea0
  );
}
