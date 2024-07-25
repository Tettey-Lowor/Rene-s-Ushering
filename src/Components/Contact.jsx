import React from 'react'

export default function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "49978326-240d-43a9-87b6-35b21cb99028");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };

  return (
    <div class="bg-white">
      <header class="bg-green-700 text-white text-center py-12">
        <h1 class="text-4xl font-bold mt-16">Contact Us</h1>
      </header>
      <section class="text-center py-12 px-4">
        <h2 class="text-2xl font-bold">Get In Touch</h2>
        <p class="mt-4 text-gray-700 max-w-2xl mx-auto">We are here to help you. Reach out to us via any of the following methods.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 animate-fadeIn">
          <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
            <h3 class="text-xl font-bold">Call Us</h3>
            <p class="text-gray-700 mt-2">+233 456 7890</p>
          </div>
          <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
            <h3 class="text-xl font-bold">Email Us</h3>
            <p class="text-gray-700 mt-2">contact@rene.com</p>
          </div>
          <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
            <h3 class="text-xl font-bold">Visit Us</h3>
            <p class="text-gray-700 mt-2">123 Health St, Spintex road</p>
          </div>
        </div>
      </section>
      <section class="bg-gray-100 py-12 px-4">
        <h2 class="text-2xl font-bold text-center">Book us now by Sending us a message</h2>
        <form onSubmit={onSubmit} class="max-w-2xl mx-auto mt-8 space-y-8">
          <div>
            <label htmlFor="name" class="block text-gray-700 font-bold">Name</label>
            <input type="text" name="name" class="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition" />
          </div>
          <div>
            <label htmlFor="email" class="block text-gray-700 font-bold">Email</label>
            <input type="email" name="email" class="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition" />
          </div>
          <div>
            <label htmlFor="message" class="block text-gray-700 font-bold">Message</label>
            <textarea id="message" rows="5" class="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"></textarea>
          </div>
          <button type="submit" class="w-full bg-green-700 text-white py-3 rounded-lg shadow-lg hover:bg-green-600 transition-colors">Send Message</button>
        </form>
      </section>
      
      <footer class="bg-green-700 text-white text-center py-8">
        <p>&copy; Copyright RENE'S USHERING 2024 . All rights reserved. Made with Freda⛵.</p>
      </footer>
    </div>
  )
}
