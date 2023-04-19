type HeaderProps = {
  children: string;
};

export default function Header({ children }: HeaderProps) {
  return (
    <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        {children}
      </h3>
    </div>
  );
}
