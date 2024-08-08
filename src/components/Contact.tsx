import React from 'react'

const Contact = () => {
  return (
    <div id="Contact">
        <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        className="absolute inset-0"

        height="100%"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.3975028671293!2d67.15658067443047!3d24.88441929430021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3399183c6ef01%3A0x5268452a0a09c54b!2sAsifabad%20Green%20Town%20Asifabad%20Green%20Town%20Shah%20Faisal%20Colony%2C%20Shah%20Faisal%20Town%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1721700388687!5m2!1sen!2s"       
        style={{
          filter: 'contrast(1.2) opacity(0.4)'
        }}
        title="map"
        width="100%"
      />
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
           C5/104 AsifAbad Green Town Karachi.
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-indigo-500 leading-relaxed">
            Bilalfiaz802@gmail.com
          </a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">
            +92 342 270 9496
          </p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Contact
        <div className='w-[140px] h-[2px] bg-blue-700'></div>
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
        Feel free to contact Us
      </p>
      <form action="https://formspree.io/f/manwjeyl" method="POST"
>
      <div className="relative mb-4">
        <label
          className="leading-7 text-sm text-gray-600"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          id="name"
          name="name"
          type="text"
        required/>
      </div>
      <div className="relative mb-4">
        <label
          className="leading-7 text-sm text-gray-600"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          id="email"
          name="email"
          type="email"
          required/>
      </div>

      <div className="relative mb-4">
        <label
          className="leading-7 text-sm text-gray-600"
          htmlFor="subject"
        >
          Subject
        </label>
        <input
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          id="subject"
          name="subject"
          type="text"
          required/>
      </div>

      <div className="relative mb-4">
        <label
          className="leading-7 text-sm text-gray-600"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          id="message"
          name="message"
          required/>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Send Message
      </button>
      </form>
      <p className="text-xs text-gray-500 mt-3">
       
      </p>
    </div>
  </div>
</section>
    </div>
  )
}

export default Contact;

