import Link from "next/link";
import Navigation from './Navigation';

interface Props {
    children: any;
};

export default function Posts({ children }: Props) {
  return (
    <div>
        <Navigation />
        <main>{children}</main>
    </div>
  )
};
