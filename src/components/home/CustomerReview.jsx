import { motion } from "framer-motion";

const CustomerReview = () => {
  const testimonials = [
    {
      name: "John Doe",
      course: "Full-Stack Web Development",
      feedback: "Academix helped me land my first internship with hands-on projects!",
      img: "https://images.ctfassets.net/xjankvru4bwy/5PghwxKTVhKOIb32tRJenX/baf356e203661d28e79ad049fffcc9a4/Kashimani_Simasiku-ALA_student_square.jpg"
    },
    {
      name: "Sarah Khan",
      course: "Data Science & AI",
      feedback: "The interactive learning style made complex topics easy to grasp.",
      img: "https://www.suny.edu/media/suny/content-assets/images/militaryvets/female-adult-student-square.jpg",
    },
    {
      name: "Alex Brown",
      course: "Graphic Design",
      feedback: "I built a strong portfolio that helped me secure freelance clients!",
      img: "https://images.ctfassets.net/xjankvru4bwy/6Xy6WuJ9DUvRrYIRtqQIUS/5684ed8b974d7dcc5244eb6c9948e5dd/Abdelkarim_Ben_Fraj-ALA_student_square.jpg",
    },
    {
        name: "John Doe",
        course: "Full-Stack Web Development",
        feedback: "Academix helped me land my first internship with hands-on projects!",
        img: "https://images.ctfassets.net/xjankvru4bwy/5PghwxKTVhKOIb32tRJenX/baf356e203661d28e79ad049fffcc9a4/Kashimani_Simasiku-ALA_student_square.jpg"
      },
  ];

  return (
    <section className="relative bg-gray-50  py-16 px-6">
      {/* Section Heading */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl  font-bold mb-4 text-gray-900">
        Customers Are Saying
        </h2>
        <p className=" md:text-xl text-gray-600 ">
        Reviews That Speak of Quality & Trust
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-black md:block"></div>

        {/* Cards */}
        <div className="relative flex flex-col space-y-16">
          {testimonials.map((student, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative flex items-center w-full md:w-[90%] mx-auto"
            >
              {/* Alternating Images and Cards */}
              {index % 2 === 0 ? (
                <>
                  {/* Left Side - Image */}
                  <div className="w-1/2 flex justify-end pr-8">
                    <img
                      src={student.img}
                      alt={student.name}
                      className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-full border-4 border-black shadow-lg"
                    />
                  </div>
                  {/* Right Side - Card */}
                  <div className="bg-white p-6  rounded-lg shadow-lg w-1/2 ml-8">
                    <h3 className="text md:text-xl font-semibold text-gray-900 ">
                      {student.name}
                    </h3>
                    {/* <p className="text-sm text-gray-500 ">{student.course}</p> */}
                    <p className="mt-3 text-gray-700 text-sm md:text italic">
                      {student.feedback}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Left Side - Card */}
                  <div className="bg-white  p-6 rounded-lg shadow-lg w-1/2 mr-8">
                    <h3 className="text md:text-xl font-semibold text-gray-900 ">
                      {student.name}
                    </h3>
                    {/* <p className="text-sm text-gray-500 ">{student.course}</p> */}
                    <p className="mt-3 text-sm md:text  text-gray-700  italic">
                      {student.feedback}
                    </p>
                  </div>
                  {/* Right Side - Image */}
                  <div className="w-1/2 flex justify-start pl-8">
                    <img
                      src={student.img}
                      alt={student.name}
                      className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-full border-4 border-black shadow-lg"
                    />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReview ;


// import { motion } from "framer-motion";

// const CustomerReview = () => {
//   const testimonials = [
//     {
//       name: "John Doe",
//       course: "Full-Stack Web Development",
//       feedback: "Academix helped me land my first internship with hands-on projects!",
//       img: "https://images.ctfassets.net/xjankvru4bwy/5PghwxKTVhKOIb32tRJenX/baf356e203661d28e79ad049fffcc9a4/Kashimani_Simasiku-ALA_student_square.jpg"
//     },
//     {
//       name: "Sarah Khan",
//       course: "Data Science & AI",
//       feedback: "The interactive learning style made complex topics easy to grasp.",
//       img: "https://www.suny.edu/media/suny/content-assets/images/militaryvets/female-adult-student-square.jpg",
//     },
//     {
//       name: "Alex Brown",
//       course: "Graphic Design",
//       feedback: "I built a strong portfolio that helped me secure freelance clients!",
//       img: "https://images.ctfassets.net/xjankvru4bwy/6Xy6WuJ9DUvRrYIRtqQIUS/5684ed8b974d7dcc5244eb6c9948e5dd/Abdelkarim_Ben_Fraj-ALA_student_square.jpg",
//     },
//     {
//       name: "Michael Smith",
//       course: "Cybersecurity",
//       feedback: "The practical approach and hands-on projects made learning exciting!",
//       img: "https://randomuser.me/api/portraits/men/32.jpg"
//     },
//   ];

//   return (
//     <section className="relative bg-gray-50 py-16 px-6">
//       <div className="max-w-5xl mx-auto text-center mb-12">
//         <h2 className="text-4xl font-bold mb-4 text-gray-900">Student Success Stories</h2>
//         <p className="text-lg text-gray-600">Hear from our students who have transformed their careers with Academix.</p>
//       </div>
      
//       <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         {testimonials.map((student, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} space-x-6`}
//           >
//             {/* Image */}
//             <div className="relative w-32 h-32 rounded-lg overflow-hidden shadow-lg">
//               <img src={student.img} alt={student.name} className="w-full h-full object-cover" />
//             </div>
            
//             {/* Testimonial Box */}
//             <div className="bg-white p-6 rounded-lg shadow-lg max-w-md border-l-4 border-yellow-400">
//               <h3 className="text-xl font-semibold text-gray-900">{student.name}</h3>
//               <p className="text-sm text-gray-500">{student.course}</p>
//               <p className="mt-3 text-gray-700 italic">{student.feedback}</p>
//             </div>
            
//             {/* Decorative Lines */}
//             <div className="absolute top-1/2 transform -translate-y-1/2 w-1 h-16 bg-black" style={{ left: index % 2 === 0 ? "-10px" : "auto", right: index % 2 === 0 ? "auto" : "-10px" }}></div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CustomerReview;

// import { motion } from "framer-motion";

// const CustomerReview = () => {
//   const testimonials = [
//     {
//       name: "John Doe",
//       feedback: "Academix helped me land my first internship with hands-on projects!",
//       img: "https://images.ctfassets.net/xjankvru4bwy/5PghwxKTVhKOIb32tRJenX/baf356e203661d28e79ad049fffcc9a4/Kashimani_Simasiku-ALA_student_square.jpg"
//     },
//     {
//       name: "Sarah Khan",
//       feedback: "The interactive learning style made complex topics easy to grasp.",
//       img: "https://www.suny.edu/media/suny/content-assets/images/militaryvets/female-adult-student-square.jpg",
//     },
//     {
//       name: "Alex Brown",
//       feedback: "I built a strong portfolio that helped me secure freelance clients!",
//       img: "https://images.ctfassets.net/xjankvru4bwy/6Xy6WuJ9DUvRrYIRtqQIUS/5684ed8b974d7dcc5244eb6c9948e5dd/Abdelkarim_Ben_Fraj-ALA_student_square.jpg",
//     },
//     {
//       name: "John Doe",
//       feedback: "Academix helped me land my first internship with hands-on projects!",
//       img: "https://images.ctfassets.net/xjankvru4bwy/5PghwxKTVhKOIb32tRJenX/baf356e203661d28e79ad049fffcc9a4/Kashimani_Simasiku-ALA_student_square.jpg"
//     },
//   ];

//   return (
//     <section className="relative bg-gray-50 py-16 px-6">
//       <div className="max-w-5xl mx-auto text-center mb-12">
//         <h2 className="text-4xl font-bold mb-4 text-gray-900">
//           Student Success Stories
//         </h2>
//         <p className="text-lg text-gray-600">
//           Hear from our students who have transformed their careers with Academix.
//         </p>
//       </div>

//       <div className="relative max-w-6xl mx-auto flex flex-col items-center">
//         {/* Red Vertical Line */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-red-500"></div>

//         {testimonials.map((student, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className={`relative flex items-center w-full md:w-[90%] my-6 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
//           >
//             {index % 2 === 0 ? (
//               <>
//                 <div className="w-36 h-36 rounded-lg overflow-hidden shadow-lg">
//                   <img src={student.img} alt={student.name} className="w-full h-full object-cover" />
//                 </div>
//                 <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-2/3 ml-6">
//                   <h3 className="text-xl font-semibold text-gray-900">{student.name}</h3>
//                   <p className="mt-2 text-gray-700 italic">{student.feedback}</p>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-2/3 mr-6">
//                   <h3 className="text-xl font-semibold text-gray-900">{student.name}</h3>
//                   <p className="mt-2 text-gray-700 italic">{student.feedback}</p>
//                 </div>
//                 <div className="w-36 h-36 rounded-lg overflow-hidden shadow-lg">
//                   <img src={student.img} alt={student.name} className="w-full h-full object-cover" />
//                 </div>
//               </>
//             )}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CustomerReview;


