import BackgroundVideo from './BackgroundVideo';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-32 relative grid place-content-center">
      <BackgroundVideo />
      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl text-white font-semibold mb-4 text-center">Get in Touch</h2>
        <p className="text-gray-200 text-center mb-10">
          I&apos;m currently open to offering free cloud architecture consultations, exploring collaboration opportunities, or simply connecting to discuss DevOps, AWS, or technology in general.
          Feel free to send a message — I&apos;ll get back to you as soon as possible.
        </p>

        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="bg-black/50 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary p-2 text-white"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              id="email"
              name="_replyto"
              required
              className="bg-black/50 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary p-2 text-white"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="bg-black/50 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary p-2 text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-accent text-white px-4 rounded hover:bg-primary transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}