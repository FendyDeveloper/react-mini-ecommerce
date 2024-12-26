import { Link } from "react-router-dom";

// Hero Section Component
export default function HeroSection() {
  return (
    <div className="relative dark:bg-gray-900">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-6xl">
              Shop the Latest Trends
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover amazing products at unbeatable prices. Free shipping on
              orders over $50!
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/products"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Shop Now
              </Link>
              <Link
                to="/deals"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                View Deals <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full hidden lg:block"
            src="/public/images/header-store.png"
            alt="Shopping"
          />
        </div>
      </div>
    </div>
  );
}
