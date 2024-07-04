import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Contact from "./contact";
import image1 from "@/assets/3.jpg";
import image2 from "@/assets/4.jpg";
import QuotationButton from "./quotation/QuotationButton";
import GetStated from "./getStarted/getStarted";

export function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Head>
        <title>
          SnapGuard: Ultimate Solution for Screenshot and Screen Recording
          Protection
        </title>
        <meta
          name="description"
          content="Secure your digital content with SnapGuard's easy-to-integrate protection against unauthorized screenshots and screen recordings. Get a personalized quote today."
        />
      </Head>
      <main className="flex-1 xl:px-10 bg-white text-black ">
        <section className="w-full py-12 md:py-24 lg:py-32   " id="home">
          <div className="container px-4 md:px-6 max-w-screen-xl mx-auto ">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12  xl:pr-10 pt-6 ">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Protect Your Content from Screenshots and Screen Recordings
                  </h1>
                  <p className="max-w-[600px] text-black md:text-xl dark:text-black">
                    Easily integrate with any web or mobile app to prevent
                    unauthorized screen captures and recordings.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <GetStated />
                </div>
              </div>
              <Image
                src={image2}
                alt="Hero"
                className="mx-auto  overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
                height="550"
                width="550"
              />
            </div>
          </div>
        </section>

        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-white  lg:px-40"
          id="features"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center lg:px-40">
              <div className="space-y-2 xl:px-20">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm ">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Prevent Screen Captures and Protect Your content with ease..
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-black ">
                  Our anti screen capture solution is designed for content
                  protection and works seamlessly with any web or mobile
                  application. It provides a customizable and comprehensive
                  shield against unauthorized screen captures and recordings.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src={image1}
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full sm:h-full lg:order-last"
                height="310"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Universal Compatibility
                      </h3>
                      <p className="text-gray-500 dark:text-black">
                        Our solution works seamlessly with any web or mobile
                        application, ensuring your content is protected across
                        platforms.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Easy Integration</h3>
                      <p className="text-gray-500 dark:text-black">
                        Integrate our screen recording blocker and start
                        safeguarding your valuable content.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Customizable Settings
                      </h3>
                      <p className="text-gray-500 dark:text-black">
                        Tailor our solution to your specific needs with our
                        comprehensive set of customization options.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          className="w-full py-12 md:py-24 lg:py-32 border-t lg:px-40"
          id="pricing"
        >
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:px-10">
            <div className="space-y-3">
              {/* <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm ">
                Pricing
              </div> */}
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Flexible Pricing for Your Needs
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-black">
                Our content protection solution, which prevents screen capturing
                on any device, offers customizable pricing to fit your specific
                requirements. Get a personalized quote to find the perfect plan
                for your business.
              </p>
            </div>
            <div className="flex justify-center">
              <QuotationButton />
            </div>
          </div>
        </section>

        <section
          className="w-full py-12 md:py-24 lg:py-32   lg:px-40"
          id="contact"
        >
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-40 lg:px-40">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Get in Touch
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-black">
                Have a question or need more information? Contact us and
                we&apos;ll be happy to assist you.
              </p>
            </div>
            <div className="w-full max-w-md space-y-4 bg-white ">
              <Contact />
              {/* <form
                className="grid gap-4 "
                action="https://api.web3forms.com/submit"
                method="POST"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="cdca08c7-72e3-45df-bb42-e3f18216a816"
                ></input>
                <Input className="w-full" placeholder="Name" type="text" required />
                <Input className="w-full" placeholder="Email" type="email" required/>
                <Textarea className="w-full" placeholder="Message" />
                <Button className="w-full" type="submit">
                  Submit
                </Button>
              </form> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}
