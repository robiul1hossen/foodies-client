import Title from "./Title";

const FindUsSection = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-5">
        {/* Section Title */}
        <div className="text-center mb-12">
          <Title
            text1={"Find"}
            text2={"Us"}
            text3={" Reach out to us or visit our location"}
          />
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Column - Google Map */}
          <div className="h-[700px] w-full">
            <iframe
              className="w-full h-full rounded-xl shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902053874106!2d90.40759411543173!3d23.811216984548273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c18e8f3b7f7b%3A0x1b2b1fef9b2f9d2e!2sChattogram!5e0!3m2!1sen!2sbd!4v1698195041542!5m2!1sen!2sbd"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white w-full p-8 rounded-2xl shadow-lg">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Your Address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 focus:ring-2 focus:ring-blue-500 outline-none resize-none"></textarea>
              </div>

              <button
                type="submit"
                className="cursor-pointer flex justify-center items-center  border w-full px-6 py-2 rounded-xl bg-transparent hover:bg-black hover:text-white duration-500">
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUsSection;
