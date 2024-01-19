import {
  Bars3Icon,
  ChevronDownIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {Dialog, Popover, Tab, Transition} from "@headlessui/react";
import {Fragment, useState} from "react";

import Logo from "../assets/logo.webp";
import Sim1 from "../assets/simulators/mlm2-pro.webp";
import Sim2 from "../assets/simulators/skytrak.webp";
import Sim3 from "../assets/simulators/skytrack-prac.webp";
import Sim4 from "../assets/simulators/skytrak-prem.webp";
import {cn} from "../utils/tools";

const navigation = {
  categories: [
    {
      name: "Golf Simulators",
      featured: [
        {
          name: "Rapsodo MLM2 Pro Practice Package",
          href: "https://24-7.golf/products/rapsodo-mlm2-pro-practice-package",
          imageSrc: Sim1.src,
        },
        {
          name: "SkyTrak Practice Package",
          href: "https://24-7.golf/products/skytrak-practice-package",
          imageSrc: Sim2.src,
        },
        {
          name: "SkyTrak Play Package",
          href: "https://24-7.golf/products/skytrak-play-package",
          imageSrc: Sim3.src,
        },
        {
          name: "SkyTrak Premium Play Package",
          href: "https://24-7.golf/products/skytrak-premium-play-package",
          imageSrc: Sim4.src,
        },
      ],
    },
    {
      name: "Golf Return Nets",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg",
          imageAlt:
            "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg",
          imageAlt: "Model wearing light heather neutral t-shirt.",
        },
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg",
          imageAlt:
            "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather neutral body.",
        },
        {
          name: "Carry",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg",
          imageAlt:
            "Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
        },
      ],
    },
  ],
  pages: [
    {name: "Accessories", href: "/accessories"},
    {name: "Software", href: "/software"},
  ],
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white sticky top-0 inset-0 z-40 ">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-neutral-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-neutral-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({selected}) =>
                            cn(
                              selected
                                ? "border-lime-600 text-lime-600"
                                : "border-transparent text-neutral-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-12 px-4 py-6"
                      >
                        <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                          {category.featured.map((item) => (
                            <div key={item.name} className="group relative">
                              <div className="h-2/3 w-auto overflow-hidden rounded-md bg-neutral-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.name}
                                  className="object-cover object-center h-full w-full "
                                  loading="lazy"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block text-sm font-medium text-neutral-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p
                                aria-hidden="true"
                                className="mt-1 text-sm text-neutral-500"
                              >
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
                <div className="space-y-6 border-t border-gray-200 px-4 my-6 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative">
        <nav aria-label="Top">
          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="border-b border-neutral-200 shadow-md shadow-black/10">
              <div className="mx-auto px-4 sm:px-6 md:px-12 lg:px-32">
                <div className="flex h-16 items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex lg:flex-1 lg:items-center">
                    <a href="/">
                      <span className="sr-only">24/7 Golf</span>
                      <img
                        className="h-8 w-auto"
                        src={Logo.src}
                        width={Logo.width}
                        height={Logo.height}
                        alt="24-7 Golf"
                        loading="eager"
                      />
                    </a>
                  </div>

                  <div className="hidden h-full lg:flex">
                    {/* Flyout menus */}
                    <Popover.Group className="inset-x-0 bottom-0 px-4">
                      <div className="flex h-full justify-center space-x-8">
                        {navigation.categories.map((category) => (
                          <Popover key={category.name} className="flex">
                            {({open}) => (
                              <>
                                <div className="relative flex">
                                  <Popover.Button
                                    className={cn(
                                      open
                                        ? "border-lime-600 text-lime-600"
                                        : "border-transparent text-neutral-700 hover:text-neutral-900",
                                      "relative z-10 -mb-px flex items-center border-b-2 pt-px text-md font-semibold transition-colors duration-200 ease-out focus:outline-none"
                                    )}
                                  >
                                    {category.name}
                                    <ChevronDownIcon
                                      className={cn(
                                        open
                                          ? "text-lime-600 rotate-180 "
                                          : "text-neutral-500 hover:text-neutral-700",
                                        "ml-2 h-5 w-5 flex-shrink-0 duration-200 transition"
                                      )}
                                      aria-hidden="true"
                                    />
                                  </Popover.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Popover.Panel className="absolute inset-x-0 top-full text-sm text-neutral-500">
                                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                    <div
                                      className="absolute inset-0 top-1/3 bg-white shadow"
                                      aria-hidden="true"
                                    />

                                    <div className="relative bg-white">
                                      <div className="mx-auto max-w-7xl px-8">
                                        <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                          {category.featured.map((item) => (
                                            <div
                                              key={item.name}
                                              className="group relative"
                                            >
                                              <div className="overflow-hidden h-4/5 object-fill rounded-md bg-neutral-100 group-hover:opacity-75">
                                                <img
                                                  src={item.imageSrc}
                                                  alt={item.name}
                                                  className="object-cover object-center h-full w-full"
                                                  loading="lazy"
                                                />
                                              </div>
                                              <a
                                                href={item.href}
                                                className="mt-4 block font-medium text-neutral-900"
                                              >
                                                {item.name}
                                              </a>
                                              <p
                                                aria-hidden="true"
                                                className="mt-1"
                                              >
                                                Shop now
                                              </p>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                        ))}
                        {navigation.pages.map((page) => (
                          <a
                            key={page.name}
                            href={page.href}
                            className="flex items-center text-md font-semibold text-neutral-700 hover:text-neutral-900 relative z-10 -mb-px pt-px transition-colors duration-200 ease-out focus:outline-none"
                          >
                            {page.name}
                          </a>
                        ))}
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex flex-1 items-center lg:hidden">
                    <button
                      type="button"
                      className="-ml-2 rounded-md bg-white p-2 text-neutral-700"
                      onClick={() => setOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon className="h-7 w-7" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Logo (lg-) */}
                  <a href="/" className="lg:hidden">
                    <span className="sr-only">24/7 Golf</span>
                    <img
                      src={Logo.src}
                      alt="24-7 Golf"
                      className="h-8 w-auto"
                    />
                  </a>

                  <div className="flex flex-1 items-center justify-end">
                    <div className="flex items-center lg:ml-8">
                      {/* Cart */}
                      <div className="ml-4 flow-root lg:ml-8">
                        <a
                          href="/cart"
                          className="group -m-2 flex items-center p-2"
                        >
                          <span className="sr-only">Cart</span>
                          <ShoppingCartIcon
                            className="h-7 w-7 flex-shrink-0 text-neutral-700 group-hover:text-neutral-900"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
