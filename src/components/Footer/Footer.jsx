import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#0A0A23] text-white py-10">
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
    <div className='flex justify-center items=center m-auto'>
      <h2 className="text-4xl font-bold mb-4 text-amber-500">Munchkins</h2>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li>
          <a href="#features" className="hover:underline text-gray-300">
            Help
          </a>
        </li>
        <li>
          <a href="#pricing" className="hover:underline text-gray-300">
            Pricing
          </a>
        </li>
        <li>
          <a href="#testimonials" className="hover:underline text-gray-300">
            Testimonials
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline text-gray-300">
            Contact Us
          </a>
        </li>
      </ul>
    </div>

    {/* Contact Section */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
      <ul className="space-y-2 text-gray-300">
        <li>Email: support@munchkins.com</li>
        <li>Phone: +1 234 567 890</li>
      </ul>
    </div>

    {/* Social Media Section */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
      <div className="flex space-x-4">
        <a href="#facebook" className="text-gray-300 hover:text-white">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#twitter" className="text-gray-300 hover:text-white">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#linkedin" className="text-gray-300 hover:text-white">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#instagram" className="text-gray-300 hover:text-white">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
    <p>&copy; {new Date().getFullYear()} Munchkins. All rights reserved.</p>
  </div>
</div>

  )
}

export default Footer