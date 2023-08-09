
const TechStack = () => {
  return (
    <>
      <div className="Tech">
<section class="bg-white dark:bg-gray-900">
  <div class="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
    <h2 class="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Contact Us</h2>
    <p class="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
    <form action="#" class="space-y-4">
      <div>
        <label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
        <input type="email" id="email" class="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Enter Your Email" required />
      </div>
      <div>
        <label for="subject" class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
        <input type="text" id="subject" class="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Let us know how we can help you" required />
      </div>
      <div class="sm:col-span-2">
        <label for="message" class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
        <textarea id="message" rows="6" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Leave a comment..."></textarea>
      </div>
      <div class="text-center">
        <button type="submit" class="inline-flex flex-shrink-0 rounded border-0 bg-blue-500 p-3 px-6 py-2 text-white hover:bg-indigo-600 focus:outline-none lg:mt-2 xl:mt-0">Send message</button>
      </div>
    </form>
  </div>
</section>
      </div>
    </>
  );
};

export default TechStack;
