import Link from "next/link"
import { Container } from "@/components/atoms/container"
import { Separator } from "@/components/atoms/separator"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background dark:bg-gray-900 pt-10 pb-8">
      <Container>
        <div className="mb-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Creator Space</h3>
            <p className="text-muted-foreground dark:text-gray-400">
              The ultimate platform for content creators to connect with brands and monetize their content.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  For Businesses
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-muted-foreground dark:text-gray-400 text-sm">© {currentYear} Creator Space. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary">
              <span className="sr-only">Twitter</span>
              {/* Icon here */}
            </Link>
            <Link href="#" className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary">
              <span className="sr-only">Instagram</span>
              {/* Icon here */}
            </Link>
            <Link href="#" className="text-muted-foreground dark:text-gray-400 hover:text-primary dark:hover:text-primary">
              <span className="sr-only">LinkedIn</span>
              {/* Icon here */}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
