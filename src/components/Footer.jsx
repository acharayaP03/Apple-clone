import { footerLinks } from '../constants';

export default function Footer() {
  return (
    <footer className="px-5 py-5 sm:px-10">
      <div className="screen-mal-width">
        <div>
          <p className="text-xs font-semibold text-gray">
            More ways to shop{' '}
            <span className="text-blue underline">Find an Apple Store </span>
            or{' '}
            <span className="text-blue underline">
              other retailer near you.
            </span>
          </p>
          <p className="text-xs font-semibold text-gray">
            or call 1800-APPLE-STORE{' '}
          </p>
        </div>
        <div className="my-5 h-[1px] w-full bg-neutral-700" />
        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <p className="text-xs font-semibold text-gray">
            Copyright &copy; {new Date().getFullYear()} Apple clone Inc. All
            rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, index) => (
              <p className="text-xs font-semibold text-gray" key={index}>
                {link}{' '}
                {index !== footerLinks.length - 1 && (
                  <span className="mx-2">|</span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
