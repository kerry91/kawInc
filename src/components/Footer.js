export default function Footer() {
  return (
    <>
<footer class="body-font bg-gray-100 text-gray-600">
  <div class="container mx-auto px-5 py-24">
    <div class="order-first flex flex-wrap text-center md:text-left">
      <div class="w-full px-4 md:w-1/2 lg:w-1/4">
        <h2 class="title-font mb-3 text-sm font-medium tracking-widest text-gray-900">About Us</h2>
        <nav class="mb-10 list-none">
          <li>
            <a class="text-gray-600 hover:text-gray-800">About Our Company</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800"> Our Team</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Mission and Values</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Contact Us</a>
          </li>
        </nav>
      </div>
      <div class="w-full px-4 md:w-1/2 lg:w-1/4">
        <h2 class="title-font mb-3 text-sm font-medium tracking-widest text-gray-900">Resources</h2>
        <nav class="mb-10 list-none">
          <li>
            <a class="text-gray-600 hover:text-gray-800"> Blog</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800"> FAQs</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800"> Documentation</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Case Studies </a>
          </li>
        </nav>
      </div>
      <div class="w-full px-4 md:w-1/2 lg:w-1/4">
        <h2 class="title-font mb-3 text-sm font-medium tracking-widest text-gray-900">Connect with Us</h2>
        <nav class="mb-10 list-none">
          <li>
            <a class="text-gray-600 hover:text-gray-800">Social Media Links </a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Newsletter Signup </a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800"> Terms of Service</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Privacy Policy </a>
          </li>
        </nav>
      </div>
      <div class="w-full px-4 md:w-1/2 lg:w-1/4">
        <h2 class="title-font mb-3 text-sm font-medium tracking-widest text-gray-900">SUBSCRIBE</h2>
        <div class="flex flex-wrap items-end justify-center md:flex-nowrap md:justify-start lg:flex-wrap xl:flex-nowrap">
          <div class="relative mr-2 w-40 sm:mr-4 sm:w-auto lg:mr-0 xl:mr-4">
            <input type="text" id="footer-field" name="footer-field" class="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200" />
          </div>
          <button class="inline-flex flex-shrink-0 rounded border-0 bg-indigo-500 px-6 py-2 text-white hover:bg-indigo-600 focus:outline-none lg:mt-2 xl:mt-0">Button</button>
        </div>
        <p class="mt-2 text-center text-sm text-gray-500 md:text-left">
          Stay up to date with our daily dose of awesomeness
          <br class="hidden lg:block" />by subscribing to our newsletter!
        </p>
      </div>
    </div>
  </div>
</footer>
    </>
  );
}
