import { cn } from "@/lib/utils";

type TSectionProps = {
  title?: string;
  description?: string;
  component?: () => JSX.Element | undefined;
  reverse?: boolean;
};

export default function Section({ item, className }: { item: TSectionProps; className?: string }) {
  return (
    <section className={cn("container flex items-center justify-center text-slate-100 max-sm:flex-col", className)}>
      <div className="w-full py-4 lg:w-1/2 max-sm:text-center">
        <h2 className="text-2xl font-black lg:text-6xl">{item.title}</h2>
        <p className="mt-8 text-xs lg:text-xl">{item.description}</p>
      </div>
      <div className="w-full lg:w-1/2 ">{item.component && item.component()}</div>
    </section>
  );
}
