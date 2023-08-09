
export default function Introduction() {
  return (
    <div class="Introduction">
      <section class="bg-gray-700 bg-[url('https://github.com/codemarch/Project_Image/blob/main/conference.jpg?raw=true')] bg-center bg-no-repeat bg-blend-multiply">
        <div class="mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56">
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
            We invest in the world’s potential
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl">
            Unleashing the power of intelligent automation and insights
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
            <a
              href="#"
              class="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                class="ml-2 h-3.5 w-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#"
              class="inline-flex items-center justify-center rounded-lg border border-white px-5 py-3 text-center text-base font-medium text-white hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-400"
            >
              {" "}
              Learn more{" "}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
